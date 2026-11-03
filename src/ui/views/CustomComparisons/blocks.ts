/**
 * The blocks a custom comparison can be made of, with their values, slots
 * and texts. See `model.ts` for how they fit together.
 */

import { Label } from "../../../localization";
import { type Kind, type Slot } from "./model";

export const PERSONAL_BEST = "Personal Best";
export const BEST_SEGMENTS = "Best Segments";

export type Category =
    | "sources"
    | "filters"
    | "aggregates"
    | "math"
    | "control";

/**
 * A value of a block that the runner edits in place, like a count or a
 * percentage.
 *
 * - `number`: a number between `min` and `max`, rounded to `step`.
 * - `choice`: one of a fixed set of values.
 * - `segment`: a segment number, picked from the run's segments.
 * - `duration`: a time in seconds, typed like 20:00 or 1:05:30.
 * - `comparison`: the name of another comparison.
 */
export type FieldSpec =
    | {
          key: string;
          type: "number";
          min: number;
          max: number;
          step: number;
          default: number;
      }
    | {
          key: string;
          type: "choice";
          choices: { value: string | number; label: Label }[];
          default: string | number;
      }
    | { key: string; type: "segment"; default: number }
    | { key: string; type: "duration"; default: number }
    | { key: string; type: "comparison"; default: string };

/** A place in a block where another block goes. */
export interface SlotSpec {
    key: string;
    kind: Kind;
    /** The text shown in front of the slot, if any. */
    label?: Label | undefined;
}

export interface BlockSpec {
    type: string;
    kind: Kind;
    category: Category;
    /**
     * The block's title. Its `{key}` placeholders are replaced by the input of
     * the field with that key.
     */
    title: Label;
    /** A text shown below the slots, which may contain fields like the title. */
    footer?: Label;
    tip: Label;
    fields: FieldSpec[];
    slots: SlotSpec[];
}

/** The largest segment number a range or "reached segment" can name. */
export const MAX_SEGMENT = 10_000;

const source = (kind: Kind, label?: Label): SlotSpec => ({
    key: "source",
    kind,
    label,
});

/**
 * Every block, in the order they are offered. The keys and limits match
 * livesplit-core's custom comparison format.
 * The segment range block isn't listed: its ranges are a list, so the block
 * editor handles it on its own (see `RANGE`).
 */
