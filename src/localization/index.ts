import { Lang, Language } from "../livesplit-core";
import { resolveChineseSimplified } from "./chinese-simplified";
import { resolveChineseTraditional } from "./chinese-traditional";
import { resolveDutch } from "./dutch";
import { resolveEnglish } from "./english";
import { resolveFrench } from "./french";
import { resolveGerman } from "./german";
import { resolveItalian } from "./italian";
import { resolveJapanese } from "./japanese";
import { resolveKorean } from "./korean";
import { resolvePolish } from "./polish";
import { resolvePortuguese } from "./portuguese";
import { resolveBrazilianPortuguese } from "./portuguese-brazil";
import { resolveRussian } from "./russian";
import { resolveSpanish } from "./spanish";

export enum Label {
    Ok,
    Cancel,
    Settings,
    Language,
    LanguageDescription,
    LanguageAuto,
    Theme,
    ThemeDescription,
    ThemeLightMode,
    ThemeDarkMode,
    HotkeysHeading,
    GeneralHeading,
    NetworkHeading,
    FrameRate,
    FrameRateDescription,
    FrameRateBatteryAware,
    FrameRateMatchScreen,
    SaveOnReset,
    SaveOnResetDescription,
    ShowControlButtons,
    ShowControlButtonsDescription,
    ShowManualGameTimeInput,
    ShowManualGameTimeInputDescription,
    ManualGameTimeMode,
    ManualGameTimeModeDescription,
    ManualGameTimeModeSegmentTimes,
    ManualGameTimeModeSplitTimes,
    AlwaysOnTop,
    AlwaysOnTopDescription,
    SpeedrunComIntegration,
    SpeedrunComIntegrationDescription,
    ServerConnection,
    ServerConnectionDescription,
    ServerConnectionExperimental,
    TheRunGgIntegration,
    TheRunGgIntegrationDescription,
    TheRunGgLiveTracking,
    TheRunGgLiveTrackingDescription,
    TheRunGgStatsUploading,
    TheRunGgStatsUploadingDescription,
    HotkeyAlreadyInUse,
    Start,
    Resume,
    Pause,
    UndoSplit,
    Reset,
    SkipSplit,
    ManualGameTimePlaceholder,
    LiveSplitLogoAlt,
    LiveSplitOne,
    Splits,
    Layout,
    CompareAgainst,
    RealTime,
    GameTime,
    PopOut,
    About,
    Back,
    AboutVersionPrefix,
    AboutDescription,
    AboutViewSource,
    AboutRecentChanges,
    AboutContributors,
    Loading,
    Add,
    Import,
    OpenSplits,
    EditSplits,
    ExportSplits,
    CopySplits,
    RemoveSplits,
    Untitled,
    NoCategory,
    DiscardChangesTitle,
    DiscardChangesDescription,
    DeleteSplitsTitle,
    DeleteSplitsDescription,
    SaveBestTimesTitle,
    SaveBestTimesDescription,
    Yes,
    No,
    DontReset,
    FailedToExportSplits,
    CantImportEmptySplits,
    FailedToReadFile,
    FailedToImportSplits,
    CouldNotParseSplits,
    LoadedSplitsInvalid,
    NewSegmentName,
    EditWhileRunningError,
    Edit,
    Save,
    Export,
    FailedToParseTimeSpan,
    Default,
    Game,
    Category,
    StartTimerAt,
    Attempts,
    SplitsEditor,
    Variables,
    Rules,
    Leaderboard,
    InsertAbove,
    InsertBelow,
    RemoveSegment,
    MoveUp,
    MoveDown,
    CreateGroup,
    RemoveGroup,
    AddVariable,
    OpenPbPage,
    AssociateRun,
    Icon,
    SegmentName,
    SplitTime,
    SegmentTime,
    BestSegment,
    SpeedrunComVariableTooltip,
    Region,
    RegionDescription,
    Platform,
    PlatformDescription,
    UsesEmulator,
    UsesEmulatorDescription,
    CustomVariableTooltip,
    NoVariables,
    NoVariablesWithSpeedrunCom,
    TimedWithoutLoads,
    TimedWithGameTime,
    RequireVideoProof,
    RunsOfThisGamePrefix,
    RunsOfThisGameSuffix,
    And,
    SetIcon,
    SetIconDescription,
    DownloadBoxArt,
    DownloadBoxArtDescription,
    DownloadIcon,
    DownloadIconDescription,
    RemoveIcon,
    RemoveIconDescription,
    CleaningMenu,
    ClearOnlyHistory,
    ClearOnlyHistoryDescription,
    ClearAllTimes,
    ClearAllTimesDescription,
    CleanSumOfBest,
    CleanSumOfBestDescription,
    ComparisonsMenu,
    AddComparison,
    AddComparisonDescription,
    ImportComparison,
    ImportComparisonDescription,
    GenerateGoalComparison,
    GenerateGoalComparisonDescription,
    CopyComparison,
    CopyComparisonDescription,
    SetSegmentIcon,
    SetSegmentIconDescription,
    RemoveSegmentIcon,
    RemoveSegmentIconDescription,
    Rename,
    RenameDescription,
    CopyAction,
    CopyDescription,
    ACopy,
    Remove,
    RemoveDescription,
    AnyPercent,
    LowPercent,
    HundredPercent,
    AddComparisonPrompt,
    ComparisonAddError,
    ImportComparisonPrompt,
    GenerateGoalComparisonPrompt,
    Generate,
    GenerateGoalComparisonError,
    CopyComparisonPrompt,
    CopyComparisonError,
    NothingToCleanUp,
    CleanPrompt,
    AssociateRunPrompt,
    Associate,
    InvalidSpeedrunUrl,
    AssociateRunError,
    AddVariablePrompt,
    RenameComparison,
    RenameComparisonPrompt,
    ComparisonRenameError,
    GameNotFound,
    NoBoxArt,
    DownloadBoxArtError,
    NoGameIcon,
    DownloadIconError,
    Rank,
    Player,
    Time,
    Date,
    Emulator,
    EmulatorTag,
    ObsoleteRuns,
    Shown,
    Hidden,
    OpenLeaderboard,
    Filters,
    LayoutEditor,
    Component,
    AddComponent,
    RemoveComponent,
    DuplicateComponent,
    MoveComponentUp,
    MoveComponentDown,
    ComponentTitle,
    ComponentTitleDescription,
    ComponentGraph,
    ComponentGraphDescription,
    ComponentSplitsDescription,
    ComponentDetailedTimer,
    ComponentDetailedTimerDescription,
    ComponentTimer,
    ComponentTimerDescription,
    ComponentCurrentComparison,
    ComponentCurrentComparisonDescription,
    ComponentCurrentPace,
    ComponentCurrentPaceDescription,
    ComponentDelta,
    ComponentDeltaDescription,
    ComponentPbChance,
    ComponentPbChanceDescription,
    ComponentPossibleTimeSave,
    ComponentPossibleTimeSaveDescription,
    ComponentPreviousSegment,
    ComponentPreviousSegmentDescription,
    ComponentSegmentTime,
    ComponentSegmentTimeDescription,
    ComponentSumOfBest,
    ComponentSumOfBestDescription,
    ComponentText,
    ComponentTextDescription,
    ComponentTotalPlaytime,
    ComponentTotalPlaytimeDescription,
    ComponentVariableDescription,
    ComponentBlankSpace,
    ComponentBlankSpaceDescription,
    ComponentCarousel,
    ComponentCarouselDescription,
    ComponentSeparator,
    ComponentSeparatorDescription,
    Row,
    RowDescription,
    Column,
    ColumnDescription,
    AccuracySeconds,
    AccuracyTenths,
    AccuracyHundredths,
    AccuracyMilliseconds,
    FontStyle,
    FontWeight,
    FontStretch,
    FontStyleNormal,
    FontStyleItalic,
    AlignmentAutomatic,
    AlignmentLeft,
    AlignmentCenter,
    GradientTransparent,
    GradientPlain,
    GradientVertical,
    GradientHorizontal,
    GradientAlternating,
    GradientPlainDelta,
    GradientVerticalDelta,
    GradientHorizontalDelta,
    LayoutBackgroundImage,
    LayoutBackgroundBrightness,
    LayoutBackgroundOpacity,
    LayoutBackgroundBlur,
    LayoutDirectionVertical,
    LayoutDirectionHorizontal,
    ColumnKindTime,
    ColumnKindVariable,
    ColumnStartWithEmpty,
    ColumnStartWithComparisonTime,
    ColumnStartWithComparisonSegmentTime,
    ColumnStartWithPossibleTimeSave,
    SubsplitDisplayModeFlat,
    IconDisplayModeBothRows,
    IconDisplayModeFirstRow,
    SubsplitDisplayModeCurrentGroupExpanded,
    SubsplitDisplayModeAllGroupsExpanded,
    ColumnUpdateWithDontUpdate,
    ColumnUpdateWithSplitTime,
    ColumnUpdateWithDelta,
    ColumnUpdateWithDeltaWithFallback,
    ColumnUpdateWithSegmentTime,
    ColumnUpdateWithSegmentDelta,
    ColumnUpdateWithSegmentDeltaWithFallback,
    ColumnUpdateTriggerOnStartingSegment,
    ColumnUpdateTriggerContextual,
    ColumnUpdateTriggerOnEndingSegment,
    ComparisonCurrentComparison,
    CustomVariableNoneAvailable,
    CustomVariableNoneAvailableTooltip,
    HotkeyButtonTooltip,
    ServerConnect,
    ServerDisconnect,
    ServerConnecting,
    ServerDisconnecting,
    ConnectToServerTitle,
    ConnectToServerDescription,
    Connect,
    UpdateAvailable,
    UnsavedChangesBeforeUnload,
    OpenSidebarAriaLabel,
    FailedToSaveLayout,
    FailedToSaveHotkeys,
    FailedToSaveGeneralSettings,
    FailedToSaveSplits,
    LayoutCouldNotBeLoaded,
    EmptySplitsNotSupported,
    BugEncountered,
    PleaseReportIssueStart,
    ReportHere,
    PleaseReportIssueEnd,
    BugReportInstructions,
    LoadFailedPrivateBrowsing,
    LoadFailedOutdatedBrowser,
    // The custom comparisons editor. Many of its texts are templates: `{0}`,
    // `{1}`, ... are replaced by `resolveFormat`. The block titles use named
    // placeholders like `{count}` instead, which the block editor replaces
    // with the block's input fields, so a translation can put the fields
    // wherever its grammar needs them. The plain-language descriptions are
    // composed from noun phrases, so translate those as noun phrases too.
    CustomComparisonsSidebarEditingHint,
    CustomComparisonsComparisonMenu,
    CustomComparisonsNameRequired,
    CustomComparisonsSearchBlocks,
    CustomComparisonsNoBlocksFound,
    CustomComparisonsAboutBlock,
    CustomComparisonsBlocks,
    CustomComparisonsRailHint,
    CustomComparisonsDragBlock,
    CustomComparisonsOpenEditorHint,
    CustomComparisons,
    CustomComparisonsExportAll,
    CustomComparisonsExportAllFileName,
    CustomComparisonsPluginUnavailable,
    CustomComparisonsListHeading,
    CustomComparisonsNoComparisons,
    CustomComparisonsNew,
    CustomComparisonsEdit,
    CustomComparisonsRename,
    CustomComparisonsDuplicate,
    CustomComparisonsImport,
    CustomComparisonsExport,
    CustomComparisonsCopyAsText,
    CustomComparisonsPaste,
    CustomComparisonsUsedBy,
    CustomComparisonsUsedByOne,
    CustomComparisonsUnreadable,
    CustomComparisonsSaveReminder,
    CustomComparisonsCopiedToClipboard,
    CustomComparisonsCouldNotCopy,
    CustomComparisonsCouldNotReadClipboard,
    CustomComparisonsErrorTitle,
    CustomComparisonsRenameTitle,
    CustomComparisonsRenameDescription,
    CustomComparisonsNameTakenTitle,
    CustomComparisonsNameTakenDescription,
    CustomComparisonsRemoveTitle,
    CustomComparisonsRemoveDescription,
    CustomComparisonsRemoveUsedDescription,
    CustomComparisonsRemoveUsedOneDescription,
    CustomComparisonsPasteTitle,
    CustomComparisonsPasteDescription,
    CustomComparisonsCopySuffix,
    CustomComparisonsTemplatesTitle,
    CustomComparisonsTemplatesDescription,
    CustomComparisonsTemplateGoalPace,
    CustomComparisonsTemplateGoalPaceDescription,
    CustomComparisonsTemplateRealisticPace,
    CustomComparisonsTemplateRealisticPaceDescription,
    CustomComparisonsTemplateRecentForm,
    CustomComparisonsTemplateRecentFormDescription,
    CustomComparisonsTemplateSafePace,
    CustomComparisonsTemplateSafePaceDescription,
    CustomComparisonsTemplateBlank,
    CustomComparisonsTemplateBlankDescription,
    CustomComparisonsNewComparisonName,
    CustomComparisonsEditorTitle,
    CustomComparisonsName,
    CustomComparisonsUndo,
    CustomComparisonsRedo,
    CustomComparisonsChooseBlock,
    CustomComparisonsReplaceBlock,
    CustomComparisonsWrapBlock,
    CustomComparisonsUnwrapBlock,
    CustomComparisonsPreviewBlock,
    CustomComparisonsBlockMenu,
    CustomComparisonsFillEmptySlots,
    CustomComparisonsDiscardChangesDescription,
    CustomComparisonsDiscard,
    CustomComparisonsKeepEditing,
    CustomComparisonsInvalidTime,
    CustomComparisonsNotFound,
    CustomComparisonsNotInSplits,
    CustomComparisonsSegmentOption,
    CustomComparisonsAddRange,
    CustomComparisonsRemoveRange,
    CustomComparisonsRangeBackwards,
    CustomComparisonsCategorySources,
    CustomComparisonsCategoryFilters,
    CustomComparisonsCategoryAggregates,
    CustomComparisonsCategoryMath,
    CustomComparisonsCategoryControl,
    CustomComparisonsKindSamples,
    CustomComparisonsKindTimes,
    CustomComparisonsBlockResult,
    CustomComparisonsBlockResultTip,
    CustomComparisonsBlockSegmentHistory,
    CustomComparisonsBlockSegmentHistoryTip,
    CustomComparisonsBlockComparison,
    CustomComparisonsBlockComparisonTip,
    CustomComparisonsBlockAttempt,
    CustomComparisonsBlockAttemptTip,
    CustomComparisonsBlockBestRecentRun,
    CustomComparisonsBlockBestRecentRunTip,
    CustomComparisonsBlockLastN,
    CustomComparisonsBlockLastNTip,
    CustomComparisonsBlockCompletedRunsOnly,
    CustomComparisonsBlockCompletedRunsOnlyTip,
    CustomComparisonsBlockRecentDays,
    CustomComparisonsBlockRecentDaysTip,
    CustomComparisonsBlockFinishedUnder,
    CustomComparisonsBlockFinishedUnderTip,
    CustomComparisonsBlockReachedSegment,
    CustomComparisonsBlockReachedSegmentTip,
    CustomComparisonsBlockTrimOutliers,
    CustomComparisonsBlockTrimOutliersTip,
    CustomComparisonsBlockAtLeast,
    CustomComparisonsBlockAtLeastTip,
    CustomComparisonsBlockAggregate,
    CustomComparisonsBlockAggregateTip,
    CustomComparisonsAggregateMedian,
    CustomComparisonsAggregateAverage,
    CustomComparisonsAggregateMin,
    CustomComparisonsAggregateMax,
    CustomComparisonsBlockPercentile,
    CustomComparisonsBlockPercentileTip,
    CustomComparisonsBlockWeightedAverage,
    CustomComparisonsBlockWeightedAverageFooter,
    CustomComparisonsBlockWeightedAverageTip,
    CustomComparisonsBlockAddTime,
    CustomComparisonsBlockAddTimeTip,
    CustomComparisonsBlockScale,
    CustomComparisonsBlockScaleTip,
    CustomComparisonsBlockRound,
    CustomComparisonsBlockRoundTip,
    CustomComparisonsRoundStep,
    CustomComparisonsBlockClamp,
    CustomComparisonsBlockClampTip,
    CustomComparisonsSlotNeverFaster,
    CustomComparisonsSlotNeverSlower,
    CustomComparisonsBlockStretchToTotal,
    CustomComparisonsBlockStretchToTotalTip,
    CustomComparisonsBlockBlend,
    CustomComparisonsBlockBlendTip,
    CustomComparisonsSlotTo,
    CustomComparisonsBlockPick,
    CustomComparisonsBlockPickTip,
    CustomComparisonsPickSlower,
    CustomComparisonsPickFaster,
    CustomComparisonsSlotAnd,
    CustomComparisonsBlockFallback,
    CustomComparisonsBlockFallbackTip,
    CustomComparisonsSlotIfEmpty,
    CustomComparisonsBlockSegmentRange,
    CustomComparisonsBlockSegmentRangeTip,
    CustomComparisonsBlockSegmentRangeHeader,
    CustomComparisonsRangeCase,
    CustomComparisonsSlotOtherwise,
    CustomComparisonsPreview,
    CustomComparisonsPreviewingBlock,
    CustomComparisonsShowWholeComparison,
    CustomComparisonsSegment,
    CustomComparisonsDifferenceFrom,
    CustomComparisonsFasterThanGold,
    CustomComparisonsFasterThanGoldWarning,
    CustomComparisonsFasterThanGoldWarningOne,
    CustomComparisonsFinishLine,
    CustomComparisonsFinishVsSumOfBest,
    CustomComparisonsNoProblems,
    CustomComparisonsNoTimesLeft,
    CustomComparisonsOriginTitle,
    CustomComparisonsOriginEmpty,
    CustomComparisonsOriginFillingGap,
    CustomComparisonsOriginPicked,
    CustomComparisonsOriginLowLimit,
    CustomComparisonsOriginHighLimit,
    CustomComparisonsClickRowHint,
    CustomComparisonsDescYourGolds,
    CustomComparisonsDescYourPb,
    CustomComparisonsDescComparison,
    CustomComparisonsDescAttempt,
    CustomComparisonsDescBestRecentRun,
    CustomComparisonsDescWeightedAverage,
    CustomComparisonsDescClamp,
    CustomComparisonsDescRound,
    CustomComparisonsDescMedian,
    CustomComparisonsDescAverage,
    CustomComparisonsDescMin,
    CustomComparisonsDescMax,
    CustomComparisonsDescPercentile,
    CustomComparisonsDescAddTime,
    CustomComparisonsDescRemoveTime,
    CustomComparisonsDescScale,
    CustomComparisonsDescStretch,
    CustomComparisonsDescBlend,
    CustomComparisonsDescSlower,
    CustomComparisonsDescFaster,
    CustomComparisonsDescFallback,
    CustomComparisonsDescRangeArm,
    CustomComparisonsDescRangeOtherwise,
    CustomComparisonsDescSomething,
    CustomComparisonsDescAllTimes,
    CustomComparisonsDescLastN,
    CustomComparisonsQualCompleted,
    CustomComparisonsQualRecentDays,
    CustomComparisonsQualUnder,
    CustomComparisonsQualTrim,
    CustomComparisonsQualAtLeast,
    CustomComparisonsQualReached,
    CustomComparisonsSumGapsFilled,
    CustomComparisonsSumRangeArm,
    CustomComparisonsSumOtherSegments,
    CustomComparisonsSegmentNumber,
    CustomComparisonsSegmentSpan,
    CustomComparisonsSeconds,
    CustomComparisonsListAnd,
    CustomComparisonsWarnSegment,
    CustomComparisonsWarnSegments,
    CustomComparisonsSentence,
}

