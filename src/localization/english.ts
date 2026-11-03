import { Label } from ".";

export function resolveEnglish(text: Label): string {
    switch (text) {
        case Label.Ok:
            return "OK";
        case Label.Cancel:
            return "Cancel";
        case Label.Settings:
            return "Settings";
        case Label.Language:
            return "Language";
        case Label.LanguageDescription:
            return "Sets the language used in the application.";
        case Label.LanguageAuto:
            return "Automatic";
        case Label.Theme:
            return "Theme";
        case Label.ThemeDescription:
            return "Determines whether to follow the system theme or force a light or dark mode.";
        case Label.ThemeLightMode:
            return "Light Mode";
        case Label.ThemeDarkMode:
            return "Dark Mode";
        case Label.HotkeysHeading:
            return "Hotkeys";
        case Label.GeneralHeading:
            return "General";
        case Label.NetworkHeading:
            return "Network";
        case Label.FrameRate:
            return "Frame Rate";
        case Label.FrameRateDescription:
            return "Determines the frame rate at which to display the timer. “Battery Aware” tries determining the type of device and charging status to select a good frame rate. “Match Screen” makes the timer match the screen's refresh rate.";
        case Label.FrameRateBatteryAware:
            return "Battery Aware";
        case Label.FrameRateMatchScreen:
            return "Match Screen";
        case Label.SaveOnReset:
            return "Save On Reset";
        case Label.SaveOnResetDescription:
            return "Determines whether to automatically save the splits when resetting the timer.";
        case Label.ShowControlButtons:
            return "Show Control Buttons";
        case Label.ShowControlButtonsDescription:
            return "Determines whether to show buttons beneath the timer that allow controlling it. When disabled, you have to use the hotkeys instead.";
        case Label.ShowManualGameTimeInput:
            return "Show Manual Game Time Input";
        case Label.ShowManualGameTimeInputDescription:
            return "Shows a text box beneath the timer that allows you to manually input the game time. You start the timer and do splits by pressing the Enter key in the text box. Make sure to compare against “Game Time”.";
        case Label.ManualGameTimeMode:
            return "Manual Game Time Mode";
        case Label.ManualGameTimeModeDescription:
            return "Determines whether to input the manual game time as segment times or split times.";
        case Label.ManualGameTimeModeSegmentTimes:
            return "Segment Times";
        case Label.ManualGameTimeModeSplitTimes:
            return "Split Times";
        case Label.AlwaysOnTop:
            return "Always On Top";
        case Label.AlwaysOnTopDescription:
            return "Keeps the window always on top of other windows.";
        case Label.SpeedrunComIntegration:
            return "Speedrun.com Integration";
        case Label.SpeedrunComIntegrationDescription:
            return "Queries the list of games, categories, and the leaderboards from speedrun.com.";
        case Label.ServerConnection:
            return "Server Connection";
        case Label.ServerConnectionDescription:
            return "Allows you to connect to a WebSocket server that can control the timer by sending various commands. The commands are currently a subset of the commands the original LiveSplit supports.";
        case Label.ServerConnectionExperimental:
            return "This feature is experimental and the protocol will likely change in the future.";
        case Label.TheRunGgIntegration:
            return "TheRun.gg Integration";
        case Label.TheRunGgIntegrationDescription:
            return "Integrates with therun.gg for live run tracking and automatic stats uploading. You need an upload key from therun.gg to use this feature.";
        case Label.TheRunGgLiveTracking:
            return "Live Tracking";
        case Label.TheRunGgLiveTrackingDescription:
            return "When enabled, live split data is sent to therun.gg after every split action, enabling live run tracking on the website.";
        case Label.TheRunGgStatsUploading:
            return "Stats Uploading";
        case Label.TheRunGgStatsUploadingDescription:
            return "When enabled, the splits file is uploaded to therun.gg after every reset or finished run, automatically syncing your runs with the site.";
        case Label.HotkeyAlreadyInUse:
            return "The hotkey is already in use.";
        case Label.Start:
            return "Start";
        case Label.Resume:
            return "Resume";
        case Label.Pause:
            return "Pause";
        case Label.UndoSplit:
            return "Undo Split";
        case Label.Reset:
            return "Reset";
        case Label.SkipSplit:
            return "Skip Split";
        case Label.ManualGameTimePlaceholder:
            return "Manual Game Time";
        case Label.LiveSplitLogoAlt:
            return "LiveSplit Logo";
        case Label.LiveSplitOne:
            return "LiveSplit One";
        case Label.Splits:
            return "Splits";
        case Label.Layout:
            return "Layout";
        case Label.CompareAgainst:
            return "Compare Against";
        case Label.RealTime:
            return "Real Time";
        case Label.GameTime:
            return "Game Time";
        case Label.PopOut:
            return "Pop Out";
        case Label.About:
            return "About";
        case Label.Back:
            return "Back";
        case Label.AboutVersionPrefix:
            return "Version:";
        case Label.AboutDescription:
            return "LiveSplit One is a multiplatform version of LiveSplit, the sleek, highly-customizable timer for speedrunners.";
        case Label.AboutViewSource:
            return "View Source Code on GitHub";
        case Label.AboutRecentChanges:
            return "Recent Changes";
        case Label.AboutContributors:
            return "Contributors";
        case Label.Loading:
            return "Loading...";
        case Label.Add:
            return "Add";
        case Label.Import:
            return "Import";
        case Label.OpenSplits:
            return "Open Splits";
        case Label.EditSplits:
            return "Edit Splits";
        case Label.ExportSplits:
            return "Export Splits";
        case Label.CopySplits:
            return "Copy Splits";
        case Label.RemoveSplits:
            return "Remove Splits";
        case Label.Untitled:
            return "Untitled";
        case Label.NoCategory:
            return "—";
        case Label.DiscardChangesTitle:
            return "Discard Changes?";
        case Label.DiscardChangesDescription:
            return "Your current splits are modified and have unsaved changes. Do you want to continue and discard those changes?";
        case Label.DeleteSplitsTitle:
            return "Delete Splits?";
        case Label.DeleteSplitsDescription:
            return "Are you sure you want to delete the splits? This operation can not be undone.";
        case Label.SaveBestTimesTitle:
            return "Save Best Times?";
        case Label.SaveBestTimesDescription:
            return "You have beaten some of your best times. Do you want to update them?";
        case Label.Yes:
            return "Yes";
        case Label.No:
            return "No";
        case Label.DontReset:
            return "Don't Reset";
        case Label.FailedToExportSplits:
            return "Failed to export the splits.";
        case Label.CantImportEmptySplits:
            return "Can't import empty splits.";
        case Label.FailedToReadFile:
            return "Failed to read the file:";
        case Label.FailedToImportSplits:
            return "Failed to import the splits:";
        case Label.CouldNotParseSplits:
            return "Couldn't parse the splits.";
        case Label.LoadedSplitsInvalid:
            return "The loaded splits are invalid.";
        case Label.NewSegmentName:
            return "Time";
        case Label.EditWhileRunningError:
            return "You can't edit your splits while the timer is running.";
        case Label.Edit:
            return "Edit";
        case Label.Save:
            return "Save";
        case Label.Export:
            return "Export";
        case Label.FailedToParseTimeSpan:
            return "Failed to parse TimeSpan";
        case Label.Default:
            return "Default";
        case Label.Game:
            return "Game";
        case Label.Category:
            return "Category";
        case Label.StartTimerAt:
            return "Start Timer At";
        case Label.Attempts:
            return "Attempts";
        case Label.SplitsEditor:
            return "Splits Editor";
        case Label.Variables:
            return "Variables";
        case Label.Rules:
            return "Rules";
        case Label.Leaderboard:
            return "Leaderboard";
        case Label.InsertAbove:
            return "Insert Above";
        case Label.InsertBelow:
            return "Insert Below";
        case Label.RemoveSegment:
            return "Remove Segment";
        case Label.MoveUp:
            return "Move Up";
        case Label.MoveDown:
            return "Move Down";
        case Label.CreateGroup:
            return "Create Group";
        case Label.RemoveGroup:
            return "Remove Group";
        case Label.AddVariable:
            return "Add Variable";
        case Label.OpenPbPage:
            return "Open PB Page";
        case Label.AssociateRun:
            return "Associate Run";
        case Label.Icon:
            return "Icon";
        case Label.SegmentName:
            return "Segment Name";
        case Label.SplitTime:
            return "Split Time";
        case Label.SegmentTime:
            return "Segment Time";
        case Label.BestSegment:
            return "Best Segment";
        case Label.SpeedrunComVariableTooltip:
            return "A variable on speedrun.com specific to the game.";
        case Label.Region:
            return "Region";
        case Label.RegionDescription:
            return "The region of the game that is being played.";
        case Label.Platform:
            return "Platform";
        case Label.PlatformDescription:
            return "The platform that the game is being played on.";
        case Label.UsesEmulator:
            return "Uses Emulator";
        case Label.UsesEmulatorDescription:
            return "Whether an emulator is being used to play the game.";
        case Label.CustomVariableTooltip:
            return "A custom variable specified by you. These can be displayed with the text component.";
        case Label.NoVariables:
            return "There are currently no custom variables for this game.";
        case Label.NoVariablesWithSpeedrunCom:
            return "There are currently no Speedrun.com variables or custom variables for this game.";
        case Label.TimedWithoutLoads:
            return "are timed without the loading times";
        case Label.TimedWithGameTime:
            return "are timed with Game Time";
        case Label.RequireVideoProof:
            return "require video proof";
        case Label.RunsOfThisGamePrefix:
            return "Runs of this game ";
        case Label.RunsOfThisGameSuffix:
            return ".";
        case Label.And:
            return "and";
        case Label.SetIcon:
            return "Set Icon";
        case Label.SetIconDescription:
            return "Allows you to choose an image file to set as the game's icon. Certain file formats may not work everywhere.";
        case Label.DownloadBoxArt:
            return "Download Box Art";
        case Label.DownloadBoxArtDescription:
            return "Attempts to download the box art of the game from speedrun.com, to set as the game's icon.";
        case Label.DownloadIcon:
            return "Download Icon";
        case Label.DownloadIconDescription:
            return "Attempts to download the icon of the game from speedrun.com.";
        case Label.RemoveIcon:
            return "Remove Icon";
        case Label.RemoveIconDescription:
            return "Removes the icon of the game.";
        case Label.CleaningMenu:
            return "Cleaning…";
        case Label.ClearOnlyHistory:
            return "Clear Only History";
        case Label.ClearOnlyHistoryDescription:
            return "Splits store the entire history of all runs, including every segment time. This information is used by various components. You can clear the history with this. The personal best, the best segment times, and the comparisons will not be affected.";
        case Label.ClearAllTimes:
            return "Clear All Times";
        case Label.ClearAllTimesDescription:
            return "This removes all the times from the splits, including all the history, such that the splits are completely empty, as if they were just created.";
        case Label.CleanSumOfBest:
            return "Clean Sum of Best";
        case Label.CleanSumOfBestDescription:
            return "Allows you to interactively remove potential issues in the segment history that lead to an inaccurate Sum of Best Segments. If you skip a split, whenever you will do the next split, the combined segment time might be faster than the sum of the individual best segments. This will point out all such occurrences and allow you to delete them individually if any of them seem wrong.";
        case Label.ComparisonsMenu:
            return "Comparisons…";
        case Label.AddComparison:
            return "Add Comparison";
        case Label.AddComparisonDescription:
            return "Adds a new custom comparison where you can store any times that you would like.";
        case Label.ImportComparison:
            return "Import Comparison";
        case Label.ImportComparisonDescription:
            return "Imports the Personal Best of a splits file you provide as a comparison.";
        case Label.GenerateGoalComparison:
            return "Generate Goal Comparison";
        case Label.GenerateGoalComparisonDescription:
            return "Generates a custom goal comparison based on a goal time that you can specify. The comparison's times are automatically balanced based on the segment history such that it roughly represents what the split times for the goal time would look like. Since it is populated by the segment history, the goal times are capped to a range between the sum of the best segments and the sum of the worst segments. The comparison is only populated for the selected timing method. The other timing method's comparison times are not modified by this, so you can generate it again with the other timing method to generate the comparison times for both timing methods.";
        case Label.CopyComparison:
            return "Copy Comparison";
        case Label.CopyComparisonDescription:
            return "Copies any existing comparison, including the Personal Best or even any other automatically provided comparison as a new custom comparison. You could for example use this to keep the Latest Run around as a comparison that exists for as long as you want it to.";
        case Label.SetSegmentIcon:
            return "Set Icon";
        case Label.SetSegmentIconDescription:
            return "Allows you to choose an image file to set as the segment's icon. Certain file formats may not work everywhere.";
        case Label.RemoveSegmentIcon:
            return "Remove Icon";
        case Label.RemoveSegmentIconDescription:
            return "Removes the segment's icon.";
        case Label.Rename:
            return "Rename";
        case Label.RenameDescription:
            return "Choose a new name for the custom comparison. There are reserved names that can't be used. You also can't have duplicate names.";
        case Label.CopyAction:
            return "Copy";
        case Label.CopyDescription:
            return "Creates a copy of the custom comparison.";
        case Label.ACopy:
            return "Copy";
        case Label.Remove:
            return "Remove";
        case Label.RemoveDescription:
            return "Removes the custom comparison.";
        case Label.AnyPercent:
            return "Any%";
        case Label.LowPercent:
            return "Low%";
        case Label.HundredPercent:
            return "100%";
        case Label.AddComparisonPrompt:
            return "Specify the name of the comparison you want to add:";
        case Label.ComparisonAddError:
            return "The comparison could not be added. It may be a duplicate or a reserved name.";
        case Label.ImportComparisonPrompt:
            return "Specify the name of the comparison you want to import:";
        case Label.GenerateGoalComparisonPrompt:
            return "Specify the time you want to achieve:";
        case Label.Generate:
            return "Generate";
        case Label.GenerateGoalComparisonError:
            return "Failed generating the goal comparison. Make sure to specify a valid time.";
        case Label.CopyComparisonPrompt:
            return "Specify the name of the comparison you want to copy:";
        case Label.CopyComparisonError:
            return "Failed copying the comparison. The comparison may not exist.";
        case Label.NothingToCleanUp:
            return "There is nothing to clean up.";
        case Label.CleanPrompt:
            return "Clean?";
        case Label.AssociateRunPrompt:
            return "Specify the speedrun.com ID or URL of the run:";
        case Label.Associate:
            return "Associate";
        case Label.InvalidSpeedrunUrl:
            return "Invalid speedrun.com ID or URL.";
        case Label.AssociateRunError:
            return "Couldn't associate the run. The ID may be invalid.";
        case Label.AddVariablePrompt:
            return "Specify the name of the custom variable you want to add:";
        case Label.RenameComparison:
            return "Rename Comparison";
        case Label.RenameComparisonPrompt:
            return "Specify the new name of the comparison:";
        case Label.ComparisonRenameError:
            return "The comparison could not be renamed. It may be a duplicate or a reserved name.";
        case Label.GameNotFound:
            return "Couldn't find the game.";
        case Label.NoBoxArt:
            return "The game doesn't have a box art.";
        case Label.DownloadBoxArtError:
            return "Couldn't download the box art.";
        case Label.NoGameIcon:
            return "The game doesn't have an icon.";
        case Label.DownloadIconError:
            return "Couldn't download the icon.";
        case Label.Rank:
            return "Rank";
        case Label.Player:
            return "Player";
        case Label.Time:
            return "Time";
        case Label.Date:
            return "Date:";
        case Label.Emulator:
            return "Emulator";
        case Label.EmulatorTag:
            return "Emulator";
        case Label.ObsoleteRuns:
            return "Obsolete Runs";
        case Label.Shown:
            return "Shown";
        case Label.Hidden:
            return "Hidden";
        case Label.OpenLeaderboard:
            return "Open Leaderboard";
        case Label.Filters:
            return "Filters";
        case Label.LayoutEditor:
            return "Layout Editor";
        case Label.Component:
            return "Component";
        case Label.AddComponent:
            return "Add Component";
        case Label.RemoveComponent:
            return "Remove Component";
        case Label.DuplicateComponent:
            return "Duplicate Component";
        case Label.MoveComponentUp:
            return "Move Component Up";
        case Label.MoveComponentDown:
            return "Move Component Down";
        case Label.ComponentTitle:
            return "Title";
        case Label.ComponentTitleDescription:
            return "Shows the name of the game and the category that is being run. Additionally, the game icon, the attempt count, and the total number of successfully finished runs can be shown.";
        case Label.ComponentGraph:
            return "Graph";
        case Label.ComponentGraphDescription:
            return "Visualizes how far the current run has been ahead or behind the chosen comparison throughout the whole run. All the individual deltas are shown as points on the graph.";
        case Label.ComponentSplitsDescription:
            return "The main component for visualizing all the split times. Each segment is shown in a tabular fashion showing the segment icon, segment name, the delta compared to the chosen comparison, and the split time. The list provides scrolling functionality, so not every segment needs to be shown all the time.";
        case Label.ComponentDetailedTimer:
            return "Detailed Timer";
        case Label.ComponentDetailedTimerDescription:
            return "Shows two timers, one for the total time of the current run and one showing the time of just the current segment. Other information, like segment times of up to two comparisons, the segment icon, and the segment name, can also be shown.";
        case Label.ComponentTimer:
            return "Timer";
        case Label.ComponentTimerDescription:
            return "Shows the total time of the current run as a digital clock. The color of the time shown is based on how well the current run is doing compared to the chosen comparison.";
        case Label.ComponentCurrentComparison:
            return "Current Comparison";
        case Label.ComponentCurrentComparisonDescription:
            return "Shows the name of the comparison that the timer is currently comparing against.";
        case Label.ComponentCurrentPace:
            return "Current Pace";
        case Label.ComponentCurrentPaceDescription:
            return "Shows a prediction for the current run's final time. The remainder of the run is predicted based on the chosen comparison for the component. For example, the “Best Segments” comparison can be chosen to show the best possible final time for the current run based on the Sum of Best Segments.";
        case Label.ComponentDelta:
            return "Delta";
        case Label.ComponentDeltaDescription:
            return "Shows how far ahead or behind the current run is compared to the chosen comparison.";
        case Label.ComponentPbChance:
            return "PB Chance";
        case Label.ComponentPbChanceDescription:
            return "Shows how likely it is for the active run to beat the personal best. If there is no active run, it shows the general chance of beating the personal best. During a run, it actively changes based on how well the run is going.";
        case Label.ComponentPossibleTimeSave:
            return "Possible Time Save";
        case Label.ComponentPossibleTimeSaveDescription:
            return "Shows how much time you can save on the current segment compared to the chosen comparison, based on the best segment time of the segment. This component also allows showing the “Total Possible Time Save” for the remainder of the current run.";
        case Label.ComponentPreviousSegment:
            return "Previous Segment";
        case Label.ComponentPreviousSegmentDescription:
            return "Shows how much time was saved or lost during the previous segment based on the chosen comparison. Additionally, the potential time save for the previous segment can be displayed. This component switches to a “Live Segment” view that shows the active time loss whenever you are losing time on the current segment.";
        case Label.ComponentSegmentTime:
            return "Segment Time";
        case Label.ComponentSegmentTimeDescription:
            return "Shows the time for the current segment for the chosen comparison. If no comparison is specified it uses the timer's current comparison.";
        case Label.ComponentSumOfBest:
            return "Sum of Best";
        case Label.ComponentSumOfBestDescription:
            return "Shows the fastest possible time to complete a run of the current category, based on information collected from all the previous runs. This often matches up with the sum of the best segment times of all the segments, but that may not always be the case, as skipped segments may introduce combined segments that may be faster than the actual sum of their best segment times. The name is therefore a bit misleading, but sticks around for historical reasons.";
        case Label.ComponentText:
            return "Text";
        case Label.ComponentTextDescription:
            return "Shows the text that you specify. This can either be a single centered text, or split up into a left and right text, which is suitable for a situation where you have a label and a value. There is also the option of showing a custom variable that you specify in the splits editor.";
        case Label.ComponentTotalPlaytime:
            return "Total Playtime";
        case Label.ComponentTotalPlaytimeDescription:
            return "Shows the total amount of time that the current category has been played for.";
        case Label.ComponentVariableDescription:
            return "Creates a text component that shows the value of the custom variable “{name}”.";
        case Label.ComponentBlankSpace:
            return "Blank Space";
        case Label.ComponentBlankSpaceDescription:
            return "An empty component that doesn't show anything other than a background. It mostly serves as padding between other components.";
        case Label.ComponentCarousel:
            return "Carousel";
        case Label.ComponentCarouselDescription:
            return "Shows one child component at a time and rotates through them. It prioritizes children whose content changed and otherwise switches on a timed interval.";
        case Label.ComponentSeparator:
            return "Separator";
        case Label.ComponentSeparatorDescription:
            return "A simple component that just renders a separator between components.";
        case Label.Row:
            return "Row";
        case Label.RowDescription:
            return "A row of components laid out horizontally, changing the layout direction for the components inside.";
        case Label.Column:
            return "Column";
        case Label.ColumnDescription:
            return "A column of components laid out vertically, changing the layout direction for the components inside.";
        case Label.AccuracySeconds:
            return "Seconds";
        case Label.AccuracyTenths:
            return "Tenths";
        case Label.AccuracyHundredths:
            return "Hundredths";
        case Label.AccuracyMilliseconds:
            return "Milliseconds";
        case Label.FontStyle:
            return "Style";
        case Label.FontWeight:
            return "Weight";
        case Label.FontStretch:
            return "Stretch";
        case Label.FontStyleNormal:
            return "Normal";
        case Label.FontStyleItalic:
            return "Italic";
        case Label.AlignmentAutomatic:
            return "Automatic";
        case Label.AlignmentLeft:
            return "Left";
        case Label.AlignmentCenter:
            return "Center";
        case Label.GradientTransparent:
            return "Transparent";
        case Label.GradientPlain:
            return "Plain";
        case Label.GradientVertical:
            return "Vertical";
        case Label.GradientHorizontal:
            return "Horizontal";
        case Label.GradientAlternating:
            return "Alternating";
        case Label.GradientPlainDelta:
            return "Plain Delta";
        case Label.GradientVerticalDelta:
            return "Vertical Delta";
        case Label.GradientHorizontalDelta:
            return "Horizontal Delta";
        case Label.LayoutBackgroundImage:
            return "Image";
        case Label.LayoutBackgroundBrightness:
            return "Brightness";
        case Label.LayoutBackgroundOpacity:
            return "Opacity";
        case Label.LayoutBackgroundBlur:
            return "Blur";
        case Label.LayoutDirectionVertical:
            return "Vertical";
        case Label.LayoutDirectionHorizontal:
            return "Horizontal";
        case Label.ColumnKindTime:
            return "Time";
        case Label.ColumnKindVariable:
            return "Variable";
        case Label.ColumnStartWithEmpty:
            return "Empty";
        case Label.ColumnStartWithComparisonTime:
            return "Comparison Time";
        case Label.ColumnStartWithComparisonSegmentTime:
            return "Comparison Segment Time";
        case Label.ColumnStartWithPossibleTimeSave:
            return "Possible Time Save";
        case Label.IconDisplayModeBothRows:
            return "Both Rows";
        case Label.IconDisplayModeFirstRow:
            return "First Row Only";
        case Label.SubsplitDisplayModeFlat:
            return "Flat";
        case Label.SubsplitDisplayModeCurrentGroupExpanded:
            return "Current Group Expanded";
        case Label.SubsplitDisplayModeAllGroupsExpanded:
            return "All Groups Expanded";
        case Label.ColumnUpdateWithDontUpdate:
            return "Don't Update";
        case Label.ColumnUpdateWithSplitTime:
            return "Split Time";
        case Label.ColumnUpdateWithDelta:
            return "Time Ahead / Behind";
        case Label.ColumnUpdateWithDeltaWithFallback:
            return "Time Ahead / Behind or Split Time If Empty";
        case Label.ColumnUpdateWithSegmentTime:
            return "Segment Time";
        case Label.ColumnUpdateWithSegmentDelta:
            return "Time Saved / Lost";
        case Label.ColumnUpdateWithSegmentDeltaWithFallback:
            return "Time Saved / Lost or Segment Time If Empty";
        case Label.ColumnUpdateTriggerOnStartingSegment:
            return "On Starting Segment";
        case Label.ColumnUpdateTriggerContextual:
            return "Contextual";
        case Label.ColumnUpdateTriggerOnEndingSegment:
            return "On Ending Segment";
        case Label.ComparisonCurrentComparison:
            return "Current Comparison";
        case Label.CustomVariableNoneAvailable:
            return "No variables available";
        case Label.CustomVariableNoneAvailableTooltip:
            return "Custom variables can be defined in the Variables tab when editing splits. Additional custom variables can be provided automatically by auto splitters.";
        case Label.HotkeyButtonTooltip:
            return "Click to record a hotkey. You may also use buttons on a gamepad. Global hotkeys are currently not possible. Gamepad buttons work globally.";
        case Label.ServerConnect:
            return "Connect";
        case Label.ServerDisconnect:
            return "Disconnect";
        case Label.ServerConnecting:
            return "Connecting...";
        case Label.ServerDisconnecting:
            return "Disconnecting...";
        case Label.ConnectToServerTitle:
            return "Connect to Server";
        case Label.ConnectToServerDescription:
            return "Specify the WebSocket URL:";
        case Label.Connect:
            return "Connect";
        case Label.UpdateAvailable:
            return "A new version of LiveSplit One is available! Click here to reload.";
        case Label.UnsavedChangesBeforeUnload:
            return "There are unsaved changes. Do you really want to close LiveSplit One?";
        case Label.OpenSidebarAriaLabel:
            return "Open Sidebar";
        case Label.FailedToSaveLayout:
            return "Failed to save the layout.";
        case Label.FailedToSaveHotkeys:
            return "Failed to save the hotkey settings.";
        case Label.FailedToSaveGeneralSettings:
            return "Failed to save the general settings.";
        case Label.FailedToSaveSplits:
            return "Failed to save the splits.";
        case Label.LayoutCouldNotBeLoaded:
            return "The layout could not be loaded. This may not be a valid LiveSplit or LiveSplit One Layout.";
        case Label.EmptySplitsNotSupported:
            return "Empty Splits are not supported.";
        case Label.BugEncountered:
            return "You encountered a bug:";
        case Label.PleaseReportIssueStart:
            return "Please report this issue ";
        case Label.ReportHere:
            return "here";
        case Label.PleaseReportIssueEnd:
            return ".";
        case Label.BugReportInstructions:
            return "In order to help us fix this issue, please include steps to reproduce it and attach the splits and layout you were using when the issue occurred.";
        case Label.LoadFailedPrivateBrowsing:
            return "Couldn't load LiveSplit One.\nYou may be in private browsing mode.\nLiveSplit One cannot store any splits, layouts, or other settings because of the limitations of the browser's private browsing mode.\nThese limitations may be lifted in the future.\nTo run LiveSplit One for now, please disable private browsing in your settings.";
        case Label.LoadFailedOutdatedBrowser:
            return "Couldn't load LiveSplit One.\nYou may be using a browser that is not up to date.\nPlease update your browser or your iOS version and try again.\nAnother reason might be that a browser extension, such as an adblocker, is blocking access to important scripts.";
        case Label.CustomComparisonsSidebarEditingHint:
            return "Save or cancel the comparison you're editing first.";
        case Label.CustomComparisonsComparisonMenu:
            return "More actions";
        case Label.CustomComparisonsNameRequired:
            return "Give the comparison a name.";
        case Label.CustomComparisonsSearchBlocks:
            return "Search blocks";
        case Label.CustomComparisonsNoBlocksFound:
            return "No block matches. Try another word.";
        case Label.CustomComparisonsAboutBlock:
            return "What does this block do?";
        case Label.CustomComparisonsBlocks:
            return "Blocks";
        case Label.CustomComparisonsRailHint:
            return "Drag a block onto a slot, or onto a block to replace it. Click one to put it in the first empty slot it fits.";
        case Label.CustomComparisonsDragBlock:
            return "Drag to move this block";
        case Label.CustomComparisonsOpenEditorHint:
            return "Your custom comparisons work with all your splits and show up next to the other comparisons.";
        case Label.CustomComparisons:
            return "Custom Comparisons";
        case Label.CustomComparisonsExportAll:
            return "Export All…";
        case Label.CustomComparisonsExportAllFileName:
            return "Custom Comparisons";
        case Label.CustomComparisonsPluginUnavailable:
            return "The custom comparisons couldn't be loaded, so they don't show up as comparisons right now: {0}";
        case Label.CustomComparisonsListHeading:
            return "Comparisons";
        case Label.CustomComparisonsNoComparisons:
            return "No custom comparisons yet. Click New to make your first one.";
        case Label.CustomComparisonsNew:
            return "New…";
        case Label.CustomComparisonsEdit:
            return "Edit…";
        case Label.CustomComparisonsRename:
            return "Rename…";
        case Label.CustomComparisonsDuplicate:
            return "Duplicate";
        case Label.CustomComparisonsImport:
            return "Import…";
        case Label.CustomComparisonsExport:
            return "Export…";
        case Label.CustomComparisonsCopyAsText:
            return "Copy as Text";
        case Label.CustomComparisonsPaste:
            return "Paste…";
        case Label.CustomComparisonsUsedBy:
            return "Used by {0} other comparisons";
        case Label.CustomComparisonsUsedByOne:
            return "Used by 1 other comparison";
        case Label.CustomComparisonsUnreadable:
            return "Can't be read";
        case Label.CustomComparisonsSaveReminder:
            return "Changes are saved right away, on this device. Use Export All to take them to another one.";
        case Label.CustomComparisonsCopiedToClipboard:
            return "Copied. You can paste it into a chat or forum post.";
        case Label.CustomComparisonsCouldNotCopy:
            return "Couldn't copy to the clipboard.";
        case Label.CustomComparisonsCouldNotReadClipboard:
            return "Couldn't read the clipboard. Paste the text here instead:";
        case Label.CustomComparisonsErrorTitle:
            return "That didn't work";
        case Label.CustomComparisonsRenameTitle:
            return "Rename Comparison";
        case Label.CustomComparisonsRenameDescription:
            return "The comparisons that use this one are updated to the new name.";
        case Label.CustomComparisonsNameTakenTitle:
            return "Choose Another Name";
        case Label.CustomComparisonsNameTakenDescription:
            return "{0} Type another name:";
        case Label.CustomComparisonsRemoveTitle:
            return "Remove Comparison";
        case Label.CustomComparisonsRemoveDescription:
            return 'Remove "{0}"?';
        case Label.CustomComparisonsRemoveUsedDescription:
            return 'Remove "{0}"? {1} other comparisons use it, and they stop working without it.';
        case Label.CustomComparisonsRemoveUsedOneDescription:
            return 'Remove "{0}"? 1 other comparison uses it, and it stops working without it.';
        case Label.CustomComparisonsPasteTitle:
            return "Paste a Comparison";
        case Label.CustomComparisonsPasteDescription:
            return "Paste the text of a comparison that someone shared:";
        case Label.CustomComparisonsCopySuffix:
            return "{0} (Copy)";
        case Label.CustomComparisonsTemplatesTitle:
            return "New Comparison";
        case Label.CustomComparisonsTemplatesDescription:
            return "Pick a starting point. Each one is a finished comparison you can use as it is or change.";
        case Label.CustomComparisonsTemplateGoalPace:
            return "Goal pace";
        case Label.CustomComparisonsTemplateGoalPaceDescription:
            return "Your typical runs, stretched to finish exactly in a goal time.";
        case Label.CustomComparisonsTemplateRealisticPace:
            return "Realistic pace";
        case Label.CustomComparisonsTemplateRealisticPaceDescription:
            return "Percentile 70 of the last 30 days: times you beat about 70 % of the time.";
        case Label.CustomComparisonsTemplateRecentForm:
            return "Recent form";
        case Label.CustomComparisonsTemplateRecentFormDescription:
            return "The median of your last 10 completed runs, ignoring the best and worst fluke.";
        case Label.CustomComparisonsTemplateSafePace:
            return "Safe pace";
        case Label.CustomComparisonsTemplateSafePaceDescription:
            return "The slower of your golds + 2 s and your median, so it's never unrealistically fast.";
        case Label.CustomComparisonsTemplateBlank:
            return "Blank";
        case Label.CustomComparisonsTemplateBlankDescription:
            return "Start from scratch.";
        case Label.CustomComparisonsNewComparisonName:
            return "My Comparison";
        case Label.CustomComparisonsEditorTitle:
            return "Custom Comparison";
        case Label.CustomComparisonsName:
            return "Name";
        case Label.CustomComparisonsUndo:
            return "Undo";
        case Label.CustomComparisonsRedo:
            return "Redo";
        case Label.CustomComparisonsChooseBlock:
            return "Choose a block…";
        case Label.CustomComparisonsReplaceBlock:
            return "Replace With…";
        case Label.CustomComparisonsWrapBlock:
            return "Put Inside…";
        case Label.CustomComparisonsUnwrapBlock:
            return "Remove, Keep What's Inside";
        case Label.CustomComparisonsPreviewBlock:
            return "Preview This Block";
        case Label.CustomComparisonsBlockMenu:
            return "Block actions";
        case Label.CustomComparisonsFillEmptySlots:
            return "Fill the empty slots to see the preview. Every slot needs a block.";
        case Label.CustomComparisonsDiscardChangesDescription:
            return "This comparison has changes that weren't saved.";
        case Label.CustomComparisonsDiscard:
            return "Discard";
        case Label.CustomComparisonsKeepEditing:
            return "Keep Editing";
        case Label.CustomComparisonsInvalidTime:
            return "Type a time like 20:00 or 1:05:30.";
        case Label.CustomComparisonsNotFound:
            return "{0} (not found)";
        case Label.CustomComparisonsNotInSplits:
            return "{0}. (not in your splits)";
        case Label.CustomComparisonsSegmentOption:
            return "{0}. {1}";
        case Label.CustomComparisonsAddRange:
            return "Add a Range";
        case Label.CustomComparisonsRemoveRange:
            return "Remove This Range";
        case Label.CustomComparisonsRangeBackwards:
            return "Segments {0} to {1} is backwards. Swap the numbers.";
        case Label.CustomComparisonsCategorySources:
            return "Sources";
        case Label.CustomComparisonsCategoryFilters:
            return "Filters";
        case Label.CustomComparisonsCategoryAggregates:
            return "Aggregates";
        case Label.CustomComparisonsCategoryMath:
            return "Math";
        case Label.CustomComparisonsCategoryControl:
            return "Control";
        case Label.CustomComparisonsKindSamples:
            return "A list of times for each segment";
        case Label.CustomComparisonsKindTimes:
            return "One time for each segment";
        case Label.CustomComparisonsBlockResult:
            return "this comparison is";
        case Label.CustomComparisonsBlockResultTip:
            return "The finished comparison. Put the blocks that build it in here.";
        case Label.CustomComparisonsBlockSegmentHistory:
            return "all my times for each segment";
        case Label.CustomComparisonsBlockSegmentHistoryTip:
            return "Every time you've recorded for each segment. Skipped segments, and the combined segment right after a skip, are left out.";
        case Label.CustomComparisonsBlockComparison:
            return "comparison {name}";
        case Label.CustomComparisonsBlockComparisonTip:
            return "An existing comparison, segment by segment. Built-ins work even if they're switched off.";
        case Label.CustomComparisonsBlockAttempt:
            return "attempt # {number}";
        case Label.CustomComparisonsBlockAttemptTip:
            return "The segments of one past attempt, by its number in the attempt history. Empty where that run skipped a split or reset.";
        case Label.CustomComparisonsBlockBestRecentRun:
            return "my best run from the last {days} days";
        case Label.CustomComparisonsBlockBestRecentRunTip:
            return 'The segments of your fastest finished run from the last N days: a "recent PB" that moves as you play. Empty if no run finished in that time.';
        case Label.CustomComparisonsBlockLastN:
            return "last {count} times of";
        case Label.CustomComparisonsBlockLastNTip:
            return "Keeps the most recent times for each segment. Counts times that segment was completed, not attempts.";
        case Label.CustomComparisonsBlockCompletedRunsOnly:
            return "from completed runs only";
        case Label.CustomComparisonsBlockCompletedRunsOnlyTip:
            return "Keeps only times from attempts that finished the whole run.";
        case Label.CustomComparisonsBlockRecentDays:
            return "from the last {days} days";
        case Label.CustomComparisonsBlockRecentDaysTip:
            return "Keeps only times from attempts that ended in the last N days, so old times stop counting. Attempts without a date are left out.";
        case Label.CustomComparisonsBlockFinishedUnder:
            return "from runs that finished under {totalSeconds}";
        case Label.CustomComparisonsBlockFinishedUnderTip:
            return "Keeps only times from runs that finished faster than this, so only your good runs count.";
        case Label.CustomComparisonsBlockReachedSegment:
            return "from runs that reached {segment}";
        case Label.CustomComparisonsBlockReachedSegmentTip:
            return "Keeps only times from attempts that got at least as far as this segment. Like \"completed runs only\", but for games where most runs reset early. If this segment isn't in your splits, you'll see a warning and no times are kept.";
        case Label.CustomComparisonsBlockTrimOutliers:
            return "drop the fastest and slowest {percent} % of";
        case Label.CustomComparisonsBlockTrimOutliersTip:
            return "Removes flukes before averaging: drops that share of each segment's fastest and slowest times. With few times nothing is dropped.";
        case Label.CustomComparisonsBlockAtLeast:
            return "only if there are at least {count} times in";
        case Label.CustomComparisonsBlockAtLeastTip:
            return 'Segments with fewer times become empty, so you can fill them with "if empty, use" instead of trusting too little data.';
        case Label.CustomComparisonsBlockAggregate:
            return "{kind} of";
        case Label.CustomComparisonsBlockAggregateTip:
            return "Turns each segment's list of times into one time. A segment with no times stays empty.";
        case Label.CustomComparisonsAggregateMedian:
            return "median";
        case Label.CustomComparisonsAggregateAverage:
            return "average";
        case Label.CustomComparisonsAggregateMin:
            return "best (min)";
        case Label.CustomComparisonsAggregateMax:
            return "worst (max)";
        case Label.CustomComparisonsBlockPercentile:
            return "percentile {percent} of";
        case Label.CustomComparisonsBlockPercentileTip:
            return "0 is your fastest time, 100 your slowest, 50 the median. 70 means: you beat this about 70% of the time.";
        case Label.CustomComparisonsBlockWeightedAverage:
            return "recent-weighted average of";
        case Label.CustomComparisonsBlockWeightedAverageFooter:
            return "weight halves every {halfLife} older times";
        case Label.CustomComparisonsBlockWeightedAverageTip:
            return "An average where recent times count more. The newest time counts fully, one N times older counts half, 2N times older a quarter, and so on.";
        case Label.CustomComparisonsBlockAddTime:
            return "add {seconds} s per segment to";
        case Label.CustomComparisonsBlockAddTimeTip:
            return "Adds (or, if negative, removes) time from every segment. Never goes below zero.";
        case Label.CustomComparisonsBlockScale:
            return "{percent} % of";
        case Label.CustomComparisonsBlockScaleTip:
            return "Scales every segment. 103 % is 3 % slower, 97 % is 3 % faster.";
        case Label.CustomComparisonsBlockRound:
            return "round to {step}";
        case Label.CustomComparisonsBlockRoundTip:
            return "Rounds every segment to the nearest 0.1 s (or 1 s, 0.01 s), so the split times are tidy too.";
        case Label.CustomComparisonsRoundStep:
            return "{0} s";
        case Label.CustomComparisonsBlockClamp:
            return "keep";
        case Label.CustomComparisonsBlockClampTip:
            return 'Holds each segment between two limits, for example never faster than your golds and never slower than your PB. If the limits cross, "never faster than" wins.';
        case Label.CustomComparisonsSlotNeverFaster:
            return "never faster than";
        case Label.CustomComparisonsSlotNeverSlower:
            return "never slower than";
        case Label.CustomComparisonsBlockStretchToTotal:
            return "stretch to finish in {totalSeconds}";
        case Label.CustomComparisonsBlockStretchToTotalTip:
            return 'Scales every segment by the same amount so the whole run adds up to the goal time. If any segment is empty, the result is empty: fill gaps first with "if empty, use".';
        case Label.CustomComparisonsBlockBlend:
            return "{percent} % of the way from";
        case Label.CustomComparisonsBlockBlendTip:
            return "Mixes two rules per segment. 0 % is all the first, 100 % all the second, 75 % is three quarters of the way.";
        case Label.CustomComparisonsSlotTo:
            return "to";
        case Label.CustomComparisonsBlockPick:
            return "the {kind} of";
        case Label.CustomComparisonsBlockPickTip:
            return "For each segment, whichever of the two rules is slower (or faster). If one has no time for a segment, the other is used.";
        case Label.CustomComparisonsPickSlower:
            return "slower";
        case Label.CustomComparisonsPickFaster:
            return "faster";
        case Label.CustomComparisonsSlotAnd:
            return "and";
        case Label.CustomComparisonsBlockFallback:
            return "use";
        case Label.CustomComparisonsBlockFallbackTip:
            return "Fills only the segments the first rule leaves empty, for example because there aren't enough runs yet.";
        case Label.CustomComparisonsSlotIfEmpty:
            return "if empty, use";
        case Label.CustomComparisonsBlockSegmentRange:
            return "for segments … use … otherwise …";
        case Label.CustomComparisonsBlockSegmentRangeTip:
            return "Uses one rule for a range of segments and another for the rest. Add more ranges for more rules: the first range that matches wins. If a range points past the end of your splits, you'll see a warning.";
        case Label.CustomComparisonsBlockSegmentRangeHeader:
            return "different rules for different segments (the first range that matches wins)";
        case Label.CustomComparisonsRangeCase:
            return "for segments {from} to {to} use";
        case Label.CustomComparisonsSlotOtherwise:
            return "otherwise";
        case Label.CustomComparisonsPreview:
            return "Preview";
        case Label.CustomComparisonsPreviewingBlock:
            return "Previewing a block, not the comparison";
        case Label.CustomComparisonsShowWholeComparison:
            return "Show the Whole Comparison";
        case Label.CustomComparisonsSegment:
            return "Segment";
        case Label.CustomComparisonsDifferenceFrom:
            return "Difference from";
        case Label.CustomComparisonsFasterThanGold:
            return "Faster than your best time for this segment (your gold)";
        case Label.CustomComparisonsFasterThanGoldWarning:
            return "{0} segments are faster than your golds. That's allowed, but this pace may not be realistic.";
        case Label.CustomComparisonsFasterThanGoldWarningOne:
            return "1 segment is faster than your gold. That's allowed, but this pace may not be realistic.";
        case Label.CustomComparisonsFinishLine:
            return "Finishes in {0}, {1} compared to {2}.";
        case Label.CustomComparisonsFinishVsSumOfBest:
            return "Your sum of best is {0}.";
        case Label.CustomComparisonsNoProblems:
            return "No problems.";
        case Label.CustomComparisonsNoTimesLeft:
            return 'No segment has a time. Click a row to see why, or add "use … if empty, use" with a backup like your PB.';
        case Label.CustomComparisonsOriginTitle:
            return "Where this time comes from";
        case Label.CustomComparisonsOriginEmpty:
            return "This segment has no time, so every split after it is empty too.";
        case Label.CustomComparisonsOriginFillingGap:
            return "filling a gap";
        case Label.CustomComparisonsOriginPicked:
            return "the {0} of the two";
        case Label.CustomComparisonsOriginLowLimit:
            return 'held at the "never faster than" limit';
        case Label.CustomComparisonsOriginHighLimit:
            return 'held at the "never slower than" limit';
        case Label.CustomComparisonsClickRowHint:
            return "Click a row to see where its time comes from.";
        case Label.CustomComparisonsDescYourGolds:
            return "your golds";
        case Label.CustomComparisonsDescYourPb:
            return "your PB";
        case Label.CustomComparisonsDescComparison:
            return '"{0}"';
        case Label.CustomComparisonsDescAttempt:
            return "attempt #{0}";
        case Label.CustomComparisonsDescBestRecentRun:
            return "your best run from the last {0} days";
        case Label.CustomComparisonsDescWeightedAverage:
            return "the recent-weighted average of {0}";
        case Label.CustomComparisonsDescClamp:
            return "{0}, kept between {1} and {2}";
        case Label.CustomComparisonsDescRound:
            return "{0}, rounded to {1}";
        case Label.CustomComparisonsDescMedian:
            return "the median of {0}";
        case Label.CustomComparisonsDescAverage:
            return "the average of {0}";
        case Label.CustomComparisonsDescMin:
            return "the best of {0}";
        case Label.CustomComparisonsDescMax:
            return "the worst of {0}";
        case Label.CustomComparisonsDescPercentile:
            return "percentile {0} of {1}";
        case Label.CustomComparisonsDescAddTime:
            return "{0} + {1}";
        case Label.CustomComparisonsDescRemoveTime:
            return "{0} − {1}";
        case Label.CustomComparisonsDescScale:
            return "{0} % of {1}";
        case Label.CustomComparisonsDescStretch:
            return "{0}, stretched to finish in {1}";
        case Label.CustomComparisonsDescBlend:
            return "{0} % of the way from {1} to {2}";
        case Label.CustomComparisonsDescSlower:
            return "the slower of {0} and {1}";
        case Label.CustomComparisonsDescFaster:
            return "the faster of {0} and {1}";
        case Label.CustomComparisonsDescFallback:
            return "{0} (or {1} where that's empty)";
        case Label.CustomComparisonsDescRangeArm:
            return "{0} for {1}";
        case Label.CustomComparisonsDescRangeOtherwise:
            return "{0}, otherwise {1}";
        case Label.CustomComparisonsDescSomething:
            return "something";
        case Label.CustomComparisonsDescAllTimes:
            return "all your times";
        case Label.CustomComparisonsDescLastN:
            return "your last {0} times";
        case Label.CustomComparisonsQualCompleted:
            return "from completed runs";
        case Label.CustomComparisonsQualRecentDays:
            return "from the last {0} days";
        case Label.CustomComparisonsQualUnder:
            return "from runs under {0}";
        case Label.CustomComparisonsQualTrim:
            return "without the fastest and slowest {0} %";
        case Label.CustomComparisonsQualAtLeast:
            return "when there are at least {0}";
        case Label.CustomComparisonsQualReached:
            return "from runs that reached {0}";
        case Label.CustomComparisonsSumGapsFilled:
            return "{0} Gaps filled from {1}.";
        case Label.CustomComparisonsSumRangeArm:
            return "{0}: {1}";
        case Label.CustomComparisonsSumOtherSegments:
            return "Other segments: {0}";
        case Label.CustomComparisonsSegmentNumber:
            return "segment {0}";
        case Label.CustomComparisonsSegmentSpan:
            return "{0} to {1}";
        case Label.CustomComparisonsSeconds:
            return "{0} s";
        case Label.CustomComparisonsListAnd:
            return "{0} and {1}";
        case Label.CustomComparisonsWarnSegment:
            return "Uses segment {0}, but your splits have {1}";
        case Label.CustomComparisonsWarnSegments:
            return "Uses segments {0}, but your splits have {1}";
        case Label.CustomComparisonsSentence:
            return "{0}.";
    }
}