export const BLOCKS: BlockSpec[] = [
    // Sources.
    {
        type: "segmentHistory",
        kind: "samples",
        category: "sources",
        title: Label.CustomComparisonsBlockSegmentHistory,
        tip: Label.CustomComparisonsBlockSegmentHistoryTip,
        fields: [],
        slots: [],
    },
    {
        type: "comparison",
        kind: "times",
        category: "sources",
        title: Label.CustomComparisonsBlockComparison,
        tip: Label.CustomComparisonsBlockComparisonTip,
        fields: [{ key: "name", type: "comparison", default: PERSONAL_BEST }],
        slots: [],
    },
    {
        type: "attempt",
        kind: "times",
        category: "sources",
        title: Label.CustomComparisonsBlockAttempt,
        tip: Label.CustomComparisonsBlockAttemptTip,
        fields: [
            {
                key: "number",
                type: "number",
                min: 1,
                max: 2_147_483_647,
                step: 1,
                default: 1,
            },
        ],
        slots: [],
    },
    {
        type: "bestRecentRun",
        kind: "times",
        category: "sources",
        title: Label.CustomComparisonsBlockBestRecentRun,
        tip: Label.CustomComparisonsBlockBestRecentRunTip,
        fields: [
            {
                key: "days",
                type: "number",
                min: 1,
                max: 36_500,
                step: 1,
                default: 30,
            },
        ],
        slots: [],
    },
    // Filters.
    {
        type: "lastN",
        kind: "samples",
        category: "filters",
        title: Label.CustomComparisonsBlockLastN,
        tip: Label.CustomComparisonsBlockLastNTip,
        fields: [
            {
                key: "count",
                type: "number",
                min: 1,
                max: 10_000,
                step: 1,
                default: 10,
            },
        ],
        slots: [source("samples")],
    },
    {
        type: "completedRunsOnly",
        kind: "samples",
        category: "filters",
        title: Label.CustomComparisonsBlockCompletedRunsOnly,
        tip: Label.CustomComparisonsBlockCompletedRunsOnlyTip,
        fields: [],
        slots: [source("samples")],
    },
    {
        type: "recentDays",
        kind: "samples",
        category: "filters",
        title: Label.CustomComparisonsBlockRecentDays,
        tip: Label.CustomComparisonsBlockRecentDaysTip,
        fields: [
            {
                key: "days",
                type: "number",
                min: 1,
                max: 36_500,
                step: 1,
                default: 30,
            },
        ],
        slots: [source("samples")],
    },
    {
        type: "finishedUnder",
        kind: "samples",
        category: "filters",
        title: Label.CustomComparisonsBlockFinishedUnder,
        tip: Label.CustomComparisonsBlockFinishedUnderTip,
        fields: [{ key: "totalSeconds", type: "duration", default: 20 * 60 }],
        slots: [source("samples")],
    },
    {
        type: "reachedSegment",
        kind: "samples",
        category: "filters",
        title: Label.CustomComparisonsBlockReachedSegment,
        tip: Label.CustomComparisonsBlockReachedSegmentTip,
        fields: [{ key: "segment", type: "segment", default: 2 }],
        slots: [source("samples")],
    },
    {
        type: "trimOutliers",
        kind: "samples",
        category: "filters",
        title: Label.CustomComparisonsBlockTrimOutliers,
        tip: Label.CustomComparisonsBlockTrimOutliersTip,
        fields: [
            {
                key: "percent",
                type: "number",
                min: 0,
                max: 45,
                step: 1,
                default: 10,
            },
        ],
        slots: [source("samples")],
    },
    {
        type: "atLeast",
        kind: "samples",
        category: "filters",
        title: Label.CustomComparisonsBlockAtLeast,
        tip: Label.CustomComparisonsBlockAtLeastTip,
        fields: [
            {
                key: "count",
                type: "number",
                min: 1,
                max: 10_000,
                step: 1,
                default: 5,
            },
        ],
        slots: [source("samples")],
    },
    // Aggregates.
    {
        type: "aggregate",
        kind: "times",
        category: "aggregates",
        title: Label.CustomComparisonsBlockAggregate,
        tip: Label.CustomComparisonsBlockAggregateTip,
        fields: [
            {
                key: "kind",
                type: "choice",
                choices: [
                    {
                        value: "median",
                        label: Label.CustomComparisonsAggregateMedian,
                    },
                    {
                        value: "average",
                        label: Label.CustomComparisonsAggregateAverage,
                    },
                    {
                        value: "min",
                        label: Label.CustomComparisonsAggregateMin,
                    },
                    {
                        value: "max",
                        label: Label.CustomComparisonsAggregateMax,
                    },
                ],
                default: "median",
            },
        ],
        slots: [source("samples")],
    },
    {
        type: "percentile",
        kind: "times",
        category: "aggregates",
        title: Label.CustomComparisonsBlockPercentile,
        tip: Label.CustomComparisonsBlockPercentileTip,
        fields: [
            {
                key: "percent",
                type: "number",
                min: 0,
                max: 100,
                step: 1,
                default: 70,
            },
        ],
        slots: [source("samples")],
    },
    {
        type: "weightedAverage",
        kind: "times",
        category: "aggregates",
        title: Label.CustomComparisonsBlockWeightedAverage,
        footer: Label.CustomComparisonsBlockWeightedAverageFooter,
        tip: Label.CustomComparisonsBlockWeightedAverageTip,
        fields: [
            {
                key: "halfLife",
                type: "number",
                min: 1,
                max: 10_000,
                step: 1,
                default: 5,
            },
        ],
        slots: [source("samples")],
    },
    // Math.
    {
        type: "addTime",
        kind: "times",
        category: "math",
        title: Label.CustomComparisonsBlockAddTime,
        tip: Label.CustomComparisonsBlockAddTimeTip,
        fields: [
            {
                key: "seconds",
                type: "number",
                min: -3600,
                max: 3600,
                step: 0.001,
                default: 0.5,
            },
        ],
        slots: [source("times")],
    },
    {
        type: "scale",
        kind: "times",
        category: "math",
        title: Label.CustomComparisonsBlockScale,
        tip: Label.CustomComparisonsBlockScaleTip,
        fields: [
            {
                key: "percent",
                type: "number",
                min: 1,
                max: 1000,
                step: 0.1,
                default: 103,
            },
        ],
        slots: [source("times")],
    },
    {
        type: "round",
        kind: "times",
        category: "math",
        title: Label.CustomComparisonsBlockRound,
        tip: Label.CustomComparisonsBlockRoundTip,
        fields: [
            {
                key: "step",
                type: "choice",
                // The labels are filled in with the number by the block
                // editor, see `choiceLabel`.
                choices: [
                    { value: 0.1, label: Label.CustomComparisonsRoundStep },
                    { value: 1, label: Label.CustomComparisonsRoundStep },
                    { value: 0.01, label: Label.CustomComparisonsRoundStep },
                ],
                default: 0.1,
            },
        ],
        slots: [source("times")],
    },
    {
        type: "clamp",
        kind: "times",
        category: "math",
        title: Label.CustomComparisonsBlockClamp,
        tip: Label.CustomComparisonsBlockClampTip,
        fields: [],
        slots: [
            source("times"),
            {
                key: "low",
                kind: "times",
                label: Label.CustomComparisonsSlotNeverFaster,
            },
            {
                key: "high",
                kind: "times",
                label: Label.CustomComparisonsSlotNeverSlower,
            },
        ],
    },
    {
        type: "stretchToTotal",
        kind: "times",
        category: "math",
        title: Label.CustomComparisonsBlockStretchToTotal,
        tip: Label.CustomComparisonsBlockStretchToTotalTip,
        fields: [{ key: "totalSeconds", type: "duration", default: 20 * 60 }],
        slots: [source("times")],
    },
    {
        type: "blend",
        kind: "times",
        category: "math",
        title: Label.CustomComparisonsBlockBlend,
        tip: Label.CustomComparisonsBlockBlendTip,
        fields: [
            {
                key: "percent",
                type: "number",
                min: 0,
                max: 100,
                step: 1,
                default: 75,
            },
        ],
        slots: [
            { key: "from", kind: "times" },
            { key: "to", kind: "times", label: Label.CustomComparisonsSlotTo },
        ],
    },
    // Control.
    {
        type: "fallback",
        kind: "times",
        category: "control",
        title: Label.CustomComparisonsBlockFallback,
        tip: Label.CustomComparisonsBlockFallbackTip,
        fields: [],
        slots: [
            { key: "primary", kind: "times" },
            {
                key: "fallback",
                kind: "times",
                label: Label.CustomComparisonsSlotIfEmpty,
            },
        ],
    },
    {
        type: "pick",
        kind: "times",
        category: "control",
        title: Label.CustomComparisonsBlockPick,
        tip: Label.CustomComparisonsBlockPickTip,
        fields: [
            {
                key: "kind",
                type: "choice",
                choices: [
                    {
                        value: "slower",
                        label: Label.CustomComparisonsPickSlower,
                    },
                    {
                        value: "faster",
                        label: Label.CustomComparisonsPickFaster,
                    },
                ],
                default: "slower",
            },
        ],
        slots: [
            { key: "first", kind: "times" },
            {
                key: "second",
                kind: "times",
                label: Label.CustomComparisonsSlotAnd,
            },
        ],
    },
];