export function resolve(text: Label, lang: Language | undefined): string {
    switch (orAutoLang(lang)) {
        case Language.ChineseSimplified:
            return resolveChineseSimplified(text);
        case Language.ChineseTraditional:
            return resolveChineseTraditional(text);
        case Language.Dutch:
            return resolveDutch(text);
        case Language.French:
            return resolveFrench(text);
        case Language.German:
            return resolveGerman(text);
        case Language.Italian:
            return resolveItalian(text);
        case Language.Japanese:
            return resolveJapanese(text);
        case Language.Korean:
            return resolveKorean(text);
        case Language.Polish:
            return resolvePolish(text);
        case Language.Portuguese:
            return resolvePortuguese(text);
        case Language.BrazilianPortuguese:
            return resolveBrazilianPortuguese(text);
        case Language.Russian:
            return resolveRussian(text);
        case Language.Spanish:
            return resolveSpanish(text);
        case Language.English:
            return resolveEnglish(text);
    }
}

/**
 * Resolves a label and replaces its `{0}`, `{1}`, ... placeholders with the
 * arguments, so a translation can put them wherever its grammar needs them.
 */
export function resolveFormat(
    text: Label,
    lang: Language | undefined,
    ...args: (string | number)[]
): string {
    return resolve(text, lang).replace(/\{(\d+)\}/g, (match, index) => {
        const arg = args[Number(index)];
        return arg === undefined ? match : String(arg);
    });
}

