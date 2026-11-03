import { Label } from ".";

export function resolveFrench(text: Label): string {
    switch (text) {
        case Label.Ok:
            return "OK";
        case Label.Cancel:
            return "Annuler";
        case Label.Settings:
            return "Paramètres";
        case Label.Language:
            return "Langue";
        case Label.LanguageDescription:
            return "Définit la langue utilisée dans l'application.";
        case Label.LanguageAuto:
            return "Automatique";
        case Label.Theme:
            return "Thème";
        case Label.ThemeDescription:
            return "Détermine s’il faut suivre le thème du système ou forcer le mode clair ou sombre.";
        case Label.ThemeLightMode:
            return "Mode clair";
        case Label.ThemeDarkMode:
            return "Mode sombre";
        case Label.HotkeysHeading:
            return "Raccourcis";
        case Label.GeneralHeading:
            return "Général";
        case Label.NetworkHeading:
            return "Réseau";
        case Label.FrameRate:
            return "Fréquence d’images";
        case Label.FrameRateDescription:
            return "Détermine la fréquence d’images à laquelle afficher le minuteur. « Adapté à la batterie » tente de déterminer le type d’appareil et l’état de charge pour choisir une bonne fréquence d’images. « Adapter à l’écran » fait correspondre le minuteur au taux de rafraîchissement de l’écran.";
        case Label.FrameRateBatteryAware:
            return "Adapté à la batterie";
        case Label.FrameRateMatchScreen:
            return "Adapter à l’écran";
        case Label.SaveOnReset:
            return "Enregistrer lors de la réinitialisation";
        case Label.SaveOnResetDescription:
            return "Détermine s’il faut enregistrer automatiquement les splits lors de la réinitialisation du minuteur.";
        case Label.ShowControlButtons:
            return "Afficher les boutons de contrôle";
        case Label.ShowControlButtonsDescription:
            return "Détermine s’il faut afficher des boutons sous le minuteur pour le contrôler. Lorsqu’ils sont désactivés, vous devez utiliser les raccourcis.";
        case Label.ShowManualGameTimeInput:
            return "Afficher la saisie manuelle du temps de jeu";
        case Label.ShowManualGameTimeInputDescription:
            return "Affiche une zone de texte sous le minuteur qui vous permet de saisir manuellement le temps de jeu. Vous démarrez le minuteur et faites des splits en appuyant sur la touche Entrée dans la zone de texte. Assurez‑vous de comparer avec « Game Time ».";
        case Label.ManualGameTimeMode:
            return "Mode de temps de jeu manuel";
        case Label.ManualGameTimeModeDescription:
            return "Détermine si le temps de jeu manuel est saisi en temps de segment ou en temps de split.";
        case Label.ManualGameTimeModeSegmentTimes:
            return "Temps de segment";
        case Label.ManualGameTimeModeSplitTimes:
            return "Temps de split";
        case Label.AlwaysOnTop:
            return "Toujours au premier plan";
        case Label.AlwaysOnTopDescription:
            return "Garde la fenêtre au‑dessus des autres fenêtres.";
        case Label.SpeedrunComIntegration:
            return "Intégration Speedrun.com";
        case Label.SpeedrunComIntegrationDescription:
            return "Interroge la liste des jeux, catégories et classements depuis speedrun.com.";
        case Label.ServerConnection:
            return "Connexion au serveur";
        case Label.ServerConnectionDescription:
            return "Permet de se connecter à un serveur WebSocket qui peut contrôler le minuteur en envoyant diverses commandes. Les commandes sont actuellement un sous‑ensemble de celles que le LiveSplit original prend en charge.";
        case Label.ServerConnectionExperimental:
            return "Cette fonctionnalité est expérimentale et le protocole changera probablement à l’avenir.";
        case Label.TheRunGgIntegration:
            return "Intégration TheRun.gg";
        case Label.TheRunGgIntegrationDescription:
            return "S’intègre à therun.gg pour le suivi en direct des runs et l’envoi automatique des statistiques. Vous avez besoin d’une clé d’envoi therun.gg pour utiliser cette fonctionnalité.";
        case Label.TheRunGgLiveTracking:
            return "Suivi en direct";
        case Label.TheRunGgLiveTrackingDescription:
            return "Lorsqu’il est activé, les données de split en direct sont envoyées à therun.gg après chaque action de split, ce qui permet un suivi en direct sur le site.";
        case Label.TheRunGgStatsUploading:
            return "Envoi des statistiques";
        case Label.TheRunGgStatsUploadingDescription:
            return "Lorsqu’il est activé, le fichier de splits est envoyé à therun.gg après chaque réinitialisation ou run terminée, ce qui synchronise automatiquement vos runs avec le site.";
        case Label.HotkeyAlreadyInUse:
            return "Le raccourci est déjà utilisé.";
        case Label.Start:
            return "Démarrer";
        case Label.Resume:
            return "Reprendre";
        case Label.Pause:
            return "Pause";
        case Label.UndoSplit:
            return "Annuler le split";
        case Label.Reset:
            return "Réinitialiser";
        case Label.SkipSplit:
            return "Passer le split";
        case Label.ManualGameTimePlaceholder:
            return "Temps de jeu manuel";
        case Label.LiveSplitLogoAlt:
            return "Logo LiveSplit";
        case Label.LiveSplitOne:
            return "LiveSplit One";
        case Label.Splits:
            return "Splits";
        case Label.Layout:
            return "Disposition";
        case Label.CompareAgainst:
            return "Comparer à";
        case Label.RealTime:
            return "Temps réel";
        case Label.GameTime:
            return "Temps de jeu";
        case Label.PopOut:
            return "Fenêtre détachée";
        case Label.About:
            return "À propos";
        case Label.Back:
            return "Retour";
        case Label.AboutVersionPrefix:
            return "Version :";
        case Label.AboutDescription:
            return "LiveSplit One est une version multiplateforme de LiveSplit, le minuteur élégant et hautement personnalisable pour les speedrunners.";
        case Label.AboutViewSource:
            return "Voir le code source sur GitHub";
        case Label.AboutRecentChanges:
            return "Changements récents";
        case Label.AboutContributors:
            return "Contributeurs";
        case Label.Loading:
            return "Chargement...";
        case Label.Add:
            return "Ajouter";
        case Label.Import:
            return "Importer";
        case Label.OpenSplits:
            return "Ouvrir les splits";
        case Label.EditSplits:
            return "Modifier les splits";
        case Label.ExportSplits:
            return "Exporter les splits";
        case Label.CopySplits:
            return "Copier les splits";
        case Label.RemoveSplits:
            return "Supprimer les splits";
        case Label.Untitled:
            return "Sans titre";
        case Label.NoCategory:
            return "—";
        case Label.DiscardChangesTitle:
            return "Ignorer les modifications ?";
        case Label.DiscardChangesDescription:
            return "Vos splits actuels ont des modifications non enregistrées. Voulez-vous continuer et ignorer ces modifications ?";
        case Label.DeleteSplitsTitle:
            return "Supprimer les splits ?";
        case Label.DeleteSplitsDescription:
            return "Voulez-vous vraiment supprimer les splits ? Cette opération est irréversible.";
        case Label.SaveBestTimesTitle:
            return "Enregistrer les meilleurs temps ?";
        case Label.SaveBestTimesDescription:
            return "Vous avez battu certains de vos meilleurs temps. Voulez-vous les mettre à jour ?";
        case Label.Yes:
            return "Oui";
        case Label.No:
            return "Non";
        case Label.DontReset:
            return "Ne pas réinitialiser";
        case Label.FailedToExportSplits:
            return "Échec de l’exportation des splits.";
        case Label.CantImportEmptySplits:
            return "Impossible d’importer des splits vides.";
        case Label.FailedToReadFile:
            return "Échec de la lecture du fichier :";
        case Label.FailedToImportSplits:
            return "Échec de l’importation des splits :";
        case Label.CouldNotParseSplits:
            return "Impossible d’analyser les splits.";
        case Label.LoadedSplitsInvalid:
            return "Les splits chargés ne sont pas valides.";
        case Label.NewSegmentName:
            return "Temps";
        case Label.EditWhileRunningError:
            return "Vous ne pouvez pas modifier vos splits pendant que le minuteur fonctionne.";
        case Label.Edit:
            return "Modifier";
        case Label.Save:
            return "Enregistrer";
        case Label.Export:
            return "Exporter";
        case Label.FailedToParseTimeSpan:
            return "Impossible d’analyser TimeSpan";
        case Label.Default:
            return "Par défaut";
        case Label.Game:
            return "Jeu";
        case Label.Category:
            return "Catégorie";
        case Label.StartTimerAt:
            return "Démarrer le timer à";
        case Label.Attempts:
            return "Tentatives";
        case Label.SplitsEditor:
            return "Éditeur de splits";
        case Label.Variables:
            return "Variables";
        case Label.Rules:
            return "Règles";
        case Label.Leaderboard:
            return "Classement";
        case Label.InsertAbove:
            return "Insérer au‑dessus";
        case Label.InsertBelow:
            return "Insérer au‑dessous";
        case Label.RemoveSegment:
            return "Supprimer le segment";
        case Label.MoveUp:
            return "Monter";
        case Label.MoveDown:
            return "Descendre";
        case Label.CreateGroup:
            return "Créer un groupe";
        case Label.RemoveGroup:
            return "Supprimer le groupe";
        case Label.AddVariable:
            return "Ajouter une variable";
        case Label.OpenPbPage:
            return "Ouvrir la page PB";
        case Label.AssociateRun:
            return "Associer une run";
        case Label.Icon:
            return "Icône";
        case Label.SegmentName:
            return "Nom du segment";
        case Label.SplitTime:
            return "Temps du split";
        case Label.SegmentTime:
            return "Temps du segment";
        case Label.BestSegment:
            return "Meilleur segment";
        case Label.SpeedrunComVariableTooltip:
            return "Variable speedrun.com spécifique au jeu.";
        case Label.Region:
            return "Région";
        case Label.RegionDescription:
            return "La région du jeu joué.";
        case Label.Platform:
            return "Plateforme";
        case Label.PlatformDescription:
            return "La plateforme sur laquelle le jeu est joué.";
        case Label.UsesEmulator:
            return "Utilise un émulateur";
        case Label.UsesEmulatorDescription:
            return "Indique si un émulateur est utilisé.";
        case Label.CustomVariableTooltip:
            return "Variable personnalisée que vous avez définie. Peut être affichée avec le composant texte.";
        case Label.NoVariables:
            return "Il n’y a actuellement aucune variable personnalisée pour ce jeu.";
        case Label.NoVariablesWithSpeedrunCom:
            return "Il n’y a actuellement aucune variable speedrun.com ou personnalisée pour ce jeu.";
        case Label.TimedWithoutLoads:
            return "sont chronométrées sans les temps de chargement";
        case Label.TimedWithGameTime:
            return "sont chronométrées avec le Game Time";
        case Label.RequireVideoProof:
            return "exigent une preuve vidéo";
        case Label.RunsOfThisGamePrefix:
            return "Les runs de ce jeu ";
        case Label.RunsOfThisGameSuffix:
            return ".";
        case Label.And:
            return "et";
        case Label.SetIcon:
            return "Définir l’icône";
        case Label.SetIconDescription:
            return "Choisir une image comme icône du jeu. Certains formats peuvent ne pas être pris en charge partout.";
        case Label.DownloadBoxArt:
            return "Télécharger la jaquette";
        case Label.DownloadBoxArtDescription:
            return "Tente de télécharger la jaquette depuis speedrun.com pour l’utiliser comme icône du jeu.";
        case Label.DownloadIcon:
            return "Télécharger l’icône";
        case Label.DownloadIconDescription:
            return "Tente de télécharger l’icône du jeu depuis speedrun.com.";
        case Label.RemoveIcon:
            return "Retirer l’icône";
        case Label.RemoveIconDescription:
            return "Retire l’icône du jeu.";
        case Label.CleaningMenu:
            return "Nettoyage…";
        case Label.ClearOnlyHistory:
            return "Effacer uniquement l’historique";
        case Label.ClearOnlyHistoryDescription:
            return "Les splits stockent tout l’historique des runs, y compris chaque segment. Cette action efface l’historique sans affecter le PB, les meilleurs segments ni les comparaisons.";
        case Label.ClearAllTimes:
            return "Effacer tous les temps";
        case Label.ClearAllTimesDescription:
            return "Supprime tous les temps et l’historique pour réinitialiser complètement les splits.";
        case Label.CleanSumOfBest:
            return "Nettoyer la somme des meilleurs";
        case Label.CleanSumOfBestDescription:
            return "Permet de supprimer des anomalies dans l’historique des segments qui rendent la somme des meilleurs segments inexacte.";
        case Label.ComparisonsMenu:
            return "Comparaisons…";
        case Label.AddComparison:
            return "Ajouter une comparaison";
        case Label.AddComparisonDescription:
            return "Ajoute une comparaison personnalisée où vous pouvez stocker des temps.";
        case Label.ImportComparison:
            return "Importer une comparaison";
        case Label.ImportComparisonDescription:
            return "Importe le Personal Best d’un fichier de splits comme comparaison.";
        case Label.GenerateGoalComparison:
            return "Générer une comparaison d’objectif";
        case Label.GenerateGoalComparisonDescription:
            return "Génère une comparaison d’objectif basée sur un temps cible.";
        case Label.CopyComparison:
            return "Copier la comparaison";
        case Label.CopyComparisonDescription:
            return "Copie une comparaison existante en nouvelle comparaison personnalisée.";
        case Label.SetSegmentIcon:
            return "Définir l’icône";
        case Label.SetSegmentIconDescription:
            return "Choisir une image comme icône du segment. Certains formats peuvent ne pas fonctionner partout.";
        case Label.RemoveSegmentIcon:
            return "Retirer l’icône";
        case Label.RemoveSegmentIconDescription:
            return "Retire l’icône du segment.";
        case Label.Rename:
            return "Renommer";
        case Label.RenameDescription:
            return "Choisissez un nouveau nom pour la comparaison personnalisée. Les noms réservés ou en double ne sont pas autorisés.";
        case Label.CopyAction:
            return "Copier";
        case Label.CopyDescription:
            return "Crée une copie de la comparaison personnalisée.";
        case Label.ACopy:
            return "Copie";
        case Label.Remove:
            return "Supprimer";
        case Label.RemoveDescription:
            return "Supprime la comparaison personnalisée.";
        case Label.AnyPercent:
            return "Any%";
        case Label.LowPercent:
            return "Low%";
        case Label.HundredPercent:
            return "100%";
        case Label.AddComparisonPrompt:
            return "Indiquez le nom de la comparaison à ajouter :";
        case Label.ComparisonAddError:
            return "La comparaison n’a pas pu être ajoutée. Elle est peut‑être en double ou réservée.";
        case Label.ImportComparisonPrompt:
            return "Indiquez le nom de la comparaison à importer :";
        case Label.GenerateGoalComparisonPrompt:
            return "Indiquez le temps à atteindre :";
        case Label.Generate:
            return "Générer";
        case Label.GenerateGoalComparisonError:
            return "Échec de génération de la comparaison d’objectif. Vérifiez que le temps est valide.";
        case Label.CopyComparisonPrompt:
            return "Indiquez le nom de la comparaison à copier :";
        case Label.CopyComparisonError:
            return "Échec de copie de la comparaison. Elle n’existe peut‑être pas.";
        case Label.NothingToCleanUp:
            return "Il n’y a rien à nettoyer.";
        case Label.CleanPrompt:
            return "Nettoyer ?";
        case Label.AssociateRunPrompt:
            return "Indiquez l’ID ou l’URL speedrun.com de la run :";
        case Label.Associate:
            return "Associer";
        case Label.InvalidSpeedrunUrl:
            return "ID ou URL speedrun.com invalide.";
        case Label.AssociateRunError:
            return "Impossible d’associer la run. L’ID est peut‑être invalide.";
        case Label.AddVariablePrompt:
            return "Indiquez le nom de la variable personnalisée à ajouter :";
        case Label.RenameComparison:
            return "Renommer la comparaison";
        case Label.RenameComparisonPrompt:
            return "Indiquez le nouveau nom de la comparaison :";
        case Label.ComparisonRenameError:
            return "La comparaison n’a pas pu être renommée. Elle est peut‑être en double ou réservée.";
        case Label.GameNotFound:
            return "Jeu introuvable.";
        case Label.NoBoxArt:
            return "Le jeu n’a pas de jaquette.";
        case Label.DownloadBoxArtError:
            return "Impossible de télécharger la jaquette.";
        case Label.NoGameIcon:
            return "Le jeu n’a pas d’icône.";
        case Label.DownloadIconError:
            return "Impossible de télécharger l’icône.";
        case Label.Rank:
            return "Rang";
        case Label.Player:
            return "Joueur";
        case Label.Time:
            return "Temps";
        case Label.Date:
            return "Date :";
        case Label.Emulator:
            return "Émulateur";
        case Label.EmulatorTag:
            return "Émulateur";
        case Label.ObsoleteRuns:
            return "Runs obsolètes";
        case Label.Shown:
            return "Affichées";
        case Label.Hidden:
            return "Masquées";
        case Label.OpenLeaderboard:
            return "Ouvrir le classement";
        case Label.Filters:
            return "Filtres";
        case Label.LayoutEditor:
            return "Éditeur de layout";
        case Label.Component:
            return "Composant";
        case Label.AddComponent:
            return "Ajouter un composant";
        case Label.RemoveComponent:
            return "Supprimer le composant";
        case Label.DuplicateComponent:
            return "Dupliquer le composant";
        case Label.MoveComponentUp:
            return "Monter le composant";
        case Label.MoveComponentDown:
            return "Descendre le composant";
        case Label.ComponentTitle:
            return "Titre";
        case Label.ComponentTitleDescription:
            return "Affiche le nom du jeu et la catégorie, ainsi que l’icône, les tentatives et les runs terminées.";
        case Label.ComponentGraph:
            return "Graphique";
        case Label.ComponentGraphDescription:
            return "Visualise l’avance/le retard sur toute la run par rapport à la comparaison.";
        case Label.ComponentSplitsDescription:
            return "Composant principal des splits avec icône, nom, delta et temps, défilable.";
        case Label.ComponentDetailedTimer:
            return "Timer détaillé";
        case Label.ComponentDetailedTimerDescription:
            return "Affiche le temps total et celui du segment, plus des infos optionnelles.";
        case Label.ComponentTimer:
            return "Timer";
        case Label.ComponentTimerDescription:
            return "Affiche le temps total en horloge numérique, couleur selon la comparaison.";
        case Label.ComponentCurrentComparison:
            return "Comparaison actuelle";
        case Label.ComponentCurrentComparisonDescription:
            return "Affiche le nom de la comparaison en cours.";
        case Label.ComponentCurrentPace:
            return "Rythme actuel";
        case Label.ComponentCurrentPaceDescription:
            return "Prédit le temps final en fonction de la comparaison choisie.";
        case Label.ComponentDelta:
            return "Delta";
        case Label.ComponentDeltaDescription:
            return "Affiche l’avance/le retard par rapport à la comparaison.";
        case Label.ComponentPbChance:
            return "Chance de PB";
        case Label.ComponentPbChanceDescription:
            return "Affiche la probabilité de battre le PB, évolutive pendant la run.";
        case Label.ComponentPossibleTimeSave:
            return "Gain de temps possible";
        case Label.ComponentPossibleTimeSaveDescription:
            return "Affiche le temps gagnable sur le segment et le total possible.";
        case Label.ComponentPreviousSegment:
            return "Segment précédent";
        case Label.ComponentPreviousSegmentDescription:
            return "Affiche gain/perte sur le segment précédent et le gain potentiel.";
        case Label.ComponentSegmentTime:
            return "Temps du segment";
        case Label.ComponentSegmentTimeDescription:
            return "Affiche le temps du segment pour la comparaison choisie.";
        case Label.ComponentSumOfBest:
            return "Somme des meilleurs";
        case Label.ComponentSumOfBestDescription:
            return "Affiche le temps minimal possible basé sur l’historique.";
        case Label.ComponentText:
            return "Texte";
        case Label.ComponentTextDescription:
            return "Affiche un texte centré ou gauche/droite, ou une variable personnalisée.";
        case Label.ComponentTotalPlaytime:
            return "Temps de jeu total";
        case Label.ComponentTotalPlaytimeDescription:
            return "Affiche le temps total joué pour la catégorie.";
        case Label.ComponentVariableDescription:
            return "Crée un composant texte qui affiche la valeur de la variable « {name} ».";
        case Label.ComponentBlankSpace:
            return "Espace vide";
        case Label.ComponentBlankSpaceDescription:
            return "Composant vide servant d’espacement.";
        case Label.ComponentCarousel:
            return "Carrousel";
        case Label.ComponentCarouselDescription:
            return "Affiche un composant enfant à la fois et alterne entre eux. Il privilégie ceux dont le contenu a changé, sinon il bascule selon un intervalle.";
        case Label.ComponentSeparator:
            return "Séparateur";
        case Label.ComponentSeparatorDescription:
            return "Affiche un séparateur entre les composants.";
        case Label.Row:
            return "Ligne";
        case Label.RowDescription:
            return "Une ligne de composants disposés horizontalement, changeant la direction du layout pour les composants à l'intérieur.";
        case Label.Column:
            return "Colonne";
        case Label.ColumnDescription:
            return "Une colonne de composants disposés verticalement, changeant la direction du layout pour les composants à l'intérieur.";
        case Label.AccuracySeconds:
            return "Secondes";
        case Label.AccuracyTenths:
            return "Dixièmes";
        case Label.AccuracyHundredths:
            return "Centièmes";
        case Label.AccuracyMilliseconds:
            return "Millisecondes";
        case Label.FontStyle:
            return "Style";
        case Label.FontWeight:
            return "Graisse";
        case Label.FontStretch:
            return "Étirement";
        case Label.FontStyleNormal:
            return "Normal";
        case Label.FontStyleItalic:
            return "Italique";
        case Label.AlignmentAutomatic:
            return "Automatique";
        case Label.AlignmentLeft:
            return "Gauche";
        case Label.AlignmentCenter:
            return "Centre";
        case Label.GradientTransparent:
            return "Transparent";
        case Label.GradientPlain:
            return "Uni";
        case Label.GradientVertical:
            return "Vertical";
        case Label.GradientHorizontal:
            return "Horizontal";
        case Label.GradientAlternating:
            return "Alterné";
        case Label.GradientPlainDelta:
            return "Delta uni";
        case Label.GradientVerticalDelta:
            return "Delta vertical";
        case Label.GradientHorizontalDelta:
            return "Delta horizontal";
        case Label.LayoutBackgroundImage:
            return "Image";
        case Label.LayoutBackgroundBrightness:
            return "Luminosité";
        case Label.LayoutBackgroundOpacity:
            return "Opacité";
        case Label.LayoutBackgroundBlur:
            return "Flou";
        case Label.LayoutDirectionVertical:
            return "Vertical";
        case Label.LayoutDirectionHorizontal:
            return "Horizontal";
        case Label.ColumnKindTime:
            return "Temps";
        case Label.ColumnKindVariable:
            return "Variable";
        case Label.ColumnStartWithEmpty:
            return "Vide";
        case Label.ColumnStartWithComparisonTime:
            return "Temps de comparaison";
        case Label.ColumnStartWithComparisonSegmentTime:
            return "Temps du segment de comparaison";
        case Label.ColumnStartWithPossibleTimeSave:
            return "Gain de temps possible";
        case Label.IconDisplayModeBothRows:
            return "Les deux lignes";
        case Label.IconDisplayModeFirstRow:
            return "Première ligne uniquement";
        case Label.SubsplitDisplayModeFlat:
            return "À plat";
        case Label.SubsplitDisplayModeCurrentGroupExpanded:
            return "Groupe actuel déplié";
        case Label.SubsplitDisplayModeAllGroupsExpanded:
            return "Tous les groupes dépliés";
        case Label.ColumnUpdateWithDontUpdate:
            return "Ne pas mettre à jour";
        case Label.ColumnUpdateWithSplitTime:
            return "Temps du split";
        case Label.ColumnUpdateWithDelta:
            return "Avance / retard";
        case Label.ColumnUpdateWithDeltaWithFallback:
            return "Avance / retard ou temps du split si vide";
        case Label.ColumnUpdateWithSegmentTime:
            return "Temps du segment";
        case Label.ColumnUpdateWithSegmentDelta:
            return "Temps gagné / perdu";
        case Label.ColumnUpdateWithSegmentDeltaWithFallback:
            return "Temps gagné / perdu ou temps du segment si vide";
        case Label.ColumnUpdateTriggerOnStartingSegment:
            return "Au début du segment";
        case Label.ColumnUpdateTriggerContextual:
            return "Contextuel";
        case Label.ColumnUpdateTriggerOnEndingSegment:
            return "À la fin du segment";
        case Label.ComparisonCurrentComparison:
            return "Comparaison actuelle";
        case Label.CustomVariableNoneAvailable:
            return "Aucune variable disponible";
        case Label.CustomVariableNoneAvailableTooltip:
            return "Les variables personnalisées peuvent être définies dans l’onglet Variables lors de l’édition des splits. Des variables personnalisées supplémentaires peuvent être fournies automatiquement par les auto splitters.";
        case Label.HotkeyButtonTooltip:
            return "Cliquez pour enregistrer un raccourci. Vous pouvez aussi utiliser les boutons d’une manette. Les raccourcis globaux ne sont pas possibles pour l’instant. Les boutons de manette fonctionnent globalement.";
        case Label.ServerConnect:
            return "Se connecter";
        case Label.ServerDisconnect:
            return "Se déconnecter";
        case Label.ServerConnecting:
            return "Connexion...";
        case Label.ServerDisconnecting:
            return "Déconnexion...";
        case Label.ConnectToServerTitle:
            return "Se connecter au serveur";
        case Label.ConnectToServerDescription:
            return "Saisissez l’URL WebSocket :";
        case Label.Connect:
            return "Se connecter";
        case Label.UpdateAvailable:
            return "Une nouvelle version de LiveSplit One est disponible ! Cliquez ici pour recharger.";
        case Label.UnsavedChangesBeforeUnload:
            return "Il y a des modifications non enregistrées. Voulez-vous vraiment fermer LiveSplit One ?";
        case Label.OpenSidebarAriaLabel:
            return "Ouvrir la barre latérale";
        case Label.FailedToSaveLayout:
            return "Échec de l’enregistrement de la disposition.";
        case Label.FailedToSaveHotkeys:
            return "Échec de l’enregistrement des raccourcis clavier.";
        case Label.FailedToSaveGeneralSettings:
            return "Échec de l’enregistrement des paramètres généraux.";
        case Label.FailedToSaveSplits:
            return "Échec de l’enregistrement des splits.";
        case Label.LayoutCouldNotBeLoaded:
            return "La disposition n’a pas pu être chargée. Il se peut que ce ne soit pas une disposition LiveSplit ou LiveSplit One valide.";
        case Label.EmptySplitsNotSupported:
            return "Les splits vides ne sont pas pris en charge.";
        case Label.BugEncountered:
            return "Vous avez rencontré un bug :";
        case Label.PleaseReportIssueStart:
            return "Veuillez signaler ce problème ";
        case Label.ReportHere:
            return "ici";
        case Label.PleaseReportIssueEnd:
            return ".";
        case Label.BugReportInstructions:
            return "Afin de nous aider à corriger ce problème, veuillez indiquer les étapes pour le reproduire et joindre les splits et la disposition que vous utilisiez lorsque le problème est survenu.";
        case Label.LoadFailedPrivateBrowsing:
            return "Impossible de charger LiveSplit One.\nVous êtes peut‑être en navigation privée.\nLiveSplit One ne peut pas enregistrer les splits, les dispositions ou d’autres paramètres à cause des limitations de la navigation privée.\nCes limitations pourraient être levées à l’avenir.\nPour utiliser LiveSplit One pour l’instant, désactivez la navigation privée dans vos paramètres.";
        case Label.LoadFailedOutdatedBrowser:
            return "Impossible de charger LiveSplit One.\nVotre navigateur n’est peut‑être pas à jour.\nMettez à jour votre navigateur ou votre version d’iOS et réessayez.\nUne autre raison possible est qu’une extension de navigateur, comme un bloqueur de publicité, bloque l’accès à des scripts importants.";
        case Label.CustomComparisonsSidebarEditingHint:
            return "Enregistrez ou annulez d’abord la comparaison que vous modifiez.";
        case Label.CustomComparisonsComparisonMenu:
            return "Plus d’actions";
        case Label.CustomComparisonsNameRequired:
            return "Donnez un nom à la comparaison.";
        case Label.CustomComparisonsSearchBlocks:
            return "Rechercher des blocs";
        case Label.CustomComparisonsNoBlocksFound:
            return "Aucun bloc ne correspond. Essayez un autre mot.";
        case Label.CustomComparisonsAboutBlock:
            return "Que fait ce bloc ?";
        case Label.CustomComparisonsBlocks:
            return "Blocs";
        case Label.CustomComparisonsRailHint:
            return "Faites glisser un bloc sur un emplacement, ou sur un bloc pour le remplacer. Cliquez sur un bloc pour le placer dans le premier emplacement vide qui lui convient.";
        case Label.CustomComparisonsDragBlock:
            return "Faire glisser pour déplacer ce bloc";
        case Label.CustomComparisonsOpenEditorHint:
            return "Vos comparaisons personnalisées fonctionnent avec tous vos splits et apparaissent à côté des autres comparaisons.";
        case Label.CustomComparisons:
            return "Comparaisons personnalisées";
        case Label.CustomComparisonsExportAll:
            return "Tout exporter…";
        case Label.CustomComparisonsExportAllFileName:
            return "Comparaisons personnalisées";
        case Label.CustomComparisonsPluginUnavailable:
            return "Les comparaisons personnalisées n’ont pas pu être chargées, elles n’apparaissent donc pas comme comparaisons pour le moment : {0}";
        case Label.CustomComparisonsListHeading:
            return "Comparaisons";
        case Label.CustomComparisonsNoComparisons:
            return "Aucune comparaison personnalisée pour l’instant. Cliquez sur Nouvelle pour créer la première.";
        case Label.CustomComparisonsNew:
            return "Nouvelle…";
        case Label.CustomComparisonsEdit:
            return "Modifier…";
        case Label.CustomComparisonsRename:
            return "Renommer…";
        case Label.CustomComparisonsDuplicate:
            return "Dupliquer";
        case Label.CustomComparisonsImport:
            return "Importer…";
        case Label.CustomComparisonsExport:
            return "Exporter…";
        case Label.CustomComparisonsCopyAsText:
            return "Copier en texte";
        case Label.CustomComparisonsPaste:
            return "Coller…";
        case Label.CustomComparisonsUsedBy:
            return "Utilisée par {0} autres comparaisons";
        case Label.CustomComparisonsUsedByOne:
            return "Utilisée par 1 autre comparaison";
        case Label.CustomComparisonsUnreadable:
            return "Illisible";
        case Label.CustomComparisonsSaveReminder:
            return "Les modifications sont enregistrées immédiatement, sur cet appareil. Utilisez Tout exporter pour les emporter sur un autre.";
        case Label.CustomComparisonsCopiedToClipboard:
            return "Copié. Vous pouvez le coller dans un chat ou un message de forum.";
        case Label.CustomComparisonsCouldNotCopy:
            return "Impossible de copier dans le presse-papiers.";
        case Label.CustomComparisonsCouldNotReadClipboard:
            return "Impossible de lire le presse-papiers. Collez plutôt le texte ici :";
        case Label.CustomComparisonsErrorTitle:
            return "Cela n’a pas fonctionné";
        case Label.CustomComparisonsRenameTitle:
            return "Renommer la comparaison";
        case Label.CustomComparisonsRenameDescription:
            return "Les comparaisons qui utilisent celle-ci sont mises à jour avec le nouveau nom.";
        case Label.CustomComparisonsNameTakenTitle:
            return "Choisissez un autre nom";
        case Label.CustomComparisonsNameTakenDescription:
            return "{0} Saisissez un autre nom :";
        case Label.CustomComparisonsRemoveTitle:
            return "Supprimer la comparaison";
        case Label.CustomComparisonsRemoveDescription:
            return "Supprimer « {0} » ?";
        case Label.CustomComparisonsRemoveUsedDescription:
            return "Supprimer « {0} » ? {1} autres comparaisons l’utilisent et cesseront de fonctionner sans elle.";
        case Label.CustomComparisonsRemoveUsedOneDescription:
            return "Supprimer « {0} » ? 1 autre comparaison l’utilise et cessera de fonctionner sans elle.";
        case Label.CustomComparisonsPasteTitle:
            return "Coller une comparaison";
        case Label.CustomComparisonsPasteDescription:
            return "Collez le texte d’une comparaison que quelqu’un a partagée :";
        case Label.CustomComparisonsCopySuffix:
            return "{0} (copie)";
        case Label.CustomComparisonsTemplatesTitle:
            return "Nouvelle comparaison";
        case Label.CustomComparisonsTemplatesDescription:
            return "Choisissez un point de départ. Chacun est une comparaison complète que vous pouvez utiliser telle quelle ou modifier.";
        case Label.CustomComparisonsTemplateGoalPace:
            return "Rythme objectif";
        case Label.CustomComparisonsTemplateGoalPaceDescription:
            return "Vos runs habituelles, étirées pour finir exactement en un temps objectif.";
        case Label.CustomComparisonsTemplateRealisticPace:
            return "Rythme réaliste";
        case Label.CustomComparisonsTemplateRealisticPaceDescription:
            return "Le 70e centile des 30 derniers jours : des temps que vous battez environ 70 % du temps.";
        case Label.CustomComparisonsTemplateRecentForm:
            return "Forme récente";
        case Label.CustomComparisonsTemplateRecentFormDescription:
            return "La médiane de vos 10 dernières runs terminées, sans le meilleur et le pire coup de chance.";
        case Label.CustomComparisonsTemplateSafePace:
            return "Rythme sûr";
        case Label.CustomComparisonsTemplateSafePaceDescription:
            return "Le plus lent entre vos golds + 2 s et votre médiane, pour qu’il ne soit jamais irréaliste.";
        case Label.CustomComparisonsTemplateBlank:
            return "Vide";
        case Label.CustomComparisonsTemplateBlankDescription:
            return "Partir de zéro.";
        case Label.CustomComparisonsNewComparisonName:
            return "Ma comparaison";
        case Label.CustomComparisonsEditorTitle:
            return "Comparaison personnalisée";
        case Label.CustomComparisonsName:
            return "Nom";
        case Label.CustomComparisonsUndo:
            return "Annuler";
        case Label.CustomComparisonsRedo:
            return "Rétablir";
        case Label.CustomComparisonsChooseBlock:
            return "Choisir un bloc…";
        case Label.CustomComparisonsReplaceBlock:
            return "Remplacer par…";
        case Label.CustomComparisonsWrapBlock:
            return "Mettre dans…";
        case Label.CustomComparisonsUnwrapBlock:
            return "Supprimer, garder le contenu";
        case Label.CustomComparisonsPreviewBlock:
            return "Aperçu de ce bloc";
        case Label.CustomComparisonsBlockMenu:
            return "Actions du bloc";
        case Label.CustomComparisonsFillEmptySlots:
            return "Remplissez les emplacements vides pour voir l’aperçu. Chaque emplacement a besoin d’un bloc.";
        case Label.CustomComparisonsDiscardChangesDescription:
            return "Cette comparaison a des modifications non enregistrées.";
        case Label.CustomComparisonsDiscard:
            return "Ignorer";
        case Label.CustomComparisonsKeepEditing:
            return "Continuer à modifier";
        case Label.CustomComparisonsInvalidTime:
            return "Saisissez un temps comme 20:00 ou 1:05:30.";
        case Label.CustomComparisonsNotFound:
            return "{0} (introuvable)";
        case Label.CustomComparisonsNotInSplits:
            return "{0}. (absent de vos splits)";
        case Label.CustomComparisonsSegmentOption:
            return "{0}. {1}";
        case Label.CustomComparisonsAddRange:
            return "Ajouter une plage";
        case Label.CustomComparisonsRemoveRange:
            return "Supprimer cette plage";
        case Label.CustomComparisonsRangeBackwards:
            return "Les segments {0} à {1} sont à l’envers. Inversez les nombres.";
        case Label.CustomComparisonsCategorySources:
            return "Sources";
        case Label.CustomComparisonsCategoryFilters:
            return "Filtres";
        case Label.CustomComparisonsCategoryAggregates:
            return "Agrégats";
        case Label.CustomComparisonsCategoryMath:
            return "Calcul";
        case Label.CustomComparisonsCategoryControl:
            return "Contrôle";
        case Label.CustomComparisonsKindSamples:
            return "Une liste de temps pour chaque segment";
        case Label.CustomComparisonsKindTimes:
            return "Un temps pour chaque segment";
        case Label.CustomComparisonsBlockResult:
            return "cette comparaison est";
        case Label.CustomComparisonsBlockResultTip:
            return "La comparaison finale. Placez ici les blocs qui la construisent.";
        case Label.CustomComparisonsBlockSegmentHistory:
            return "tous mes temps pour chaque segment";
        case Label.CustomComparisonsBlockSegmentHistoryTip:
            return "Chaque temps enregistré pour chaque segment. Les segments sautés, et le segment combiné juste après un saut, sont exclus.";
        case Label.CustomComparisonsBlockComparison:
            return "comparaison {name}";
        case Label.CustomComparisonsBlockComparisonTip:
            return "Une comparaison existante, segment par segment. Les comparaisons intégrées fonctionnent même si elles sont désactivées.";
        case Label.CustomComparisonsBlockAttempt:
            return "tentative n° {number}";
        case Label.CustomComparisonsBlockAttemptTip:
            return "Les segments d’une tentative passée, selon son numéro dans l’historique des tentatives. Vide là où cette run a sauté un split ou a été réinitialisée.";
        case Label.CustomComparisonsBlockBestRecentRun:
            return "ma meilleure run des {days} derniers jours";
        case Label.CustomComparisonsBlockBestRecentRunTip:
            return "Les segments de votre run terminée la plus rapide des N derniers jours : un « PB récent » qui évolue à mesure que vous jouez. Vide si aucune run n’a été terminée pendant cette période.";
        case Label.CustomComparisonsBlockLastN:
            return "les {count} derniers temps de";
        case Label.CustomComparisonsBlockLastNTip:
            return "Garde les temps les plus récents de chaque segment. Compte les fois où ce segment a été terminé, pas les tentatives.";
        case Label.CustomComparisonsBlockCompletedRunsOnly:
            return "des runs terminées uniquement";
        case Label.CustomComparisonsBlockCompletedRunsOnlyTip:
            return "Garde uniquement les temps des tentatives qui ont terminé la run entière.";
        case Label.CustomComparisonsBlockRecentDays:
            return "des {days} derniers jours";
        case Label.CustomComparisonsBlockRecentDaysTip:
            return "Garde uniquement les temps des tentatives terminées dans les N derniers jours, pour que les anciens temps ne comptent plus. Les tentatives sans date sont exclues.";
        case Label.CustomComparisonsBlockFinishedUnder:
            return "des runs terminées en moins de {totalSeconds}";
        case Label.CustomComparisonsBlockFinishedUnderTip:
            return "Garde uniquement les temps des runs terminées plus vite que cela, pour que seules vos bonnes runs comptent.";
        case Label.CustomComparisonsBlockReachedSegment:
            return "des runs qui ont atteint {segment}";
        case Label.CustomComparisonsBlockReachedSegmentTip:
            return "Garde uniquement les temps des tentatives qui sont allées au moins jusqu’à ce segment. Comme « des runs terminées uniquement », mais pour les jeux où la plupart des runs sont réinitialisées tôt. Si ce segment n’est pas dans vos splits, un avertissement s’affiche et aucun temps n’est gardé.";
        case Label.CustomComparisonsBlockTrimOutliers:
            return "sans les {percent} % les plus rapides et les plus lents de";
        case Label.CustomComparisonsBlockTrimOutliersTip:
            return "Retire les coups de chance avant la moyenne : écarte cette part des temps les plus rapides et les plus lents de chaque segment. Avec peu de temps, rien n’est écarté.";
        case Label.CustomComparisonsBlockAtLeast:
            return "seulement s’il y a au moins {count} temps dans";
        case Label.CustomComparisonsBlockAtLeastTip:
            return "Les segments avec moins de temps deviennent vides, pour que vous puissiez les remplir avec « si vide, utiliser » au lieu de vous fier à trop peu de données.";
        case Label.CustomComparisonsBlockAggregate:
            return "{kind} de";
        case Label.CustomComparisonsBlockAggregateTip:
            return "Transforme la liste de temps de chaque segment en un seul temps. Un segment sans temps reste vide.";
        case Label.CustomComparisonsAggregateMedian:
            return "médiane";
        case Label.CustomComparisonsAggregateAverage:
            return "moyenne";
        case Label.CustomComparisonsAggregateMin:
            return "meilleur (min)";
        case Label.CustomComparisonsAggregateMax:
            return "pire (max)";
        case Label.CustomComparisonsBlockPercentile:
            return "centile {percent} de";
        case Label.CustomComparisonsBlockPercentileTip:
            return "0 est votre temps le plus rapide, 100 le plus lent, 50 la médiane. 70 signifie : vous battez ce temps environ 70 % du temps.";
        case Label.CustomComparisonsBlockWeightedAverage:
            return "moyenne pondérée vers le récent de";
        case Label.CustomComparisonsBlockWeightedAverageFooter:
            return "le poids est divisé par deux tous les {halfLife} temps plus anciens";
        case Label.CustomComparisonsBlockWeightedAverageTip:
            return "Une moyenne où les temps récents comptent davantage. Le temps le plus récent compte entièrement, un temps N fois plus ancien compte à moitié, 2N fois plus ancien pour un quart, et ainsi de suite.";
        case Label.CustomComparisonsBlockAddTime:
            return "ajouter {seconds} s par segment à";
        case Label.CustomComparisonsBlockAddTimeTip:
            return "Ajoute (ou, si négatif, retire) du temps à chaque segment. Ne descend jamais sous zéro.";
        case Label.CustomComparisonsBlockScale:
            return "{percent} % de";
        case Label.CustomComparisonsBlockScaleTip:
            return "Met chaque segment à l’échelle. 103 % est 3 % plus lent, 97 % est 3 % plus rapide.";
        case Label.CustomComparisonsBlockRound:
            return "arrondir à {step}";
        case Label.CustomComparisonsBlockRoundTip:
            return "Arrondit chaque segment aux 0,1 s les plus proches (ou 1 s, 0,01 s), pour que les temps de split soient nets aussi.";
        case Label.CustomComparisonsRoundStep:
            return "{0} s";
        case Label.CustomComparisonsBlockClamp:
            return "garder";
        case Label.CustomComparisonsBlockClampTip:
            return "Maintient chaque segment entre deux limites, par exemple jamais plus rapide que vos golds et jamais plus lent que votre PB. Si les limites se croisent, « jamais plus rapide que » l’emporte.";
        case Label.CustomComparisonsSlotNeverFaster:
            return "jamais plus rapide que";
        case Label.CustomComparisonsSlotNeverSlower:
            return "jamais plus lent que";
        case Label.CustomComparisonsBlockStretchToTotal:
            return "étirer pour finir en {totalSeconds}";
        case Label.CustomComparisonsBlockStretchToTotalTip:
            return "Met tous les segments à l’échelle du même facteur pour que la run entière corresponde au temps objectif. Si un segment est vide, le résultat est vide : comblez d’abord les trous avec « si vide, utiliser ».";
        case Label.CustomComparisonsBlockBlend:
            return "{percent} % du chemin de";
        case Label.CustomComparisonsBlockBlendTip:
            return "Mélange deux règles par segment. 0 % correspond entièrement à la première, 100 % entièrement à la seconde, 75 % aux trois quarts du chemin.";
        case Label.CustomComparisonsSlotTo:
            return "à";
        case Label.CustomComparisonsBlockPick:
            return "le plus {kind} de";
        case Label.CustomComparisonsBlockPickTip:
            return "Pour chaque segment, la plus lente (ou la plus rapide) des deux règles. Si l’une n’a pas de temps pour un segment, l’autre est utilisée.";
        case Label.CustomComparisonsPickSlower:
            return "lent";
        case Label.CustomComparisonsPickFaster:
            return "rapide";
        case Label.CustomComparisonsSlotAnd:
            return "et";
        case Label.CustomComparisonsBlockFallback:
            return "utiliser";
        case Label.CustomComparisonsBlockFallbackTip:
            return "Remplit uniquement les segments que la première règle laisse vides, par exemple parce qu’il n’y a pas encore assez de runs.";
        case Label.CustomComparisonsSlotIfEmpty:
            return "si vide, utiliser";
        case Label.CustomComparisonsBlockSegmentRange:
            return "pour les segments … utiliser … sinon …";
        case Label.CustomComparisonsBlockSegmentRangeTip:
            return "Utilise une règle pour une plage de segments et une autre pour le reste. Ajoutez des plages pour plus de règles : la première plage qui correspond l’emporte. Si une plage dépasse la fin de vos splits, un avertissement s’affiche.";
        case Label.CustomComparisonsBlockSegmentRangeHeader:
            return "des règles différentes selon les segments (la première plage qui correspond l’emporte)";
        case Label.CustomComparisonsRangeCase:
            return "pour les segments {from} à {to} utiliser";
        case Label.CustomComparisonsSlotOtherwise:
            return "sinon";
        case Label.CustomComparisonsPreview:
            return "Aperçu";
        case Label.CustomComparisonsPreviewingBlock:
            return "Aperçu d’un bloc, pas de la comparaison";
        case Label.CustomComparisonsShowWholeComparison:
            return "Afficher toute la comparaison";
        case Label.CustomComparisonsSegment:
            return "Segment";
        case Label.CustomComparisonsDifferenceFrom:
            return "Différence avec";
        case Label.CustomComparisonsFasterThanGold:
            return "Plus rapide que votre meilleur temps sur ce segment (votre gold)";
        case Label.CustomComparisonsFasterThanGoldWarning:
            return "{0} segments sont plus rapides que vos golds. C’est autorisé, mais ce rythme n’est peut-être pas réaliste.";
        case Label.CustomComparisonsFasterThanGoldWarningOne:
            return "1 segment est plus rapide que votre gold. C’est autorisé, mais ce rythme n’est peut-être pas réaliste.";
        case Label.CustomComparisonsFinishLine:
            return "Termine en {0}, {1} par rapport à {2}.";
        case Label.CustomComparisonsFinishVsSumOfBest:
            return "Votre somme des meilleurs segments est de {0}.";
        case Label.CustomComparisonsNoProblems:
            return "Aucun problème.";
        case Label.CustomComparisonsNoTimesLeft:
            return "Aucun segment n’a de temps. Cliquez sur une ligne pour voir pourquoi, ou ajoutez « utiliser … si vide, utiliser » avec une solution de secours comme votre PB.";
        case Label.CustomComparisonsOriginTitle:
            return "D’où vient ce temps";
        case Label.CustomComparisonsOriginEmpty:
            return "Ce segment n’a pas de temps, donc chaque split après lui est vide aussi.";
        case Label.CustomComparisonsOriginFillingGap:
            return "comble un trou";
        case Label.CustomComparisonsOriginPicked:
            return "le plus {0} des deux";
        case Label.CustomComparisonsOriginLowLimit:
            return "maintenu à la limite « jamais plus rapide que »";
        case Label.CustomComparisonsOriginHighLimit:
            return "maintenu à la limite « jamais plus lent que »";
        case Label.CustomComparisonsClickRowHint:
            return "Cliquez sur une ligne pour voir d’où vient son temps.";
        case Label.CustomComparisonsDescYourGolds:
            return "vos golds";
        case Label.CustomComparisonsDescYourPb:
            return "votre PB";
        case Label.CustomComparisonsDescComparison:
            return "« {0} »";
        case Label.CustomComparisonsDescAttempt:
            return "la tentative n° {0}";
        case Label.CustomComparisonsDescBestRecentRun:
            return "votre meilleure run des {0} derniers jours";
        case Label.CustomComparisonsDescWeightedAverage:
            return "la moyenne pondérée vers le récent de {0}";
        case Label.CustomComparisonsDescClamp:
            return "{0}, maintenu entre {1} et {2}";
        case Label.CustomComparisonsDescRound:
            return "{0}, arrondi à {1}";
        case Label.CustomComparisonsDescMedian:
            return "la médiane de {0}";
        case Label.CustomComparisonsDescAverage:
            return "la moyenne de {0}";
        case Label.CustomComparisonsDescMin:
            return "le meilleur de {0}";
        case Label.CustomComparisonsDescMax:
            return "le pire de {0}";
        case Label.CustomComparisonsDescPercentile:
            return "le centile {0} de {1}";
        case Label.CustomComparisonsDescAddTime:
            return "{0} + {1}";
        case Label.CustomComparisonsDescRemoveTime:
            return "{0} − {1}";
        case Label.CustomComparisonsDescScale:
            return "{1} × {0} %";
        case Label.CustomComparisonsDescStretch:
            return "{0}, étiré pour finir en {1}";
        case Label.CustomComparisonsDescBlend:
            return "{0} % du chemin entre {1} et {2}";
        case Label.CustomComparisonsDescSlower:
            return "le plus lent entre {0} et {1}";
        case Label.CustomComparisonsDescFaster:
            return "le plus rapide entre {0} et {1}";
        case Label.CustomComparisonsDescFallback:
            return "{0} (ou {1} là où c’est vide)";
        case Label.CustomComparisonsDescRangeArm:
            return "{0} pour {1}";
        case Label.CustomComparisonsDescRangeOtherwise:
            return "{0}, sinon {1}";
        case Label.CustomComparisonsDescSomething:
            return "quelque chose";
        case Label.CustomComparisonsDescAllTimes:
            return "tous vos temps";
        case Label.CustomComparisonsDescLastN:
            return "vos {0} derniers temps";
        case Label.CustomComparisonsQualCompleted:
            return "des runs terminées";
        case Label.CustomComparisonsQualRecentDays:
            return "des {0} derniers jours";
        case Label.CustomComparisonsQualUnder:
            return "des runs en moins de {0}";
        case Label.CustomComparisonsQualTrim:
            return "sans les {0} % les plus rapides et les plus lents";
        case Label.CustomComparisonsQualAtLeast:
            return "quand il y en a au moins {0}";
        case Label.CustomComparisonsQualReached:
            return "des runs qui ont atteint {0}";
        case Label.CustomComparisonsSumGapsFilled:
            return "{0} Trous comblés avec {1}.";
        case Label.CustomComparisonsSumRangeArm:
            return "{0} : {1}";
        case Label.CustomComparisonsSumOtherSegments:
            return "Autres segments : {0}";
        case Label.CustomComparisonsSegmentNumber:
            return "segment {0}";
        case Label.CustomComparisonsSegmentSpan:
            return "{0} à {1}";
        case Label.CustomComparisonsSeconds:
            return "{0} s";
        case Label.CustomComparisonsListAnd:
            return "{0} et {1}";
        case Label.CustomComparisonsWarnSegment:
            return "Utilise le segment {0}, mais vos splits en ont {1}";
        case Label.CustomComparisonsWarnSegments:
            return "Utilise les segments {0}, mais vos splits en ont {1}";
        case Label.CustomComparisonsSentence:
            return "{0}.";
    }
}
