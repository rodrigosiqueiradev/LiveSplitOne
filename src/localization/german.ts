import { Label } from ".";

export function resolveGerman(text: Label): string {
    switch (text) {
        case Label.Ok:
            return "OK";
        case Label.Cancel:
            return "Abbrechen";
        case Label.Settings:
            return "Einstellungen";
        case Label.Language:
            return "Sprache";
        case Label.LanguageDescription:
            return "Legt die in der Anwendung verwendete Sprache fest.";
        case Label.LanguageAuto:
            return "Automatisch";
        case Label.Theme:
            return "Design";
        case Label.ThemeDescription:
            return "Legt fest, ob das Systemdesign übernommen oder der helle bzw. dunkle Modus erzwungen wird.";
        case Label.ThemeLightMode:
            return "Heller Modus";
        case Label.ThemeDarkMode:
            return "Dunkler Modus";
        case Label.HotkeysHeading:
            return "Tastenkürzel";
        case Label.GeneralHeading:
            return "Allgemein";
        case Label.NetworkHeading:
            return "Netzwerk";
        case Label.FrameRate:
            return "Bildwiederholrate";
        case Label.FrameRateDescription:
            return "Legt fest, mit welcher Bildwiederholrate der Timer angezeigt wird. „Batteriebewusst“ versucht anhand des Gerätetyps und des Ladestatus eine gute Bildwiederholrate zu wählen. „An Bildschirm anpassen“ lässt den Timer der Bildwiederholrate des Bildschirms entsprechen.";
        case Label.FrameRateBatteryAware:
            return "Batteriebewusst";
        case Label.FrameRateMatchScreen:
            return "An Bildschirm anpassen";
        case Label.SaveOnReset:
            return "Beim Zurücksetzen speichern";
        case Label.SaveOnResetDescription:
            return "Legt fest, ob die Splits beim Zurücksetzen des Timers automatisch gespeichert werden.";
        case Label.ShowControlButtons:
            return "Steuerungsbuttons anzeigen";
        case Label.ShowControlButtonsDescription:
            return "Legt fest, ob unter dem Timer Schaltflächen angezeigt werden, mit denen er gesteuert werden kann. Wenn deaktiviert, müssen die Hotkeys verwendet werden.";
        case Label.ShowManualGameTimeInput:
            return "Manuelle Spielzeit‑Eingabe anzeigen";
        case Label.ShowManualGameTimeInputDescription:
            return "Zeigt ein Textfeld unter dem Timer an, mit dem du die Spielzeit manuell eingeben kannst. Du startest den Timer und machst Splits, indem du im Textfeld die Eingabetaste drückst. Vergleiche mit „Spielzeit“.";
        case Label.ManualGameTimeMode:
            return "Manueller Spielzeitmodus";
        case Label.ManualGameTimeModeDescription:
            return "Legt fest, ob die manuelle Spielzeit als Segmentzeiten oder Splitzeiten eingegeben wird.";
        case Label.ManualGameTimeModeSegmentTimes:
            return "Segmentzeiten";
        case Label.ManualGameTimeModeSplitTimes:
            return "Splitzeiten";
        case Label.AlwaysOnTop:
            return "Immer im Vordergrund";
        case Label.AlwaysOnTopDescription:
            return "Hält das Fenster immer über anderen Fenstern.";
        case Label.SpeedrunComIntegration:
            return "Speedrun.com‑Integration";
        case Label.SpeedrunComIntegrationDescription:
            return "Fragt die Liste der Spiele, Kategorien und Bestenlisten von speedrun.com ab.";
        case Label.ServerConnection:
            return "Serververbindung";
        case Label.ServerConnectionDescription:
            return "Ermöglicht die Verbindung zu einem WebSocket‑Server, der den Timer durch das Senden verschiedener Befehle steuern kann. Die Befehle sind derzeit eine Teilmenge der Befehle, die das ursprüngliche LiveSplit unterstützt.";
        case Label.ServerConnectionExperimental:
            return "Diese Funktion ist experimentell und das Protokoll wird sich wahrscheinlich in Zukunft ändern.";
        case Label.TheRunGgIntegration:
            return "TheRun.gg-Integration";
        case Label.TheRunGgIntegrationDescription:
            return "Integriert sich mit therun.gg für Live-Run-Tracking und automatisches Hochladen von Statistiken. Für diese Funktion benötigst du einen Upload-Schlüssel von therun.gg.";
        case Label.TheRunGgLiveTracking:
            return "Live-Tracking";
        case Label.TheRunGgLiveTrackingDescription:
            return "Wenn aktiviert, werden Live-Split-Daten nach jeder Split-Aktion an therun.gg gesendet, sodass der Run live auf der Website verfolgt werden kann.";
        case Label.TheRunGgStatsUploading:
            return "Statistik-Upload";
        case Label.TheRunGgStatsUploadingDescription:
            return "Wenn aktiviert, wird die Splits-Datei nach jedem Reset oder abgeschlossenen Run zu therun.gg hochgeladen und deine Runs werden automatisch mit der Website synchronisiert.";
        case Label.HotkeyAlreadyInUse:
            return "Der Hotkey wird bereits verwendet.";
        case Label.Start:
            return "Start";
        case Label.Resume:
            return "Fortsetzen";
        case Label.Pause:
            return "Pause";
        case Label.UndoSplit:
            return "Split rückgängig";
        case Label.Reset:
            return "Zurücksetzen";
        case Label.SkipSplit:
            return "Split überspringen";
        case Label.ManualGameTimePlaceholder:
            return "Manuelle Spielzeit";
        case Label.LiveSplitLogoAlt:
            return "LiveSplit‑Logo";
        case Label.LiveSplitOne:
            return "LiveSplit One";
        case Label.Splits:
            return "Splits";
        case Label.Layout:
            return "Layout";
        case Label.CompareAgainst:
            return "Vergleichen mit";
        case Label.RealTime:
            return "Echtzeit";
        case Label.GameTime:
            return "Spielzeit";
        case Label.PopOut:
            return "Pop‑out";
        case Label.About:
            return "Über";
        case Label.Back:
            return "Zurück";
        case Label.AboutVersionPrefix:
            return "Version:";
        case Label.AboutDescription:
            return "LiveSplit One ist eine plattformübergreifende Version von LiveSplit, dem schlanken und hochgradig anpassbaren Timer für Speedrunner.";
        case Label.AboutViewSource:
            return "Quellcode auf GitHub ansehen";
        case Label.AboutRecentChanges:
            return "Neueste Änderungen";
        case Label.AboutContributors:
            return "Mitwirkende";
        case Label.Loading:
            return "Wird geladen...";
        case Label.Add:
            return "Hinzufügen";
        case Label.Import:
            return "Importieren";
        case Label.OpenSplits:
            return "Splits öffnen";
        case Label.EditSplits:
            return "Splits bearbeiten";
        case Label.ExportSplits:
            return "Splits exportieren";
        case Label.CopySplits:
            return "Splits kopieren";
        case Label.RemoveSplits:
            return "Splits entfernen";
        case Label.Untitled:
            return "Unbenannt";
        case Label.NoCategory:
            return "—";
        case Label.DiscardChangesTitle:
            return "Änderungen verwerfen?";
        case Label.DiscardChangesDescription:
            return "Deine aktuellen Splits wurden geändert und enthalten nicht gespeicherte Änderungen. Möchtest du fortfahren und diese Änderungen verwerfen?";
        case Label.DeleteSplitsTitle:
            return "Splits löschen?";
        case Label.DeleteSplitsDescription:
            return "Möchtest du die Splits wirklich löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.";
        case Label.SaveBestTimesTitle:
            return "Bestzeiten speichern?";
        case Label.SaveBestTimesDescription:
            return "Du hast einige deiner Bestzeiten unterboten. Möchtest du sie aktualisieren?";
        case Label.Yes:
            return "Ja";
        case Label.No:
            return "Nein";
        case Label.DontReset:
            return "Nicht zurücksetzen";
        case Label.FailedToExportSplits:
            return "Splits konnten nicht exportiert werden.";
        case Label.CantImportEmptySplits:
            return "Leere Splits können nicht importiert werden.";
        case Label.FailedToReadFile:
            return "Datei konnte nicht gelesen werden:";
        case Label.FailedToImportSplits:
            return "Splits konnten nicht importiert werden:";
        case Label.CouldNotParseSplits:
            return "Splits konnten nicht geparst werden.";
        case Label.LoadedSplitsInvalid:
            return "Die geladenen Splits sind ungültig.";
        case Label.NewSegmentName:
            return "Zeit";
        case Label.EditWhileRunningError:
            return "Du kannst deine Splits nicht bearbeiten, während der Timer läuft.";
        case Label.Edit:
            return "Bearbeiten";
        case Label.Save:
            return "Speichern";
        case Label.Export:
            return "Exportieren";
        case Label.FailedToParseTimeSpan:
            return "TimeSpan konnte nicht geparst werden";
        case Label.Default:
            return "Standard";
        case Label.Game:
            return "Spiel";
        case Label.Category:
            return "Kategorie";
        case Label.StartTimerAt:
            return "Timer starten bei";
        case Label.Attempts:
            return "Versuche";
        case Label.SplitsEditor:
            return "Splits‑Editor";
        case Label.Variables:
            return "Variablen";
        case Label.Rules:
            return "Regeln";
        case Label.Leaderboard:
            return "Rangliste";
        case Label.InsertAbove:
            return "Darüber einfügen";
        case Label.InsertBelow:
            return "Darunter einfügen";
        case Label.RemoveSegment:
            return "Segment entfernen";
        case Label.MoveUp:
            return "Nach oben";
        case Label.MoveDown:
            return "Nach unten";
        case Label.CreateGroup:
            return "Gruppe erstellen";
        case Label.RemoveGroup:
            return "Gruppe entfernen";
        case Label.AddVariable:
            return "Variable hinzufügen";
        case Label.OpenPbPage:
            return "PB‑Seite öffnen";
        case Label.AssociateRun:
            return "Run verknüpfen";
        case Label.Icon:
            return "Symbol";
        case Label.SegmentName:
            return "Segmentname";
        case Label.SplitTime:
            return "Splitzeit";
        case Label.SegmentTime:
            return "Segmentzeit";
        case Label.BestSegment:
            return "Bestes Segment";
        case Label.SpeedrunComVariableTooltip:
            return "Eine speedrun.com‑Variable, die zum Spiel gehört.";
        case Label.Region:
            return "Region";
        case Label.RegionDescription:
            return "Die Region des gespielten Spiels.";
        case Label.Platform:
            return "Plattform";
        case Label.PlatformDescription:
            return "Die Plattform, auf der das Spiel gespielt wird.";
        case Label.UsesEmulator:
            return "Emulator verwenden";
        case Label.UsesEmulatorDescription:
            return "Ob ein Emulator zum Spielen verwendet wird.";
        case Label.CustomVariableTooltip:
            return "Eine von dir definierte Variable. Diese kann im Text‑Komponent angezeigt werden.";
        case Label.NoVariables:
            return "Derzeit gibt es keine benutzerdefinierten Variablen für dieses Spiel.";
        case Label.NoVariablesWithSpeedrunCom:
            return "Derzeit gibt es keine speedrun.com‑Variablen oder benutzerdefinierten Variablen für dieses Spiel.";
        case Label.TimedWithoutLoads:
            return "werden ohne Ladezeiten getimt";
        case Label.TimedWithGameTime:
            return "werden mit Spielzeit getimt";
        case Label.RequireVideoProof:
            return "erfordern einen Videobeweis";
        case Label.RunsOfThisGamePrefix:
            return "Runs dieses Spiels ";
        case Label.RunsOfThisGameSuffix:
            return ".";
        case Label.And:
            return "und";
        case Label.SetIcon:
            return "Symbol festlegen";
        case Label.SetIconDescription:
            return "Wähle eine Bilddatei als Spielsymbol. Manche Formate funktionieren nicht überall.";
        case Label.DownloadBoxArt:
            return "Cover herunterladen";
        case Label.DownloadBoxArtDescription:
            return "Versucht, das Cover von speedrun.com herunterzuladen und als Spielsymbol zu setzen.";
        case Label.DownloadIcon:
            return "Symbol herunterladen";
        case Label.DownloadIconDescription:
            return "Versucht, das Symbol des Spiels von speedrun.com herunterzuladen.";
        case Label.RemoveIcon:
            return "Symbol entfernen";
        case Label.RemoveIconDescription:
            return "Entfernt das Spielsymbol.";
        case Label.CleaningMenu:
            return "Bereinigen…";
        case Label.ClearOnlyHistory:
            return "Nur Verlauf löschen";
        case Label.ClearOnlyHistoryDescription:
            return "Splits speichern den gesamten Verlauf aller Runs. Damit kannst du den Verlauf löschen, ohne PB, beste Segmente oder Vergleiche zu beeinflussen.";
        case Label.ClearAllTimes:
            return "Alle Zeiten löschen";
        case Label.ClearAllTimesDescription:
            return "Entfernt alle Zeiten inklusive Verlauf, sodass die Splits komplett leer sind.";
        case Label.CleanSumOfBest:
            return "Summe der Besten bereinigen";
        case Label.CleanSumOfBestDescription:
            return "Ermöglicht das interaktive Entfernen von Problemen in der Segmenthistorie, die eine ungenaue Summe der besten Segmente verursachen.";
        case Label.ComparisonsMenu:
            return "Vergleiche…";
        case Label.AddComparison:
            return "Vergleich hinzufügen";
        case Label.AddComparisonDescription:
            return "Fügt einen benutzerdefinierten Vergleich hinzu, in dem du Zeiten speichern kannst.";
        case Label.ImportComparison:
            return "Vergleich importieren";
        case Label.ImportComparisonDescription:
            return "Importiert die Personal Best aus einer Splits‑Datei als Vergleich.";
        case Label.GenerateGoalComparison:
            return "Zielvergleich erzeugen";
        case Label.GenerateGoalComparisonDescription:
            return "Erzeugt einen Zielvergleich basierend auf einer Zielzeit.";
        case Label.CopyComparison:
            return "Vergleich kopieren";
        case Label.CopyComparisonDescription:
            return "Kopiert einen vorhandenen Vergleich als neuen benutzerdefinierten Vergleich.";
        case Label.SetSegmentIcon:
            return "Symbol festlegen";
        case Label.SetSegmentIconDescription:
            return "Wähle eine Bilddatei als Segmentsymbol. Manche Formate funktionieren nicht überall.";
        case Label.RemoveSegmentIcon:
            return "Symbol entfernen";
        case Label.RemoveSegmentIconDescription:
            return "Entfernt das Segmentsymbol.";
        case Label.Rename:
            return "Umbenennen";
        case Label.RenameDescription:
            return "Wähle einen neuen Namen für den benutzerdefinierten Vergleich. Reservierte Namen oder Duplikate sind nicht erlaubt.";
        case Label.CopyAction:
            return "Kopieren";
        case Label.CopyDescription:
            return "Erstellt eine Kopie des benutzerdefinierten Vergleichs.";
        case Label.ACopy:
            return "Kopie";
        case Label.Remove:
            return "Entfernen";
        case Label.RemoveDescription:
            return "Entfernt den benutzerdefinierten Vergleich.";
        case Label.AnyPercent:
            return "Any%";
        case Label.LowPercent:
            return "Low%";
        case Label.HundredPercent:
            return "100%";
        case Label.AddComparisonPrompt:
            return "Gib den Namen des Vergleichs an, den du hinzufügen möchtest:";
        case Label.ComparisonAddError:
            return "Der Vergleich konnte nicht hinzugefügt werden. Möglicherweise Duplikat oder reservierter Name.";
        case Label.ImportComparisonPrompt:
            return "Gib den Namen des Vergleichs an, den du importieren möchtest:";
        case Label.GenerateGoalComparisonPrompt:
            return "Gib die Zeit an, die du erreichen möchtest:";
        case Label.Generate:
            return "Erzeugen";
        case Label.GenerateGoalComparisonError:
            return "Zielvergleich konnte nicht erzeugt werden. Bitte eine gültige Zeit angeben.";
        case Label.CopyComparisonPrompt:
            return "Gib den Namen des Vergleichs an, den du kopieren möchtest:";
        case Label.CopyComparisonError:
            return "Vergleich konnte nicht kopiert werden. Er existiert möglicherweise nicht.";
        case Label.NothingToCleanUp:
            return "Es gibt nichts zu bereinigen.";
        case Label.CleanPrompt:
            return "Bereinigen?";
        case Label.AssociateRunPrompt:
            return "Gib die speedrun.com‑ID oder URL des Runs an:";
        case Label.Associate:
            return "Verknüpfen";
        case Label.InvalidSpeedrunUrl:
            return "Ungültige speedrun.com‑ID oder URL.";
        case Label.AssociateRunError:
            return "Run konnte nicht verknüpft werden. Die ID ist möglicherweise ungültig.";
        case Label.AddVariablePrompt:
            return "Gib den Namen der benutzerdefinierten Variable an, die du hinzufügen möchtest:";
        case Label.RenameComparison:
            return "Vergleich umbenennen";
        case Label.RenameComparisonPrompt:
            return "Gib den neuen Namen des Vergleichs an:";
        case Label.ComparisonRenameError:
            return "Der Vergleich konnte nicht umbenannt werden. Möglicherweise Duplikat oder reservierter Name.";
        case Label.GameNotFound:
            return "Spiel nicht gefunden.";
        case Label.NoBoxArt:
            return "Das Spiel hat kein Cover.";
        case Label.DownloadBoxArtError:
            return "Cover konnte nicht heruntergeladen werden.";
        case Label.NoGameIcon:
            return "Das Spiel hat kein Symbol.";
        case Label.DownloadIconError:
            return "Symbol konnte nicht heruntergeladen werden.";
        case Label.Rank:
            return "Rang";
        case Label.Player:
            return "Spieler";
        case Label.Time:
            return "Zeit";
        case Label.Date:
            return "Datum:";
        case Label.Emulator:
            return "Emulator";
        case Label.EmulatorTag:
            return "Emulator";
        case Label.ObsoleteRuns:
            return "Veraltete Runs";
        case Label.Shown:
            return "Angezeigt";
        case Label.Hidden:
            return "Ausgeblendet";
        case Label.OpenLeaderboard:
            return "Rangliste öffnen";
        case Label.Filters:
            return "Filter";
        case Label.LayoutEditor:
            return "Layout‑Editor";
        case Label.Component:
            return "Komponente";
        case Label.AddComponent:
            return "Komponente hinzufügen";
        case Label.RemoveComponent:
            return "Komponente entfernen";
        case Label.DuplicateComponent:
            return "Komponente duplizieren";
        case Label.MoveComponentUp:
            return "Komponente nach oben";
        case Label.MoveComponentDown:
            return "Komponente nach unten";
        case Label.ComponentTitle:
            return "Titel";
        case Label.ComponentTitleDescription:
            return "Zeigt Spielname und Kategorie sowie optional Icon, Versuche und abgeschlossene Runs.";
        case Label.ComponentGraph:
            return "Graph";
        case Label.ComponentGraphDescription:
            return "Visualisiert den Vorsprung/Rückstand über den ganzen Run.";
        case Label.ComponentSplitsDescription:
            return "Hauptkomponente für Splits mit Icon, Name, Delta und Zeit; scrollbar.";
        case Label.ComponentDetailedTimer:
            return "Detaillierter Timer";
        case Label.ComponentDetailedTimerDescription:
            return "Zeigt Gesamt‑ und Segmentzeit sowie optionale Infos.";
        case Label.ComponentTimer:
            return "Timer";
        case Label.ComponentTimerDescription:
            return "Zeigt Gesamtzeit als digitale Uhr, Farbe je Vergleich.";
        case Label.ComponentCurrentComparison:
            return "Aktueller Vergleich";
        case Label.ComponentCurrentComparisonDescription:
            return "Zeigt den Namen des aktuellen Vergleichs.";
        case Label.ComponentCurrentPace:
            return "Aktuelles Tempo";
        case Label.ComponentCurrentPaceDescription:
            return "Prognostiziert die Endzeit basierend auf dem Vergleich.";
        case Label.ComponentDelta:
            return "Delta";
        case Label.ComponentDeltaDescription:
            return "Zeigt Vorsprung/Rückstand zum Vergleich.";
        case Label.ComponentPbChance:
            return "PB‑Chance";
        case Label.ComponentPbChanceDescription:
            return "Zeigt die Wahrscheinlichkeit für ein PB, dynamisch während des Runs.";
        case Label.ComponentPossibleTimeSave:
            return "Mögliche Zeitersparnis";
        case Label.ComponentPossibleTimeSaveDescription:
            return "Zeigt die mögliche Ersparnis im Segment und insgesamt.";
        case Label.ComponentPreviousSegment:
            return "Vorheriges Segment";
        case Label.ComponentPreviousSegmentDescription:
            return "Zeigt Gewinn/Verlust im vorherigen Segment und mögliche Ersparnis.";
        case Label.ComponentSegmentTime:
            return "Segmentzeit";
        case Label.ComponentSegmentTimeDescription:
            return "Zeigt die Segmentzeit für den gewählten Vergleich.";
        case Label.ComponentSumOfBest:
            return "Summe der Besten";
        case Label.ComponentSumOfBestDescription:
            return "Zeigt die schnellstmögliche Zeit basierend auf der Historie.";
        case Label.ComponentText:
            return "Text";
        case Label.ComponentTextDescription:
            return "Zeigt Text zentriert oder links/rechts, oder eine benutzerdefinierte Variable.";
        case Label.ComponentTotalPlaytime:
            return "Gesamtspielzeit";
        case Label.ComponentTotalPlaytimeDescription:
            return "Zeigt die gesamte Spielzeit der Kategorie.";
        case Label.ComponentVariableDescription:
            return "Erstellt eine Textkomponente, die den Wert der Variable „{name}“ zeigt.";
        case Label.ComponentBlankSpace:
            return "Leerraum";
        case Label.ComponentBlankSpaceDescription:
            return "Leere Komponente als Abstand zwischen anderen.";
        case Label.ComponentCarousel:
            return "Karussell";
        case Label.ComponentCarouselDescription:
            return "Zeigt jeweils nur eine Kindkomponente und rotiert zwischen ihnen. Bevorzugt Komponenten mit inhaltlichen Änderungen, sonst wird nach Intervall gewechselt.";
        case Label.ComponentSeparator:
            return "Trenner";
        case Label.ComponentSeparatorDescription:
            return "Zeichnet einen Trenner zwischen Komponenten.";
        case Label.Row:
            return "Zeile";
        case Label.RowDescription:
            return "Eine Zeile von Komponenten, die horizontal angeordnet sind und die Layoutrichtung für die enthaltenen Komponenten ändern.";
        case Label.Column:
            return "Spalte";
        case Label.ColumnDescription:
            return "Eine Spalte von Komponenten, die vertikal angeordnet sind und die Layoutrichtung für die enthaltenen Komponenten ändern.";
        case Label.AccuracySeconds:
            return "Sekunden";
        case Label.AccuracyTenths:
            return "Zehntel";
        case Label.AccuracyHundredths:
            return "Hundertstel";
        case Label.AccuracyMilliseconds:
            return "Millisekunden";
        case Label.FontStyle:
            return "Stil";
        case Label.FontWeight:
            return "Gewicht";
        case Label.FontStretch:
            return "Streckung";
        case Label.FontStyleNormal:
            return "Normal";
        case Label.FontStyleItalic:
            return "Kursiv";
        case Label.AlignmentAutomatic:
            return "Automatisch";
        case Label.AlignmentLeft:
            return "Links";
        case Label.AlignmentCenter:
            return "Zentriert";
        case Label.GradientTransparent:
            return "Transparent";
        case Label.GradientPlain:
            return "Einfarbig";
        case Label.GradientVertical:
            return "Vertikal";
        case Label.GradientHorizontal:
            return "Horizontal";
        case Label.GradientAlternating:
            return "Abwechselnd";
        case Label.GradientPlainDelta:
            return "Einfarbiges Delta";
        case Label.GradientVerticalDelta:
            return "Vertikales Delta";
        case Label.GradientHorizontalDelta:
            return "Horizontales Delta";
        case Label.LayoutBackgroundImage:
            return "Bild";
        case Label.LayoutBackgroundBrightness:
            return "Helligkeit";
        case Label.LayoutBackgroundOpacity:
            return "Deckkraft";
        case Label.LayoutBackgroundBlur:
            return "Weichzeichnung";
        case Label.LayoutDirectionVertical:
            return "Vertikal";
        case Label.LayoutDirectionHorizontal:
            return "Horizontal";
        case Label.ColumnKindTime:
            return "Zeit";
        case Label.ColumnKindVariable:
            return "Variable";
        case Label.ColumnStartWithEmpty:
            return "Leer";
        case Label.ColumnStartWithComparisonTime:
            return "Vergleichszeit";
        case Label.ColumnStartWithComparisonSegmentTime:
            return "Vergleichs‑Segmentzeit";
        case Label.ColumnStartWithPossibleTimeSave:
            return "Mögliche Zeitersparnis";
        case Label.IconDisplayModeBothRows:
            return "Beide Zeilen";
        case Label.IconDisplayModeFirstRow:
            return "Nur erste Zeile";
        case Label.SubsplitDisplayModeFlat:
            return "Flach";
        case Label.SubsplitDisplayModeCurrentGroupExpanded:
            return "Aktuelle Gruppe erweitert";
        case Label.SubsplitDisplayModeAllGroupsExpanded:
            return "Alle Gruppen erweitert";
        case Label.ColumnUpdateWithDontUpdate:
            return "Nicht aktualisieren";
        case Label.ColumnUpdateWithSplitTime:
            return "Splitzeit";
        case Label.ColumnUpdateWithDelta:
            return "Zeit voraus / zurück";
        case Label.ColumnUpdateWithDeltaWithFallback:
            return "Zeit voraus / zurück oder Splitzeit, falls leer";
        case Label.ColumnUpdateWithSegmentTime:
            return "Segmentzeit";
        case Label.ColumnUpdateWithSegmentDelta:
            return "Zeit gewonnen / verloren";
        case Label.ColumnUpdateWithSegmentDeltaWithFallback:
            return "Zeit gewonnen / verloren oder Segmentzeit, falls leer";
        case Label.ColumnUpdateTriggerOnStartingSegment:
            return "Beim Start des Segments";
        case Label.ColumnUpdateTriggerContextual:
            return "Kontextabhängig";
        case Label.ColumnUpdateTriggerOnEndingSegment:
            return "Beim Ende des Segments";
        case Label.ComparisonCurrentComparison:
            return "Aktueller Vergleich";
        case Label.CustomVariableNoneAvailable:
            return "Keine Variablen verfügbar";
        case Label.CustomVariableNoneAvailableTooltip:
            return "Benutzerdefinierte Variablen können im Tab Variablen beim Bearbeiten der Splits definiert werden. Zusätzliche benutzerdefinierte Variablen können automatisch durch Auto‑Splitter bereitgestellt werden.";
        case Label.HotkeyButtonTooltip:
            return "Klicken, um eine Hotkey‑Taste aufzunehmen. Du kannst auch Gamepad‑Tasten verwenden. Globale Hotkeys sind derzeit nicht möglich. Gamepad‑Tasten funktionieren global.";
        case Label.ServerConnect:
            return "Verbinden";
        case Label.ServerDisconnect:
            return "Trennen";
        case Label.ServerConnecting:
            return "Verbinde...";
        case Label.ServerDisconnecting:
            return "Trenne...";
        case Label.ConnectToServerTitle:
            return "Mit Server verbinden";
        case Label.ConnectToServerDescription:
            return "WebSocket‑URL angeben:";
        case Label.Connect:
            return "Verbinden";
        case Label.UpdateAvailable:
            return "Eine neue Version von LiveSplit One ist verfügbar! Klicke hier, um neu zu laden.";
        case Label.UnsavedChangesBeforeUnload:
            return "Es gibt ungespeicherte Änderungen. Möchtest du LiveSplit One wirklich schließen?";
        case Label.OpenSidebarAriaLabel:
            return "Seitenleiste öffnen";
        case Label.FailedToSaveLayout:
            return "Layout konnte nicht gespeichert werden.";
        case Label.FailedToSaveHotkeys:
            return "Hotkey-Einstellungen konnten nicht gespeichert werden.";
        case Label.FailedToSaveGeneralSettings:
            return "Allgemeine Einstellungen konnten nicht gespeichert werden.";
        case Label.FailedToSaveSplits:
            return "Splits konnten nicht gespeichert werden.";
        case Label.LayoutCouldNotBeLoaded:
            return "Das Layout konnte nicht geladen werden. Dies ist möglicherweise kein gültiges LiveSplit- oder LiveSplit-One-Layout.";
        case Label.EmptySplitsNotSupported:
            return "Leere Splits werden nicht unterstützt.";
        case Label.BugEncountered:
            return "Ein Fehler ist aufgetreten:";
        case Label.PleaseReportIssueStart:
            return "Bitte melde dieses Problem ";
        case Label.ReportHere:
            return "hier";
        case Label.PleaseReportIssueEnd:
            return ".";
        case Label.BugReportInstructions:
            return "Um uns zu helfen, dieses Problem zu beheben, füge bitte Schritte zur Reproduktion hinzu und hänge die Splits und das Layout an, die du verwendet hast, als das Problem auftrat.";
        case Label.LoadFailedPrivateBrowsing:
            return "LiveSplit One konnte nicht geladen werden.\nDu bist möglicherweise im privaten Modus.\nLiveSplit One kann aufgrund der Einschränkungen des privaten Modus keine Splits, Layouts oder andere Einstellungen speichern.\nDiese Einschränkungen könnten in Zukunft aufgehoben werden.\nUm LiveSplit One vorerst zu nutzen, deaktiviere den privaten Modus in den Einstellungen.";
        case Label.LoadFailedOutdatedBrowser:
            return "LiveSplit One konnte nicht geladen werden.\nDu verwendest möglicherweise einen veralteten Browser.\nBitte aktualisiere deinen Browser oder deine iOS‑Version und versuche es erneut.\nEine andere Ursache könnte eine Browser‑Erweiterung sein, z. B. ein Werbeblocker, der den Zugriff auf wichtige Skripte blockiert.";
        case Label.CustomComparisonsSidebarEditingHint:
            return "Speichere oder verwirf zuerst den Vergleich, den du bearbeitest.";
        case Label.CustomComparisonsComparisonMenu:
            return "Weitere Aktionen";
        case Label.CustomComparisonsNameRequired:
            return "Gib dem Vergleich einen Namen.";
        case Label.CustomComparisonsSearchBlocks:
            return "Blöcke suchen";
        case Label.CustomComparisonsNoBlocksFound:
            return "Kein Block passt. Versuche ein anderes Wort.";
        case Label.CustomComparisonsAboutBlock:
            return "Was macht dieser Block?";
        case Label.CustomComparisonsBlocks:
            return "Blöcke";
        case Label.CustomComparisonsRailHint:
            return "Ziehe einen Block auf einen Platz oder auf einen Block, um ihn zu ersetzen. Klicke auf einen, um ihn in den ersten freien passenden Platz zu setzen.";
        case Label.CustomComparisonsDragBlock:
            return "Ziehen, um diesen Block zu verschieben";
        case Label.CustomComparisonsOpenEditorHint:
            return "Deine eigenen Vergleiche funktionieren mit all deinen Splits und erscheinen neben den anderen Vergleichen.";
        case Label.CustomComparisons:
            return "Eigene Vergleiche";
        case Label.CustomComparisonsExportAll:
            return "Alle exportieren…";
        case Label.CustomComparisonsExportAllFileName:
            return "Eigene Vergleiche";
        case Label.CustomComparisonsPluginUnavailable:
            return "Die eigenen Vergleiche konnten nicht geladen werden und erscheinen daher gerade nicht als Vergleiche: {0}";
        case Label.CustomComparisonsListHeading:
            return "Vergleiche";
        case Label.CustomComparisonsNoComparisons:
            return "Noch keine eigenen Vergleiche. Klicke auf Neu, um deinen ersten zu erstellen.";
        case Label.CustomComparisonsNew:
            return "Neu…";
        case Label.CustomComparisonsEdit:
            return "Bearbeiten…";
        case Label.CustomComparisonsRename:
            return "Umbenennen…";
        case Label.CustomComparisonsDuplicate:
            return "Duplizieren";
        case Label.CustomComparisonsImport:
            return "Importieren…";
        case Label.CustomComparisonsExport:
            return "Exportieren…";
        case Label.CustomComparisonsCopyAsText:
            return "Als Text kopieren";
        case Label.CustomComparisonsPaste:
            return "Einfügen…";
        case Label.CustomComparisonsUsedBy:
            return "Wird von {0} anderen Vergleichen verwendet";
        case Label.CustomComparisonsUsedByOne:
            return "Wird von 1 anderen Vergleich verwendet";
        case Label.CustomComparisonsUnreadable:
            return "Kann nicht gelesen werden";
        case Label.CustomComparisonsSaveReminder:
            return "Änderungen werden sofort auf diesem Gerät gespeichert. Mit „Alle exportieren“ nimmst du sie auf ein anderes mit.";
        case Label.CustomComparisonsCopiedToClipboard:
            return "Kopiert. Du kannst es in einen Chat oder einen Forenbeitrag einfügen.";
        case Label.CustomComparisonsCouldNotCopy:
            return "Konnte nicht in die Zwischenablage kopieren.";
        case Label.CustomComparisonsCouldNotReadClipboard:
            return "Die Zwischenablage konnte nicht gelesen werden. Füge den Text stattdessen hier ein:";
        case Label.CustomComparisonsErrorTitle:
            return "Das hat nicht funktioniert";
        case Label.CustomComparisonsRenameTitle:
            return "Vergleich umbenennen";
        case Label.CustomComparisonsRenameDescription:
            return "Die Vergleiche, die diesen verwenden, werden auf den neuen Namen aktualisiert.";
        case Label.CustomComparisonsNameTakenTitle:
            return "Anderen Namen wählen";
        case Label.CustomComparisonsNameTakenDescription:
            return "{0} Gib einen anderen Namen ein:";
        case Label.CustomComparisonsRemoveTitle:
            return "Vergleich entfernen";
        case Label.CustomComparisonsRemoveDescription:
            return "„{0}“ entfernen?";
        case Label.CustomComparisonsRemoveUsedDescription:
            return "„{0}“ entfernen? {1} andere Vergleiche verwenden ihn und funktionieren ohne ihn nicht mehr.";
        case Label.CustomComparisonsRemoveUsedOneDescription:
            return "„{0}“ entfernen? 1 anderer Vergleich verwendet ihn und funktioniert ohne ihn nicht mehr.";
        case Label.CustomComparisonsPasteTitle:
            return "Vergleich einfügen";
        case Label.CustomComparisonsPasteDescription:
            return "Füge den Text eines Vergleichs ein, den jemand geteilt hat:";
        case Label.CustomComparisonsCopySuffix:
            return "{0} (Kopie)";
        case Label.CustomComparisonsTemplatesTitle:
            return "Neuer Vergleich";
        case Label.CustomComparisonsTemplatesDescription:
            return "Wähle einen Ausgangspunkt. Jeder ist ein fertiger Vergleich, den du so verwenden oder anpassen kannst.";
        case Label.CustomComparisonsTemplateGoalPace:
            return "Zieltempo";
        case Label.CustomComparisonsTemplateGoalPaceDescription:
            return "Deine typischen Runs, gestreckt, sodass sie genau in einer Zielzeit enden.";
        case Label.CustomComparisonsTemplateRealisticPace:
            return "Realistisches Tempo";
        case Label.CustomComparisonsTemplateRealisticPaceDescription:
            return "Perzentil 70 der letzten 30 Tage: Zeiten, die du in etwa 70 % der Fälle schlägst.";
        case Label.CustomComparisonsTemplateRecentForm:
            return "Aktuelle Form";
        case Label.CustomComparisonsTemplateRecentFormDescription:
            return "Der Median deiner letzten 10 abgeschlossenen Runs, ohne den besten und den schlechtesten Ausreißer.";
        case Label.CustomComparisonsTemplateSafePace:
            return "Sicheres Tempo";
        case Label.CustomComparisonsTemplateSafePaceDescription:
            return "Das Langsamere aus deinen besten Segmenten + 2 s und deinem Median, damit es nie unrealistisch schnell ist.";
        case Label.CustomComparisonsTemplateBlank:
            return "Leer";
        case Label.CustomComparisonsTemplateBlankDescription:
            return "Bei null anfangen.";
        case Label.CustomComparisonsNewComparisonName:
            return "Mein Vergleich";
        case Label.CustomComparisonsEditorTitle:
            return "Eigener Vergleich";
        case Label.CustomComparisonsName:
            return "Name";
        case Label.CustomComparisonsUndo:
            return "Rückgängig";
        case Label.CustomComparisonsRedo:
            return "Wiederholen";
        case Label.CustomComparisonsChooseBlock:
            return "Block wählen…";
        case Label.CustomComparisonsReplaceBlock:
            return "Ersetzen durch…";
        case Label.CustomComparisonsWrapBlock:
            return "Einbetten in…";
        case Label.CustomComparisonsUnwrapBlock:
            return "Entfernen, Inhalt behalten";
        case Label.CustomComparisonsPreviewBlock:
            return "Vorschau dieses Blocks";
        case Label.CustomComparisonsBlockMenu:
            return "Blockaktionen";
        case Label.CustomComparisonsFillEmptySlots:
            return "Fülle die leeren Plätze, um die Vorschau zu sehen. Jeder Platz braucht einen Block.";
        case Label.CustomComparisonsDiscardChangesDescription:
            return "Dieser Vergleich hat Änderungen, die nicht gespeichert wurden.";
        case Label.CustomComparisonsDiscard:
            return "Verwerfen";
        case Label.CustomComparisonsKeepEditing:
            return "Weiter bearbeiten";
        case Label.CustomComparisonsInvalidTime:
            return "Gib eine Zeit wie 20:00 oder 1:05:30 ein.";
        case Label.CustomComparisonsNotFound:
            return "{0} (nicht gefunden)";
        case Label.CustomComparisonsNotInSplits:
            return "{0}. (nicht in deinen Splits)";
        case Label.CustomComparisonsSegmentOption:
            return "{0}. {1}";
        case Label.CustomComparisonsAddRange:
            return "Bereich hinzufügen";
        case Label.CustomComparisonsRemoveRange:
            return "Diesen Bereich entfernen";
        case Label.CustomComparisonsRangeBackwards:
            return "Segmente {0} bis {1} ist rückwärts. Vertausche die Zahlen.";
        case Label.CustomComparisonsCategorySources:
            return "Quellen";
        case Label.CustomComparisonsCategoryFilters:
            return "Filter";
        case Label.CustomComparisonsCategoryAggregates:
            return "Zusammenfassungen";
        case Label.CustomComparisonsCategoryMath:
            return "Rechnen";
        case Label.CustomComparisonsCategoryControl:
            return "Steuerung";
        case Label.CustomComparisonsKindSamples:
            return "Eine Liste von Zeiten pro Segment";
        case Label.CustomComparisonsKindTimes:
            return "Eine Zeit pro Segment";
        case Label.CustomComparisonsBlockResult:
            return "dieser Vergleich ist";
        case Label.CustomComparisonsBlockResultTip:
            return "Der fertige Vergleich. Lege die Blöcke, die ihn bilden, hier hinein.";
        case Label.CustomComparisonsBlockSegmentHistory:
            return "alle meine Zeiten für jedes Segment";
        case Label.CustomComparisonsBlockSegmentHistoryTip:
            return "Jede Zeit, die du für jedes Segment aufgezeichnet hast. Übersprungene Segmente und das zusammengefasste Segment direkt nach einem Überspringen werden ausgelassen.";
        case Label.CustomComparisonsBlockComparison:
            return "Vergleich {name}";
        case Label.CustomComparisonsBlockComparisonTip:
            return "Ein bestehender Vergleich, Segment für Segment. Eingebaute funktionieren auch, wenn sie ausgeschaltet sind.";
        case Label.CustomComparisonsBlockAttempt:
            return "Versuch Nr. {number}";
        case Label.CustomComparisonsBlockAttemptTip:
            return "Die Segmente eines vergangenen Versuchs, nach seiner Nummer im Versuchsverlauf. Leer, wo dieser Run einen Split übersprungen oder zurückgesetzt hat.";
        case Label.CustomComparisonsBlockBestRecentRun:
            return "mein bester Run der letzten {days} Tage";
        case Label.CustomComparisonsBlockBestRecentRunTip:
            return "Die Segmente deines schnellsten abgeschlossenen Runs der letzten N Tage: eine „aktuelle PB“, die sich mitbewegt, während du spielst. Leer, wenn in dieser Zeit kein Run abgeschlossen wurde.";
        case Label.CustomComparisonsBlockLastN:
            return "letzte {count} Zeiten von";
        case Label.CustomComparisonsBlockLastNTip:
            return "Behält die neuesten Zeiten für jedes Segment. Zählt, wie oft das Segment abgeschlossen wurde, nicht die Versuche.";
        case Label.CustomComparisonsBlockCompletedRunsOnly:
            return "nur aus abgeschlossenen Runs";
        case Label.CustomComparisonsBlockCompletedRunsOnlyTip:
            return "Behält nur Zeiten aus Versuchen, die den ganzen Run beendet haben.";
        case Label.CustomComparisonsBlockRecentDays:
            return "aus den letzten {days} Tagen";
        case Label.CustomComparisonsBlockRecentDaysTip:
            return "Behält nur Zeiten aus Versuchen, die in den letzten N Tagen endeten, damit alte Zeiten nicht mehr zählen. Versuche ohne Datum werden ausgelassen.";
        case Label.CustomComparisonsBlockFinishedUnder:
            return "aus Runs, die unter {totalSeconds} endeten";
        case Label.CustomComparisonsBlockFinishedUnderTip:
            return "Behält nur Zeiten aus Runs, die schneller als diese Zeit endeten, damit nur deine guten Runs zählen.";
        case Label.CustomComparisonsBlockReachedSegment:
            return "aus Runs, die {segment} erreicht haben";
        case Label.CustomComparisonsBlockReachedSegmentTip:
            return "Behält nur Zeiten aus Versuchen, die mindestens bis zu diesem Segment gekommen sind. Wie „nur aus abgeschlossenen Runs“, aber für Spiele, in denen die meisten Runs früh zurückgesetzt werden. Ist dieses Segment nicht in deinen Splits, siehst du eine Warnung und es bleiben keine Zeiten übrig.";
        case Label.CustomComparisonsBlockTrimOutliers:
            return "ohne die schnellsten und langsamsten {percent} % von";
        case Label.CustomComparisonsBlockTrimOutliersTip:
            return "Entfernt Ausreißer vor der Mittelung: lässt diesen Anteil der schnellsten und langsamsten Zeiten jedes Segments weg. Bei wenigen Zeiten wird nichts weggelassen.";
        case Label.CustomComparisonsBlockAtLeast:
            return "nur wenn es mindestens {count} Zeiten gibt in";
        case Label.CustomComparisonsBlockAtLeastTip:
            return "Segmente mit weniger Zeiten werden leer, sodass du sie mit „falls leer, nimm“ füllen kannst, statt zu wenigen Daten zu vertrauen.";
        case Label.CustomComparisonsBlockAggregate:
            return "{kind} von";
        case Label.CustomComparisonsBlockAggregateTip:
            return "Macht aus der Liste von Zeiten jedes Segments eine Zeit. Ein Segment ohne Zeiten bleibt leer.";
        case Label.CustomComparisonsAggregateMedian:
            return "Median";
        case Label.CustomComparisonsAggregateAverage:
            return "Durchschnitt";
        case Label.CustomComparisonsAggregateMin:
            return "Bestes (Min.)";
        case Label.CustomComparisonsAggregateMax:
            return "Schlechtestes (Max.)";
        case Label.CustomComparisonsBlockPercentile:
            return "Perzentil {percent} von";
        case Label.CustomComparisonsBlockPercentileTip:
            return "0 ist deine schnellste Zeit, 100 deine langsamste, 50 der Median. 70 bedeutet: Du schlägst diese Zeit in etwa 70 % der Fälle.";
        case Label.CustomComparisonsBlockWeightedAverage:
            return "zeitgewichteter Durchschnitt von";
        case Label.CustomComparisonsBlockWeightedAverageFooter:
            return "Gewicht halbiert sich alle {halfLife} älteren Zeiten";
        case Label.CustomComparisonsBlockWeightedAverageTip:
            return "Ein Durchschnitt, bei dem neuere Zeiten mehr zählen. Die neueste Zeit zählt voll, eine N Zeiten ältere halb, eine 2N Zeiten ältere ein Viertel und so weiter.";
        case Label.CustomComparisonsBlockAddTime:
            return "{seconds} s pro Segment addieren zu";
        case Label.CustomComparisonsBlockAddTimeTip:
            return "Addiert (oder, wenn negativ, entfernt) Zeit bei jedem Segment. Geht nie unter null.";
        case Label.CustomComparisonsBlockScale:
            return "{percent} % von";
        case Label.CustomComparisonsBlockScaleTip:
            return "Skaliert jedes Segment. 103 % ist 3 % langsamer, 97 % ist 3 % schneller.";
        case Label.CustomComparisonsBlockRound:
            return "runden auf {step}";
        case Label.CustomComparisonsBlockRoundTip:
            return "Rundet jedes Segment auf die nächsten 0,1 s (oder 1 s, 0,01 s), damit auch die Splitzeiten glatt sind.";
        case Label.CustomComparisonsRoundStep:
            return "{0} s";
        case Label.CustomComparisonsBlockClamp:
            return "halte";
        case Label.CustomComparisonsBlockClampTip:
            return "Hält jedes Segment zwischen zwei Grenzen, zum Beispiel nie schneller als deine besten Segmente und nie langsamer als deine PB. Wenn sich die Grenzen kreuzen, gewinnt „nie schneller als“.";
        case Label.CustomComparisonsSlotNeverFaster:
            return "nie schneller als";
        case Label.CustomComparisonsSlotNeverSlower:
            return "nie langsamer als";
        case Label.CustomComparisonsBlockStretchToTotal:
            return "strecken auf eine Endzeit von {totalSeconds}";
        case Label.CustomComparisonsBlockStretchToTotalTip:
            return "Skaliert jedes Segment um denselben Faktor, sodass der ganze Run genau die Zielzeit ergibt. Ist ein Segment leer, ist das Ergebnis leer: Fülle Lücken zuerst mit „falls leer, nimm“.";
        case Label.CustomComparisonsBlockBlend:
            return "{percent} % des Weges von";
        case Label.CustomComparisonsBlockBlendTip:
            return "Mischt zwei Regeln pro Segment. 0 % ist ganz die erste, 100 % ganz die zweite, 75 % ist drei Viertel des Weges.";
        case Label.CustomComparisonsSlotTo:
            return "zu";
        case Label.CustomComparisonsBlockPick:
            return "das {kind} von";
        case Label.CustomComparisonsBlockPickTip:
            return "Für jedes Segment die langsamere (oder schnellere) der beiden Regeln. Hat eine für ein Segment keine Zeit, wird die andere genommen.";
        case Label.CustomComparisonsPickSlower:
            return "Langsamere";
        case Label.CustomComparisonsPickFaster:
            return "Schnellere";
        case Label.CustomComparisonsSlotAnd:
            return "und";
        case Label.CustomComparisonsBlockFallback:
            return "nimm";
        case Label.CustomComparisonsBlockFallbackTip:
            return "Füllt nur die Segmente, die die erste Regel leer lässt, zum Beispiel weil es noch nicht genug Runs gibt.";
        case Label.CustomComparisonsSlotIfEmpty:
            return "falls leer, nimm";
        case Label.CustomComparisonsBlockSegmentRange:
            return "für Segmente … nimm … sonst …";
        case Label.CustomComparisonsBlockSegmentRangeTip:
            return "Nimmt eine Regel für einen Bereich von Segmenten und eine andere für den Rest. Füge weitere Bereiche für weitere Regeln hinzu: Der erste passende Bereich gewinnt. Zeigt ein Bereich über das Ende deiner Splits hinaus, siehst du eine Warnung.";
        case Label.CustomComparisonsBlockSegmentRangeHeader:
            return "verschiedene Regeln für verschiedene Segmente (der erste passende Bereich gewinnt)";
        case Label.CustomComparisonsRangeCase:
            return "für Segmente {from} bis {to} nimm";
        case Label.CustomComparisonsSlotOtherwise:
            return "sonst";
        case Label.CustomComparisonsPreview:
            return "Vorschau";
        case Label.CustomComparisonsPreviewingBlock:
            return "Vorschau eines Blocks, nicht des Vergleichs";
        case Label.CustomComparisonsShowWholeComparison:
            return "Ganzen Vergleich zeigen";
        case Label.CustomComparisonsSegment:
            return "Segment";
        case Label.CustomComparisonsDifferenceFrom:
            return "Unterschied zu";
        case Label.CustomComparisonsFasterThanGold:
            return "Schneller als deine beste Zeit für dieses Segment";
        case Label.CustomComparisonsFasterThanGoldWarning:
            return "{0} Segmente sind schneller als deine besten Segmente. Das ist erlaubt, aber dieses Tempo ist vielleicht nicht realistisch.";
        case Label.CustomComparisonsFasterThanGoldWarningOne:
            return "1 Segment ist schneller als dein bestes Segment. Das ist erlaubt, aber dieses Tempo ist vielleicht nicht realistisch.";
        case Label.CustomComparisonsFinishLine:
            return "Endet bei {0}, {1} im Vergleich zu {2}.";
        case Label.CustomComparisonsFinishVsSumOfBest:
            return "Deine Summe der besten Segmente ist {0}.";
        case Label.CustomComparisonsNoProblems:
            return "Keine Probleme.";
        case Label.CustomComparisonsNoTimesLeft:
            return "Kein Segment hat eine Zeit. Klicke auf eine Zeile, um zu sehen, warum, oder füge „nimm … falls leer, nimm“ mit einer Reserve wie deiner PB hinzu.";
        case Label.CustomComparisonsOriginTitle:
            return "Woher diese Zeit kommt";
        case Label.CustomComparisonsOriginEmpty:
            return "Dieses Segment hat keine Zeit, daher ist auch jeder Split danach leer.";
        case Label.CustomComparisonsOriginFillingGap:
            return "füllt eine Lücke";
        case Label.CustomComparisonsOriginPicked:
            return "das {0} der beiden";
        case Label.CustomComparisonsOriginLowLimit:
            return "an der Grenze „nie schneller als“ gehalten";
        case Label.CustomComparisonsOriginHighLimit:
            return "an der Grenze „nie langsamer als“ gehalten";
        case Label.CustomComparisonsClickRowHint:
            return "Klicke auf eine Zeile, um zu sehen, woher ihre Zeit kommt.";
        case Label.CustomComparisonsDescYourGolds:
            return "deine besten Segmente";
        case Label.CustomComparisonsDescYourPb:
            return "deine PB";
        case Label.CustomComparisonsDescComparison:
            return "„{0}“";
        case Label.CustomComparisonsDescAttempt:
            return "Versuch Nr. {0}";
        case Label.CustomComparisonsDescBestRecentRun:
            return "dein bester Run der letzten {0} Tage";
        case Label.CustomComparisonsDescWeightedAverage:
            return "der zeitgewichtete Durchschnitt über {0}";
        case Label.CustomComparisonsDescClamp:
            return "{0} (nie schneller als: {1}; nie langsamer als: {2})";
        case Label.CustomComparisonsDescRound:
            return "{0}, gerundet auf {1}";
        case Label.CustomComparisonsDescMedian:
            return "der Median über {0}";
        case Label.CustomComparisonsDescAverage:
            return "der Durchschnitt über {0}";
        case Label.CustomComparisonsDescMin:
            return "das Beste über {0}";
        case Label.CustomComparisonsDescMax:
            return "das Schlechteste über {0}";
        case Label.CustomComparisonsDescPercentile:
            return "Perzentil {0} über {1}";
        case Label.CustomComparisonsDescAddTime:
            return "{0} + {1}";
        case Label.CustomComparisonsDescRemoveTime:
            return "{0} − {1}";
        case Label.CustomComparisonsDescScale:
            return "{1} × {0} %";
        case Label.CustomComparisonsDescStretch:
            return "{0}, gestreckt auf eine Endzeit von {1}";
        case Label.CustomComparisonsDescBlend:
            return "{0} % des Weges: {1} → {2}";
        case Label.CustomComparisonsDescSlower:
            return "das Langsamere von beiden: {0} und {1}";
        case Label.CustomComparisonsDescFaster:
            return "das Schnellere von beiden: {0} und {1}";
        case Label.CustomComparisonsDescFallback:
            return "{0} (oder {1}, wo das leer ist)";
        case Label.CustomComparisonsDescRangeArm:
            return "{0} für {1}";
        case Label.CustomComparisonsDescRangeOtherwise:
            return "{0}, sonst {1}";
        case Label.CustomComparisonsDescSomething:
            return "etwas";
        case Label.CustomComparisonsDescAllTimes:
            return "alle deine Zeiten";
        case Label.CustomComparisonsDescLastN:
            return "deine letzten {0} Zeiten";
        case Label.CustomComparisonsQualCompleted:
            return "aus abgeschlossenen Runs";
        case Label.CustomComparisonsQualRecentDays:
            return "aus den letzten {0} Tagen";
        case Label.CustomComparisonsQualUnder:
            return "aus Runs unter {0}";
        case Label.CustomComparisonsQualTrim:
            return "ohne die schnellsten und langsamsten {0} %";
        case Label.CustomComparisonsQualAtLeast:
            return "(nur bei mindestens {0})";
        case Label.CustomComparisonsQualReached:
            return "aus Runs, die {0} erreicht haben";
        case Label.CustomComparisonsSumGapsFilled:
            return "{0} Lücken füllt: {1}.";
        case Label.CustomComparisonsSumRangeArm:
            return "{0}: {1}";
        case Label.CustomComparisonsSumOtherSegments:
            return "Andere Segmente: {0}";
        case Label.CustomComparisonsSegmentNumber:
            return "Segment {0}";
        case Label.CustomComparisonsSegmentSpan:
            return "{0} bis {1}";
        case Label.CustomComparisonsSeconds:
            return "{0} s";
        case Label.CustomComparisonsListAnd:
            return "{0} und {1}";
        case Label.CustomComparisonsWarnSegment:
            return "Verwendet Segment {0}, aber deine Splits haben {1}";
        case Label.CustomComparisonsWarnSegments:
            return "Verwendet Segmente {0}, aber deine Splits haben {1}";
        case Label.CustomComparisonsSentence:
            return "{0}.";
    }
}