export function getLocale(lang: Language | undefined): string {
    return getLocaleOpt(lang) ?? navigator.language;
}

export function getLocaleOpt(lang: Language | undefined): string | undefined {
    if (lang == null) {
        return undefined;
    }
    switch (lang) {
        case Language.ChineseSimplified:
            return "zh-Hans";
        case Language.ChineseTraditional:
            return "zh-Hant";
        case Language.Dutch:
            return "nl";
        case Language.French:
            return "fr";
        case Language.German:
            return "de";
        case Language.Italian:
            return "it";
        case Language.Japanese:
            return "ja";
        case Language.Korean:
            return "ko";
        case Language.Polish:
            return "pl";
        case Language.Portuguese:
            return "pt";
        case Language.BrazilianPortuguese:
            return "pt-BR";
        case Language.Russian:
            return "ru";
        case Language.Spanish:
            return "es";
        case Language.English:
            return "en";
    }
}

export function fromLocaleOpt(value: unknown): Language | undefined {
    if (typeof value === "string") {
        return Lang.parseLocale(value);
    } else {
        return undefined;
    }
}

export function formatDate(date: string, lang: Language | undefined): string {
    // FIXME: Use Temporal.PlainDate when it's available in Safari.
    const locale = getLocale(lang);
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString(locale, {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

let autoLang: Language | undefined = undefined;
export function orAutoLang(lang: Language | undefined): Language {
    if (lang != null) {
        return lang;
    }
    if (autoLang != null) {
        return autoLang;
    }
    autoLang = Lang.parseLocale(navigator.language);
    return autoLang;
}

export function setHtmlLang(lang: Language | undefined): void {
    document.documentElement.lang = getLocale(lang);
}
