/**
 * The blocks a custom comparison can be made of, with their values, slots
 * and texts. See `model.ts` for how they fit together.
 */

import { CcLabel } from "../../../localization/custom-comparisons";
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
          choices: { value: string | number; label: CcLabel }[];
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
    label?: CcLabel | undefined;
}

export interface BlockSpec {
    type: string;
    kind: Kind;
    category: Category;
    /**
     * The block's title. Its `{key}` placeholders are replaced by the input of
     * the field with that key.
     */
    title: CcLabel;
    /** A text shown below the slots, which may contain fields like the title. */
    footer?: CcLabel;
    tip: CcLabel;
    fields: FieldSpec[];
    slots: SlotSpec[];
}

/** The largest segment number a range or "reached segment" can name. */
export const MAX_SEGMENT = 10_000;

const source = (kind: Kind, label?: CcLabel): SlotSpec => ({
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
        title: CcLabel.BlockSegmentHistory,
        tip: CcLabel.BlockSegmentHistoryTip,
        fields: [],
        slots: [],
    },
    {
        type: "comparison",
        kind: "times",
        category: "sources",
        title: CcLabel.BlockComparison,
        tip: CcLabel.BlockComparisonTip,
        fields: [{ key: "name", type: "comparison", default: PERSONAL_BEST }],
        slots: [],
    },
    {
        type: "attempt",
        kind: "times",
        category: "sources",
        title: CcLabel.BlockAttempt,
        tip: CcLabel.BlockAttemptTip,
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
        title: CcLabel.BlockBestRecentRun,
        tip: CcLabel.BlockBestRecentRunTip,
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
        title: CcLabel.BlockLastN,
        tip: CcLabel.BlockLastNTip,
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
        title: CcLabel.BlockCompletedRunsOnly,
        tip: CcLabel.BlockCompletedRunsOnlyTip,
        fields: [],
        slots: [source("samples")],
    },
    {
        type: "recentDays",
        kind: "samples",
        category: "filters",
        title: CcLabel.BlockRecentDays,
        tip: CcLabel.BlockRecentDaysTip,
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
        title: CcLabel.BlockFinishedUnder,
        tip: CcLabel.BlockFinishedUnderTip,
        fields: [{ key: "totalSeconds", type: "duration", default: 20 * 60 }],
        slots: [source("samples")],
    },
    {
        type: "reachedSegment",
        kind: "samples",
        category: "filters",
        title: CcLabel.BlockReachedSegment,
        tip: CcLabel.BlockReachedSegmentTip,
        fields: [{ key: "segment", type: "segment", default: 2 }],
        slots: [source("samples")],
    },
    {
        type: "trimOutliers",
        kind: "samples",
        category: "filters",
        title: CcLabel.BlockTrimOutliers,
        tip: CcLabel.BlockTrimOutliersTip,
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
        title: CcLabel.BlockAtLeast,
        tip: CcLabel.BlockAtLeastTip,
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
        title: CcLabel.BlockAggregate,
        tip: CcLabel.BlockAggregateTip,
        fields: [
            {
                key: "kind",
                type: "choice",
                choices: [
                    { value: "median", label: CcLabel.AggregateMedian },
                    { value: "average", label: CcLabel.AggregateAverage },
                    { value: "min", label: CcLabel.AggregateMin },
                    { value: "max", label: CcLabel.AggregateMax },
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
        title: CcLabel.BlockPercentile,
        tip: CcLabel.BlockPercentileTip,
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
        title: CcLabel.BlockWeightedAverage,
        footer: CcLabel.BlockWeightedAverageFooter,
        tip: CcLabel.BlockWeightedAverageTip,
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
        title: CcLabel.BlockAddTime,
        tip: CcLabel.BlockAddTimeTip,
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
        title: CcLabel.BlockScale,
        tip: CcLabel.BlockScaleTip,
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
        title: CcLabel.BlockRound,
        tip: CcLabel.BlockRoundTip,
        fields: [
            {
                key: "step",
                type: "choice",
                // The labels are filled in with the number by the block
                // editor, see `choiceLabel`.
                choices: [
                    { value: 0.1, label: CcLabel.RoundStep },
                    { value: 1, label: CcLabel.RoundStep },
                    { value: 0.01, label: CcLabel.RoundStep },
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
        title: CcLabel.BlockClamp,
        tip: CcLabel.BlockClampTip,
        fields: [],
        slots: [
            source("times"),
            { key: "low", kind: "times", label: CcLabel.SlotNeverFaster },
            { key: "high", kind: "times", label: CcLabel.SlotNeverSlower },
        ],
    },
    {
        type: "stretchToTotal",
        kind: "times",
        category: "math",
        title: CcLabel.BlockStretchToTotal,
        tip: CcLabel.BlockStretchToTotalTip,
        fields: [{ key: "totalSeconds", type: "duration", default: 20 * 60 }],
        slots: [source("times")],
    },
    {
        type: "blend",
        kind: "times",
        category: "math",
        title: CcLabel.BlockBlend,
        tip: CcLabel.BlockBlendTip,
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
            { key: "to", kind: "times", label: CcLabel.SlotTo },
        ],
    },
    // Control.
    {
        type: "fallback",
        kind: "times",
        category: "control",
        title: CcLabel.BlockFallback,
        tip: CcLabel.BlockFallbackTip,
        fields: [],
        slots: [
            { key: "primary", kind: "times" },
            { key: "fallback", kind: "times", label: CcLabel.SlotIfEmpty },
        ],
    },
    {
        type: "pick",
        kind: "times",
        category: "control",
        title: CcLabel.BlockPick,
        tip: CcLabel.BlockPickTip,
        fields: [
            {
                key: "kind",
                type: "choice",
                choices: [
                    { value: "slower", label: CcLabel.PickSlower },
                    { value: "faster", label: CcLabel.PickFaster },
                ],
                default: "slower",
            },
        ],
        slots: [
            { key: "first", kind: "times" },
            { key: "second", kind: "times", label: CcLabel.SlotAnd },
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
    title: CcLabel.BlockSegmentRange,
    tip: CcLabel.BlockSegmentRangeTip,
    fields: [],
    slots: [{ key: "otherwise", kind: "times", label: CcLabel.SlotOtherwise }],
};

/** The largest number of ranges in a segment range block. */
export const MAX_RANGES = 100;

export interface RangeCase {
    from: number;
    to: number;
    times: Slot;
}

export const ALL_BLOCKS: BlockSpec[] = [...BLOCKS, RANGE];

export const CATEGORIES: { category: Category; label: CcLabel }[] = [
    { category: "sources", label: CcLabel.CategorySources },
    { category: "filters", label: CcLabel.CategoryFilters },
    { category: "aggregates", label: CcLabel.CategoryAggregates },
    { category: "math", label: CcLabel.CategoryMath },
    { category: "control", label: CcLabel.CategoryControl },
];

export function blockSpec(type: string): BlockSpec | undefined {
    return ALL_BLOCKS.find((b) => b.type === type);
}
