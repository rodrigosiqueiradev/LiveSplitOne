/**
 * The preview of a comparison being edited: what it would be for the open
 * splits, segment by segment.
 *
 * - The segment time is how long each segment should take, the split time is
 *   the running total at the end of each segment.
 * - Under each split time is the difference from another comparison (the
 *   Personal Best unless the runner picks another one).
 * - A segment that is faster than the runner's best time for it (the gold) is
 *   highlighted. That's allowed, but warns that the pace may not be
 *   realistic.
 * - Clicking a row tells where its time comes from: which block, and choices
 *   on the way like a gap filled by "if empty, use".
 *
 * livesplit-core calculates the times, exactly like it calculates the
 * comparison on the timer. The golds and the comparison to show the
 * difference from are read from the run here.
 */

import React, { useEffect, useState } from "react";
import {
    type CustomComparisonPreviewJson,
    type Language,
    type RunRef,
    TimingMethod,
} from "../../../livesplit-core";
import { Label, resolve } from "../../../localization";
import {
    CcLabel,
    formatCc,
    resolveCc,
} from "../../../localization/custom-comparisons";
import { type Block } from "./model";
import { formatDelta, formatTime } from "./time";
import { describeOrigin, segmentWarning } from "./describe";

import classes from "../../../css/CustomComparisons.module.css";
import tableClasses from "../../../css/Table.module.css";

/** Times are compared to the gold with a little leeway for rounding. */
const GOLD_TOLERANCE = 0.005;

export interface PreviewProps {
    /** The calculated preview, or null if the comparison isn't complete. */
    preview: CustomComparisonPreviewJson | null;
    /** The block the preview's origins refer to. */
    root: Block | null;
    /** Whether a single block is previewed instead of the comparison. */
    isBlockPreview: boolean;
    onShowWhole: () => void;
    /** Why there's no preview, if there's none. */
    incomplete: string | null;
    method: TimingMethod;
    onMethodChange: (method: TimingMethod) => void;
    compareTo: string;
    onCompareToChange: (name: string) => void;
    comparisons: string[];
    run: RunRef;
    lang: Language | undefined;
    /**
     * Called with the origin of the row the runner clicked, or null when no
     * row is selected, so the editor can point out the block it comes from.
     */
    onOriginChange: (origin: string | null) => void;
}