/**
 * The segment range block. Unlike the other blocks it holds a list of
 * ranges, each with its own segments and rule, plus the rule for the other
 * segments.
 */
export const RANGE: BlockSpec = {
    type: "segmentRange",
    kind: "times",
    category: "control",
    title: Label.CustomComparisonsBlockSegmentRange,
    tip: Label.CustomComparisonsBlockSegmentRangeTip,
    fields: [],
    slots: [
        {
            key: "otherwise",
            kind: "times",
            label: Label.CustomComparisonsSlotOtherwise,
        },
    ],
};

/** The largest number of ranges in a segment range block. */
export const MAX_RANGES = 100;

export interface RangeCase {
    from: number;
    to: number;
    times: Slot;
}

export const ALL_BLOCKS: BlockSpec[] = [...BLOCKS, RANGE];

export const CATEGORIES: { category: Category; label: Label }[] = [
    { category: "sources", label: Label.CustomComparisonsCategorySources },
    { category: "filters", label: Label.CustomComparisonsCategoryFilters },
    {
        category: "aggregates",
        label: Label.CustomComparisonsCategoryAggregates,
    },
    { category: "math", label: Label.CustomComparisonsCategoryMath },
    { category: "control", label: Label.CustomComparisonsCategoryControl },
];

export function blockSpec(type: string): BlockSpec | undefined {
    return ALL_BLOCKS.find((b) => b.type === type);
}
