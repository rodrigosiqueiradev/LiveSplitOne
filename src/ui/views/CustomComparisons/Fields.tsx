/**
 * The inputs for a block's values. Every input only passes on values the
 * file format accepts, so the comparison stays valid while it's edited. What
 * the runner types is kept while it isn't valid yet (like "1:0" on the way to
 * "1:05:00"), and marked as invalid, rather than being replaced while typing.
 */

import React, { useEffect, useState } from "react";
import { type Language } from "../../../livesplit-core";
import {
    CcLabel,
    formatCc,
    resolveCc,
} from "../../../localization/custom-comparisons";
import { type FieldSpec } from "./blocks";
import { formatDuration, parseDuration } from "./time";
import { choiceLabel } from "./BlockPicker";

import classes from "../../../css/CustomComparisons.module.css";

export interface FieldContext {
    lang: Language | undefined;
    segmentNames: string[];
    /** The comparisons a comparison block can use. */
    comparisons: string[];
}

export function Field({
    spec,
    value,
    onChange,
    ctx,
}: {
    spec: FieldSpec;
    value: unknown;
    onChange: (value: unknown) => void;
    ctx: FieldContext;
}) {
    switch (spec.type) {
        case "number":
            return (
                <NumberField
                    value={Number(value)}
                    min={spec.min}
                    max={spec.max}
                    step={spec.step}
                    onChange={onChange}
                />
            );
        case "duration":
            return (
                <DurationField
                    value={Number(value)}
                    onChange={onChange}
                    lang={ctx.lang}
                />
            );
        case "choice": {
            // Choices can be numbers (like the rounding steps), so they are
            // selected by their position instead of by their value.
            const index = spec.choices.findIndex((c) => c.value === value);
            return (
                <select
                    className={classes.field}
                    value={index}
                    onChange={(e) =>
                        onChange(
                            spec.choices[Number(e.target.value)]?.value ??
                                value,
                        )
                    }
                >
                    {index < 0 && <option value={-1}>{String(value)}</option>}
                    {spec.choices.map((choice, i) => (
                        <option key={i} value={i}>
                            {choiceLabel(choice, ctx.lang)}
                        </option>
                    ))}
                </select>
            );
        }
        case "segment":
            return (
                <SegmentField
                    value={Number(value)}
                    onChange={onChange}
                    ctx={ctx}
                />
            );
        case "comparison": {
            const name = String(value);
            // A comparison that doesn't exist (anymore) is still shown, so a
            // comparison made with other splits opens as it is. It's marked,
            // so the runner sees why the preview complains about it.
            const missing = !ctx.comparisons.includes(name);
            return (
                <select
                    className={`${classes.field} ${missing ? classes.invalid : ""}`}
                    value={name}
                    onChange={(e) => onChange(e.target.value)}
                >
                    {missing && (
                        <option value={name}>
                            {formatCc(CcLabel.NotFound, ctx.lang, name)}
                        </option>
                    )}
                    {ctx.comparisons.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            );
        }
    }
}

/**
 * Keeps the text the runner is typing, and goes back to the value from the
 * outside whenever that changes, like after undo.
 */
function useDraft(value: string): [string, (text: string) => void] {
    const [draft, setDraft] = useState(value);
    useEffect(() => setDraft(value), [value]);
    return [draft, setDraft];
}

function NumberField({
    value,
    min,
    max,
    step,
    onChange,
}: {
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
}) {
    const [draft, setDraft] = useDraft(String(value));
    const parse = (text: string): number | null => {
        if (text.trim() === "") {
            return null;
        }
        const number = Number(text);
        if (!Number.isFinite(number) || number < min || number > max) {
            return null;
        }
        // Rounded to the step, so a whole number field never stores a
        // fraction, which the file format would refuse.
        const decimals = Math.max(0, -Math.floor(Math.log10(step)));
        return Number((Math.round(number / step) * step).toFixed(decimals));
    };
    const valid = parse(draft) !== null;

    return (
        <input
            type="number"
            className={`${classes.field} ${classes.numberField} ${valid ? "" : classes.invalid}`}
            value={draft}
            min={min}
            max={max}
            step={step}
            size={Math.max(2, draft.length)}
            onChange={(e) => {
                setDraft(e.target.value);
                const parsed = parse(e.target.value);
                if (parsed !== null) {
                    onChange(parsed);
                }
            }}
            onBlur={() => setDraft(String(value))}
        />
    );
}

function DurationField({
    value,
    onChange,
    lang,
}: {
    value: number;
    onChange: (value: number) => void;
    lang: Language | undefined;
}) {
    const [draft, setDraft] = useDraft(formatDuration(value));
    const valid = parseDuration(draft) !== null;

    return (
        <input
            type="text"
            inputMode="decimal"
            className={`${classes.field} ${classes.durationField} ${valid ? "" : classes.invalid}`}
            value={draft}
            title={valid ? undefined : resolveCc(CcLabel.InvalidTime, lang)}
            size={Math.max(4, draft.length)}
            onChange={(e) => {
                setDraft(e.target.value);
                const parsed = parseDuration(e.target.value);
                if (parsed !== null) {
                    onChange(parsed);
                }
            }}
            onBlur={() => setDraft(formatDuration(value))}
        />
    );
}

function SegmentField({
    value,
    onChange,
    ctx,
}: {
    value: number;
    onChange: (value: number) => void;
    ctx: FieldContext;
}) {
    const { segmentNames, lang } = ctx;
    // Ranges and "reached" segments store positions, not names. A position
    // past the end of the splits is kept and marked, so a comparison made
    // for longer splits opens as it is.
    const missing = value > segmentNames.length;
    return (
        <select
            className={`${classes.field} ${missing ? classes.invalid : ""}`}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
        >
            {segmentNames.map((name, i) => (
                <option key={i} value={i + 1}>
                    {formatCc(CcLabel.SegmentOption, lang, i + 1, name)}
                </option>
            ))}
            {missing && (
                <option value={value}>
                    {formatCc(CcLabel.NotInSplits, lang, value)}
                </option>
            )}
        </select>
    );
}
