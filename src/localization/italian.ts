import { Label } from ".";

export function resolveItalian(text: Label): string {
    switch (text) {
        case Label.Ok:
            return "OK";
        case Label.Cancel:
            return "Annulla";
        case Label.Settings:
            return "Impostazioni";
        case Label.Language:
            return "Lingua";
        case Label.LanguageDescription:
            return "Imposta la lingua utilizzata nell'applicazione.";
        case Label.LanguageAuto:
            return "Automatico";
        case Label.Theme:
            return "Tema";
        case Label.ThemeDescription:
            return "Determina se seguire il tema di sistema o forzare una modalità chiara o scura.";
        case Label.ThemeLightMode:
            return "Modalità chiara";
        case Label.ThemeDarkMode:
            return "Modalità scura";
        case Label.HotkeysHeading:
            return "Scorciatoie";
        case Label.GeneralHeading:
            return "Generale";
        case Label.NetworkHeading:
            return "Rete";
        case Label.FrameRate:
            return "Frequenza dei fotogrammi";
        case Label.FrameRateDescription:
            return "Determina la frequenza dei fotogrammi con cui visualizzare il timer. «Consapevole della batteria» prova a determinare il tipo di dispositivo e lo stato di carica per scegliere una buona frequenza. «Abbina allo schermo» fa corrispondere il timer alla frequenza di aggiornamento dello schermo.";
        case Label.FrameRateBatteryAware:
            return "Consapevole della batteria";
        case Label.FrameRateMatchScreen:
            return "Abbina allo schermo";
        case Label.SaveOnReset:
            return "Salva al reset";
        case Label.SaveOnResetDescription:
            return "Determina se salvare automaticamente gli split quando si resetta il timer.";
        case Label.ShowControlButtons:
            return "Mostra pulsanti di controllo";
        case Label.ShowControlButtonsDescription:
            return "Determina se mostrare pulsanti sotto il timer che consentono di controllarlo. Quando disattivati, devi usare le scorciatoie.";
        case Label.ShowManualGameTimeInput:
            return "Mostra input manuale del tempo di gioco";
        case Label.ShowManualGameTimeInputDescription:
            return "Mostra una casella di testo sotto il timer che permette di inserire manualmente il tempo di gioco. Avvii il timer e fai gli split premendo Invio nella casella di testo. Assicurati di confrontare con «Game Time».";
        case Label.ManualGameTimeMode:
            return "Modalità tempo di gioco manuale";
        case Label.ManualGameTimeModeDescription:
            return "Determina se inserire il tempo di gioco manuale come tempi segmento o tempi split.";
        case Label.ManualGameTimeModeSegmentTimes:
            return "Tempi segmento";
        case Label.ManualGameTimeModeSplitTimes:
            return "Tempi split";
        case Label.AlwaysOnTop:
            return "Sempre in primo piano";
        case Label.AlwaysOnTopDescription:
            return "Mantiene la finestra sempre sopra le altre finestre.";
        case Label.SpeedrunComIntegration:
            return "Integrazione Speedrun.com";
        case Label.SpeedrunComIntegrationDescription:
            return "Richiede l'elenco dei giochi, delle categorie e delle classifiche da speedrun.com.";
        case Label.ServerConnection:
            return "Connessione server";
        case Label.ServerConnectionDescription:
            return "Consente di connettersi a un server WebSocket che può controllare il timer inviando vari comandi. I comandi sono attualmente un sottoinsieme di quelli supportati dal LiveSplit originale.";
        case Label.ServerConnectionExperimental:
            return "Questa funzionalità è sperimentale e il protocollo probabilmente cambierà in futuro.";
        case Label.TheRunGgIntegration:
            return "Integrazione TheRun.gg";
        case Label.TheRunGgIntegrationDescription:
            return "Si integra con therun.gg per il tracciamento live delle run e il caricamento automatico delle statistiche. Per usare questa funzionalità è necessaria una chiave di upload di therun.gg.";
        case Label.TheRunGgLiveTracking:
            return "Tracciamento live";
        case Label.TheRunGgLiveTrackingDescription:
            return "Quando è attivo, i dati live degli split vengono inviati a therun.gg dopo ogni azione di split, consentendo il tracciamento in tempo reale sul sito.";
        case Label.TheRunGgStatsUploading:
            return "Caricamento statistiche";
        case Label.TheRunGgStatsUploadingDescription:
            return "Quando è attivo, il file degli split viene caricato su therun.gg dopo ogni reset o run completata, sincronizzando automaticamente le tue run con il sito.";
        case Label.HotkeyAlreadyInUse:
            return "La scorciatoia è già in uso.";
        case Label.Start:
            return "Avvia";
        case Label.Resume:
            return "Riprendi";
        case Label.Pause:
            return "Pausa";
        case Label.UndoSplit:
            return "Annulla split";
        case Label.Reset:
            return "Reimposta";
        case Label.SkipSplit:
            return "Salta split";
        case Label.ManualGameTimePlaceholder:
            return "Tempo di gioco manuale";
        case Label.LiveSplitLogoAlt:
            return "Logo LiveSplit";
        case Label.LiveSplitOne:
            return "LiveSplit One";
        case Label.Splits:
            return "Splits";
        case Label.Layout:
            return "Layout";
        case Label.CompareAgainst:
            return "Confronta con";
        case Label.RealTime:
            return "Tempo reale";
        case Label.GameTime:
            return "Tempo di gioco";
        case Label.PopOut:
            return "Finestra separata";
        case Label.About:
            return "Informazioni";
        case Label.Back:
            return "Indietro";
        case Label.AboutVersionPrefix:
            return "Versione:";
        case Label.AboutDescription:
            return "LiveSplit One è una versione multipiattaforma di LiveSplit, il timer elegante e altamente personalizzabile per speedrunner.";
        case Label.AboutViewSource:
            return "Visualizza il codice sorgente su GitHub";
        case Label.AboutRecentChanges:
            return "Modifiche recenti";
        case Label.AboutContributors:
            return "Collaboratori";
        case Label.Loading:
            return "Caricamento...";
        case Label.Add:
            return "Aggiungi";
        case Label.Import:
            return "Importa";
        case Label.OpenSplits:
            return "Apri split";
        case Label.EditSplits:
            return "Modifica split";
        case Label.ExportSplits:
            return "Esporta split";
        case Label.CopySplits:
            return "Copia split";
        case Label.RemoveSplits:
            return "Rimuovi split";
        case Label.Untitled:
            return "Senza titolo";
        case Label.NoCategory:
            return "—";
        case Label.DiscardChangesTitle:
            return "Scartare le modifiche?";
        case Label.DiscardChangesDescription:
            return "Gli split attuali sono stati modificati e hanno modifiche non salvate. Vuoi continuare e scartare le modifiche?";
        case Label.DeleteSplitsTitle:
            return "Eliminare gli split?";
        case Label.DeleteSplitsDescription:
            return "Sei sicuro di voler eliminare gli split? Questa operazione non può essere annullata.";
        case Label.SaveBestTimesTitle:
            return "Salvare i migliori tempi?";
        case Label.SaveBestTimesDescription:
            return "Hai migliorato alcuni dei tuoi migliori tempi. Vuoi aggiornarli?";
        case Label.Yes:
            return "Sì";
        case Label.No:
            return "No";
        case Label.DontReset:
            return "Non azzerare";
        case Label.FailedToExportSplits:
            return "Impossibile esportare gli split.";
        case Label.CantImportEmptySplits:
            return "Non è possibile importare split vuoti.";
        case Label.FailedToReadFile:
            return "Impossibile leggere il file:";
        case Label.FailedToImportSplits:
            return "Impossibile importare gli split:";
        case Label.CouldNotParseSplits:
            return "Impossibile analizzare gli split.";
        case Label.LoadedSplitsInvalid:
            return "Gli split caricati non sono validi.";
        case Label.NewSegmentName:
            return "Tempo";
        case Label.EditWhileRunningError:
            return "Non puoi modificare gli split mentre il timer è in esecuzione.";
        case Label.Edit:
            return "Modifica";
        case Label.Save:
            return "Salva";
        case Label.Export:
            return "Esporta";
        case Label.FailedToParseTimeSpan:
            return "Impossibile analizzare TimeSpan";
        case Label.Default:
            return "Predefinito";
        case Label.Game:
            return "Gioco";
        case Label.Category:
            return "Categoria";
        case Label.StartTimerAt:
            return "Avvia timer a";
        case Label.Attempts:
            return "Tentativi";
        case Label.SplitsEditor:
            return "Editor degli split";
        case Label.Variables:
            return "Variabili";
        case Label.Rules:
            return "Regole";
        case Label.Leaderboard:
            return "Classifica";
        case Label.InsertAbove:
            return "Inserisci sopra";
        case Label.InsertBelow:
            return "Inserisci sotto";
        case Label.RemoveSegment:
            return "Rimuovi segmento";
        case Label.MoveUp:
            return "Sposta su";
        case Label.MoveDown:
            return "Sposta giù";
        case Label.CreateGroup:
            return "Crea gruppo";
        case Label.RemoveGroup:
            return "Rimuovi gruppo";
        case Label.AddVariable:
            return "Aggiungi variabile";
        case Label.OpenPbPage:
            return "Apri pagina PB";
        case Label.AssociateRun:
            return "Associa run";
        case Label.Icon:
            return "Icona";
        case Label.SegmentName:
            return "Nome segmento";
        case Label.SplitTime:
            return "Tempo split";
        case Label.SegmentTime:
            return "Tempo segmento";
        case Label.BestSegment:
            return "Miglior segmento";
        case Label.SpeedrunComVariableTooltip:
            return "Variabile di speedrun.com specifica del gioco.";
        case Label.Region:
            return "Regione";
        case Label.RegionDescription:
            return "La regione del gioco che si sta giocando.";
        case Label.Platform:
            return "Piattaforma";
        case Label.PlatformDescription:
            return "La piattaforma su cui si gioca.";
        case Label.UsesEmulator:
            return "Usa emulatore";
        case Label.UsesEmulatorDescription:
            return "Se viene usato un emulatore.";
        case Label.CustomVariableTooltip:
            return "Variabile personalizzata da te. Può essere mostrata con il componente testo.";
        case Label.NoVariables:
            return "Al momento non ci sono variabili personalizzate per questo gioco.";
        case Label.NoVariablesWithSpeedrunCom:
            return "Al momento non ci sono variabili di speedrun.com o personalizzate per questo gioco.";
        case Label.TimedWithoutLoads:
            return "sono cronometrate senza tempi di caricamento";
        case Label.TimedWithGameTime:
            return "sono cronometrate con Game Time";
        case Label.RequireVideoProof:
            return "richiedono prova video";
        case Label.RunsOfThisGamePrefix:
            return "Le run di questo gioco ";
        case Label.RunsOfThisGameSuffix:
            return ".";
        case Label.And:
            return "e";
        case Label.SetIcon:
            return "Imposta icona";
        case Label.SetIconDescription:
            return "Scegli un'immagine come icona del gioco. Alcuni formati potrebbero non funzionare ovunque.";
        case Label.DownloadBoxArt:
            return "Scarica copertina";
        case Label.DownloadBoxArtDescription:
            return "Tenta di scaricare la copertina da speedrun.com per impostarla come icona del gioco.";
        case Label.DownloadIcon:
            return "Scarica icona";
        case Label.DownloadIconDescription:
            return "Tenta di scaricare l'icona del gioco da speedrun.com.";
        case Label.RemoveIcon:
            return "Rimuovi icona";
        case Label.RemoveIconDescription:
            return "Rimuove l'icona del gioco.";
        case Label.CleaningMenu:
            return "Pulizia…";
        case Label.ClearOnlyHistory:
            return "Cancella solo cronologia";
        case Label.ClearOnlyHistoryDescription:
            return "Gli split salvano tutta la cronologia delle run. Questa azione cancella la cronologia senza influire su PB, migliori segmenti o confronti.";
        case Label.ClearAllTimes:
            return "Cancella tutti i tempi";
        case Label.ClearAllTimesDescription:
            return "Rimuove tutti i tempi e la cronologia, rendendo gli split vuoti.";
        case Label.CleanSumOfBest:
            return "Pulisci la somma dei migliori";
        case Label.CleanSumOfBestDescription:
            return "Permette di rimuovere interattivamente problemi nella cronologia dei segmenti che rendono la somma dei migliori segmenti imprecisa.";
        case Label.ComparisonsMenu:
            return "Confronti…";
        case Label.AddComparison:
            return "Aggiungi confronto";
        case Label.AddComparisonDescription:
            return "Aggiunge un confronto personalizzato dove puoi salvare i tempi.";
        case Label.ImportComparison:
            return "Importa confronto";
        case Label.ImportComparisonDescription:
            return "Importa il Personal Best di un file splits come confronto.";
        case Label.GenerateGoalComparison:
            return "Genera confronto obiettivo";
        case Label.GenerateGoalComparisonDescription:
            return "Genera un confronto obiettivo basato su un tempo obiettivo.";
        case Label.CopyComparison:
            return "Copia confronto";
        case Label.CopyComparisonDescription:
            return "Copia un confronto esistente come nuovo confronto personalizzato.";
        case Label.SetSegmentIcon:
            return "Imposta icona";
        case Label.SetSegmentIconDescription:
            return "Scegli un'immagine come icona del segmento. Alcuni formati potrebbero non funzionare ovunque.";
        case Label.RemoveSegmentIcon:
            return "Rimuovi icona";
        case Label.RemoveSegmentIconDescription:
            return "Rimuove l'icona del segmento.";
        case Label.Rename:
            return "Rinomina";
        case Label.RenameDescription:
            return "Scegli un nuovo nome per il confronto personalizzato. Nomi riservati o duplicati non sono consentiti.";
        case Label.CopyAction:
            return "Copia";
        case Label.CopyDescription:
            return "Crea una copia del confronto personalizzato.";
        case Label.ACopy:
            return "Copia";
        case Label.Remove:
            return "Rimuovi";
        case Label.RemoveDescription:
            return "Rimuove il confronto personalizzato.";
        case Label.AnyPercent:
            return "Any%";
        case Label.LowPercent:
            return "Low%";
        case Label.HundredPercent:
            return "100%";
        case Label.AddComparisonPrompt:
            return "Specifica il nome del confronto da aggiungere:";
        case Label.ComparisonAddError:
            return "Impossibile aggiungere il confronto. Potrebbe essere duplicato o riservato.";
        case Label.ImportComparisonPrompt:
            return "Specifica il nome del confronto da importare:";
        case Label.GenerateGoalComparisonPrompt:
            return "Specifica il tempo che vuoi raggiungere:";
        case Label.Generate:
            return "Genera";
        case Label.GenerateGoalComparisonError:
            return "Impossibile generare il confronto obiettivo. Specifica un tempo valido.";
        case Label.CopyComparisonPrompt:
            return "Specifica il nome del confronto da copiare:";
        case Label.CopyComparisonError:
            return "Impossibile copiare il confronto. Il confronto potrebbe non esistere.";
        case Label.NothingToCleanUp:
            return "Non c'è nulla da pulire.";
        case Label.CleanPrompt:
            return "Pulire?";
        case Label.AssociateRunPrompt:
            return "Specifica l'ID o l'URL speedrun.com della run:";
        case Label.Associate:
            return "Associa";
        case Label.InvalidSpeedrunUrl:
            return "ID o URL speedrun.com non valido.";
        case Label.AssociateRunError:
            return "Impossibile associare la run. L'ID potrebbe non essere valido.";
        case Label.AddVariablePrompt:
            return "Specifica il nome della variabile personalizzata da aggiungere:";
        case Label.RenameComparison:
            return "Rinomina confronto";
        case Label.RenameComparisonPrompt:
            return "Specifica il nuovo nome del confronto:";
        case Label.ComparisonRenameError:
            return "Impossibile rinominare il confronto. Potrebbe essere duplicato o riservato.";
        case Label.GameNotFound:
            return "Gioco non trovato.";
        case Label.NoBoxArt:
            return "Il gioco non ha una copertina.";
        case Label.DownloadBoxArtError:
            return "Impossibile scaricare la copertina.";
        case Label.NoGameIcon:
            return "Il gioco non ha un'icona.";
        case Label.DownloadIconError:
            return "Impossibile scaricare l'icona.";
        case Label.Rank:
            return "Posizione";
        case Label.Player:
            return "Giocatore";
        case Label.Time:
            return "Tempo";
        case Label.Date:
            return "Data:";
        case Label.Emulator:
            return "Emulatore";
        case Label.EmulatorTag:
            return "Emulatore";
        case Label.ObsoleteRuns:
            return "Run obsolete";
        case Label.Shown:
            return "Mostrate";
        case Label.Hidden:
            return "Nascoste";
        case Label.OpenLeaderboard:
            return "Apri classifica";
        case Label.Filters:
            return "Filtri";
        case Label.LayoutEditor:
            return "Editor layout";
        case Label.Component:
            return "Componente";
        case Label.AddComponent:
            return "Aggiungi componente";
        case Label.RemoveComponent:
            return "Rimuovi componente";
        case Label.DuplicateComponent:
            return "Duplica componente";
        case Label.MoveComponentUp:
            return "Sposta componente su";
        case Label.MoveComponentDown:
            return "Sposta componente giù";
        case Label.ComponentTitle:
            return "Titolo";
        case Label.ComponentTitleDescription:
            return "Mostra nome gioco e categoria, oltre a icona, tentativi e run completate.";
        case Label.ComponentGraph:
            return "Grafico";
        case Label.ComponentGraphDescription:
            return "Visualizza vantaggio/svantaggio della run rispetto al confronto.";
        case Label.ComponentSplitsDescription:
            return "Componente principale per gli split con icona, nome, delta e tempo; scorrevole.";
        case Label.ComponentDetailedTimer:
            return "Timer dettagliato";
        case Label.ComponentDetailedTimerDescription:
            return "Mostra tempo totale e del segmento, più info opzionali.";
        case Label.ComponentTimer:
            return "Timer";
        case Label.ComponentTimerDescription:
            return "Mostra il tempo totale come orologio digitale; colore in base al confronto.";
        case Label.ComponentCurrentComparison:
            return "Confronto attuale";
        case Label.ComponentCurrentComparisonDescription:
            return "Mostra il nome del confronto attuale.";
        case Label.ComponentCurrentPace:
            return "Pace attuale";
        case Label.ComponentCurrentPaceDescription:
            return "Predice il tempo finale in base al confronto scelto.";
        case Label.ComponentDelta:
            return "Delta";
        case Label.ComponentDeltaDescription:
            return "Mostra quanto sei avanti o indietro rispetto al confronto.";
        case Label.ComponentPbChance:
            return "Probabilità PB";
        case Label.ComponentPbChanceDescription:
            return "Mostra la probabilità di battere il PB, dinamica durante la run.";
        case Label.ComponentPossibleTimeSave:
            return "Tempo risparmiabile";
        case Label.ComponentPossibleTimeSaveDescription:
            return "Mostra il tempo risparmiabile nel segmento e totale.";
        case Label.ComponentPreviousSegment:
            return "Segmento precedente";
        case Label.ComponentPreviousSegmentDescription:
            return "Mostra tempo guadagnato/perso nel segmento precedente e risparmio potenziale.";
        case Label.ComponentSegmentTime:
            return "Tempo segmento";
        case Label.ComponentSegmentTimeDescription:
            return "Mostra il tempo del segmento per il confronto scelto.";
        case Label.ComponentSumOfBest:
            return "Somma dei migliori";
        case Label.ComponentSumOfBestDescription:
            return "Mostra il tempo più veloce possibile basato sulla storia.";
        case Label.ComponentText:
            return "Testo";
        case Label.ComponentTextDescription:
            return "Mostra testo centrato o sinistra/destra, oppure una variabile personalizzata.";
        case Label.ComponentTotalPlaytime:
            return "Tempo di gioco totale";
        case Label.ComponentTotalPlaytimeDescription:
            return "Mostra il tempo totale di gioco della categoria.";
        case Label.ComponentVariableDescription:
            return "Crea un componente testo che mostra il valore della variabile «{name}».";
        case Label.ComponentBlankSpace:
            return "Spazio vuoto";
        case Label.ComponentBlankSpaceDescription:
            return "Componente vuoto usato come spaziatura.";
        case Label.ComponentCarousel:
            return "Carosello";
        case Label.ComponentCarouselDescription:
            return "Mostra un componente figlio alla volta e ruota tra di essi. Dà priorità a quelli il cui contenuto è cambiato, altrimenti passa in base a un intervallo.";
        case Label.ComponentSeparator:
            return "Separatore";
        case Label.ComponentSeparatorDescription:
            return "Rende un separatore tra componenti.";
        case Label.Row:
            return "Riga";
        case Label.RowDescription:
            return "Una riga di componenti disposti orizzontalmente, che cambia la direzione del layout per i componenti al suo interno.";
        case Label.Column:
            return "Colonna";
        case Label.ColumnDescription:
            return "Una colonna di componenti disposti verticalmente, che cambia la direzione del layout per i componenti al suo interno.";
        case Label.AccuracySeconds:
            return "Secondi";
        case Label.AccuracyTenths:
            return "Decimi";
        case Label.AccuracyHundredths:
            return "Centesimi";
        case Label.AccuracyMilliseconds:
            return "Millisecondi";
        case Label.FontStyle:
            return "Stile";
        case Label.FontWeight:
            return "Peso";
        case Label.FontStretch:
            return "Allungamento";
        case Label.FontStyleNormal:
            return "Normale";
        case Label.FontStyleItalic:
            return "Corsivo";
        case Label.AlignmentAutomatic:
            return "Automatico";
        case Label.AlignmentLeft:
            return "Sinistra";
        case Label.AlignmentCenter:
            return "Centro";
        case Label.GradientTransparent:
            return "Trasparente";
        case Label.GradientPlain:
            return "Tinta unita";
        case Label.GradientVertical:
            return "Verticale";
        case Label.GradientHorizontal:
            return "Orizzontale";
        case Label.GradientAlternating:
            return "Alternato";
        case Label.GradientPlainDelta:
            return "Delta tinta unita";
        case Label.GradientVerticalDelta:
            return "Delta verticale";
        case Label.GradientHorizontalDelta:
            return "Delta orizzontale";
        case Label.LayoutBackgroundImage:
            return "Immagine";
        case Label.LayoutBackgroundBrightness:
            return "Luminosità";
        case Label.LayoutBackgroundOpacity:
            return "Opacità";
        case Label.LayoutBackgroundBlur:
            return "Sfocatura";
        case Label.LayoutDirectionVertical:
            return "Verticale";
        case Label.LayoutDirectionHorizontal:
            return "Orizzontale";
        case Label.ColumnKindTime:
            return "Tempo";
        case Label.ColumnKindVariable:
            return "Variabile";
        case Label.ColumnStartWithEmpty:
            return "Vuoto";
        case Label.ColumnStartWithComparisonTime:
            return "Tempo di confronto";
        case Label.ColumnStartWithComparisonSegmentTime:
            return "Tempo segmento di confronto";
        case Label.ColumnStartWithPossibleTimeSave:
            return "Tempo risparmiabile";
        case Label.IconDisplayModeBothRows:
            return "Entrambe le righe";
        case Label.IconDisplayModeFirstRow:
            return "Solo la prima riga";
        case Label.SubsplitDisplayModeFlat:
            return "Elenco piatto";
        case Label.SubsplitDisplayModeCurrentGroupExpanded:
            return "Gruppo attuale espanso";
        case Label.SubsplitDisplayModeAllGroupsExpanded:
            return "Tutti i gruppi espansi";
        case Label.ColumnUpdateWithDontUpdate:
            return "Non aggiornare";
        case Label.ColumnUpdateWithSplitTime:
            return "Tempo split";
        case Label.ColumnUpdateWithDelta:
            return "Tempo avanti / indietro";
        case Label.ColumnUpdateWithDeltaWithFallback:
            return "Tempo avanti / indietro o tempo split se vuoto";
        case Label.ColumnUpdateWithSegmentTime:
            return "Tempo segmento";
        case Label.ColumnUpdateWithSegmentDelta:
            return "Tempo guadagnato / perso";
        case Label.ColumnUpdateWithSegmentDeltaWithFallback:
            return "Tempo guadagnato / perso o tempo segmento se vuoto";
        case Label.ColumnUpdateTriggerOnStartingSegment:
            return "All’inizio del segmento";
        case Label.ColumnUpdateTriggerContextual:
            return "Contestuale";
        case Label.ColumnUpdateTriggerOnEndingSegment:
            return "Alla fine del segmento";
        case Label.ComparisonCurrentComparison:
            return "Confronto attuale";
        case Label.CustomVariableNoneAvailable:
            return "Nessuna variabile disponibile";
        case Label.CustomVariableNoneAvailableTooltip:
            return "Le variabili personalizzate possono essere definite nella scheda Variabili durante la modifica degli split. Ulteriori variabili personalizzate possono essere fornite automaticamente dagli auto splitter.";
        case Label.HotkeyButtonTooltip:
            return "Fai clic per registrare un tasto di scelta rapida. Puoi usare anche i pulsanti del gamepad. Gli hotkey globali al momento non sono possibili. I pulsanti del gamepad funzionano globalmente.";
        case Label.ServerConnect:
            return "Connetti";
        case Label.ServerDisconnect:
            return "Disconnetti";
        case Label.ServerConnecting:
            return "Connessione...";
        case Label.ServerDisconnecting:
            return "Disconnessione...";
        case Label.ConnectToServerTitle:
            return "Connetti al server";
        case Label.ConnectToServerDescription:
            return "Specifica l’URL WebSocket:";
        case Label.Connect:
            return "Connetti";
        case Label.UpdateAvailable:
            return "È disponibile una nuova versione di LiveSplit One! Clicca qui per ricaricare.";
        case Label.UnsavedChangesBeforeUnload:
            return "Ci sono modifiche non salvate. Vuoi davvero chiudere LiveSplit One?";
        case Label.OpenSidebarAriaLabel:
            return "Apri barra laterale";
        case Label.FailedToSaveLayout:
            return "Impossibile salvare il layout.";
        case Label.FailedToSaveHotkeys:
            return "Impossibile salvare le impostazioni dei tasti di scelta rapida.";
        case Label.FailedToSaveGeneralSettings:
            return "Impossibile salvare le impostazioni generali.";
        case Label.FailedToSaveSplits:
            return "Impossibile salvare gli split.";
        case Label.LayoutCouldNotBeLoaded:
            return "Il layout non può essere caricato. Potrebbe non essere un layout LiveSplit o LiveSplit One valido.";
        case Label.EmptySplitsNotSupported:
            return "Gli split vuoti non sono supportati.";
        case Label.BugEncountered:
            return "Hai riscontrato un bug:";
        case Label.PleaseReportIssueStart:
            return "Segnala questo problema ";
        case Label.ReportHere:
            return "qui";
        case Label.PleaseReportIssueEnd:
            return ".";
        case Label.BugReportInstructions:
            return "Per aiutarci a risolvere questo problema, includi i passaggi per riprodurlo e allega gli split e il layout che stavi usando quando si è verificato il problema.";
        case Label.LoadFailedPrivateBrowsing:
            return "Impossibile caricare LiveSplit One.\nPotresti essere in modalità di navigazione privata.\nLiveSplit One non può salvare split, layout o altre impostazioni a causa delle limitazioni della modalità privata del browser.\nQueste limitazioni potrebbero essere rimosse in futuro.\nPer usare LiveSplit One ora, disattiva la navigazione privata nelle impostazioni.";
        case Label.LoadFailedOutdatedBrowser:
            return "Impossibile caricare LiveSplit One.\nPotresti usare un browser non aggiornato.\nAggiorna il browser o la versione di iOS e riprova.\nUn altro motivo potrebbe essere un’estensione del browser, ad esempio un adblocker, che blocca l’accesso a script importanti.";
        case Label.CustomComparisonsSidebarEditingHint:
            return "Prima salva o annulla il confronto che stai modificando.";
        case Label.CustomComparisonsComparisonMenu:
            return "Altre azioni";
        case Label.CustomComparisonsNameRequired:
            return "Dai un nome al confronto.";
        case Label.CustomComparisonsSearchBlocks:
            return "Cerca blocchi";
        case Label.CustomComparisonsNoBlocksFound:
            return "Nessun blocco corrisponde. Prova un'altra parola.";
        case Label.CustomComparisonsAboutBlock:
            return "Che cosa fa questo blocco?";
        case Label.CustomComparisonsBlocks:
            return "Blocchi";
        case Label.CustomComparisonsRailHint:
            return "Trascina un blocco in uno spazio, o su un blocco per sostituirlo. Fai clic su uno per metterlo nel primo spazio vuoto adatto.";
        case Label.CustomComparisonsDragBlock:
            return "Trascina per spostare questo blocco";
        case Label.CustomComparisonsOpenEditorHint:
            return "I tuoi confronti personalizzati funzionano con tutti i tuoi split e compaiono accanto agli altri confronti.";
        case Label.CustomComparisons:
            return "Confronti personalizzati";
        case Label.CustomComparisonsExportAll:
            return "Esporta tutto…";
        case Label.CustomComparisonsExportAllFileName:
            return "Confronti personalizzati";
        case Label.CustomComparisonsPluginUnavailable:
            return "Non è stato possibile caricare i confronti personalizzati, quindi al momento non compaiono come confronti: {0}";
        case Label.CustomComparisonsListHeading:
            return "Confronti";
        case Label.CustomComparisonsNoComparisons:
            return "Nessun confronto personalizzato. Fai clic su Nuovo per creare il primo.";
        case Label.CustomComparisonsNew:
            return "Nuovo…";
        case Label.CustomComparisonsEdit:
            return "Modifica…";
        case Label.CustomComparisonsRename:
            return "Rinomina…";
        case Label.CustomComparisonsDuplicate:
            return "Duplica";
        case Label.CustomComparisonsImport:
            return "Importa…";
        case Label.CustomComparisonsExport:
            return "Esporta…";
        case Label.CustomComparisonsCopyAsText:
            return "Copia come testo";
        case Label.CustomComparisonsPaste:
            return "Incolla…";
        case Label.CustomComparisonsUsedBy:
            return "Usato da altri {0} confronti";
        case Label.CustomComparisonsUsedByOne:
            return "Usato da 1 altro confronto";
        case Label.CustomComparisonsUnreadable:
            return "Non leggibile";
        case Label.CustomComparisonsSaveReminder:
            return "Le modifiche vengono salvate subito, su questo dispositivo. Usa Esporta tutto per portarle su un altro.";
        case Label.CustomComparisonsCopiedToClipboard:
            return "Copiato. Puoi incollarlo in una chat o in un post del forum.";
        case Label.CustomComparisonsCouldNotCopy:
            return "Impossibile copiare negli appunti.";
        case Label.CustomComparisonsCouldNotReadClipboard:
            return "Impossibile leggere gli appunti. Incolla qui il testo:";
        case Label.CustomComparisonsErrorTitle:
            return "Non ha funzionato";
        case Label.CustomComparisonsRenameTitle:
            return "Rinomina confronto";
        case Label.CustomComparisonsRenameDescription:
            return "I confronti che usano questo vengono aggiornati con il nuovo nome.";
        case Label.CustomComparisonsNameTakenTitle:
            return "Scegli un altro nome";
        case Label.CustomComparisonsNameTakenDescription:
            return "{0} Scrivi un altro nome:";
        case Label.CustomComparisonsRemoveTitle:
            return "Rimuovi confronto";
        case Label.CustomComparisonsRemoveDescription:
            return "Rimuovere «{0}»?";
        case Label.CustomComparisonsRemoveUsedDescription:
            return "Rimuovere «{0}»? Altri {1} confronti lo usano e senza di esso smettono di funzionare.";
        case Label.CustomComparisonsRemoveUsedOneDescription:
            return "Rimuovere «{0}»? 1 altro confronto lo usa e senza di esso smette di funzionare.";
        case Label.CustomComparisonsPasteTitle:
            return "Incolla un confronto";
        case Label.CustomComparisonsPasteDescription:
            return "Incolla il testo di un confronto che qualcuno ha condiviso:";
        case Label.CustomComparisonsCopySuffix:
            return "{0} (copia)";
        case Label.CustomComparisonsTemplatesTitle:
            return "Nuovo confronto";
        case Label.CustomComparisonsTemplatesDescription:
            return "Scegli un punto di partenza. Ognuno è un confronto completo che puoi usare così com'è o modificare.";
        case Label.CustomComparisonsTemplateGoalPace:
            return "Ritmo obiettivo";
        case Label.CustomComparisonsTemplateGoalPaceDescription:
            return "Le tue run tipiche, allungate per finire esattamente in un tempo obiettivo.";
        case Label.CustomComparisonsTemplateRealisticPace:
            return "Ritmo realistico";
        case Label.CustomComparisonsTemplateRealisticPaceDescription:
            return "Il 70° percentile degli ultimi 30 giorni: tempi che batti circa il 70 % delle volte.";
        case Label.CustomComparisonsTemplateRecentForm:
            return "Forma recente";
        case Label.CustomComparisonsTemplateRecentFormDescription:
            return "La mediana delle tue ultime 10 run completate, ignorando il colpo di fortuna migliore e peggiore.";
        case Label.CustomComparisonsTemplateSafePace:
            return "Ritmo sicuro";
        case Label.CustomComparisonsTemplateSafePaceDescription:
            return "Il più lento tra i tuoi gold + 2 s e la tua mediana, così non è mai irrealisticamente veloce.";
        case Label.CustomComparisonsTemplateBlank:
            return "Vuoto";
        case Label.CustomComparisonsTemplateBlankDescription:
            return "Parti da zero.";
        case Label.CustomComparisonsNewComparisonName:
            return "Il mio confronto";
        case Label.CustomComparisonsEditorTitle:
            return "Confronto personalizzato";
        case Label.CustomComparisonsName:
            return "Nome";
        case Label.CustomComparisonsUndo:
            return "Annulla";
        case Label.CustomComparisonsRedo:
            return "Ripeti";
        case Label.CustomComparisonsChooseBlock:
            return "Scegli un blocco…";
        case Label.CustomComparisonsReplaceBlock:
            return "Sostituisci con…";
        case Label.CustomComparisonsWrapBlock:
            return "Metti dentro…";
        case Label.CustomComparisonsUnwrapBlock:
            return "Rimuovi, mantieni il contenuto";
        case Label.CustomComparisonsPreviewBlock:
            return "Anteprima di questo blocco";
        case Label.CustomComparisonsBlockMenu:
            return "Azioni del blocco";
        case Label.CustomComparisonsFillEmptySlots:
            return "Riempi gli spazi vuoti per vedere l'anteprima. Ogni spazio ha bisogno di un blocco.";
        case Label.CustomComparisonsDiscardChangesDescription:
            return "Questo confronto ha modifiche non salvate.";
        case Label.CustomComparisonsDiscard:
            return "Scarta";
        case Label.CustomComparisonsKeepEditing:
            return "Continua a modificare";
        case Label.CustomComparisonsInvalidTime:
            return "Scrivi un tempo come 20:00 o 1:05:30.";
        case Label.CustomComparisonsNotFound:
            return "{0} (non trovato)";
        case Label.CustomComparisonsNotInSplits:
            return "{0}. (non nei tuoi split)";
        case Label.CustomComparisonsSegmentOption:
            return "{0}. {1}";
        case Label.CustomComparisonsAddRange:
            return "Aggiungi un intervallo";
        case Label.CustomComparisonsRemoveRange:
            return "Rimuovi questo intervallo";
        case Label.CustomComparisonsRangeBackwards:
            return "I segmenti da {0} a {1} sono al contrario. Scambia i numeri.";
        case Label.CustomComparisonsCategorySources:
            return "Fonti";
        case Label.CustomComparisonsCategoryFilters:
            return "Filtri";
        case Label.CustomComparisonsCategoryAggregates:
            return "Aggregati";
        case Label.CustomComparisonsCategoryMath:
            return "Calcoli";
        case Label.CustomComparisonsCategoryControl:
            return "Controllo";
        case Label.CustomComparisonsKindSamples:
            return "Un elenco di tempi per ogni segmento";
        case Label.CustomComparisonsKindTimes:
            return "Un tempo per ogni segmento";
        case Label.CustomComparisonsBlockResult:
            return "questo confronto è";
        case Label.CustomComparisonsBlockResultTip:
            return "Il confronto finito. Metti qui dentro i blocchi che lo costruiscono.";
        case Label.CustomComparisonsBlockSegmentHistory:
            return "tutti i miei tempi per ogni segmento";
        case Label.CustomComparisonsBlockSegmentHistoryTip:
            return "Ogni tempo che hai registrato per ogni segmento. I segmenti saltati, e il segmento combinato subito dopo un salto, sono esclusi.";
        case Label.CustomComparisonsBlockComparison:
            return "confronto {name}";
        case Label.CustomComparisonsBlockComparisonTip:
            return "Un confronto esistente, segmento per segmento. Quelli integrati funzionano anche se sono disattivati.";
        case Label.CustomComparisonsBlockAttempt:
            return "tentativo n. {number}";
        case Label.CustomComparisonsBlockAttemptTip:
            return "I segmenti di un tentativo passato, in base al suo numero nella cronologia dei tentativi. Vuoto dove quella run ha saltato uno split o è stata resettata.";
        case Label.CustomComparisonsBlockBestRecentRun:
            return "la mia run migliore degli ultimi {days} giorni";
        case Label.CustomComparisonsBlockBestRecentRunTip:
            return "I segmenti della tua run completata più veloce degli ultimi N giorni: un «PB recente» che cambia mentre giochi. Vuoto se nessuna run è stata completata in quel periodo.";
        case Label.CustomComparisonsBlockLastN:
            return "ultimi {count} tempi di";
        case Label.CustomComparisonsBlockLastNTip:
            return "Mantiene i tempi più recenti per ogni segmento. Conta le volte in cui quel segmento è stato completato, non i tentativi.";
        case Label.CustomComparisonsBlockCompletedRunsOnly:
            return "solo da run completate";
        case Label.CustomComparisonsBlockCompletedRunsOnlyTip:
            return "Mantiene solo i tempi dei tentativi che hanno completato l'intera run.";
        case Label.CustomComparisonsBlockRecentDays:
            return "degli ultimi {days} giorni";
        case Label.CustomComparisonsBlockRecentDaysTip:
            return "Mantiene solo i tempi dei tentativi terminati negli ultimi N giorni, così i tempi vecchi smettono di contare. I tentativi senza data sono esclusi.";
        case Label.CustomComparisonsBlockFinishedUnder:
            return "da run finite sotto {totalSeconds}";
        case Label.CustomComparisonsBlockFinishedUnderTip:
            return "Mantiene solo i tempi delle run finite più velocemente di così, in modo che contino solo le tue run buone.";
        case Label.CustomComparisonsBlockReachedSegment:
            return "da run che hanno raggiunto {segment}";
        case Label.CustomComparisonsBlockReachedSegmentTip:
            return "Mantiene solo i tempi dei tentativi arrivati almeno fino a questo segmento. Come «solo da run completate», ma per i giochi in cui la maggior parte delle run viene resettata presto. Se questo segmento non è nei tuoi split, vedrai un avviso e non viene mantenuto nessun tempo.";
        case Label.CustomComparisonsBlockTrimOutliers:
            return "togli il {percent} % più veloce e più lento di";
        case Label.CustomComparisonsBlockTrimOutliersTip:
            return "Rimuove i colpi di fortuna prima della media: scarta quella parte dei tempi più veloci e più lenti di ogni segmento. Con pochi tempi non viene scartato nulla.";
        case Label.CustomComparisonsBlockAtLeast:
            return "solo se ci sono almeno {count} tempi in";
        case Label.CustomComparisonsBlockAtLeastTip:
            return "I segmenti con meno tempi diventano vuoti, così puoi riempirli con «se vuoto, usa» invece di fidarti di troppi pochi dati.";
        case Label.CustomComparisonsBlockAggregate:
            return "{kind} di";
        case Label.CustomComparisonsBlockAggregateTip:
            return "Trasforma l'elenco di tempi di ogni segmento in un solo tempo. Un segmento senza tempi resta vuoto.";
        case Label.CustomComparisonsAggregateMedian:
            return "mediana";
        case Label.CustomComparisonsAggregateAverage:
            return "media";
        case Label.CustomComparisonsAggregateMin:
            return "migliore (min)";
        case Label.CustomComparisonsAggregateMax:
            return "peggiore (max)";
        case Label.CustomComparisonsBlockPercentile:
            return "percentile {percent} di";
        case Label.CustomComparisonsBlockPercentileTip:
            return "0 è il tuo tempo più veloce, 100 il più lento, 50 la mediana. 70 significa: batti questo tempo circa il 70 % delle volte.";
        case Label.CustomComparisonsBlockWeightedAverage:
            return "media pesata sui recenti di";
        case Label.CustomComparisonsBlockWeightedAverageFooter:
            return "il peso si dimezza ogni {halfLife} tempi più vecchi";
        case Label.CustomComparisonsBlockWeightedAverageTip:
            return "Una media in cui i tempi recenti contano di più. Il tempo più nuovo conta per intero, uno più vecchio di N tempi conta la metà, di 2N un quarto, e così via.";
        case Label.CustomComparisonsBlockAddTime:
            return "aggiungi {seconds} s per segmento a";
        case Label.CustomComparisonsBlockAddTimeTip:
            return "Aggiunge (o, se negativo, toglie) tempo a ogni segmento. Non scende mai sotto zero.";
        case Label.CustomComparisonsBlockScale:
            return "{percent} % di";
        case Label.CustomComparisonsBlockScaleTip:
            return "Scala ogni segmento. 103 % è il 3 % più lento, 97 % è il 3 % più veloce.";
        case Label.CustomComparisonsBlockRound:
            return "arrotonda a {step}";
        case Label.CustomComparisonsBlockRoundTip:
            return "Arrotonda ogni segmento ai 0,1 s più vicini (o 1 s, 0,01 s), così anche i tempi degli split sono puliti.";
        case Label.CustomComparisonsRoundStep:
            return "{0} s";
        case Label.CustomComparisonsBlockClamp:
            return "mantieni";
        case Label.CustomComparisonsBlockClampTip:
            return "Tiene ogni segmento tra due limiti, per esempio mai più veloce dei tuoi gold e mai più lento del tuo PB. Se i limiti si incrociano, vince «mai più veloce di».";
        case Label.CustomComparisonsSlotNeverFaster:
            return "mai più veloce di";
        case Label.CustomComparisonsSlotNeverSlower:
            return "mai più lento di";
        case Label.CustomComparisonsBlockStretchToTotal:
            return "allunga per finire in {totalSeconds}";
        case Label.CustomComparisonsBlockStretchToTotalTip:
            return "Scala ogni segmento dello stesso fattore in modo che l'intera run corrisponda al tempo obiettivo. Se un segmento è vuoto, il risultato è vuoto: riempi prima i buchi con «se vuoto, usa».";
        case Label.CustomComparisonsBlockBlend:
            return "{percent} % della strada da";
        case Label.CustomComparisonsBlockBlendTip:
            return "Mescola due regole per segmento. 0 % è tutto la prima, 100 % tutto la seconda, 75 % è tre quarti della strada.";
        case Label.CustomComparisonsSlotTo:
            return "a";
        case Label.CustomComparisonsBlockPick:
            return "il più {kind} tra";
        case Label.CustomComparisonsBlockPickTip:
            return "Per ogni segmento, la più lenta (o più veloce) delle due regole. Se una non ha un tempo per un segmento, si usa l'altra.";
        case Label.CustomComparisonsPickSlower:
            return "lento";
        case Label.CustomComparisonsPickFaster:
            return "veloce";
        case Label.CustomComparisonsSlotAnd:
            return "e";
        case Label.CustomComparisonsBlockFallback:
            return "usa";
        case Label.CustomComparisonsBlockFallbackTip:
            return "Riempie solo i segmenti che la prima regola lascia vuoti, per esempio perché non ci sono ancora abbastanza run.";
        case Label.CustomComparisonsSlotIfEmpty:
            return "se vuoto, usa";
        case Label.CustomComparisonsBlockSegmentRange:
            return "per i segmenti … usa … altrimenti …";
        case Label.CustomComparisonsBlockSegmentRangeTip:
            return "Usa una regola per un intervallo di segmenti e un'altra per il resto. Aggiungi altri intervalli per altre regole: vince il primo intervallo che corrisponde. Se un intervallo va oltre la fine dei tuoi split, vedrai un avviso.";
        case Label.CustomComparisonsBlockSegmentRangeHeader:
            return "regole diverse per segmenti diversi (vince il primo intervallo che corrisponde)";
        case Label.CustomComparisonsRangeCase:
            return "per i segmenti da {from} a {to} usa";
        case Label.CustomComparisonsSlotOtherwise:
            return "altrimenti";
        case Label.CustomComparisonsPreview:
            return "Anteprima";
        case Label.CustomComparisonsPreviewingBlock:
            return "Anteprima di un blocco, non del confronto";
        case Label.CustomComparisonsShowWholeComparison:
            return "Mostra tutto il confronto";
        case Label.CustomComparisonsSegment:
            return "Segmento";
        case Label.CustomComparisonsDifferenceFrom:
            return "Differenza da";
        case Label.CustomComparisonsFasterThanGold:
            return "Più veloce del tuo tempo migliore per questo segmento (il tuo gold)";
        case Label.CustomComparisonsFasterThanGoldWarning:
            return "{0} segmenti sono più veloci dei tuoi gold. È consentito, ma questo ritmo potrebbe non essere realistico.";
        case Label.CustomComparisonsFasterThanGoldWarningOne:
            return "1 segmento è più veloce del tuo gold. È consentito, ma questo ritmo potrebbe non essere realistico.";
        case Label.CustomComparisonsFinishLine:
            return "Finisce in {0}, {1} rispetto a {2}.";
        case Label.CustomComparisonsFinishVsSumOfBest:
            return "La tua somma dei migliori è {0}.";
        case Label.CustomComparisonsNoProblems:
            return "Nessun problema.";
        case Label.CustomComparisonsNoTimesLeft:
            return "Nessun segmento ha un tempo. Fai clic su una riga per vedere perché, o aggiungi «usa … se vuoto, usa» con un ripiego come il tuo PB.";
        case Label.CustomComparisonsOriginTitle:
            return "Da dove viene questo tempo";
        case Label.CustomComparisonsOriginEmpty:
            return "Questo segmento non ha un tempo, quindi anche ogni split successivo è vuoto.";
        case Label.CustomComparisonsOriginFillingGap:
            return "riempie un buco";
        case Label.CustomComparisonsOriginPicked:
            return "il più {0} dei due";
        case Label.CustomComparisonsOriginLowLimit:
            return "tenuto al limite «mai più veloce di»";
        case Label.CustomComparisonsOriginHighLimit:
            return "tenuto al limite «mai più lento di»";
        case Label.CustomComparisonsClickRowHint:
            return "Fai clic su una riga per vedere da dove viene il suo tempo.";
        case Label.CustomComparisonsDescYourGolds:
            return "i tuoi gold";
        case Label.CustomComparisonsDescYourPb:
            return "il tuo PB";
        case Label.CustomComparisonsDescComparison:
            return "«{0}»";
        case Label.CustomComparisonsDescAttempt:
            return "il tentativo n. {0}";
        case Label.CustomComparisonsDescBestRecentRun:
            return "la tua run migliore degli ultimi {0} giorni";
        case Label.CustomComparisonsDescWeightedAverage:
            return "la media pesata sui recenti tra {0}";
        case Label.CustomComparisonsDescClamp:
            return "{0}, tenuto tra {1} e {2}";
        case Label.CustomComparisonsDescRound:
            return "{0}, arrotondato a {1}";
        case Label.CustomComparisonsDescMedian:
            return "la mediana tra {0}";
        case Label.CustomComparisonsDescAverage:
            return "la media tra {0}";
        case Label.CustomComparisonsDescMin:
            return "il migliore tra {0}";
        case Label.CustomComparisonsDescMax:
            return "il peggiore tra {0}";
        case Label.CustomComparisonsDescPercentile:
            return "il percentile {0} tra {1}";
        case Label.CustomComparisonsDescAddTime:
            return "{0} + {1}";
        case Label.CustomComparisonsDescRemoveTime:
            return "{0} − {1}";
        case Label.CustomComparisonsDescScale:
            return "{1} × {0} %";
        case Label.CustomComparisonsDescStretch:
            return "{0}, allungato per finire in {1}";
        case Label.CustomComparisonsDescBlend:
            return "{0} % del percorso tra {1} e {2}";
        case Label.CustomComparisonsDescSlower:
            return "il più lento tra {0} e {1}";
        case Label.CustomComparisonsDescFaster:
            return "il più veloce tra {0} e {1}";
        case Label.CustomComparisonsDescFallback:
            return "{0} (o {1} dove è vuoto)";
        case Label.CustomComparisonsDescRangeArm:
            return "{0} per {1}";
        case Label.CustomComparisonsDescRangeOtherwise:
            return "{0}, altrimenti {1}";
        case Label.CustomComparisonsDescSomething:
            return "qualcosa";
        case Label.CustomComparisonsDescAllTimes:
            return "tutti i tuoi tempi";
        case Label.CustomComparisonsDescLastN:
            return "i tuoi ultimi {0} tempi";
        case Label.CustomComparisonsQualCompleted:
            return "da run completate";
        case Label.CustomComparisonsQualRecentDays:
            return "degli ultimi {0} giorni";
        case Label.CustomComparisonsQualUnder:
            return "da run sotto {0}";
        case Label.CustomComparisonsQualTrim:
            return "senza il {0} % più veloce e più lento";
        case Label.CustomComparisonsQualAtLeast:
            return "quando ce ne sono almeno {0}";
        case Label.CustomComparisonsQualReached:
            return "da run che hanno raggiunto {0}";
        case Label.CustomComparisonsSumGapsFilled:
            return "{0} Buchi riempiti con {1}.";
        case Label.CustomComparisonsSumRangeArm:
            return "{0}: {1}";
        case Label.CustomComparisonsSumOtherSegments:
            return "Altri segmenti: {0}";
        case Label.CustomComparisonsSegmentNumber:
            return "segmento {0}";
        case Label.CustomComparisonsSegmentSpan:
            return "da {0} a {1}";
        case Label.CustomComparisonsSeconds:
            return "{0} s";
        case Label.CustomComparisonsListAnd:
            return "{0} e {1}";
        case Label.CustomComparisonsWarnSegment:
            return "Usa il segmento {0}, ma i tuoi split ne hanno {1}";
        case Label.CustomComparisonsWarnSegments:
            return "Usa i segmenti {0}, ma i tuoi split ne hanno {1}";
        case Label.CustomComparisonsSentence:
            return "{0}.";
    }
}
