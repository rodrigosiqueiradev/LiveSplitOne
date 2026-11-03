import { Label } from ".";

export function resolveDutch(text: Label): string {
    switch (text) {
        case Label.Ok:
            return "OK";
        case Label.Cancel:
            return "Annuleren";
        case Label.Settings:
            return "Instellingen";
        case Label.Language:
            return "Taal";
        case Label.LanguageDescription:
            return "Stelt de taal in die in de applicatie wordt gebruikt.";
        case Label.LanguageAuto:
            return "Automatisch";
        case Label.Theme:
            return "Thema";
        case Label.ThemeDescription:
            return "Bepaalt of het systeemthema wordt gevolgd of dat een lichte of donkere modus wordt afgedwongen.";
        case Label.ThemeLightMode:
            return "Lichte modus";
        case Label.ThemeDarkMode:
            return "Donkere modus";
        case Label.HotkeysHeading:
            return "Sneltoetsen";
        case Label.GeneralHeading:
            return "Algemeen";
        case Label.NetworkHeading:
            return "Netwerk";
        case Label.FrameRate:
            return "Framesnelheid";
        case Label.FrameRateDescription:
            return "Bepaalt de framesnelheid waarmee de timer wordt weergegeven. “Batterijbewust” probeert op basis van apparaattype en laadstatus een goede framesnelheid te kiezen. “Scherm overeenkomen” laat de timer overeenkomen met de verversingssnelheid van het scherm.";
        case Label.FrameRateBatteryAware:
            return "Batterijbewust";
        case Label.FrameRateMatchScreen:
            return "Scherm overeenkomen";
        case Label.SaveOnReset:
            return "Opslaan bij reset";
        case Label.SaveOnResetDescription:
            return "Bepaalt of de splits automatisch worden opgeslagen bij het resetten van de timer.";
        case Label.ShowControlButtons:
            return "Bedieningsknoppen tonen";
        case Label.ShowControlButtonsDescription:
            return "Bepaalt of er knoppen onder de timer worden getoond om deze te bedienen. Als dit is uitgeschakeld, moet je de sneltoetsen gebruiken.";
        case Label.ShowManualGameTimeInput:
            return "Handmatige speltijdinvoer tonen";
        case Label.ShowManualGameTimeInputDescription:
            return "Toont een tekstvak onder de timer waarmee je de speltijd handmatig kunt invoeren. Je start de timer en splitst door op Enter in het tekstvak te drukken. Zorg dat je vergelijkt met “Game Time”.";
        case Label.ManualGameTimeMode:
            return "Handmatige speltijdmodus";
        case Label.ManualGameTimeModeDescription:
            return "Bepaalt of de handmatige speltijd wordt ingevoerd als segmenttijden of split tijden.";
        case Label.ManualGameTimeModeSegmentTimes:
            return "Segmenttijden";
        case Label.ManualGameTimeModeSplitTimes:
            return "Split tijden";
        case Label.AlwaysOnTop:
            return "Altijd bovenaan";
        case Label.AlwaysOnTopDescription:
            return "Houdt het venster altijd boven andere vensters.";
        case Label.SpeedrunComIntegration:
            return "Speedrun.com-integratie";
        case Label.SpeedrunComIntegrationDescription:
            return "Vraagt de lijst met games, categorieën en ranglijsten op van speedrun.com.";
        case Label.ServerConnection:
            return "Serververbinding";
        case Label.ServerConnectionDescription:
            return "Staat toe om verbinding te maken met een WebSocket-server die de timer kan besturen door verschillende opdrachten te verzenden. De opdrachten zijn momenteel een subset van de opdrachten die de originele LiveSplit ondersteunt.";
        case Label.ServerConnectionExperimental:
            return "Deze functie is experimenteel en het protocol zal waarschijnlijk in de toekomst veranderen.";
        case Label.TheRunGgIntegration:
            return "TheRun.gg-integratie";
        case Label.TheRunGgIntegrationDescription:
            return "Integreert met therun.gg voor live run-tracking en automatisch uploaden van statistieken. Je hebt een uploadsleutel van therun.gg nodig om deze functie te gebruiken.";
        case Label.TheRunGgLiveTracking:
            return "Live tracking";
        case Label.TheRunGgLiveTrackingDescription:
            return "Wanneer ingeschakeld, worden live splitgegevens na elke splitactie naar therun.gg gestuurd, zodat de run live op de website gevolgd kan worden.";
        case Label.TheRunGgStatsUploading:
            return "Statistieken uploaden";
        case Label.TheRunGgStatsUploadingDescription:
            return "Wanneer ingeschakeld, wordt het splitsbestand na elke reset of voltooide run naar therun.gg geüpload, zodat je runs automatisch met de site worden gesynchroniseerd.";
        case Label.HotkeyAlreadyInUse:
            return "De sneltoets is al in gebruik.";
        case Label.Start:
            return "Start";
        case Label.Resume:
            return "Hervatten";
        case Label.Pause:
            return "Pauze";
        case Label.UndoSplit:
            return "Split ongedaan maken";
        case Label.Reset:
            return "Reset";
        case Label.SkipSplit:
            return "Split overslaan";
        case Label.ManualGameTimePlaceholder:
            return "Handmatige speltijd";
        case Label.LiveSplitLogoAlt:
            return "LiveSplit‑logo";
        case Label.LiveSplitOne:
            return "LiveSplit One";
        case Label.Splits:
            return "Splits";
        case Label.Layout:
            return "Lay‑out";
        case Label.CompareAgainst:
            return "Vergelijken met";
        case Label.RealTime:
            return "Realtime";
        case Label.GameTime:
            return "Speltijd";
        case Label.PopOut:
            return "Pop‑out";
        case Label.About:
            return "Over";
        case Label.Back:
            return "Terug";
        case Label.AboutVersionPrefix:
            return "Versie:";
        case Label.AboutDescription:
            return "LiveSplit One is een multiplatform‑versie van LiveSplit, de strakke en zeer aanpasbare timer voor speedrunners.";
        case Label.AboutViewSource:
            return "Bekijk de broncode op GitHub";
        case Label.AboutRecentChanges:
            return "Recente wijzigingen";
        case Label.AboutContributors:
            return "Bijdragers";
        case Label.Loading:
            return "Laden...";
        case Label.Add:
            return "Toevoegen";
        case Label.Import:
            return "Importeren";
        case Label.OpenSplits:
            return "Splits openen";
        case Label.EditSplits:
            return "Splits bewerken";
        case Label.ExportSplits:
            return "Splits exporteren";
        case Label.CopySplits:
            return "Splits kopiëren";
        case Label.RemoveSplits:
            return "Splits verwijderen";
        case Label.Untitled:
            return "Naamloos";
        case Label.NoCategory:
            return "—";
        case Label.DiscardChangesTitle:
            return "Wijzigingen verwerpen?";
        case Label.DiscardChangesDescription:
            return "Je huidige splits zijn gewijzigd en hebben niet-opgeslagen wijzigingen. Wil je doorgaan en die wijzigingen verwerpen?";
        case Label.DeleteSplitsTitle:
            return "Splits verwijderen?";
        case Label.DeleteSplitsDescription:
            return "Weet je zeker dat je de splits wilt verwijderen? Deze bewerking kan niet ongedaan worden gemaakt.";
        case Label.SaveBestTimesTitle:
            return "Beste tijden opslaan?";
        case Label.SaveBestTimesDescription:
            return "Je hebt enkele van je beste tijden verbeterd. Wil je ze bijwerken?";
        case Label.Yes:
            return "Ja";
        case Label.No:
            return "Nee";
        case Label.DontReset:
            return "Niet resetten";
        case Label.FailedToExportSplits:
            return "Exporteren van de splits is mislukt.";
        case Label.CantImportEmptySplits:
            return "Kan geen lege splits importeren.";
        case Label.FailedToReadFile:
            return "Bestand lezen mislukt:";
        case Label.FailedToImportSplits:
            return "Splits importeren mislukt:";
        case Label.CouldNotParseSplits:
            return "Kon de splits niet parseren.";
        case Label.LoadedSplitsInvalid:
            return "De geladen splits zijn ongeldig.";
        case Label.NewSegmentName:
            return "Tijd";
        case Label.EditWhileRunningError:
            return "Je kunt je splits niet bewerken terwijl de timer loopt.";
        case Label.Edit:
            return "Bewerken";
        case Label.Save:
            return "Opslaan";
        case Label.Export:
            return "Exporteren";
        case Label.FailedToParseTimeSpan:
            return "TimeSpan kon niet worden geparseerd";
        case Label.Default:
            return "Standaard";
        case Label.Game:
            return "Game";
        case Label.Category:
            return "Categorie";
        case Label.StartTimerAt:
            return "Timer starten op";
        case Label.Attempts:
            return "Pogingen";
        case Label.SplitsEditor:
            return "Splits‑editor";
        case Label.Variables:
            return "Variabelen";
        case Label.Rules:
            return "Regels";
        case Label.Leaderboard:
            return "Leaderboard";
        case Label.InsertAbove:
            return "Boven invoegen";
        case Label.InsertBelow:
            return "Onder invoegen";
        case Label.RemoveSegment:
            return "Segment verwijderen";
        case Label.MoveUp:
            return "Omhoog";
        case Label.MoveDown:
            return "Omlaag";
        case Label.CreateGroup:
            return "Groep aanmaken";
        case Label.RemoveGroup:
            return "Groep verwijderen";
        case Label.AddVariable:
            return "Variabele toevoegen";
        case Label.OpenPbPage:
            return "PB‑pagina openen";
        case Label.AssociateRun:
            return "Run koppelen";
        case Label.Icon:
            return "Pictogram";
        case Label.SegmentName:
            return "Segmentnaam";
        case Label.SplitTime:
            return "Split‑tijd";
        case Label.SegmentTime:
            return "Segmenttijd";
        case Label.BestSegment:
            return "Beste segment";
        case Label.SpeedrunComVariableTooltip:
            return "Een speedrun.com‑variabele specifiek voor de game.";
        case Label.Region:
            return "Regio";
        case Label.RegionDescription:
            return "De regio van de game die wordt gespeeld.";
        case Label.Platform:
            return "Platform";
        case Label.PlatformDescription:
            return "Het platform waarop de game wordt gespeeld.";
        case Label.UsesEmulator:
            return "Emulator gebruikt";
        case Label.UsesEmulatorDescription:
            return "Of er een emulator wordt gebruikt om te spelen.";
        case Label.CustomVariableTooltip:
            return "Een door jou opgegeven variabele. Deze kan worden weergegeven met de tekstcomponent.";
        case Label.NoVariables:
            return "Er zijn momenteel geen aangepaste variabelen voor deze game.";
        case Label.NoVariablesWithSpeedrunCom:
            return "Er zijn momenteel geen speedrun.com‑variabelen of aangepaste variabelen voor deze game.";
        case Label.TimedWithoutLoads:
            return "worden getimed zonder laadtijden";
        case Label.TimedWithGameTime:
            return "worden getimed met Game Time";
        case Label.RequireVideoProof:
            return "vereisen videobewijs";
        case Label.RunsOfThisGamePrefix:
            return "Runs van deze game ";
        case Label.RunsOfThisGameSuffix:
            return ".";
        case Label.And:
            return "en";
        case Label.SetIcon:
            return "Pictogram instellen";
        case Label.SetIconDescription:
            return "Kies een afbeeldingsbestand als game‑pictogram. Bepaalde bestandsindelingen werken mogelijk niet overal.";
        case Label.DownloadBoxArt:
            return "Box‑art downloaden";
        case Label.DownloadBoxArtDescription:
            return "Probeert box‑art van speedrun.com te downloaden en als game‑pictogram in te stellen.";
        case Label.DownloadIcon:
            return "Pictogram downloaden";
        case Label.DownloadIconDescription:
            return "Probeert het pictogram van de game te downloaden van speedrun.com.";
        case Label.RemoveIcon:
            return "Pictogram verwijderen";
        case Label.RemoveIconDescription:
            return "Verwijdert het game‑pictogram.";
        case Label.CleaningMenu:
            return "Opschonen…";
        case Label.ClearOnlyHistory:
            return "Alleen geschiedenis wissen";
        case Label.ClearOnlyHistoryDescription:
            return "Splits bewaren de volledige geschiedenis van alle runs, inclusief elke segmenttijd. Je kunt hiermee de geschiedenis wissen. Personal best, beste segmenttijden en vergelijkingen blijven intact.";
        case Label.ClearAllTimes:
            return "Alle tijden wissen";
        case Label.ClearAllTimesDescription:
            return "Verwijdert alle tijden uit de splits, inclusief de geschiedenis, zodat de splits volledig leeg zijn.";
        case Label.CleanSumOfBest:
            return "Som van beste opschonen";
        case Label.CleanSumOfBestDescription:
            return "Laat je interactief problemen in de segmentgeschiedenis verwijderen die tot een onjuiste som van beste segmenten leiden.";
        case Label.ComparisonsMenu:
            return "Vergelijkingen…";
        case Label.AddComparison:
            return "Vergelijking toevoegen";
        case Label.AddComparisonDescription:
            return "Voegt een nieuwe aangepaste vergelijking toe waarin je tijden kunt opslaan.";
        case Label.ImportComparison:
            return "Vergelijking importeren";
        case Label.ImportComparisonDescription:
            return "Importeert de Personal Best van een splits‑bestand als vergelijking.";
        case Label.GenerateGoalComparison:
            return "Doelvergelijking genereren";
        case Label.GenerateGoalComparisonDescription:
            return "Genereert een aangepaste doelvergelijking op basis van een doel‑tijd die je opgeeft.";
        case Label.CopyComparison:
            return "Vergelijking kopiëren";
        case Label.CopyComparisonDescription:
            return "Maakt een kopie van een bestaande vergelijking.";
        case Label.SetSegmentIcon:
            return "Pictogram instellen";
        case Label.SetSegmentIconDescription:
            return "Kies een afbeeldingsbestand als segment‑pictogram. Bepaalde indelingen werken mogelijk niet overal.";
        case Label.RemoveSegmentIcon:
            return "Pictogram verwijderen";
        case Label.RemoveSegmentIconDescription:
            return "Verwijdert het segment‑pictogram.";
        case Label.Rename:
            return "Hernoemen";
        case Label.RenameDescription:
            return "Kies een nieuwe naam voor de aangepaste vergelijking. Gereserveerde namen of duplicaten zijn niet toegestaan.";
        case Label.CopyAction:
            return "Kopiëren";
        case Label.CopyDescription:
            return "Maakt een kopie van de aangepaste vergelijking.";
        case Label.ACopy:
            return "Kopie";
        case Label.Remove:
            return "Verwijderen";
        case Label.RemoveDescription:
            return "Verwijdert de aangepaste vergelijking.";
        case Label.AnyPercent:
            return "Any%";
        case Label.LowPercent:
            return "Low%";
        case Label.HundredPercent:
            return "100%";
        case Label.AddComparisonPrompt:
            return "Geef de naam van de vergelijking op die je wilt toevoegen:";
        case Label.ComparisonAddError:
            return "De vergelijking kon niet worden toegevoegd. Mogelijk is de naam duplicaat of gereserveerd.";
        case Label.ImportComparisonPrompt:
            return "Geef de naam van de vergelijking op die je wilt importeren:";
        case Label.GenerateGoalComparisonPrompt:
            return "Geef de tijd op die je wilt behalen:";
        case Label.Generate:
            return "Genereren";
        case Label.GenerateGoalComparisonError:
            return "Doelvergelijking genereren mislukt. Controleer of de tijd geldig is.";
        case Label.CopyComparisonPrompt:
            return "Geef de naam van de vergelijking op die je wilt kopiëren:";
        case Label.CopyComparisonError:
            return "Kopiëren van de vergelijking mislukt. Mogelijk bestaat de vergelijking niet.";
        case Label.NothingToCleanUp:
            return "Er is niets op te schonen.";
        case Label.CleanPrompt:
            return "Opschonen?";
        case Label.AssociateRunPrompt:
            return "Geef de speedrun.com‑ID of URL van de run op:";
        case Label.Associate:
            return "Koppelen";
        case Label.InvalidSpeedrunUrl:
            return "Ongeldige speedrun.com‑ID of URL.";
        case Label.AssociateRunError:
            return "Run koppelen mislukt. De ID is mogelijk ongeldig.";
        case Label.AddVariablePrompt:
            return "Geef de naam van de aangepaste variabele op die je wilt toevoegen:";
        case Label.RenameComparison:
            return "Vergelijking hernoemen";
        case Label.RenameComparisonPrompt:
            return "Geef de nieuwe naam van de vergelijking op:";
        case Label.ComparisonRenameError:
            return "De vergelijking kon niet worden hernoemd. Mogelijk duplicaat of gereserveerde naam.";
        case Label.GameNotFound:
            return "Game niet gevonden.";
        case Label.NoBoxArt:
            return "De game heeft geen box‑art.";
        case Label.DownloadBoxArtError:
            return "Box‑art downloaden mislukt.";
        case Label.NoGameIcon:
            return "De game heeft geen pictogram.";
        case Label.DownloadIconError:
            return "Pictogram downloaden mislukt.";
        case Label.Rank:
            return "Rang";
        case Label.Player:
            return "Speler";
        case Label.Time:
            return "Tijd";
        case Label.Date:
            return "Datum:";
        case Label.Emulator:
            return "Emulator";
        case Label.EmulatorTag:
            return "Emulator";
        case Label.ObsoleteRuns:
            return "Verouderde runs";
        case Label.Shown:
            return "Getoond";
        case Label.Hidden:
            return "Verborgen";
        case Label.OpenLeaderboard:
            return "Leaderboard openen";
        case Label.Filters:
            return "Filters";
        case Label.LayoutEditor:
            return "Lay‑outeditor";
        case Label.Component:
            return "Component";
        case Label.AddComponent:
            return "Component toevoegen";
        case Label.RemoveComponent:
            return "Component verwijderen";
        case Label.DuplicateComponent:
            return "Component dupliceren";
        case Label.MoveComponentUp:
            return "Component omhoog";
        case Label.MoveComponentDown:
            return "Component omlaag";
        case Label.ComponentTitle:
            return "Titel";
        case Label.ComponentTitleDescription:
            return "Toont de naam van de game en de categorie, plus eventueel icoon, pogingen en voltooide runs.";
        case Label.ComponentGraph:
            return "Grafiek";
        case Label.ComponentGraphDescription:
            return "Visualiseert hoe ver de run voor/achter ligt t.o.v. de vergelijking, met punten per delta.";
        case Label.ComponentSplitsDescription:
            return "Hoofdcomponent voor split‑tijden met icoon, naam, delta en tijd; bevat scrollen.";
        case Label.ComponentDetailedTimer:
            return "Gedetailleerde timer";
        case Label.ComponentDetailedTimerDescription:
            return "Toont totale tijd en segmenttijd, plus optioneel vergelijkingen, icoon en naam.";
        case Label.ComponentTimer:
            return "Timer";
        case Label.ComponentTimerDescription:
            return "Toont totale tijd als digitale klok, kleur gebaseerd op vergelijking.";
        case Label.ComponentCurrentComparison:
            return "Huidige vergelijking";
        case Label.ComponentCurrentComparisonDescription:
            return "Toont de naam van de huidige vergelijking.";
        case Label.ComponentCurrentPace:
            return "Huidige pace";
        case Label.ComponentCurrentPaceDescription:
            return "Voorspelt de eindtijd op basis van de gekozen vergelijking.";
        case Label.ComponentDelta:
            return "Delta";
        case Label.ComponentDeltaDescription:
            return "Toont hoeveel je voor/achter ligt t.o.v. de vergelijking.";
        case Label.ComponentPbChance:
            return "PB‑kans";
        case Label.ComponentPbChanceDescription:
            return "Toont de kans om PB te halen; verandert tijdens de run.";
        case Label.ComponentPossibleTimeSave:
            return "Mogelijke tijdbesparing";
        case Label.ComponentPossibleTimeSaveDescription:
            return "Toont mogelijke besparing op het huidige segment en totaal.";
        case Label.ComponentPreviousSegment:
            return "Vorig segment";
        case Label.ComponentPreviousSegmentDescription:
            return "Toont winst/verlies in vorig segment en potentiële besparing; kan Live Segment tonen.";
        case Label.ComponentSegmentTime:
            return "Segmenttijd";
        case Label.ComponentSegmentTimeDescription:
            return "Toont segmenttijd voor de gekozen vergelijking; anders huidige vergelijking.";
        case Label.ComponentSumOfBest:
            return "Som van beste";
        case Label.ComponentSumOfBestDescription:
            return "Toont de snelst mogelijke eindtijd op basis van historische runs.";
        case Label.ComponentText:
            return "Tekst";
        case Label.ComponentTextDescription:
            return "Toont tekst; gecentreerd of links/rechts, of een aangepaste variabele.";
        case Label.ComponentTotalPlaytime:
            return "Totale speeltijd";
        case Label.ComponentTotalPlaytimeDescription:
            return "Toont de totale speeltijd van de categorie.";
        case Label.ComponentVariableDescription:
            return "Maakt een tekstcomponent die de waarde van variabele “{name}” toont.";
        case Label.ComponentBlankSpace:
            return "Lege ruimte";
        case Label.ComponentBlankSpaceDescription:
            return "Leeg component voor padding tussen onderdelen.";
        case Label.ComponentCarousel:
            return "Carrousel";
        case Label.ComponentCarouselDescription:
            return "Toont steeds één onderliggend component en wisselt daartussen. Geeft voorrang aan componenten waarvan de inhoud is veranderd en schakelt anders na een interval.";
        case Label.ComponentSeparator:
            return "Scheiding";
        case Label.ComponentSeparatorDescription:
            return "Tekent een scheidingslijn tussen componenten.";
        case Label.Row:
            return "Rij";
        case Label.RowDescription:
            return "Een rij componenten die horizontaal zijn ingedeeld, waardoor de lay-outrichting voor de componenten binnenin verandert.";
        case Label.Column:
            return "Kolom";
        case Label.ColumnDescription:
            return "Een kolom componenten die verticaal zijn ingedeeld, waardoor de lay-outrichting voor de componenten binnenin verandert.";
        case Label.AccuracySeconds:
            return "Seconden";
        case Label.AccuracyTenths:
            return "Tienden";
        case Label.AccuracyHundredths:
            return "Honderdsten";
        case Label.AccuracyMilliseconds:
            return "Milliseconden";
        case Label.FontStyle:
            return "Stijl";
        case Label.FontWeight:
            return "Gewicht";
        case Label.FontStretch:
            return "Rek";
        case Label.FontStyleNormal:
            return "Normaal";
        case Label.FontStyleItalic:
            return "Cursief";
        case Label.AlignmentAutomatic:
            return "Automatisch";
        case Label.AlignmentLeft:
            return "Links";
        case Label.AlignmentCenter:
            return "Midden";
        case Label.GradientTransparent:
            return "Transparant";
        case Label.GradientPlain:
            return "Effen";
        case Label.GradientVertical:
            return "Verticaal";
        case Label.GradientHorizontal:
            return "Horizontaal";
        case Label.GradientAlternating:
            return "Afwisselend";
        case Label.GradientPlainDelta:
            return "Effen delta";
        case Label.GradientVerticalDelta:
            return "Verticale delta";
        case Label.GradientHorizontalDelta:
            return "Horizontale delta";
        case Label.LayoutBackgroundImage:
            return "Afbeelding";
        case Label.LayoutBackgroundBrightness:
            return "Helderheid";
        case Label.LayoutBackgroundOpacity:
            return "Ondoorzichtigheid";
        case Label.LayoutBackgroundBlur:
            return "Vervaging";
        case Label.LayoutDirectionVertical:
            return "Verticaal";
        case Label.LayoutDirectionHorizontal:
            return "Horizontaal";
        case Label.ColumnKindTime:
            return "Tijd";
        case Label.ColumnKindVariable:
            return "Variabele";
        case Label.ColumnStartWithEmpty:
            return "Leeg";
        case Label.ColumnStartWithComparisonTime:
            return "Vergelijkingstijd";
        case Label.ColumnStartWithComparisonSegmentTime:
            return "Vergelijking segmenttijd";
        case Label.ColumnStartWithPossibleTimeSave:
            return "Mogelijke tijdswinst";
        case Label.IconDisplayModeBothRows:
            return "Beide rijen";
        case Label.IconDisplayModeFirstRow:
            return "Alleen de eerste rij";
        case Label.SubsplitDisplayModeFlat:
            return "Plat";
        case Label.SubsplitDisplayModeCurrentGroupExpanded:
            return "Huidige groep uitgeklapt";
        case Label.SubsplitDisplayModeAllGroupsExpanded:
            return "Alle groepen uitgeklapt";
        case Label.ColumnUpdateWithDontUpdate:
            return "Niet bijwerken";
        case Label.ColumnUpdateWithSplitTime:
            return "Split‑tijd";
        case Label.ColumnUpdateWithDelta:
            return "Tijd voor/achter";
        case Label.ColumnUpdateWithDeltaWithFallback:
            return "Tijd voor/achter of split‑tijd indien leeg";
        case Label.ColumnUpdateWithSegmentTime:
            return "Segmenttijd";
        case Label.ColumnUpdateWithSegmentDelta:
            return "Tijd gewonnen/verloren";
        case Label.ColumnUpdateWithSegmentDeltaWithFallback:
            return "Tijd gewonnen/verloren of segmenttijd indien leeg";
        case Label.ColumnUpdateTriggerOnStartingSegment:
            return "Bij starten segment";
        case Label.ColumnUpdateTriggerContextual:
            return "Contextueel";
        case Label.ColumnUpdateTriggerOnEndingSegment:
            return "Bij einde segment";
        case Label.ComparisonCurrentComparison:
            return "Huidige vergelijking";
        case Label.CustomVariableNoneAvailable:
            return "Geen variabelen beschikbaar";
        case Label.CustomVariableNoneAvailableTooltip:
            return "Aangepaste variabelen kunnen worden gedefinieerd op het tabblad Variabelen bij het bewerken van splits. Extra aangepaste variabelen kunnen automatisch worden geleverd door auto splitters.";
        case Label.HotkeyButtonTooltip:
            return "Klik om een sneltoets op te nemen. Je kunt ook knoppen op een gamepad gebruiken. Globale sneltoetsen zijn momenteel niet mogelijk. Gamepadknoppen werken globaal.";
        case Label.ServerConnect:
            return "Verbinden";
        case Label.ServerDisconnect:
            return "Verbinding verbreken";
        case Label.ServerConnecting:
            return "Bezig met verbinden...";
        case Label.ServerDisconnecting:
            return "Bezig met verbreken...";
        case Label.ConnectToServerTitle:
            return "Verbinden met server";
        case Label.ConnectToServerDescription:
            return "Geef de WebSocket-URL op:";
        case Label.Connect:
            return "Verbinden";
        case Label.UpdateAvailable:
            return "Er is een nieuwe versie van LiveSplit One beschikbaar! Klik hier om opnieuw te laden.";
        case Label.UnsavedChangesBeforeUnload:
            return "Er zijn niet-opgeslagen wijzigingen. Wil je LiveSplit One echt sluiten?";
        case Label.OpenSidebarAriaLabel:
            return "Zijbalk openen";
        case Label.FailedToSaveLayout:
            return "Lay-out opslaan mislukt.";
        case Label.FailedToSaveHotkeys:
            return "Sneltoetsinstellingen opslaan mislukt.";
        case Label.FailedToSaveGeneralSettings:
            return "Algemene instellingen opslaan mislukt.";
        case Label.FailedToSaveSplits:
            return "Splits opslaan mislukt.";
        case Label.LayoutCouldNotBeLoaded:
            return "De lay-out kon niet worden geladen. Dit is mogelijk geen geldige LiveSplit- of LiveSplit One-lay-out.";
        case Label.EmptySplitsNotSupported:
            return "Lege splits worden niet ondersteund.";
        case Label.BugEncountered:
            return "Er is een fout opgetreden:";
        case Label.PleaseReportIssueStart:
            return "Meld dit probleem ";
        case Label.ReportHere:
            return "hier";
        case Label.PleaseReportIssueEnd:
            return ".";
        case Label.BugReportInstructions:
            return "Om ons te helpen dit probleem op te lossen, voeg de stappen toe om het te reproduceren en voeg de splits en lay‑out toe die je gebruikte toen het probleem optrad.";
        case Label.LoadFailedPrivateBrowsing:
            return "LiveSplit One kon niet worden geladen.\nMogelijk gebruik je de privé‑modus.\nLiveSplit One kan geen splits, lay‑outs of andere instellingen opslaan door beperkingen van privé‑browsen.\nDeze beperkingen kunnen in de toekomst worden opgeheven.\nOm LiveSplit One nu te gebruiken, schakel privé‑browsen uit in je instellingen.";
        case Label.LoadFailedOutdatedBrowser:
            return "LiveSplit One kon niet worden geladen.\nMogelijk gebruik je een verouderde browser.\nWerk je browser of iOS‑versie bij en probeer het opnieuw.\nEen andere oorzaak kan een browserextensie zijn, zoals een adblocker, die de toegang tot belangrijke scripts blokkeert.";
        case Label.CustomComparisonsSidebarEditingHint:
            return "Sla eerst de vergelijking die je bewerkt op of annuleer die.";
        case Label.CustomComparisonsComparisonMenu:
            return "Meer acties";
        case Label.CustomComparisonsNameRequired:
            return "Geef de vergelijking een naam.";
        case Label.CustomComparisonsSearchBlocks:
            return "Blokken zoeken";
        case Label.CustomComparisonsNoBlocksFound:
            return "Geen blok komt overeen. Probeer een ander woord.";
        case Label.CustomComparisonsAboutBlock:
            return "Wat doet dit blok?";
        case Label.CustomComparisonsBlocks:
            return "Blokken";
        case Label.CustomComparisonsRailHint:
            return "Sleep een blok naar een vak, of op een blok om het te vervangen. Klik op een blok om het in het eerste lege vak te zetten waar het past.";
        case Label.CustomComparisonsDragBlock:
            return "Sleep om dit blok te verplaatsen";
        case Label.CustomComparisonsOpenEditorHint:
            return "Je eigen vergelijkingen werken met al je splits en verschijnen naast de andere vergelijkingen.";
        case Label.CustomComparisons:
            return "Eigen vergelijkingen";
        case Label.CustomComparisonsExportAll:
            return "Alles exporteren…";
        case Label.CustomComparisonsExportAllFileName:
            return "Eigen vergelijkingen";
        case Label.CustomComparisonsPluginUnavailable:
            return "De eigen vergelijkingen konden niet worden geladen, dus ze verschijnen nu niet als vergelijkingen: {0}";
        case Label.CustomComparisonsListHeading:
            return "Vergelijkingen";
        case Label.CustomComparisonsNoComparisons:
            return "Nog geen eigen vergelijkingen. Klik op Nieuw om je eerste te maken.";
        case Label.CustomComparisonsNew:
            return "Nieuw…";
        case Label.CustomComparisonsEdit:
            return "Bewerken…";
        case Label.CustomComparisonsRename:
            return "Hernoemen…";
        case Label.CustomComparisonsDuplicate:
            return "Dupliceren";
        case Label.CustomComparisonsImport:
            return "Importeren…";
        case Label.CustomComparisonsExport:
            return "Exporteren…";
        case Label.CustomComparisonsCopyAsText:
            return "Kopiëren als tekst";
        case Label.CustomComparisonsPaste:
            return "Plakken…";
        case Label.CustomComparisonsUsedBy:
            return "Gebruikt door {0} andere vergelijkingen";
        case Label.CustomComparisonsUsedByOne:
            return "Gebruikt door 1 andere vergelijking";
        case Label.CustomComparisonsUnreadable:
            return "Kan niet worden gelezen";
        case Label.CustomComparisonsSaveReminder:
            return "Wijzigingen worden meteen opgeslagen, op dit apparaat. Gebruik Alles exporteren om ze naar een ander apparaat mee te nemen.";
        case Label.CustomComparisonsCopiedToClipboard:
            return "Gekopieerd. Je kunt het in een chat of forumbericht plakken.";
        case Label.CustomComparisonsCouldNotCopy:
            return "Kon niet naar het klembord kopiëren.";
        case Label.CustomComparisonsCouldNotReadClipboard:
            return "Kon het klembord niet lezen. Plak de tekst hier:";
        case Label.CustomComparisonsErrorTitle:
            return "Dat werkte niet";
        case Label.CustomComparisonsRenameTitle:
            return "Vergelijking hernoemen";
        case Label.CustomComparisonsRenameDescription:
            return "De vergelijkingen die deze gebruiken, krijgen de nieuwe naam.";
        case Label.CustomComparisonsNameTakenTitle:
            return "Kies een andere naam";
        case Label.CustomComparisonsNameTakenDescription:
            return "{0} Typ een andere naam:";
        case Label.CustomComparisonsRemoveTitle:
            return "Vergelijking verwijderen";
        case Label.CustomComparisonsRemoveDescription:
            return "‘{0}’ verwijderen?";
        case Label.CustomComparisonsRemoveUsedDescription:
            return "‘{0}’ verwijderen? {1} andere vergelijkingen gebruiken deze en werken niet meer zonder.";
        case Label.CustomComparisonsRemoveUsedOneDescription:
            return "‘{0}’ verwijderen? 1 andere vergelijking gebruikt deze en werkt niet meer zonder.";
        case Label.CustomComparisonsPasteTitle:
            return "Vergelijking plakken";
        case Label.CustomComparisonsPasteDescription:
            return "Plak de tekst van een vergelijking die iemand heeft gedeeld:";
        case Label.CustomComparisonsCopySuffix:
            return "{0} (kopie)";
        case Label.CustomComparisonsTemplatesTitle:
            return "Nieuwe vergelijking";
        case Label.CustomComparisonsTemplatesDescription:
            return "Kies een startpunt. Elk is een kant-en-klare vergelijking die je zo kunt gebruiken of aanpassen.";
        case Label.CustomComparisonsTemplateGoalPace:
            return "Doeltempo";
        case Label.CustomComparisonsTemplateGoalPaceDescription:
            return "Je gebruikelijke runs, uitgerekt om precies op een doeltijd te eindigen.";
        case Label.CustomComparisonsTemplateRealisticPace:
            return "Realistisch tempo";
        case Label.CustomComparisonsTemplateRealisticPaceDescription:
            return "Percentiel 70 van de afgelopen 30 dagen: tijden die je ongeveer 70 % van de keren verslaat.";
        case Label.CustomComparisonsTemplateRecentForm:
            return "Recente vorm";
        case Label.CustomComparisonsTemplateRecentFormDescription:
            return "De mediaan van je laatste 10 voltooide runs, zonder de beste en slechtste uitschieter.";
        case Label.CustomComparisonsTemplateSafePace:
            return "Veilig tempo";
        case Label.CustomComparisonsTemplateSafePaceDescription:
            return "De langzaamste van je golds + 2 s en je mediaan, zodat het nooit onrealistisch snel is.";
        case Label.CustomComparisonsTemplateBlank:
            return "Leeg";
        case Label.CustomComparisonsTemplateBlankDescription:
            return "Begin vanaf nul.";
        case Label.CustomComparisonsNewComparisonName:
            return "Mijn vergelijking";
        case Label.CustomComparisonsEditorTitle:
            return "Eigen vergelijking";
        case Label.CustomComparisonsName:
            return "Naam";
        case Label.CustomComparisonsUndo:
            return "Ongedaan maken";
        case Label.CustomComparisonsRedo:
            return "Opnieuw";
        case Label.CustomComparisonsChooseBlock:
            return "Kies een blok…";
        case Label.CustomComparisonsReplaceBlock:
            return "Vervangen door…";
        case Label.CustomComparisonsWrapBlock:
            return "Plaatsen in…";
        case Label.CustomComparisonsUnwrapBlock:
            return "Verwijderen, inhoud behouden";
        case Label.CustomComparisonsPreviewBlock:
            return "Voorbeeld van dit blok";
        case Label.CustomComparisonsBlockMenu:
            return "Blokacties";
        case Label.CustomComparisonsFillEmptySlots:
            return "Vul de lege vakken om het voorbeeld te zien. Elk vak heeft een blok nodig.";
        case Label.CustomComparisonsDiscardChangesDescription:
            return "Deze vergelijking heeft wijzigingen die niet zijn opgeslagen.";
        case Label.CustomComparisonsDiscard:
            return "Verwerpen";
        case Label.CustomComparisonsKeepEditing:
            return "Verder bewerken";
        case Label.CustomComparisonsInvalidTime:
            return "Typ een tijd zoals 20:00 of 1:05:30.";
        case Label.CustomComparisonsNotFound:
            return "{0} (niet gevonden)";
        case Label.CustomComparisonsNotInSplits:
            return "{0}. (niet in je splits)";
        case Label.CustomComparisonsSegmentOption:
            return "{0}. {1}";
        case Label.CustomComparisonsAddRange:
            return "Bereik toevoegen";
        case Label.CustomComparisonsRemoveRange:
            return "Dit bereik verwijderen";
        case Label.CustomComparisonsRangeBackwards:
            return "Segmenten {0} tot {1} is omgekeerd. Wissel de getallen om.";
        case Label.CustomComparisonsCategorySources:
            return "Bronnen";
        case Label.CustomComparisonsCategoryFilters:
            return "Filters";
        case Label.CustomComparisonsCategoryAggregates:
            return "Samenvattingen";
        case Label.CustomComparisonsCategoryMath:
            return "Rekenen";
        case Label.CustomComparisonsCategoryControl:
            return "Besturing";
        case Label.CustomComparisonsKindSamples:
            return "Een lijst met tijden per segment";
        case Label.CustomComparisonsKindTimes:
            return "Eén tijd per segment";
        case Label.CustomComparisonsBlockResult:
            return "deze vergelijking is";
        case Label.CustomComparisonsBlockResultTip:
            return "De afgewerkte vergelijking. Zet de blokken die haar opbouwen hierin.";
        case Label.CustomComparisonsBlockSegmentHistory:
            return "al mijn tijden per segment";
        case Label.CustomComparisonsBlockSegmentHistoryTip:
            return "Elke tijd die je per segment hebt geregistreerd. Overgeslagen segmenten, en het samengevoegde segment direct na een overslag, worden weggelaten.";
        case Label.CustomComparisonsBlockComparison:
            return "vergelijking {name}";
        case Label.CustomComparisonsBlockComparisonTip:
            return "Een bestaande vergelijking, segment voor segment. Ingebouwde werken ook als ze zijn uitgeschakeld.";
        case Label.CustomComparisonsBlockAttempt:
            return "poging nr. {number}";
        case Label.CustomComparisonsBlockAttemptTip:
            return "De segmenten van een eerdere poging, op nummer in de pogingsgeschiedenis. Leeg waar die run een split oversloeg of werd gereset.";
        case Label.CustomComparisonsBlockBestRecentRun:
            return "mijn beste run van de afgelopen {days} dagen";
        case Label.CustomComparisonsBlockBestRecentRunTip:
            return "De segmenten van je snelste voltooide run van de afgelopen N dagen: een ‘recente PB’ die meebeweegt terwijl je speelt. Leeg als er in die tijd geen run is voltooid.";
        case Label.CustomComparisonsBlockLastN:
            return "laatste {count} tijden van";
        case Label.CustomComparisonsBlockLastNTip:
            return "Houdt de meest recente tijden per segment. Telt hoe vaak dat segment is voltooid, niet de pogingen.";
        case Label.CustomComparisonsBlockCompletedRunsOnly:
            return "alleen van voltooide runs";
        case Label.CustomComparisonsBlockCompletedRunsOnlyTip:
            return "Houdt alleen tijden van pogingen die de hele run hebben uitgespeeld.";
        case Label.CustomComparisonsBlockRecentDays:
            return "van de afgelopen {days} dagen";
        case Label.CustomComparisonsBlockRecentDaysTip:
            return "Houdt alleen tijden van pogingen die in de afgelopen N dagen eindigden, zodat oude tijden niet meer meetellen. Pogingen zonder datum worden weggelaten.";
        case Label.CustomComparisonsBlockFinishedUnder:
            return "van runs die eindigden onder {totalSeconds}";
        case Label.CustomComparisonsBlockFinishedUnderTip:
            return "Houdt alleen tijden van runs die sneller dan dit eindigden, zodat alleen je goede runs meetellen.";
        case Label.CustomComparisonsBlockReachedSegment:
            return "van runs die {segment} bereikten";
        case Label.CustomComparisonsBlockReachedSegmentTip:
            return "Houdt alleen tijden van pogingen die minstens tot dit segment kwamen. Zoals ‘alleen van voltooide runs’, maar voor games waarin de meeste runs vroeg worden gereset. Als dit segment niet in je splits staat, zie je een waarschuwing en blijven er geen tijden over.";
        case Label.CustomComparisonsBlockTrimOutliers:
            return "zonder de snelste en langzaamste {percent} % van";
        case Label.CustomComparisonsBlockTrimOutliersTip:
            return "Verwijdert uitschieters voor het middelen: laat dat deel van de snelste en langzaamste tijden van elk segment weg. Bij weinig tijden wordt niets weggelaten.";
        case Label.CustomComparisonsBlockAtLeast:
            return "alleen als er minstens {count} tijden zijn in";
        case Label.CustomComparisonsBlockAtLeastTip:
            return "Segmenten met minder tijden worden leeg, zodat je ze kunt vullen met ‘indien leeg, gebruik’ in plaats van te vertrouwen op te weinig gegevens.";
        case Label.CustomComparisonsBlockAggregate:
            return "{kind} van";
        case Label.CustomComparisonsBlockAggregateTip:
            return "Maakt van de lijst met tijden van elk segment één tijd. Een segment zonder tijden blijft leeg.";
        case Label.CustomComparisonsAggregateMedian:
            return "mediaan";
        case Label.CustomComparisonsAggregateAverage:
            return "gemiddelde";
        case Label.CustomComparisonsAggregateMin:
            return "beste (min)";
        case Label.CustomComparisonsAggregateMax:
            return "slechtste (max)";
        case Label.CustomComparisonsBlockPercentile:
            return "percentiel {percent} van";
        case Label.CustomComparisonsBlockPercentileTip:
            return "0 is je snelste tijd, 100 je langzaamste, 50 de mediaan. 70 betekent: je verslaat deze tijd ongeveer 70 % van de keren.";
        case Label.CustomComparisonsBlockWeightedAverage:
            return "recent gewogen gemiddelde van";
        case Label.CustomComparisonsBlockWeightedAverageFooter:
            return "gewicht halveert elke {halfLife} oudere tijden";
        case Label.CustomComparisonsBlockWeightedAverageTip:
            return "Een gemiddelde waarin recente tijden zwaarder wegen. De nieuwste tijd telt volledig, een die N tijden ouder is telt half, 2N tijden ouder een kwart, enzovoort.";
        case Label.CustomComparisonsBlockAddTime:
            return "tel {seconds} s per segment op bij";
        case Label.CustomComparisonsBlockAddTimeTip:
            return "Telt tijd op bij elk segment (of trekt die af, als het negatief is). Gaat nooit onder nul.";
        case Label.CustomComparisonsBlockScale:
            return "{percent} % van";
        case Label.CustomComparisonsBlockScaleTip:
            return "Schaalt elk segment. 103 % is 3 % langzamer, 97 % is 3 % sneller.";
        case Label.CustomComparisonsBlockRound:
            return "afronden op {step}";
        case Label.CustomComparisonsBlockRoundTip:
            return "Rondt elk segment af op de dichtstbijzijnde 0,1 s (of 1 s, 0,01 s), zodat de splittijden ook netjes zijn.";
        case Label.CustomComparisonsRoundStep:
            return "{0} s";
        case Label.CustomComparisonsBlockClamp:
            return "houd";
        case Label.CustomComparisonsBlockClampTip:
            return "Houdt elk segment tussen twee grenzen, bijvoorbeeld nooit sneller dan je golds en nooit langzamer dan je PB. Als de grenzen elkaar kruisen, wint ‘nooit sneller dan’.";
        case Label.CustomComparisonsSlotNeverFaster:
            return "nooit sneller dan";
        case Label.CustomComparisonsSlotNeverSlower:
            return "nooit langzamer dan";
        case Label.CustomComparisonsBlockStretchToTotal:
            return "uitrekken tot een eindtijd van {totalSeconds}";
        case Label.CustomComparisonsBlockStretchToTotalTip:
            return "Schaalt elk segment met dezelfde factor zodat de hele run precies op de doeltijd uitkomt. Als een segment leeg is, is het resultaat leeg: vul gaten eerst met ‘indien leeg, gebruik’.";
        case Label.CustomComparisonsBlockBlend:
            return "{percent} % van de weg van";
        case Label.CustomComparisonsBlockBlendTip:
            return "Mengt twee regels per segment. 0 % is helemaal de eerste, 100 % helemaal de tweede, 75 % is driekwart van de weg.";
        case Label.CustomComparisonsSlotTo:
            return "naar";
        case Label.CustomComparisonsBlockPick:
            return "de {kind} van";
        case Label.CustomComparisonsBlockPickTip:
            return "Per segment de langzaamste (of snelste) van de twee regels. Als een ervan geen tijd heeft voor een segment, wordt de andere gebruikt.";
        case Label.CustomComparisonsPickSlower:
            return "langzaamste";
        case Label.CustomComparisonsPickFaster:
            return "snelste";
        case Label.CustomComparisonsSlotAnd:
            return "en";
        case Label.CustomComparisonsBlockFallback:
            return "gebruik";
        case Label.CustomComparisonsBlockFallbackTip:
            return "Vult alleen de segmenten die de eerste regel leeg laat, bijvoorbeeld omdat er nog niet genoeg runs zijn.";
        case Label.CustomComparisonsSlotIfEmpty:
            return "indien leeg, gebruik";
        case Label.CustomComparisonsBlockSegmentRange:
            return "voor segmenten … gebruik … anders …";
        case Label.CustomComparisonsBlockSegmentRangeTip:
            return "Gebruikt één regel voor een bereik van segmenten en een andere voor de rest. Voeg meer bereiken toe voor meer regels: het eerste bereik dat past wint. Als een bereik voorbij het einde van je splits wijst, zie je een waarschuwing.";
        case Label.CustomComparisonsBlockSegmentRangeHeader:
            return "verschillende regels voor verschillende segmenten (het eerste bereik dat past wint)";
        case Label.CustomComparisonsRangeCase:
            return "voor segmenten {from} tot {to} gebruik";
        case Label.CustomComparisonsSlotOtherwise:
            return "anders";
        case Label.CustomComparisonsPreview:
            return "Voorbeeld";
        case Label.CustomComparisonsPreviewingBlock:
            return "Voorbeeld van een blok, niet van de vergelijking";
        case Label.CustomComparisonsShowWholeComparison:
            return "Hele vergelijking tonen";
        case Label.CustomComparisonsSegment:
            return "Segment";
        case Label.CustomComparisonsDifferenceFrom:
            return "Verschil met";
        case Label.CustomComparisonsFasterThanGold:
            return "Sneller dan je beste tijd voor dit segment (je gold)";
        case Label.CustomComparisonsFasterThanGoldWarning:
            return "{0} segmenten zijn sneller dan je golds. Dat mag, maar dit tempo is misschien niet realistisch.";
        case Label.CustomComparisonsFasterThanGoldWarningOne:
            return "1 segment is sneller dan je gold. Dat mag, maar dit tempo is misschien niet realistisch.";
        case Label.CustomComparisonsFinishLine:
            return "Eindigt op {0}, {1} ten opzichte van {2}.";
        case Label.CustomComparisonsFinishVsSumOfBest:
            return "Je som van beste segmenten is {0}.";
        case Label.CustomComparisonsNoProblems:
            return "Geen problemen.";
        case Label.CustomComparisonsNoTimesLeft:
            return "Geen enkel segment heeft een tijd. Klik op een rij om te zien waarom, of voeg ‘gebruik … indien leeg, gebruik’ toe met een reserve zoals je PB.";
        case Label.CustomComparisonsOriginTitle:
            return "Waar deze tijd vandaan komt";
        case Label.CustomComparisonsOriginEmpty:
            return "Dit segment heeft geen tijd, dus elke split erna is ook leeg.";
        case Label.CustomComparisonsOriginFillingGap:
            return "vult een gat";
        case Label.CustomComparisonsOriginPicked:
            return "de {0} van de twee";
        case Label.CustomComparisonsOriginLowLimit:
            return "vastgehouden op de grens ‘nooit sneller dan’";
        case Label.CustomComparisonsOriginHighLimit:
            return "vastgehouden op de grens ‘nooit langzamer dan’";
        case Label.CustomComparisonsClickRowHint:
            return "Klik op een rij om te zien waar de tijd vandaan komt.";
        case Label.CustomComparisonsDescYourGolds:
            return "je golds";
        case Label.CustomComparisonsDescYourPb:
            return "je PB";
        case Label.CustomComparisonsDescComparison:
            return "‘{0}’";
        case Label.CustomComparisonsDescAttempt:
            return "poging nr. {0}";
        case Label.CustomComparisonsDescBestRecentRun:
            return "je beste run van de afgelopen {0} dagen";
        case Label.CustomComparisonsDescWeightedAverage:
            return "het recent gewogen gemiddelde van {0}";
        case Label.CustomComparisonsDescClamp:
            return "{0}, gehouden tussen {1} en {2}";
        case Label.CustomComparisonsDescRound:
            return "{0}, afgerond op {1}";
        case Label.CustomComparisonsDescMedian:
            return "de mediaan van {0}";
        case Label.CustomComparisonsDescAverage:
            return "het gemiddelde van {0}";
        case Label.CustomComparisonsDescMin:
            return "de beste van {0}";
        case Label.CustomComparisonsDescMax:
            return "de slechtste van {0}";
        case Label.CustomComparisonsDescPercentile:
            return "percentiel {0} van {1}";
        case Label.CustomComparisonsDescAddTime:
            return "{0} + {1}";
        case Label.CustomComparisonsDescRemoveTime:
            return "{0} − {1}";
        case Label.CustomComparisonsDescScale:
            return "{0} % van {1}";
        case Label.CustomComparisonsDescStretch:
            return "{0}, uitgerekt tot een eindtijd van {1}";
        case Label.CustomComparisonsDescBlend:
            return "{0} % van de weg van {1} naar {2}";
        case Label.CustomComparisonsDescSlower:
            return "de langzaamste van {0} en {1}";
        case Label.CustomComparisonsDescFaster:
            return "de snelste van {0} en {1}";
        case Label.CustomComparisonsDescFallback:
            return "{0} (of {1} waar dat leeg is)";
        case Label.CustomComparisonsDescRangeArm:
            return "{0} voor {1}";
        case Label.CustomComparisonsDescRangeOtherwise:
            return "{0}, anders {1}";
        case Label.CustomComparisonsDescSomething:
            return "iets";
        case Label.CustomComparisonsDescAllTimes:
            return "al je tijden";
        case Label.CustomComparisonsDescLastN:
            return "je laatste {0} tijden";
        case Label.CustomComparisonsQualCompleted:
            return "van voltooide runs";
        case Label.CustomComparisonsQualRecentDays:
            return "van de afgelopen {0} dagen";
        case Label.CustomComparisonsQualUnder:
            return "van runs onder {0}";
        case Label.CustomComparisonsQualTrim:
            return "zonder de snelste en langzaamste {0} %";
        case Label.CustomComparisonsQualAtLeast:
            return "als er minstens {0} zijn";
        case Label.CustomComparisonsQualReached:
            return "van runs die {0} bereikten";
        case Label.CustomComparisonsSumGapsFilled:
            return "{0} Gaten gevuld met {1}.";
        case Label.CustomComparisonsSumRangeArm:
            return "{0}: {1}";
        case Label.CustomComparisonsSumOtherSegments:
            return "Andere segmenten: {0}";
        case Label.CustomComparisonsSegmentNumber:
            return "segment {0}";
        case Label.CustomComparisonsSegmentSpan:
            return "{0} tot {1}";
        case Label.CustomComparisonsSeconds:
            return "{0} s";
        case Label.CustomComparisonsListAnd:
            return "{0} en {1}";
        case Label.CustomComparisonsWarnSegment:
            return "Gebruikt segment {0}, maar je splits hebben er {1}";
        case Label.CustomComparisonsWarnSegments:
            return "Gebruikt segmenten {0}, maar je splits hebben er {1}";
        case Label.CustomComparisonsSentence:
            return "{0}.";
    }
}
