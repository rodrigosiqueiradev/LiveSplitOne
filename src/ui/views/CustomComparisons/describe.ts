/**
 * Plain-English descriptions of comparisons, for the summary under the name
 * and for "where does this time come from" in the preview. They are a port
 * of the desktop block editor's descriptions, with the sentences moved into
 * the localization, so they read the same in both.
 *
 * Segment numbers are shown as the run's segment names where possible,
 * since that's how the runner thinks about them.
 */

import { type Language } from "../../../livesplit-core";
import {
    CcLabel,
    formatCc,
    resolveCc,
} from "../../../localization/custom-comparisons";
import { type Block } from "./model";
import { type RangeCase, BEST_SEGMENTS, PERSONAL_BEST, RANGE } from "./blocks";
import { formatDuration } from "./time";

export interface DescribeContext {
    lang: Language | undefined;
    segmentNames: string[];
}

function segmentLabel(n: number, ctx: DescribeContext): string {
    return (
        ctx.segmentNames[n - 1] || formatCc(CcLabel.SegmentNumber, ctx.lang, n)
    );
}

function rangeLabel(from: number, to: number, ctx: DescribeContext): string {
    return from === to
        ? segmentLabel(from, ctx)
        : `${segmentLabel(from, ctx)}–${segmentLabel(to, ctx)}`;
}

/** A number without needless digits: 0.5 s, 2 s, 0.125 s. */
function seconds(n: number, ctx: DescribeContext): string {
    const text = Number.isInteger(n) ? String(n) : String(Number(n.toFixed(3)));
    return formatCc(CcLabel.Seconds, ctx.lang, text);
}

function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Turns a phrase into a sentence. */
function sentence(text: string): string {
    const trimmed = capitalize(text);
    return /[.!?]$/.test(trimmed) ? trimmed : trimmed + ".";
}

/**
 * A list of times as a noun phrase: "your last 10 times from completed
 * runs". The filters are collected while walking down to the source, so the
 * phrase reads in the order a runner would say it, not in the order the
 * blocks are nested.
 */
export function describeSamples(
    node: Block | null,
    ctx: DescribeContext,
): string {
    let lastN: number | null = null;
    const qualifiers: string[] = [];
    let current: Block | null = node;
    const { lang } = ctx;

    while (current !== null && current.type !== "segmentHistory") {
        switch (current.type) {
            case "lastN":
                lastN ??= Number(current["count"]);
                break;
            case "completedRunsOnly":
                qualifiers.push(resolveCc(CcLabel.QualCompleted, lang));
                break;
            case "recentDays":
                qualifiers.push(
                    formatCc(
                        CcLabel.QualRecentDays,
                        lang,
                        Number(current["days"]),
                    ),
                );
                break;
            case "finishedUnder":
                qualifiers.push(
                    formatCc(
                        CcLabel.QualUnder,
                        lang,
                        formatDuration(Number(current["totalSeconds"])),
                    ),
                );
                break;
            case "trimOutliers":
                qualifiers.push(
                    formatCc(
                        CcLabel.QualTrim,
                        lang,
                        Number(current["percent"]),
                    ),
                );
                break;
            case "atLeast":
                qualifiers.push(
                    formatCc(
                        CcLabel.QualAtLeast,
                        lang,
                        Number(current["count"]),
                    ),
                );
                break;
            case "reachedSegment":
                qualifiers.push(
                    formatCc(
                        CcLabel.QualReached,
                        lang,
                        segmentLabel(Number(current["segment"]), ctx),
                    ),
                );
                break;
        }
        current = (current["source"] as Block | null | undefined) ?? null;
    }

    const head =
        lastN !== null
            ? formatCc(CcLabel.DescLastN, lang, lastN)
            : resolveCc(CcLabel.DescAllTimes, lang);
    return [head, ...qualifiers].join(" ");
}