export function Preview(props: PreviewProps) {
    const { preview, lang, method } = props;
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const run = readRun(props.run, method, props.compareTo);
    const segmentNames = run.map((s) => s.name);

    const rows = preview?.segments ?? [];
    const selectedOrigin =
        selectedRow !== null ? (rows[selectedRow]?.origin ?? null) : null;
    const { onOriginChange } = props;
    // The origin of the selected row changes with the blocks, not only when
    // another row is clicked.
    useEffect(
        () => onOriginChange(selectedOrigin),
        [selectedOrigin, onOriginChange],
    );
    const goldRows = rows.filter((row, i) => {
        const gold = run[i]?.gold ?? null;
        return (
            row.segment_time !== null &&
            gold !== null &&
            row.segment_time < gold - GOLD_TOLERANCE
        );
    }).length;

    const messages: string[] = [];
    if (props.incomplete !== null) {
        messages.push(props.incomplete);
    } else if (preview?.error) {
        messages.push(preview.error);
    } else if (preview !== null) {
        if (!rows.some((r) => r.segment_time !== null)) {
            messages.push(resolveCc(CcLabel.NoTimesLeft, lang));
        }
        if (goldRows > 0) {
            messages.push(
                goldRows === 1
                    ? resolveCc(CcLabel.FasterThanGoldWarningOne, lang)
                    : formatCc(CcLabel.FasterThanGoldWarning, lang, goldRows),
            );
        }
        const warning = segmentWarning(props.root, run.length, lang);
        if (warning !== null) {
            messages.push(warning + ".");
        }
    }

    const finish = rows.at(-1)?.split_time ?? null;
    const reference = run.at(-1)?.comparisonSplit ?? null;
    const sumOfBest = run.every((s) => s.gold !== null)
        ? run.reduce((sum, s) => sum + (s.gold ?? 0), 0)
        : null;

    return (
        <div className={classes.preview}>
            <div className={classes.previewControls}>
                <h2>{resolveCc(CcLabel.Preview, lang)}</h2>
                <select
                    className={classes.field}
                    value={method}
                    onChange={(e) =>
                        props.onMethodChange(Number(e.target.value))
                    }
                >
                    <option value={TimingMethod.RealTime}>
                        {resolve(Label.RealTime, lang)}
                    </option>
                    <option value={TimingMethod.GameTime}>
                        {resolve(Label.GameTime, lang)}
                    </option>
                </select>
                <label>
                    {resolveCc(CcLabel.DifferenceFrom, lang)}{" "}
                    <select
                        className={classes.field}
                        value={props.compareTo}
                        onChange={(e) =>
                            props.onCompareToChange(e.target.value)
                        }
                    >
                        {props.comparisons.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {props.isBlockPreview && (
                <div className={classes.blockPreviewBanner}>
                    <span>{resolveCc(CcLabel.PreviewingBlock, lang)}</span>
                    <button onClick={props.onShowWhole}>
                        {resolveCc(CcLabel.ShowWholeComparison, lang)}
                    </button>
                </div>
            )}

            <table className={`${tableClasses.table} ${classes.previewTable}`}>
                <thead>
                    <tr>
                        <th>{resolveCc(CcLabel.Segment, lang)}</th>
                        <th>{resolveCc(CcLabel.SegmentTime, lang)}</th>
                        <th>{resolveCc(CcLabel.SplitTime, lang)}</th>
                    </tr>
                </thead>
                <tbody className={tableClasses.tableBody}>
                    {(rows.length > 0
                        ? rows
                        : segmentNames.map((name) => ({
                              name,
                              segment_time: null,
                              split_time: null,
                              origin: null,
                          }))
                    ).map((row, i) => {
                        const segment = run[i];
                        const gold = segment?.gold ?? null;
                        const fasterThanGold =
                            row.segment_time !== null &&
                            gold !== null &&
                            row.segment_time < gold - GOLD_TOLERANCE;
                        const delta =
                            row.split_time !== null &&
                            segment?.comparisonSplit != null
                                ? row.split_time - segment.comparisonSplit
                                : null;
                        const selected = selectedRow === i;
                        return (
                            <React.Fragment key={i}>
                                <tr
                                    className={`${classes.previewRow} ${fasterThanGold ? classes.fasterThanGold : ""} ${selected ? classes.selectedRow : ""}`}
                                    title={
                                        fasterThanGold
                                            ? resolveCc(
                                                  CcLabel.FasterThanGold,
                                                  lang,
                                              )
                                            : undefined
                                    }
                                    onClick={() =>
                                        setSelectedRow(selected ? null : i)
                                    }
                                >
                                    <td>{row.name}</td>
                                    <td className={classes.time}>
                                        {formatTime(row.segment_time)}
                                    </td>
                                    <td className={classes.time}>
                                        {formatTime(row.split_time)}
                                        {delta !== null && (
                                            <span
                                                className={
                                                    delta < -GOLD_TOLERANCE
                                                        ? classes.ahead
                                                        : delta > GOLD_TOLERANCE
                                                          ? classes.behind
                                                          : classes.even
                                                }
                                            >
                                                {formatDelta(delta)}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                                {selected && (
                                    <tr className={classes.originRow}>
                                        <td colSpan={3}>
                                            <strong>
                                                {resolveCc(
                                                    CcLabel.OriginTitle,
                                                    lang,
                                                )}
                                                :
                                            </strong>{" "}
                                            {originText(
                                                row.origin,
                                                props.root,
                                                segmentNames,
                                                lang,
                                            )}
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>

            {finish !== null && (
                <p className={classes.previewNote}>
                    {formatCc(
                        CcLabel.FinishLine,
                        lang,
                        formatTime(finish),
                        reference !== null
                            ? formatDelta(finish - reference)
                            : "—",
                        props.compareTo,
                    )}
                    {sumOfBest !== null &&
                        " " +
                            formatCc(
                                CcLabel.FinishVsSumOfBest,
                                lang,
                                formatTime(sumOfBest),
                            )}
                </p>
            )}
            {rows.length > 0 && (
                <p className={classes.previewHint}>
                    {resolveCc(CcLabel.ClickRowHint, lang)}
                </p>
            )}
            <div
                className={
                    messages.length > 0 ? classes.problems : classes.noProblems
                }
            >
                {messages.length > 0
                    ? messages.map((m, i) => <p key={i}>{m}</p>)
                    : resolveCc(CcLabel.NoProblems, lang)}
            </div>
        </div>
    );
}

function originText(
    origin: string | null,
    root: Block | null,
    segmentNames: string[],
    lang: Language | undefined,
): string {
    if (origin === null || root === null) {
        return resolveCc(CcLabel.OriginEmpty, lang);
    }
    return (
        describeOrigin(root, origin, { lang, segmentNames }) ||
        resolveCc(CcLabel.OriginEmpty, lang)
    );
}

export interface RunSegment {
    name: string;
    /** The best segment time, in seconds. */
    gold: number | null;
    /** The split time of the comparison to show the difference from. */
    comparisonSplit: number | null;
}

/** Reads what the preview needs from the run, for the timing method. */
export function readRun(
    run: RunRef,
    method: TimingMethod,
    compareTo: string,
): RunSegment[] {
    const segments: RunSegment[] = [];
    const len = run.segmentsLen();
    for (let i = 0; i < len; i++) {
        const segment = run.segment(i);
        segments.push({
            name: segment.name(),
            gold:
                segment.bestSegmentTime().index(method)?.totalSeconds() ?? null,
            comparisonSplit:
                segment.comparison(compareTo).index(method)?.totalSeconds() ??
                null,
        });
    }
    return segments;
}
