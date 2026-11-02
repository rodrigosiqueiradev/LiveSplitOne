import { CcLabel, type CcTexts } from "./labels";

/**
 * The English texts of the Custom Comparisons editor. The block titles, tips
 * and descriptions are the same as in the desktop LiveSplit component *Custom
 * Comparisons*, so its user guide applies to LiveSplit One too.
 */
export const english: CcTexts = {
    [CcLabel.ComponentName]: "Custom Comparisons",
    [CcLabel.ComponentDescription]:
        "Lets you make your own comparisons by putting blocks together. It doesn't show anything. The comparisons are stored in the layout and show up next to the other comparisons.",
    [CcLabel.SidebarEditingHint]:
        "Save or cancel the comparison you're editing first.",
    [CcLabel.ComparisonMenu]: "More actions",
    [CcLabel.NameRequired]: "Give the comparison a name.",
    [CcLabel.SearchBlocks]: "Search blocks",
    [CcLabel.NoBlocksFound]: "No block matches. Try another word.",
    [CcLabel.AboutBlock]: "What does this block do?",
    [CcLabel.RailTitle]: "Blocks",
    [CcLabel.RailHint]:
        "Drag a block onto a slot, or onto a block to replace it. Click one to put it in the first empty slot it fits.",
    [CcLabel.DragBlock]: "Drag to move this block",
    [CcLabel.OpenEditorHint]:
        "This component doesn't show anything. It stores your custom comparisons in the layout, so they travel with it.",

    [CcLabel.ListHeading]: "Comparisons",
    [CcLabel.NoComparisons]:
        "No custom comparisons yet. Click New to make your first one.",
    [CcLabel.New]: "New…",
    [CcLabel.Edit]: "Edit…",
    [CcLabel.Rename]: "Rename…",
    [CcLabel.Duplicate]: "Duplicate",
    [CcLabel.Remove]: "Remove",
    [CcLabel.MoveUp]: "Move Up",
    [CcLabel.MoveDown]: "Move Down",
    [CcLabel.Import]: "Import…",
    [CcLabel.Export]: "Export…",
    [CcLabel.CopyAsText]: "Copy as Text",
    [CcLabel.Paste]: "Paste…",
    [CcLabel.UsedBy]: "Used by {0} other comparisons",
    [CcLabel.UsedByOne]: "Used by 1 other comparison",
    [CcLabel.Unreadable]: "Can't be read",
    [CcLabel.SaveReminder]:
        "Changes are kept when you click OK in the Layout Editor. Save the layout afterwards to keep them for next time.",
    [CcLabel.CopiedToClipboard]:
        "Copied. You can paste it into a chat or forum post.",
    [CcLabel.CouldNotCopy]: "Couldn't copy to the clipboard.",
    [CcLabel.CouldNotReadClipboard]:
        "Couldn't read the clipboard. Paste the text here instead:",
    [CcLabel.ErrorTitle]: "That didn't work",
    [CcLabel.RenameTitle]: "Rename Comparison",
    [CcLabel.RenameDescription]:
        "The comparisons that use this one are updated to the new name.",
    [CcLabel.NameTakenTitle]: "Choose Another Name",
    [CcLabel.NameTakenDescription]: "{0} Type another name:",
    [CcLabel.RemoveTitle]: "Remove Comparison",
    [CcLabel.RemoveDescription]: 'Remove "{0}"?',
    [CcLabel.RemoveUsedDescription]:
        'Remove "{0}"? {1} other comparisons use it, and they stop working without it.',
    [CcLabel.RemoveUsedOneDescription]:
        'Remove "{0}"? 1 other comparison uses it, and it stops working without it.',
    [CcLabel.PasteTitle]: "Paste a Comparison",
    [CcLabel.PasteDescription]:
        "Paste the text of a comparison that someone shared:",
    [CcLabel.CopySuffix]: "{0} (Copy)",

    [CcLabel.TemplatesTitle]: "New Comparison",
    [CcLabel.TemplatesDescription]:
        "Pick a starting point. Each one is a finished comparison you can use as it is or change.",
    [CcLabel.TemplateGoalPace]: "Goal pace",
    [CcLabel.TemplateGoalPaceDescription]:
        "Your typical runs, stretched to finish exactly in a goal time.",
    [CcLabel.TemplateRealisticPace]: "Realistic pace",
    [CcLabel.TemplateRealisticPaceDescription]:
        "Percentile 70 of the last 30 days: times you beat about 70 % of the time.",
    [CcLabel.TemplateRecentForm]: "Recent form",
    [CcLabel.TemplateRecentFormDescription]:
        "The median of your last 10 completed runs, ignoring the best and worst fluke.",
    [CcLabel.TemplateSafePace]: "Safe pace",
    [CcLabel.TemplateSafePaceDescription]:
        "The slower of your golds + 2 s and your median, so it's never unrealistically fast.",
    [CcLabel.TemplateBlank]: "Blank",
    [CcLabel.TemplateBlankDescription]: "Start from scratch.",
    [CcLabel.NewComparisonName]: "My Comparison",

    [CcLabel.EditorTitle]: "Custom Comparison",
    [CcLabel.Name]: "Name",
    [CcLabel.Save]: "Save",
    [CcLabel.Undo]: "Undo",
    [CcLabel.Redo]: "Redo",
    [CcLabel.Blocks]: "Blocks",
    [CcLabel.ChooseBlock]: "Choose a block…",
    [CcLabel.ReplaceBlock]: "Replace With…",
    [CcLabel.WrapBlock]: "Put Inside…",
    [CcLabel.UnwrapBlock]: "Remove, Keep What's Inside",
    [CcLabel.RemoveBlock]: "Remove",
    [CcLabel.PreviewBlock]: "Preview This Block",
    [CcLabel.BlockMenu]: "Block actions",
    [CcLabel.FillEmptySlots]:
        "Fill the empty slots to see the preview. Every slot needs a block.",
    [CcLabel.DiscardChangesTitle]: "Discard Changes?",
    [CcLabel.DiscardChangesDescription]:
        "This comparison has changes that weren't saved.",
    [CcLabel.Discard]: "Discard",
    [CcLabel.KeepEditing]: "Keep Editing",
    [CcLabel.InvalidTime]: "Type a time like 20:00 or 1:05:30.",
    [CcLabel.NotFound]: "{0} (not found)",
    [CcLabel.NotInSplits]: "{0}. (not in your splits)",
    [CcLabel.SegmentOption]: "{0}. {1}",
    [CcLabel.AddRange]: "Add a Range",
    [CcLabel.RemoveRange]: "Remove This Range",
    [CcLabel.RangeBackwards]:
        "Segments {0} to {1} is backwards. Swap the numbers.",

    [CcLabel.CategorySources]: "Sources",
    [CcLabel.CategoryFilters]: "Filters",
    [CcLabel.CategoryAggregates]: "Aggregates",
    [CcLabel.CategoryMath]: "Math",
    [CcLabel.CategoryControl]: "Control",
    [CcLabel.KindSamples]: "A list of times for each segment",
    [CcLabel.KindTimes]: "One time for each segment",

    [CcLabel.BlockResult]: "this comparison is",
    [CcLabel.BlockResultTip]:
        "The finished comparison. Put the blocks that build it in here.",
    [CcLabel.BlockSegmentHistory]: "all my times for each segment",
    [CcLabel.BlockSegmentHistoryTip]:
        "Every time you've recorded for each segment. Skipped segments, and the combined segment right after a skip, are left out.",
    [CcLabel.BlockComparison]: "comparison {name}",
    [CcLabel.BlockComparisonTip]:
        "An existing comparison, segment by segment. Built-ins work even if they're switched off.",
    [CcLabel.BlockAttempt]: "attempt # {number}",
    [CcLabel.BlockAttemptTip]:
        "The segments of one past attempt, by its number in the attempt history. Empty where that run skipped a split or reset.",
    [CcLabel.BlockBestRecentRun]: "my best run from the last {days} days",
    [CcLabel.BlockBestRecentRunTip]:
        'The segments of your fastest finished run from the last N days: a "recent PB" that moves as you play. Empty if no run finished in that time.',
    [CcLabel.BlockLastN]: "last {count} times of",
    [CcLabel.BlockLastNTip]:
        "Keeps the most recent times for each segment. Counts times that segment was completed, not attempts.",
    [CcLabel.BlockCompletedRunsOnly]: "from completed runs only",
    [CcLabel.BlockCompletedRunsOnlyTip]:
        "Keeps only times from attempts that finished the whole run.",
    [CcLabel.BlockRecentDays]: "from the last {days} days",
    [CcLabel.BlockRecentDaysTip]:
        "Keeps only times from attempts that ended in the last N days, so old times stop counting. Attempts without a date are left out.",
    [CcLabel.BlockFinishedUnder]:
        "from runs that finished under {totalSeconds}",
    [CcLabel.BlockFinishedUnderTip]:
        "Keeps only times from runs that finished faster than this, so only your good runs count.",
    [CcLabel.BlockReachedSegment]: "from runs that reached {segment}",
    [CcLabel.BlockReachedSegmentTip]:
        "Keeps only times from attempts that got at least as far as this segment. Like \"completed runs only\", but for games where most runs reset early. If this segment isn't in your splits, you'll see a warning and no times are kept.",
    [CcLabel.BlockTrimOutliers]: "drop the fastest and slowest {percent} % of",
    [CcLabel.BlockTrimOutliersTip]:
        "Removes flukes before averaging: drops that share of each segment's fastest and slowest times. With few times nothing is dropped.",
    [CcLabel.BlockAtLeast]: "only if there are at least {count} times in",
    [CcLabel.BlockAtLeastTip]:
        'Segments with fewer times become empty, so you can fill them with "if empty, use" instead of trusting too little data.',
    [CcLabel.BlockAggregate]: "{kind} of",
    [CcLabel.BlockAggregateTip]:
        "Turns each segment's list of times into one time. A segment with no times stays empty.",
    [CcLabel.AggregateMedian]: "median",
    [CcLabel.AggregateAverage]: "average",
    [CcLabel.AggregateMin]: "best (min)",
    [CcLabel.AggregateMax]: "worst (max)",
    [CcLabel.BlockPercentile]: "percentile {percent} of",
    [CcLabel.BlockPercentileTip]:
        "0 is your fastest time, 100 your slowest, 50 the median. 70 means: you beat this about 70% of the time.",
    [CcLabel.BlockWeightedAverage]: "recent-weighted average of",
    [CcLabel.BlockWeightedAverageFooter]:
        "weight halves every {halfLife} older times",
    [CcLabel.BlockWeightedAverageTip]:
        "An average where recent times count more. The newest time counts fully, one N times older counts half, 2N times older a quarter, and so on.",
    [CcLabel.BlockAddTime]: "add {seconds} s per segment to",
    [CcLabel.BlockAddTimeTip]:
        "Adds (or, if negative, removes) time from every segment. Never goes below zero.",
    [CcLabel.BlockScale]: "{percent} % of",
    [CcLabel.BlockScaleTip]:
        "Scales every segment. 103 % is 3 % slower, 97 % is 3 % faster.",
    [CcLabel.BlockRound]: "round to {step}",
    [CcLabel.BlockRoundTip]:
        "Rounds every segment to the nearest 0.1 s (or 1 s, 0.01 s), so the split times are tidy too.",
    [CcLabel.RoundStep]: "{0} s",
    [CcLabel.BlockClamp]: "keep",
    [CcLabel.BlockClampTip]:
        'Holds each segment between two limits, for example never faster than your golds and never slower than your PB. If the limits cross, "never faster than" wins.',
    [CcLabel.SlotNeverFaster]: "never faster than",
    [CcLabel.SlotNeverSlower]: "never slower than",
    [CcLabel.BlockStretchToTotal]: "stretch to finish in {totalSeconds}",
    [CcLabel.BlockStretchToTotalTip]:
        'Scales every segment by the same amount so the whole run adds up to the goal time. If any segment is empty, the result is empty: fill gaps first with "if empty, use".',
    [CcLabel.BlockBlend]: "{percent} % of the way from",
    [CcLabel.BlockBlendTip]:
        "Mixes two rules per segment. 0 % is all the first, 100 % all the second, 75 % is three quarters of the way.",
    [CcLabel.SlotTo]: "to",
    [CcLabel.BlockPick]: "the {kind} of",
    [CcLabel.BlockPickTip]:
        "For each segment, whichever of the two rules is slower (or faster). If one has no time for a segment, the other is used.",
    [CcLabel.PickSlower]: "slower",
    [CcLabel.PickFaster]: "faster",
    [CcLabel.SlotAnd]: "and",
    [CcLabel.BlockFallback]: "use",
    [CcLabel.BlockFallbackTip]:
        "Fills only the segments the first rule leaves empty, for example because there aren't enough runs yet.",
    [CcLabel.SlotIfEmpty]: "if empty, use",
    [CcLabel.BlockSegmentRange]: "for segments … use … otherwise …",
    [CcLabel.BlockSegmentRangeTip]:
        "Uses one rule for a range of segments and another for the rest. Add more ranges for more rules: the first range that matches wins. If a range points past the end of your splits, you'll see a warning.",
    [CcLabel.BlockSegmentRangeHeader]:
        "different rules for different segments (the first range that matches wins)",
    [CcLabel.RangeCase]: "for segments {from} to {to} use",
    [CcLabel.SlotOtherwise]: "otherwise",

    [CcLabel.Preview]: "Preview",
    [CcLabel.PreviewingBlock]: "Previewing a block, not the comparison",
    [CcLabel.ShowWholeComparison]: "Show the Whole Comparison",
    [CcLabel.Segment]: "Segment",
    [CcLabel.SegmentTime]: "Segment Time",
    [CcLabel.SplitTime]: "Split Time",
    [CcLabel.DifferenceFrom]: "Difference from",
    [CcLabel.FasterThanGold]:
        "Faster than your best time for this segment (your gold)",
    [CcLabel.FasterThanGoldWarning]:
        "{0} segments are faster than your golds. That's allowed, but this pace may not be realistic.",
    [CcLabel.FasterThanGoldWarningOne]:
        "1 segment is faster than your gold. That's allowed, but this pace may not be realistic.",
    [CcLabel.FinishLine]: "Finishes in {0}, {1} compared to {2}.",
    [CcLabel.FinishVsSumOfBest]: "Your sum of best is {0}.",
    [CcLabel.NoProblems]: "No problems.",
    [CcLabel.NoTimesLeft]:
        'No segment has a time. Click a row to see why, or add "use … if empty, use" with a backup like your PB.',
    [CcLabel.OriginTitle]: "Where this time comes from",
    [CcLabel.OriginEmpty]:
        "This segment has no time, so every split after it is empty too.",
    [CcLabel.OriginFillingGap]: "filling a gap",
    [CcLabel.OriginPicked]: "the {0} of the two",
    [CcLabel.OriginLowLimit]: 'held at the "never faster than" limit',
    [CcLabel.OriginHighLimit]: 'held at the "never slower than" limit',
    [CcLabel.ClickRowHint]: "Click a row to see where its time comes from.",

    [CcLabel.DescYourGolds]: "your golds",
    [CcLabel.DescYourPb]: "your PB",
    [CcLabel.DescComparison]: '"{0}"',
    [CcLabel.DescAttempt]: "attempt #{0}",
    [CcLabel.DescBestRecentRun]: "your best run from the last {0} days",
    [CcLabel.DescWeightedAverage]: "the recent-weighted average of {0}",
    [CcLabel.DescClamp]: "{0}, kept between {1} and {2}",
    [CcLabel.DescRound]: "{0}, rounded to {1}",
    [CcLabel.DescMedian]: "the median of {0}",
    [CcLabel.DescAverage]: "the average of {0}",
    [CcLabel.DescMin]: "the best of {0}",
    [CcLabel.DescMax]: "the worst of {0}",
    [CcLabel.DescPercentile]: "percentile {0} of {1}",
    [CcLabel.DescAddTime]: "{0} + {1}",
    [CcLabel.DescRemoveTime]: "{0} − {1}",
    [CcLabel.DescScale]: "{0} % of {1}",
    [CcLabel.DescStretch]: "{0}, stretched to finish in {1}",
    [CcLabel.DescBlend]: "{0} % of the way from {1} to {2}",
    [CcLabel.DescSlower]: "the slower of {0} and {1}",
    [CcLabel.DescFaster]: "the faster of {0} and {1}",
    [CcLabel.DescFallback]: "{0} (or {1} where that's empty)",
    [CcLabel.DescRangeArm]: "{0} for {1}",
    [CcLabel.DescRangeOtherwise]: "{0}, otherwise {1}",
    [CcLabel.DescSomething]: "something",
    [CcLabel.DescAllTimes]: "all your times",
    [CcLabel.DescLastN]: "your last {0} times",
    [CcLabel.QualCompleted]: "from completed runs",
    [CcLabel.QualRecentDays]: "from the last {0} days",
    [CcLabel.QualUnder]: "from runs under {0}",
    [CcLabel.QualTrim]: "without the fastest and slowest {0} %",
    [CcLabel.QualAtLeast]: "when there are at least {0}",
    [CcLabel.QualReached]: "from runs that reached {0}",
    [CcLabel.SumGapsFilled]: "{0} Gaps filled from {1}.",
    [CcLabel.SumRangeArm]: "{0}: {1}",
    [CcLabel.SumOtherSegments]: "Other segments: {0}",
    [CcLabel.SegmentNumber]: "segment {0}",
    [CcLabel.SegmentSpan]: "{0} to {1}",
    [CcLabel.Seconds]: "{0} s",
    [CcLabel.ListAnd]: "{0} and {1}",
    [CcLabel.WarnSegment]: "Uses segment {0}, but your splits have {1}",
    [CcLabel.WarnSegments]: "Uses segments {0}, but your splits have {1}",
};