/** One time per segment as a noun phrase: "the median of your last 10 times". */
export function describeTimes(
    node: Block | null,
    ctx: DescribeContext,
): string {
    const { lang } = ctx;
    if (node === null) {
        return resolveCc(CcLabel.DescSomething, lang);
    }
    const times = (key: string) =>
        describeTimes((node[key] as Block | null) ?? null, ctx);
    const samples = (key: string) =>
        describeSamples((node[key] as Block | null) ?? null, ctx);

    switch (node.type) {
        case "comparison":
            return node["name"] === BEST_SEGMENTS
                ? resolveCc(CcLabel.DescYourGolds, lang)
                : node["name"] === PERSONAL_BEST
                  ? resolveCc(CcLabel.DescYourPb, lang)
                  : formatCc(
                        CcLabel.DescComparison,
                        lang,
                        String(node["name"]),
                    );
        case "attempt":
            return formatCc(CcLabel.DescAttempt, lang, Number(node["number"]));
        case "bestRecentRun":
            return formatCc(
                CcLabel.DescBestRecentRun,
                lang,
                Number(node["days"]),
            );
        case "weightedAverage":
            return formatCc(
                CcLabel.DescWeightedAverage,
                lang,
                samples("source"),
            );
        case "clamp":
            return formatCc(
                CcLabel.DescClamp,
                lang,
                times("source"),
                times("low"),
                times("high"),
            );
        case "round":
            return formatCc(
                CcLabel.DescRound,
                lang,
                times("source"),
                seconds(Number(node["step"]), ctx),
            );
        case "aggregate": {
            const label =
                {
                    median: CcLabel.DescMedian,
                    average: CcLabel.DescAverage,
                    min: CcLabel.DescMin,
                    max: CcLabel.DescMax,
                }[String(node["kind"])] ?? CcLabel.DescMedian;
            return formatCc(label, lang, samples("source"));
        }
        case "percentile":
            return formatCc(
                CcLabel.DescPercentile,
                lang,
                Number(node["percent"]),
                samples("source"),
            );
        case "addTime": {
            const amount = Number(node["seconds"]);
            return formatCc(
                amount < 0 ? CcLabel.DescRemoveTime : CcLabel.DescAddTime,
                lang,
                times("source"),
                seconds(Math.abs(amount), ctx),
            );
        }
        case "scale":
            return formatCc(
                CcLabel.DescScale,
                lang,
                Number(node["percent"]),
                times("source"),
            );
        case "stretchToTotal":
            return formatCc(
                CcLabel.DescStretch,
                lang,
                times("source"),
                formatDuration(Number(node["totalSeconds"])),
            );
        case "blend":
            return formatCc(
                CcLabel.DescBlend,
                lang,
                Number(node["percent"]),
                times("from"),
                times("to"),
            );
        case "pick":
            return formatCc(
                node["kind"] === "faster"
                    ? CcLabel.DescFaster
                    : CcLabel.DescSlower,
                lang,
                times("first"),
                times("second"),
            );
        case "fallback":
            return formatCc(
                CcLabel.DescFallback,
                lang,
                times("primary"),
                times("fallback"),
            );
        case RANGE.type: {
            const arms = (node["cases"] as RangeCase[]).map((c) =>
                formatCc(
                    CcLabel.DescRangeArm,
                    lang,
                    describeTimes(c.times, ctx),
                    rangeLabel(c.from, c.to, ctx),
                ),
            );
            return formatCc(
                CcLabel.DescRangeOtherwise,
                lang,
                arms.join(", "),
                times("otherwise"),
            );
        }
        default:
            return resolveCc(CcLabel.DescSomething, lang);
    }
}

/**
 * The summary under the name: whole sentences, with the top level structure
 * spelled out, like "Intro–Caves: your golds + 0.5 s. Other segments: the
 * median of your last 10 times from completed runs. Gaps filled from your
 * PB."
 */
export function summarize(root: Block, ctx: DescribeContext): string {
    const { lang } = ctx;
    if (root.type === "fallback") {
        const primary = (root["primary"] as Block | null) ?? null;
        return formatCc(
            CcLabel.SumGapsFilled,
            lang,
            primary === null
                ? sentence(resolveCc(CcLabel.DescSomething, lang))
                : summarize(primary, ctx),
            describeTimes((root["fallback"] as Block | null) ?? null, ctx),
        );
    }
    if (root.type === RANGE.type) {
        const parts = (root["cases"] as RangeCase[]).map((c) =>
            sentence(
                formatCc(
                    CcLabel.SumRangeArm,
                    lang,
                    capitalize(rangeLabel(c.from, c.to, ctx)),
                    describeTimes(c.times, ctx),
                ),
            ),
        );
        parts.push(
            sentence(
                formatCc(
                    CcLabel.SumOtherSegments,
                    lang,
                    describeTimes(
                        (root["otherwise"] as Block | null) ?? null,
                        ctx,
                    ),
                ),
            ),
        );
        return parts.join(" ");
    }
    return sentence(describeTimes(root, ctx));
}

/**
 * Where a segment's time came from, given the path livesplit-core reported,
 * like `primary.cases.0.times.source`. Notes the choices on the way, like a
 * gap filled by a fallback or which side of "the slower of" was picked.
 */
export function describeOrigin(
    root: Block,
    path: string,
    ctx: DescribeContext,
): string {
    const { lang } = ctx;
    const steps = path ? path.split(".") : [];
    const notes: string[] = [];
    let node: unknown = root;
    // "source" steps walk into blocks like "add" or "scale" that adjust the
    // time they get. The description is of the whole adjusted time, so they
    // don't change which block is described.
    let target: Block = root;

    for (const step of steps) {
        const parent = node as Block;
        if (parent.type === "fallback" && step === "fallback") {
            notes.push(resolveCc(CcLabel.OriginFillingGap, lang));
        }
        if (parent.type === "pick") {
            notes.push(
                formatCc(
                    CcLabel.OriginPicked,
                    lang,
                    resolveCc(
                        parent["kind"] === "faster"
                            ? CcLabel.PickFaster
                            : CcLabel.PickSlower,
                        lang,
                    ),
                ),
            );
        }
        if (parent.type === "clamp" && step === "low") {
            notes.push(resolveCc(CcLabel.OriginLowLimit, lang));
        }
        if (parent.type === "clamp" && step === "high") {
            notes.push(resolveCc(CcLabel.OriginHighLimit, lang));
        }
        node = Array.isArray(node)
            ? (node as unknown[])[Number(step)]
            : (node as Record<string, unknown>)[step];
        if (node === undefined || node === null) {
            return "";
        }
        if (
            typeof node === "object" &&
            !Array.isArray(node) &&
            "type" in node &&
            step !== "source"
        ) {
            target = node as Block;
        }
    }

    const text = capitalize(describeTimes(target, ctx));
    return notes.length > 0 ? `${text} (${notes.join(", ")})` : text;
}

/** Inclusive segment numbers a block names that the splits don't have. */
interface SegmentSpan {
    from: number;
    to: number;
}

/**
 * The warning for segment ranges and "reached" segments that point past the
 * end of the splits, like "Uses segment 9, but your splits have 6". It's the
 * same sentence as the desktop component shows in its settings. A range that
 * still overlaps the splits reports only the end it names, a range that
 * starts past the end reports the whole range, and adjacent numbers are
 * joined. Returns null if every segment exists.
 */
export function segmentWarning(
    root: Block | null,
    segmentCount: number,
    lang: Language | undefined,
): string | null {
    if (root === null || segmentCount <= 0) {
        return null;
    }
    const spans: SegmentSpan[] = [];
    collectSpans(root, segmentCount, spans);
    if (spans.length === 0) {
        return null;
    }

    spans.sort((a, b) => a.from - b.from || a.to - b.to);
    const merged: SegmentSpan[] = [];
    for (const span of spans) {
        const last = merged[merged.length - 1];
        if (last === undefined || span.from > last.to + 1) {
            merged.push({ ...span });
        } else {
            last.to = Math.max(last.to, span.to);
        }
    }

    const parts = merged.map((s) =>
        s.from === s.to
            ? String(s.from)
            : formatCc(CcLabel.SegmentSpan, lang, s.from, s.to),
    );
    const list =
        parts.length === 1
            ? (parts[0] ?? "")
            : formatCc(
                  CcLabel.ListAnd,
                  lang,
                  parts.slice(0, -1).join(", "),
                  parts[parts.length - 1] ?? "",
              );
    const single = merged.length === 1 && merged[0]?.from === merged[0]?.to;
    return formatCc(
        single ? CcLabel.WarnSegment : CcLabel.WarnSegments,
        lang,
        list,
        segmentCount,
    );
}

function collectSpans(
    node: unknown,
    segmentCount: number,
    spans: SegmentSpan[],
): void {
    if (Array.isArray(node)) {
        node.forEach((item) => collectSpans(item, segmentCount, spans));
        return;
    }
    if (node === null || typeof node !== "object") {
        return;
    }
    const block = node as Block;
    if (block.type === RANGE.type && Array.isArray(block["cases"])) {
        for (const c of block["cases"] as RangeCase[]) {
            if (c.to >= c.from && c.to > segmentCount) {
                spans.push({
                    from: c.from > segmentCount ? c.from : c.to,
                    to: c.to,
                });
            }
        }
    } else if (block.type === "reachedSegment") {
        const segment = Number(block["segment"]);
        if (segment > segmentCount) {
            spans.push({ from: segment, to: segment });
        }
    }
    Object.values(block).forEach((value) =>
        collectSpans(value, segmentCount, spans),
    );
}
