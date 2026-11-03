import { Label } from ".";

export function resolvePolish(text: Label): string {
    switch (text) {
        case Label.Ok:
            return "OK";
        case Label.Cancel:
            return "Anuluj";
        case Label.Settings:
            return "Ustawienia";
        case Label.Language:
            return "Język";
        case Label.LanguageDescription:
            return "Ustawia język używany w aplikacji.";
        case Label.LanguageAuto:
            return "Automatyczny";
        case Label.Theme:
            return "Motyw";
        case Label.ThemeDescription:
            return "Określa, czy używać motywu systemowego, czy wymusić tryb jasny lub ciemny.";
        case Label.ThemeLightMode:
            return "Tryb jasny";
        case Label.ThemeDarkMode:
            return "Tryb ciemny";
        case Label.HotkeysHeading:
            return "Skróty klawiszowe";
        case Label.GeneralHeading:
            return "Ogólne";
        case Label.NetworkHeading:
            return "Sieć";
        case Label.FrameRate:
            return "Liczba klatek";
        case Label.FrameRateDescription:
            return "Określa liczbę klatek, z jaką wyświetlany jest timer. „Uwzględnia baterię” próbuje określić typ urządzenia i stan ładowania, aby dobrać odpowiednią liczbę klatek. „Dopasuj do ekranu” sprawia, że timer dopasowuje się do częstotliwości odświeżania ekranu.";
        case Label.FrameRateBatteryAware:
            return "Uwzględnia baterię";
        case Label.FrameRateMatchScreen:
            return "Dopasuj do ekranu";
        case Label.SaveOnReset:
            return "Zapisuj przy resecie";
        case Label.SaveOnResetDescription:
            return "Określa, czy automatycznie zapisywać splity podczas resetowania timera.";
        case Label.ShowControlButtons:
            return "Pokaż przyciski sterowania";
        case Label.ShowControlButtonsDescription:
            return "Określa, czy pokazywać przyciski pod timerem pozwalające nim sterować. Gdy wyłączone, musisz używać skrótów klawiszowych.";
        case Label.ShowManualGameTimeInput:
            return "Pokaż ręczne wprowadzanie czasu gry";
        case Label.ShowManualGameTimeInputDescription:
            return "Pokazuje pole tekstowe pod timerem, które pozwala ręcznie wprowadzać czas gry. Uruchamiasz timer i robisz splity, naciskając Enter w polu tekstowym. Upewnij się, że porównujesz z „Czasem gry”.";
        case Label.ManualGameTimeMode:
            return "Tryb ręcznego czasu gry";
        case Label.ManualGameTimeModeDescription:
            return "Określa, czy ręcznie wprowadzany czas gry ma być czasem segmentów czy czasem splitów.";
        case Label.ManualGameTimeModeSegmentTimes:
            return "Czasy segmentów";
        case Label.ManualGameTimeModeSplitTimes:
            return "Czasy splitów";
        case Label.AlwaysOnTop:
            return "Zawsze na wierzchu";
        case Label.AlwaysOnTopDescription:
            return "Utrzymuje okno zawsze na wierzchu innych okien.";
        case Label.SpeedrunComIntegration:
            return "Integracja ze speedrun.com";
        case Label.SpeedrunComIntegrationDescription:
            return "Pobiera listę gier, kategorii i rankingi ze speedrun.com.";
        case Label.ServerConnection:
            return "Połączenie z serwerem";
        case Label.ServerConnectionDescription:
            return "Pozwala połączyć się z serwerem WebSocket, który może sterować timerem poprzez wysyłanie różnych poleceń. Polecenia są obecnie podzbiorem poleceń obsługiwanych przez oryginalny LiveSplit.";
        case Label.ServerConnectionExperimental:
            return "Ta funkcja jest eksperymentalna i protokół prawdopodobnie zmieni się w przyszłości.";
        case Label.TheRunGgIntegration:
            return "Integracja z TheRun.gg";
        case Label.TheRunGgIntegrationDescription:
            return "Integruje z therun.gg, zapewniając śledzenie biegu na żywo oraz automatyczne przesyłanie statystyk. Aby korzystać z tej funkcji, potrzebujesz klucza przesyłania z therun.gg.";
        case Label.TheRunGgLiveTracking:
            return "Śledzenie na żywo";
        case Label.TheRunGgLiveTrackingDescription:
            return "Po włączeniu dane splitów na żywo są wysyłane do therun.gg po każdej akcji splitu, co umożliwia śledzenie biegu na żywo na stronie.";
        case Label.TheRunGgStatsUploading:
            return "Przesyłanie statystyk";
        case Label.TheRunGgStatsUploadingDescription:
            return "Po włączeniu plik splitów jest przesyłany do therun.gg po każdym resecie lub ukończonym biegu, automatycznie synchronizując biegi ze stroną.";
        case Label.HotkeyAlreadyInUse:
            return "Ten skrót klawiszowy jest już używany.";
        case Label.Start:
            return "Start";
        case Label.Resume:
            return "Wznów";
        case Label.Pause:
            return "Pauza";
        case Label.UndoSplit:
            return "Cofnij split";
        case Label.Reset:
            return "Reset";
        case Label.SkipSplit:
            return "Pomiń split";
        case Label.ManualGameTimePlaceholder:
            return "Ręczny czas gry";
        case Label.LiveSplitLogoAlt:
            return "Logo LiveSplit";
        case Label.LiveSplitOne:
            return "LiveSplit One";
        case Label.Splits:
            return "Splity";
        case Label.Layout:
            return "Układ";
        case Label.CompareAgainst:
            return "Porównaj z";
        case Label.RealTime:
            return "Czas rzeczywisty";
        case Label.GameTime:
            return "Czas gry";
        case Label.PopOut:
            return "Otwórz w oknie";
        case Label.About:
            return "O programie";
        case Label.Back:
            return "Wstecz";
        case Label.AboutVersionPrefix:
            return "Wersja:";
        case Label.AboutDescription:
            return "LiveSplit One to wieloplatformowa wersja LiveSplit — zgrabnego i bardzo konfigurowalnego timera dla speedrunnerów.";
        case Label.AboutViewSource:
            return "Zobacz kod źródłowy na GitHubie";
        case Label.AboutRecentChanges:
            return "Ostatnie zmiany";
        case Label.AboutContributors:
            return "Współtwórcy";
        case Label.Loading:
            return "Wczytywanie...";
        case Label.Add:
            return "Dodaj";
        case Label.Import:
            return "Importuj";
        case Label.OpenSplits:
            return "Otwórz splity";
        case Label.EditSplits:
            return "Edytuj splity";
        case Label.ExportSplits:
            return "Eksportuj splity";
        case Label.CopySplits:
            return "Kopiuj splity";
        case Label.RemoveSplits:
            return "Usuń splity";
        case Label.Untitled:
            return "Bez tytułu";
        case Label.NoCategory:
            return "—";
        case Label.DiscardChangesTitle:
            return "Odrzucić zmiany?";
        case Label.DiscardChangesDescription:
            return "Twoje bieżące splity zostały zmodyfikowane i zawierają niezapisane zmiany. Czy chcesz kontynuować i je odrzucić?";
        case Label.DeleteSplitsTitle:
            return "Usunąć splity?";
        case Label.DeleteSplitsDescription:
            return "Czy na pewno chcesz usunąć splity? Tej operacji nie można cofnąć.";
        case Label.SaveBestTimesTitle:
            return "Zapisać najlepsze czasy?";
        case Label.SaveBestTimesDescription:
            return "Pobiłeś/aś niektóre z najlepszych czasów. Czy chcesz je zaktualizować?";
        case Label.Yes:
            return "Tak";
        case Label.No:
            return "Nie";
        case Label.DontReset:
            return "Nie resetuj";
        case Label.FailedToExportSplits:
            return "Nie udało się wyeksportować splitów.";
        case Label.CantImportEmptySplits:
            return "Nie można importować pustych splitów.";
        case Label.FailedToReadFile:
            return "Nie udało się odczytać pliku:";
        case Label.FailedToImportSplits:
            return "Nie udało się zaimportować splitów:";
        case Label.CouldNotParseSplits:
            return "Nie udało się przetworzyć splitów.";
        case Label.LoadedSplitsInvalid:
            return "Załadowane splity są nieprawidłowe.";
        case Label.NewSegmentName:
            return "Czas";
        case Label.EditWhileRunningError:
            return "Nie możesz edytować splitów, gdy timer działa.";
        case Label.Edit:
            return "Edytuj";
        case Label.Save:
            return "Zapisz";
        case Label.Export:
            return "Eksportuj";
        case Label.FailedToParseTimeSpan:
            return "Nie udało się przetworzyć TimeSpan";
        case Label.Default:
            return "Domyślne";
        case Label.Game:
            return "Gra";
        case Label.Category:
            return "Kategoria";
        case Label.StartTimerAt:
            return "Uruchom timer od";
        case Label.Attempts:
            return "Próby";
        case Label.SplitsEditor:
            return "Edytor splitów";
        case Label.Variables:
            return "Zmienne";
        case Label.Rules:
            return "Zasady";
        case Label.Leaderboard:
            return "Ranking";
        case Label.InsertAbove:
            return "Wstaw powyżej";
        case Label.InsertBelow:
            return "Wstaw poniżej";
        case Label.RemoveSegment:
            return "Usuń segment";
        case Label.MoveUp:
            return "Przenieś w górę";
        case Label.MoveDown:
            return "Przenieś w dół";
        case Label.CreateGroup:
            return "Utwórz grupę";
        case Label.RemoveGroup:
            return "Usuń grupę";
        case Label.AddVariable:
            return "Dodaj zmienną";
        case Label.OpenPbPage:
            return "Otwórz stronę PB";
        case Label.AssociateRun:
            return "Powiąż bieg";
        case Label.Icon:
            return "Ikona";
        case Label.SegmentName:
            return "Nazwa segmentu";
        case Label.SplitTime:
            return "Czas splitu";
        case Label.SegmentTime:
            return "Czas segmentu";
        case Label.BestSegment:
            return "Najlepszy segment";
        case Label.SpeedrunComVariableTooltip:
            return "Zmienna speedrun.com specyficzna dla gry.";
        case Label.Region:
            return "Region";
        case Label.RegionDescription:
            return "Region gry, która jest rozgrywana.";
        case Label.Platform:
            return "Platforma";
        case Label.PlatformDescription:
            return "Platforma, na której grana jest gra.";
        case Label.UsesEmulator:
            return "Używa emulatora";
        case Label.UsesEmulatorDescription:
            return "Czy do grania używany jest emulator.";
        case Label.CustomVariableTooltip:
            return "Niestandardowa zmienna określona przez ciebie. Można ją wyświetlać za pomocą komponentu tekstowego.";
        case Label.NoVariables:
            return "Obecnie brak niestandardowych zmiennych dla tej gry.";
        case Label.NoVariablesWithSpeedrunCom:
            return "Obecnie brak zmiennych speedrun.com lub niestandardowych zmiennych dla tej gry.";
        case Label.TimedWithoutLoads:
            return "są mierzone bez czasów ładowania";
        case Label.TimedWithGameTime:
            return "są mierzone z Czasem gry";
        case Label.RequireVideoProof:
            return "wymagają wideo jako dowodu";
        case Label.RunsOfThisGamePrefix:
            return "Biegi tej gry ";
        case Label.RunsOfThisGameSuffix:
            return ".";
        case Label.And:
            return "i";
        case Label.SetIcon:
            return "Ustaw ikonę";
        case Label.SetIconDescription:
            return "Pozwala wybrać plik obrazu jako ikonę gry. Niektóre formaty mogą nie działać wszędzie.";
        case Label.DownloadBoxArt:
            return "Pobierz okładkę";
        case Label.DownloadBoxArtDescription:
            return "Próbuje pobrać okładkę gry ze speedrun.com, aby ustawić ją jako ikonę gry.";
        case Label.DownloadIcon:
            return "Pobierz ikonę";
        case Label.DownloadIconDescription:
            return "Próbuje pobrać ikonę gry ze speedrun.com.";
        case Label.RemoveIcon:
            return "Usuń ikonę";
        case Label.RemoveIconDescription:
            return "Usuwa ikonę gry.";
        case Label.CleaningMenu:
            return "Czyszczenie…";
        case Label.ClearOnlyHistory:
            return "Wyczyść tylko historię";
        case Label.ClearOnlyHistoryDescription:
            return "Splity przechowują pełną historię wszystkich biegów, w tym każdy czas segmentu. Te informacje są używane przez różne komponenty. Możesz je wyczyścić. Rekord osobisty, najlepsze czasy segmentów i porównania nie zostaną zmienione.";
        case Label.ClearAllTimes:
            return "Wyczyść wszystkie czasy";
        case Label.ClearAllTimesDescription:
            return "Usuwa wszystkie czasy ze splitów, w tym całą historię, tak że splity są całkowicie puste, jakby zostały dopiero utworzone.";
        case Label.CleanSumOfBest:
            return "Wyczyść sumę najlepszych";
        case Label.CleanSumOfBestDescription:
            return "Pozwala interaktywnie usunąć potencjalne problemy w historii segmentów, które prowadzą do nieprawidłowej sumy najlepszych segmentów. Jeśli pominiesz split, przy następnym splicie łączny czas segmentu może być szybszy niż suma najlepszych czasów poszczególnych segmentów. To wskaże wszystkie takie przypadki i pozwoli je usuwać pojedynczo, jeśli któreś z nich wydaje się błędne.";
        case Label.ComparisonsMenu:
            return "Porównania…";
        case Label.AddComparison:
            return "Dodaj porównanie";
        case Label.AddComparisonDescription:
            return "Dodaje nowe niestandardowe porównanie, w którym możesz przechowywać dowolne czasy.";
        case Label.ImportComparison:
            return "Importuj porównanie";
        case Label.ImportComparisonDescription:
            return "Importuje rekord osobisty z podanego pliku splitów jako porównanie.";
        case Label.GenerateGoalComparison:
            return "Wygeneruj porównanie celu";
        case Label.GenerateGoalComparisonDescription:
            return "Generuje niestandardowe porównanie celu na podstawie docelowego czasu, który możesz podać. Czasy porównania są automatycznie zbalansowane na podstawie historii segmentów, tak aby w przybliżeniu odpowiadały czasom splitów dla docelowego czasu. Ponieważ są wypełniane na podstawie historii segmentów, docelowe czasy są ograniczone do zakresu między sumą najlepszych segmentów a sumą najgorszych segmentów. Porównanie jest wypełniane tylko dla wybranej metody pomiaru czasu. Czasy porównania dla drugiej metody nie są przez to modyfikowane, więc możesz wygenerować je ponownie, wybierając drugą metodę, aby wygenerować czasy porównania dla obu metod.";
        case Label.CopyComparison:
            return "Kopiuj porównanie";
        case Label.CopyComparisonDescription:
            return "Kopiuje dowolne istniejące porównanie, w tym rekord osobisty lub nawet inne automatycznie dostarczone porównanie, jako nowe niestandardowe porównanie. Możesz na przykład użyć tego, aby zachować Ostatni bieg jako porównanie tak długo, jak chcesz.";
        case Label.SetSegmentIcon:
            return "Ustaw ikonę";
        case Label.SetSegmentIconDescription:
            return "Pozwala wybrać plik obrazu jako ikonę segmentu. Niektóre formaty mogą nie działać wszędzie.";
        case Label.RemoveSegmentIcon:
            return "Usuń ikonę";
        case Label.RemoveSegmentIconDescription:
            return "Usuwa ikonę segmentu.";
        case Label.Rename:
            return "Zmień nazwę";
        case Label.RenameDescription:
            return "Wybierz nową nazwę dla niestandardowego porównania. Istnieją nazwy zastrzeżone, których nie można użyć. Nie można też mieć duplikatów.";
        case Label.CopyAction:
            return "Kopiuj";
        case Label.CopyDescription:
            return "Tworzy kopię niestandardowego porównania.";
        case Label.ACopy:
            return "Kopia";
        case Label.Remove:
            return "Usuń";
        case Label.RemoveDescription:
            return "Usuwa niestandardowe porównanie.";
        case Label.AnyPercent:
            return "Any%";
        case Label.LowPercent:
            return "Low%";
        case Label.HundredPercent:
            return "100%";
        case Label.AddComparisonPrompt:
            return "Podaj nazwę porównania, które chcesz dodać:";
        case Label.ComparisonAddError:
            return "Nie udało się dodać porównania. Może to być duplikat lub nazwa zastrzeżona.";
        case Label.ImportComparisonPrompt:
            return "Podaj nazwę porównania, które chcesz zaimportować:";
        case Label.GenerateGoalComparisonPrompt:
            return "Podaj czas, który chcesz osiągnąć:";
        case Label.Generate:
            return "Generuj";
        case Label.GenerateGoalComparisonError:
            return "Nie udało się wygenerować porównania celu. Upewnij się, że podano prawidłowy czas.";
        case Label.CopyComparisonPrompt:
            return "Podaj nazwę porównania, które chcesz skopiować:";
        case Label.CopyComparisonError:
            return "Nie udało się skopiować porównania. Porównanie może nie istnieć.";
        case Label.NothingToCleanUp:
            return "Nie ma nic do wyczyszczenia.";
        case Label.CleanPrompt:
            return "Wyczyścić?";
        case Label.AssociateRunPrompt:
            return "Podaj identyfikator speedrun.com lub URL biegu:";
        case Label.Associate:
            return "Powiąż";
        case Label.InvalidSpeedrunUrl:
            return "Nieprawidłowy identyfikator lub URL speedrun.com.";
        case Label.AssociateRunError:
            return "Nie udało się powiązać biegu. Identyfikator może być nieprawidłowy.";
        case Label.AddVariablePrompt:
            return "Podaj nazwę niestandardowej zmiennej, którą chcesz dodać:";
        case Label.RenameComparison:
            return "Zmień nazwę porównania";
        case Label.RenameComparisonPrompt:
            return "Podaj nową nazwę porównania:";
        case Label.ComparisonRenameError:
            return "Nie udało się zmienić nazwy porównania. Może to być duplikat lub nazwa zastrzeżona.";
        case Label.GameNotFound:
            return "Nie udało się znaleźć gry.";
        case Label.NoBoxArt:
            return "Gra nie ma okładki.";
        case Label.DownloadBoxArtError:
            return "Nie udało się pobrać okładki.";
        case Label.NoGameIcon:
            return "Gra nie ma ikony.";
        case Label.DownloadIconError:
            return "Nie udało się pobrać ikony.";
        case Label.Rank:
            return "Miejsce";
        case Label.Player:
            return "Gracz";
        case Label.Time:
            return "Czas";
        case Label.Date:
            return "Data:";
        case Label.Emulator:
            return "Emulator";
        case Label.EmulatorTag:
            return "Emulator";
        case Label.ObsoleteRuns:
            return "Nieaktualne biegi";
        case Label.Shown:
            return "Wyświetlane";
        case Label.Hidden:
            return "Ukryte";
        case Label.OpenLeaderboard:
            return "Otwórz ranking";
        case Label.Filters:
            return "Filtry";
        case Label.LayoutEditor:
            return "Edytor układu";
        case Label.Component:
            return "Komponent";
        case Label.AddComponent:
            return "Dodaj komponent";
        case Label.RemoveComponent:
            return "Usuń komponent";
        case Label.DuplicateComponent:
            return "Duplikuj komponent";
        case Label.MoveComponentUp:
            return "Przenieś komponent w górę";
        case Label.MoveComponentDown:
            return "Przenieś komponent w dół";
        case Label.ComponentTitle:
            return "Tytuł";
        case Label.ComponentTitleDescription:
            return "Pokazuje nazwę gry i kategorię, która jest rozgrywana. Dodatkowo można pokazać ikonę gry, liczbę prób oraz łączną liczbę pomyślnie ukończonych biegów.";
        case Label.ComponentGraph:
            return "Wykres";
        case Label.ComponentGraphDescription:
            return "Wizualizuje, jak bardzo bieżący bieg był przed lub za wybranym porównaniem podczas całego biegu. Wszystkie pojedyncze delty są pokazane jako punkty na wykresie.";
        case Label.ComponentSplitsDescription:
            return "Główny komponent do wizualizacji wszystkich czasów splitów. Każdy segment jest pokazany w tabeli z ikoną segmentu, nazwą segmentu, deltą względem wybranego porównania i czasem splitu. Lista zapewnia przewijanie, więc nie każdy segment musi być zawsze widoczny.";
        case Label.ComponentDetailedTimer:
            return "Szczegółowy timer";
        case Label.ComponentDetailedTimerDescription:
            return "Pokazuje dwa timery: jeden dla łącznego czasu bieżącego biegu oraz drugi pokazujący czas bieżącego segmentu. Można też wyświetlać inne informacje, takie jak czasy segmentów dla maksymalnie dwóch porównań, ikonę segmentu i nazwę segmentu.";
        case Label.ComponentTimer:
            return "Timer";
        case Label.ComponentTimerDescription:
            return "Pokazuje łączny czas bieżącego biegu jako zegar cyfrowy. Kolor wyświetlanego czasu zależy od tego, jak dobrze idzie bieżący bieg względem wybranego porównania.";
        case Label.ComponentCurrentComparison:
            return "Bieżące porównanie";
        case Label.ComponentCurrentComparisonDescription:
            return "Pokazuje nazwę porównania, z którym timer aktualnie porównuje.";
        case Label.ComponentCurrentPace:
            return "Bieżące tempo";
        case Label.ComponentCurrentPaceDescription:
            return "Pokazuje przewidywany końcowy czas bieżącego biegu. Pozostała część biegu jest przewidywana na podstawie wybranego porównania. Na przykład można wybrać porównanie „Najlepsze segmenty”, aby pokazać najlepszy możliwy czas końcowy bieżącego biegu na podstawie sumy najlepszych segmentów.";
        case Label.ComponentDelta:
            return "Delta";
        case Label.ComponentDeltaDescription:
            return "Pokazuje, o ile bieżący bieg jest przed lub za wybranym porównaniem.";
        case Label.ComponentPbChance:
            return "Szansa PB";
        case Label.ComponentPbChanceDescription:
            return "Pokazuje, jak prawdopodobne jest, że aktywny bieg pobije rekord osobisty. Jeśli nie ma aktywnego biegu, pokazuje ogólną szansę pobicia rekordu osobistego. W trakcie biegu dynamicznie się zmienia w zależności od tego, jak dobrze idzie bieg.";
        case Label.ComponentPossibleTimeSave:
            return "Możliwa oszczędność czasu";
        case Label.ComponentPossibleTimeSaveDescription:
            return "Pokazuje, ile czasu można zaoszczędzić na bieżącym segmencie w porównaniu z wybranym porównaniem, na podstawie najlepszego czasu segmentu. Ten komponent umożliwia także pokazanie „Łącznej możliwej oszczędności czasu” dla pozostałej części bieżącego biegu.";
        case Label.ComponentPreviousSegment:
            return "Poprzedni segment";
        case Label.ComponentPreviousSegmentDescription:
            return "Pokazuje, ile czasu zostało zaoszczędzonego lub straconego podczas poprzedniego segmentu na podstawie wybranego porównania. Dodatkowo można wyświetlić możliwą oszczędność czasu dla poprzedniego segmentu. Ten komponent przełącza się na widok „Bieżący segment”, który pokazuje aktywną stratę czasu, gdy tracisz czas na bieżącym segmencie.";
        case Label.ComponentSegmentTime:
            return "Czas segmentu";
        case Label.ComponentSegmentTimeDescription:
            return "Pokazuje czas bieżącego segmentu dla wybranego porównania. Jeśli nie określono porównania, używa bieżącego porównania timera.";
        case Label.ComponentSumOfBest:
            return "Suma najlepszych";
        case Label.ComponentSumOfBestDescription:
            return "Pokazuje najszybszy możliwy czas ukończenia biegu w bieżącej kategorii, na podstawie informacji zebranych ze wszystkich poprzednich biegów. Często odpowiada to sumie najlepszych czasów segmentów, ale nie zawsze, ponieważ pominięte segmenty mogą wprowadzać połączone segmenty szybsze niż rzeczywista suma najlepszych czasów segmentów. Nazwa jest więc nieco myląca, ale pozostała z powodów historycznych.";
        case Label.ComponentText:
            return "Tekst";
        case Label.ComponentTextDescription:
            return "Pokazuje tekst, który określisz. Może to być pojedynczy tekst wyśrodkowany lub podzielony na lewy i prawy tekst, co pasuje do sytuacji, w której masz etykietę i wartość. Istnieje także opcja wyświetlenia niestandardowej zmiennej, którą określisz w edytorze splitów.";
        case Label.ComponentTotalPlaytime:
            return "Łączny czas gry";
        case Label.ComponentTotalPlaytimeDescription:
            return "Pokazuje łączną ilość czasu, przez jaki grano w bieżącą kategorię.";
        case Label.ComponentVariableDescription:
            return "Tworzy komponent tekstowy, który pokazuje wartość niestandardowej zmiennej „{name}”.";
        case Label.ComponentBlankSpace:
            return "Pusta przestrzeń";
        case Label.ComponentBlankSpaceDescription:
            return "Pusty komponent, który nie pokazuje nic poza tłem. Służy głównie jako odstęp między innymi komponentami.";
        case Label.ComponentCarousel:
            return "Karuzela";
        case Label.ComponentCarouselDescription:
            return "Pokazuje naraz tylko jeden komponent podrzędny i przełącza się między nimi. Priorytetowo traktuje te, których zawartość się zmieniła, a w innym wypadku zmienia je co określony interwał.";
        case Label.ComponentSeparator:
            return "Separator";
        case Label.ComponentSeparatorDescription:
            return "Prosty komponent, który renderuje separator między komponentami.";
        case Label.Row:
            return "Wiersz";
        case Label.RowDescription:
            return "Wiersz komponentów ułożonych poziomo, zmieniający kierunek układu dla komponentów wewnątrz.";
        case Label.Column:
            return "Kolumna";
        case Label.ColumnDescription:
            return "Kolumna komponentów ułożonych pionowo, zmieniająca kierunek układu dla komponentów wewnątrz.";
        case Label.AccuracySeconds:
            return "Sekundy";
        case Label.AccuracyTenths:
            return "Dziesiąte";
        case Label.AccuracyHundredths:
            return "Setne";
        case Label.AccuracyMilliseconds:
            return "Milisekundy";
        case Label.FontStyle:
            return "Styl";
        case Label.FontWeight:
            return "Grubość";
        case Label.FontStretch:
            return "Rozciągnięcie";
        case Label.FontStyleNormal:
            return "Normalny";
        case Label.FontStyleItalic:
            return "Kursywa";
        case Label.AlignmentAutomatic:
            return "Automatyczne";
        case Label.AlignmentLeft:
            return "Lewo";
        case Label.AlignmentCenter:
            return "Środek";
        case Label.GradientTransparent:
            return "Przezroczysty";
        case Label.GradientPlain:
            return "Jednolity";
        case Label.GradientVertical:
            return "Pionowy";
        case Label.GradientHorizontal:
            return "Poziomy";
        case Label.GradientAlternating:
            return "Naprzemienny";
        case Label.GradientPlainDelta:
            return "Jednolita delta";
        case Label.GradientVerticalDelta:
            return "Pionowa delta";
        case Label.GradientHorizontalDelta:
            return "Pozioma delta";
        case Label.LayoutBackgroundImage:
            return "Obraz";
        case Label.LayoutBackgroundBrightness:
            return "Jasność";
        case Label.LayoutBackgroundOpacity:
            return "Krycie";
        case Label.LayoutBackgroundBlur:
            return "Rozmycie";
        case Label.LayoutDirectionVertical:
            return "Pionowy";
        case Label.LayoutDirectionHorizontal:
            return "Poziomy";
        case Label.ColumnKindTime:
            return "Czas";
        case Label.ColumnKindVariable:
            return "Zmienna";
        case Label.ColumnStartWithEmpty:
            return "Puste";
        case Label.ColumnStartWithComparisonTime:
            return "Czas porównania";
        case Label.ColumnStartWithComparisonSegmentTime:
            return "Czas segmentu porównania";
        case Label.ColumnStartWithPossibleTimeSave:
            return "Możliwa oszczędność czasu";
        case Label.IconDisplayModeBothRows:
            return "Oba wiersze";
        case Label.IconDisplayModeFirstRow:
            return "Tylko pierwszy wiersz";
        case Label.SubsplitDisplayModeFlat:
            return "Płasko";
        case Label.SubsplitDisplayModeCurrentGroupExpanded:
            return "Bieżąca grupa rozwinięta";
        case Label.SubsplitDisplayModeAllGroupsExpanded:
            return "Wszystkie grupy rozwinięte";
        case Label.ColumnUpdateWithDontUpdate:
            return "Nie aktualizuj";
        case Label.ColumnUpdateWithSplitTime:
            return "Czas splitu";
        case Label.ColumnUpdateWithDelta:
            return "Czas przed / za";
        case Label.ColumnUpdateWithDeltaWithFallback:
            return "Czas przed / za lub czas splitu, jeśli pusty";
        case Label.ColumnUpdateWithSegmentTime:
            return "Czas segmentu";
        case Label.ColumnUpdateWithSegmentDelta:
            return "Czas zyskany / stracony";
        case Label.ColumnUpdateWithSegmentDeltaWithFallback:
            return "Czas zyskany / stracony lub czas segmentu, jeśli pusty";
        case Label.ColumnUpdateTriggerOnStartingSegment:
            return "Przy rozpoczęciu segmentu";
        case Label.ColumnUpdateTriggerContextual:
            return "Kontekstowo";
        case Label.ColumnUpdateTriggerOnEndingSegment:
            return "Przy zakończeniu segmentu";
        case Label.ComparisonCurrentComparison:
            return "Bieżące porównanie";
        case Label.CustomVariableNoneAvailable:
            return "Brak dostępnych zmiennych";
        case Label.CustomVariableNoneAvailableTooltip:
            return "Zmienne niestandardowe można zdefiniować na karcie Zmienne podczas edycji splitów. Dodatkowe zmienne niestandardowe mogą być dostarczane automatycznie przez autosplity.";
        case Label.HotkeyButtonTooltip:
            return "Kliknij, aby nagrać skrót klawiszowy. Możesz też używać przycisków pada. Globalne skróty klawiszowe są obecnie niemożliwe. Przyciski pada działają globalnie.";
        case Label.ServerConnect:
            return "Połącz";
        case Label.ServerDisconnect:
            return "Rozłącz";
        case Label.ServerConnecting:
            return "Łączenie...";
        case Label.ServerDisconnecting:
            return "Rozłączanie...";
        case Label.ConnectToServerTitle:
            return "Połącz z serwerem";
        case Label.ConnectToServerDescription:
            return "Podaj adres URL WebSocket:";
        case Label.Connect:
            return "Połącz";
        case Label.UpdateAvailable:
            return "Dostępna jest nowa wersja LiveSplit One! Kliknij tutaj, aby przeładować.";
        case Label.UnsavedChangesBeforeUnload:
            return "Masz niezapisane zmiany. Czy na pewno chcesz zamknąć LiveSplit One?";
        case Label.OpenSidebarAriaLabel:
            return "Otwórz pasek boczny";
        case Label.FailedToSaveLayout:
            return "Nie udało się zapisać układu.";
        case Label.FailedToSaveHotkeys:
            return "Nie udało się zapisać ustawień skrótów klawiszowych.";
        case Label.FailedToSaveGeneralSettings:
            return "Nie udało się zapisać ustawień ogólnych.";
        case Label.FailedToSaveSplits:
            return "Nie udało się zapisać splitów.";
        case Label.LayoutCouldNotBeLoaded:
            return "Nie udało się wczytać układu. Może to nie być poprawny układ LiveSplit lub LiveSplit One.";
        case Label.EmptySplitsNotSupported:
            return "Puste splity nie są obsługiwane.";
        case Label.BugEncountered:
            return "Napotkano błąd:";
        case Label.PleaseReportIssueStart:
            return "Zgłoś ten problem ";
        case Label.ReportHere:
            return "tutaj";
        case Label.PleaseReportIssueEnd:
            return ".";
        case Label.BugReportInstructions:
            return "Aby pomóc nam naprawić ten problem, opisz kroki odtwarzania i dołącz splity oraz układ, z których korzystałeś(-aś), gdy wystąpił problem.";
        case Label.LoadFailedPrivateBrowsing:
            return "Nie udało się uruchomić LiveSplit One.\nByć może używasz trybu prywatnego.\nLiveSplit One nie może zapisywać splitów, układów ani innych ustawień z powodu ograniczeń trybu prywatnego przeglądarki.\nTe ograniczenia mogą zostać zniesione w przyszłości.\nAby teraz uruchomić LiveSplit One, wyłącz tryb prywatny w ustawieniach.";
        case Label.LoadFailedOutdatedBrowser:
            return "Nie udało się uruchomić LiveSplit One.\nByć może używasz nieaktualnej przeglądarki.\nZaktualizuj przeglądarkę lub iOS i spróbuj ponownie.\nInny powód może stanowić rozszerzenie przeglądarki, np. adblocker, które blokuje dostęp do ważnych skryptów.";
        case Label.CustomComparisonsSidebarEditingHint:
            return "Najpierw zapisz lub anuluj porównanie, które edytujesz.";
        case Label.CustomComparisonsComparisonMenu:
            return "Więcej akcji";
        case Label.CustomComparisonsNameRequired:
            return "Nadaj porównaniu nazwę.";
        case Label.CustomComparisonsSearchBlocks:
            return "Szukaj bloków";
        case Label.CustomComparisonsNoBlocksFound:
            return "Żaden blok nie pasuje. Spróbuj innego słowa.";
        case Label.CustomComparisonsAboutBlock:
            return "Co robi ten blok?";
        case Label.CustomComparisonsBlocks:
            return "Bloki";
        case Label.CustomComparisonsRailHint:
            return "Przeciągnij blok na miejsce albo na inny blok, aby go zastąpić. Kliknij blok, aby wstawić go w pierwsze pasujące puste miejsce.";
        case Label.CustomComparisonsDragBlock:
            return "Przeciągnij, aby przenieść ten blok";
        case Label.CustomComparisonsOpenEditorHint:
            return "Twoje własne porównania działają ze wszystkimi Twoimi splitami i pojawiają się obok innych porównań.";
        case Label.CustomComparisons:
            return "Własne porównania";
        case Label.CustomComparisonsExportAll:
            return "Eksportuj wszystko…";
        case Label.CustomComparisonsExportAllFileName:
            return "Własne porównania";
        case Label.CustomComparisonsPluginUnavailable:
            return "Nie udało się wczytać własnych porównań, więc teraz nie pojawiają się jako porównania: {0}";
        case Label.CustomComparisonsListHeading:
            return "Porównania";
        case Label.CustomComparisonsNoComparisons:
            return "Nie ma jeszcze własnych porównań. Kliknij Nowe, aby utworzyć pierwsze.";
        case Label.CustomComparisonsNew:
            return "Nowe…";
        case Label.CustomComparisonsEdit:
            return "Edytuj…";
        case Label.CustomComparisonsRename:
            return "Zmień nazwę…";
        case Label.CustomComparisonsDuplicate:
            return "Duplikuj";
        case Label.CustomComparisonsImport:
            return "Importuj…";
        case Label.CustomComparisonsExport:
            return "Eksportuj…";
        case Label.CustomComparisonsCopyAsText:
            return "Kopiuj jako tekst";
        case Label.CustomComparisonsPaste:
            return "Wklej…";
        case Label.CustomComparisonsUsedBy:
            return "Używane przez inne porównania: {0}";
        case Label.CustomComparisonsUsedByOne:
            return "Używane przez 1 inne porównanie";
        case Label.CustomComparisonsUnreadable:
            return "Nie można odczytać";
        case Label.CustomComparisonsSaveReminder:
            return "Zmiany są zapisywane od razu, na tym urządzeniu. Użyj Eksportuj wszystko, aby przenieść je na inne.";
        case Label.CustomComparisonsCopiedToClipboard:
            return "Skopiowano. Możesz wkleić to na czacie lub w poście na forum.";
        case Label.CustomComparisonsCouldNotCopy:
            return "Nie udało się skopiować do schowka.";
        case Label.CustomComparisonsCouldNotReadClipboard:
            return "Nie udało się odczytać schowka. Wklej tekst tutaj:";
        case Label.CustomComparisonsErrorTitle:
            return "To nie zadziałało";
        case Label.CustomComparisonsRenameTitle:
            return "Zmień nazwę porównania";
        case Label.CustomComparisonsRenameDescription:
            return "Porównania, które z niego korzystają, zostaną zaktualizowane do nowej nazwy.";
        case Label.CustomComparisonsNameTakenTitle:
            return "Wybierz inną nazwę";
        case Label.CustomComparisonsNameTakenDescription:
            return "{0} Wpisz inną nazwę:";
        case Label.CustomComparisonsRemoveTitle:
            return "Usuń porównanie";
        case Label.CustomComparisonsRemoveDescription:
            return "Usunąć „{0}”?";
        case Label.CustomComparisonsRemoveUsedDescription:
            return "Usunąć „{0}”? Korzystają z niego inne porównania ({1}) i bez niego przestaną działać.";
        case Label.CustomComparisonsRemoveUsedOneDescription:
            return "Usunąć „{0}”? Korzysta z niego 1 inne porównanie i bez niego przestanie działać.";
        case Label.CustomComparisonsPasteTitle:
            return "Wklej porównanie";
        case Label.CustomComparisonsPasteDescription:
            return "Wklej tekst porównania, które ktoś udostępnił:";
        case Label.CustomComparisonsCopySuffix:
            return "{0} (kopia)";
        case Label.CustomComparisonsTemplatesTitle:
            return "Nowe porównanie";
        case Label.CustomComparisonsTemplatesDescription:
            return "Wybierz punkt wyjścia. Każdy to gotowe porównanie, którego możesz użyć od razu lub je zmienić.";
        case Label.CustomComparisonsTemplateGoalPace:
            return "Tempo docelowe";
        case Label.CustomComparisonsTemplateGoalPaceDescription:
            return "Twoje typowe runy, rozciągnięte tak, by kończyły się dokładnie w czasie docelowym.";
        case Label.CustomComparisonsTemplateRealisticPace:
            return "Realistyczne tempo";
        case Label.CustomComparisonsTemplateRealisticPaceDescription:
            return "70. percentyl z ostatnich 30 dni: czasy, które pokonujesz w około 70 % przypadków.";
        case Label.CustomComparisonsTemplateRecentForm:
            return "Obecna forma";
        case Label.CustomComparisonsTemplateRecentFormDescription:
            return "Mediana Twoich ostatnich 10 ukończonych runów, bez najlepszego i najgorszego wyjątku.";
        case Label.CustomComparisonsTemplateSafePace:
            return "Bezpieczne tempo";
        case Label.CustomComparisonsTemplateSafePaceDescription:
            return "Wolniejsze z Twoich goldów + 2 s i Twojej mediany, więc nigdy nie jest nierealnie szybkie.";
        case Label.CustomComparisonsTemplateBlank:
            return "Puste";
        case Label.CustomComparisonsTemplateBlankDescription:
            return "Zacznij od zera.";
        case Label.CustomComparisonsNewComparisonName:
            return "Moje porównanie";
        case Label.CustomComparisonsEditorTitle:
            return "Własne porównanie";
        case Label.CustomComparisonsName:
            return "Nazwa";
        case Label.CustomComparisonsUndo:
            return "Cofnij";
        case Label.CustomComparisonsRedo:
            return "Ponów";
        case Label.CustomComparisonsChooseBlock:
            return "Wybierz blok…";
        case Label.CustomComparisonsReplaceBlock:
            return "Zastąp przez…";
        case Label.CustomComparisonsWrapBlock:
            return "Umieść w…";
        case Label.CustomComparisonsUnwrapBlock:
            return "Usuń, zachowaj zawartość";
        case Label.CustomComparisonsPreviewBlock:
            return "Podgląd tego bloku";
        case Label.CustomComparisonsBlockMenu:
            return "Akcje bloku";
        case Label.CustomComparisonsFillEmptySlots:
            return "Wypełnij puste miejsca, aby zobaczyć podgląd. Każde miejsce potrzebuje bloku.";
        case Label.CustomComparisonsDiscardChangesDescription:
            return "To porównanie ma niezapisane zmiany.";
        case Label.CustomComparisonsDiscard:
            return "Odrzuć";
        case Label.CustomComparisonsKeepEditing:
            return "Edytuj dalej";
        case Label.CustomComparisonsInvalidTime:
            return "Wpisz czas, np. 20:00 lub 1:05:30.";
        case Label.CustomComparisonsNotFound:
            return "{0} (nie znaleziono)";
        case Label.CustomComparisonsNotInSplits:
            return "{0}. (nie ma w Twoich splitach)";
        case Label.CustomComparisonsSegmentOption:
            return "{0}. {1}";
        case Label.CustomComparisonsAddRange:
            return "Dodaj zakres";
        case Label.CustomComparisonsRemoveRange:
            return "Usuń ten zakres";
        case Label.CustomComparisonsRangeBackwards:
            return "Segmenty od {0} do {1} są w odwrotnej kolejności. Zamień liczby.";
        case Label.CustomComparisonsCategorySources:
            return "Źródła";
        case Label.CustomComparisonsCategoryFilters:
            return "Filtry";
        case Label.CustomComparisonsCategoryAggregates:
            return "Agregaty";
        case Label.CustomComparisonsCategoryMath:
            return "Obliczenia";
        case Label.CustomComparisonsCategoryControl:
            return "Sterowanie";
        case Label.CustomComparisonsKindSamples:
            return "Lista czasów dla każdego segmentu";
        case Label.CustomComparisonsKindTimes:
            return "Jeden czas dla każdego segmentu";
        case Label.CustomComparisonsBlockResult:
            return "to porównanie to";
        case Label.CustomComparisonsBlockResultTip:
            return "Gotowe porównanie. Umieść tutaj bloki, które je tworzą.";
        case Label.CustomComparisonsBlockSegmentHistory:
            return "wszystkie moje czasy każdego segmentu";
        case Label.CustomComparisonsBlockSegmentHistoryTip:
            return "Każdy czas zapisany dla każdego segmentu. Pominięte segmenty oraz połączony segment zaraz po pominięciu są wykluczone.";
        case Label.CustomComparisonsBlockComparison:
            return "porównanie {name}";
        case Label.CustomComparisonsBlockComparisonTip:
            return "Istniejące porównanie, segment po segmencie. Wbudowane działają, nawet jeśli są wyłączone.";
        case Label.CustomComparisonsBlockAttempt:
            return "próba nr {number}";
        case Label.CustomComparisonsBlockAttemptTip:
            return "Segmenty jednej wcześniejszej próby, według jej numeru w historii prób. Puste tam, gdzie ten run pominął split lub został zresetowany.";
        case Label.CustomComparisonsBlockBestRecentRun:
            return "mój najlepszy run z ostatnich {days} dni";
        case Label.CustomComparisonsBlockBestRecentRunTip:
            return "Segmenty Twojego najszybszego ukończonego runu z ostatnich N dni: „aktualny PB”, który zmienia się, gdy grasz. Puste, jeśli w tym czasie nie ukończono żadnego runu.";
        case Label.CustomComparisonsBlockLastN:
            return "ostatnie {count} czasów z";
        case Label.CustomComparisonsBlockLastNTip:
            return "Zachowuje najnowsze czasy każdego segmentu. Liczy, ile razy segment został ukończony, a nie próby.";
        case Label.CustomComparisonsBlockCompletedRunsOnly:
            return "tylko z ukończonych runów";
        case Label.CustomComparisonsBlockCompletedRunsOnlyTip:
            return "Zachowuje tylko czasy z prób, które ukończyły cały run.";
        case Label.CustomComparisonsBlockRecentDays:
            return "z ostatnich {days} dni";
        case Label.CustomComparisonsBlockRecentDaysTip:
            return "Zachowuje tylko czasy z prób zakończonych w ostatnich N dniach, więc stare czasy przestają się liczyć. Próby bez daty są wykluczone.";
        case Label.CustomComparisonsBlockFinishedUnder:
            return "z runów ukończonych poniżej {totalSeconds}";
        case Label.CustomComparisonsBlockFinishedUnderTip:
            return "Zachowuje tylko czasy z runów ukończonych szybciej niż ten czas, więc liczą się tylko Twoje dobre runy.";
        case Label.CustomComparisonsBlockReachedSegment:
            return "z runów, które dotarły do {segment}";
        case Label.CustomComparisonsBlockReachedSegmentTip:
            return "Zachowuje tylko czasy z prób, które dotarły co najmniej do tego segmentu. Jak „tylko z ukończonych runów”, ale dla gier, w których większość runów jest resetowana wcześnie. Jeśli tego segmentu nie ma w Twoich splitach, zobaczysz ostrzeżenie i żaden czas nie zostanie zachowany.";
        case Label.CustomComparisonsBlockTrimOutliers:
            return "odrzuć najszybsze i najwolniejsze {percent} % z";
        case Label.CustomComparisonsBlockTrimOutliersTip:
            return "Usuwa wyjątki przed uśrednieniem: odrzuca tę część najszybszych i najwolniejszych czasów każdego segmentu. Przy małej liczbie czasów nic nie jest odrzucane.";
        case Label.CustomComparisonsBlockAtLeast:
            return "tylko jeśli jest co najmniej {count} czasów w";
        case Label.CustomComparisonsBlockAtLeastTip:
            return "Segmenty z mniejszą liczbą czasów stają się puste, więc możesz je wypełnić przez „jeśli puste, użyj” zamiast ufać zbyt małej ilości danych.";
        case Label.CustomComparisonsBlockAggregate:
            return "{kind} z";
        case Label.CustomComparisonsBlockAggregateTip:
            return "Zamienia listę czasów każdego segmentu w jeden czas. Segment bez czasów pozostaje pusty.";
        case Label.CustomComparisonsAggregateMedian:
            return "mediana";
        case Label.CustomComparisonsAggregateAverage:
            return "średnia";
        case Label.CustomComparisonsAggregateMin:
            return "najlepszy (min)";
        case Label.CustomComparisonsAggregateMax:
            return "najgorszy (maks.)";
        case Label.CustomComparisonsBlockPercentile:
            return "percentyl {percent} z";
        case Label.CustomComparisonsBlockPercentileTip:
            return "0 to Twój najszybszy czas, 100 najwolniejszy, 50 mediana. 70 oznacza: pokonujesz ten czas w około 70 % przypadków.";
        case Label.CustomComparisonsBlockWeightedAverage:
            return "średnia ważona świeżością z";
        case Label.CustomComparisonsBlockWeightedAverageFooter:
            return "waga maleje o połowę co {halfLife} starszych czasów";
        case Label.CustomComparisonsBlockWeightedAverageTip:
            return "Średnia, w której nowsze czasy liczą się bardziej. Najnowszy czas liczy się w pełni, starszy o N czasów w połowie, starszy o 2N w jednej czwartej i tak dalej.";
        case Label.CustomComparisonsBlockAddTime:
            return "dodaj {seconds} s na segment do";
        case Label.CustomComparisonsBlockAddTimeTip:
            return "Dodaje (lub, jeśli wartość jest ujemna, odejmuje) czas do każdego segmentu. Nigdy nie schodzi poniżej zera.";
        case Label.CustomComparisonsBlockScale:
            return "{percent} % z";
        case Label.CustomComparisonsBlockScaleTip:
            return "Skaluje każdy segment. 103 % to 3 % wolniej, 97 % to 3 % szybciej.";
        case Label.CustomComparisonsBlockRound:
            return "zaokrąglij do {step}";
        case Label.CustomComparisonsBlockRoundTip:
            return "Zaokrągla każdy segment do najbliższych 0,1 s (lub 1 s, 0,01 s), więc czasy splitów też są równe.";
        case Label.CustomComparisonsRoundStep:
            return "{0} s";
        case Label.CustomComparisonsBlockClamp:
            return "trzymaj";
        case Label.CustomComparisonsBlockClampTip:
            return "Trzyma każdy segment między dwiema granicami, np. nigdy szybciej niż Twoje goldy i nigdy wolniej niż Twój PB. Jeśli granice się krzyżują, wygrywa „nigdy szybciej niż”.";
        case Label.CustomComparisonsSlotNeverFaster:
            return "nigdy szybciej niż";
        case Label.CustomComparisonsSlotNeverSlower:
            return "nigdy wolniej niż";
        case Label.CustomComparisonsBlockStretchToTotal:
            return "rozciągnij do czasu końcowego {totalSeconds}";
        case Label.CustomComparisonsBlockStretchToTotalTip:
            return "Skaluje każdy segment o ten sam współczynnik, tak by cały run sumował się do czasu docelowego. Jeśli któryś segment jest pusty, wynik jest pusty: najpierw wypełnij luki przez „jeśli puste, użyj”.";
        case Label.CustomComparisonsBlockBlend:
            return "{percent} % drogi od";
        case Label.CustomComparisonsBlockBlendTip:
            return "Miesza dwie reguły dla każdego segmentu. 0 % to całkowicie pierwsza, 100 % całkowicie druga, 75 % to trzy czwarte drogi.";
        case Label.CustomComparisonsSlotTo:
            return "do";
        case Label.CustomComparisonsBlockPick:
            return "{kind} z";
        case Label.CustomComparisonsBlockPickTip:
            return "Dla każdego segmentu wolniejsza (lub szybsza) z dwóch reguł. Jeśli jedna nie ma czasu dla segmentu, używana jest druga.";
        case Label.CustomComparisonsPickSlower:
            return "wolniejsze";
        case Label.CustomComparisonsPickFaster:
            return "szybsze";
        case Label.CustomComparisonsSlotAnd:
            return "i";
        case Label.CustomComparisonsBlockFallback:
            return "użyj";
        case Label.CustomComparisonsBlockFallbackTip:
            return "Wypełnia tylko segmenty, które pierwsza reguła zostawia puste, np. dlatego, że nie ma jeszcze wystarczająco wielu runów.";
        case Label.CustomComparisonsSlotIfEmpty:
            return "jeśli puste, użyj";
        case Label.CustomComparisonsBlockSegmentRange:
            return "dla segmentów … użyj … w przeciwnym razie …";
        case Label.CustomComparisonsBlockSegmentRangeTip:
            return "Używa jednej reguły dla zakresu segmentów i innej dla reszty. Dodaj więcej zakresów, aby mieć więcej reguł: wygrywa pierwszy pasujący zakres. Jeśli zakres wykracza poza koniec Twoich splitów, zobaczysz ostrzeżenie.";
        case Label.CustomComparisonsBlockSegmentRangeHeader:
            return "różne reguły dla różnych segmentów (wygrywa pierwszy pasujący zakres)";
        case Label.CustomComparisonsRangeCase:
            return "dla segmentów od {from} do {to} użyj";
        case Label.CustomComparisonsSlotOtherwise:
            return "w przeciwnym razie";
        case Label.CustomComparisonsPreview:
            return "Podgląd";
        case Label.CustomComparisonsPreviewingBlock:
            return "Podgląd bloku, nie porównania";
        case Label.CustomComparisonsShowWholeComparison:
            return "Pokaż całe porównanie";
        case Label.CustomComparisonsSegment:
            return "Segment";
        case Label.CustomComparisonsDifferenceFrom:
            return "Różnica względem";
        case Label.CustomComparisonsFasterThanGold:
            return "Szybciej niż Twój najlepszy czas tego segmentu (Twój gold)";
        case Label.CustomComparisonsFasterThanGoldWarning:
            return "Segmenty szybsze niż Twoje goldy: {0}. To dozwolone, ale to tempo może nie być realistyczne.";
        case Label.CustomComparisonsFasterThanGoldWarningOne:
            return "1 segment jest szybszy niż Twój gold. To dozwolone, ale to tempo może nie być realistyczne.";
        case Label.CustomComparisonsFinishLine:
            return "Kończy się w {0}, {1} w porównaniu z {2}.";
        case Label.CustomComparisonsFinishVsSumOfBest:
            return "Twoja suma najlepszych segmentów to {0}.";
        case Label.CustomComparisonsNoProblems:
            return "Brak problemów.";
        case Label.CustomComparisonsNoTimesLeft:
            return "Żaden segment nie ma czasu. Kliknij wiersz, aby zobaczyć dlaczego, albo dodaj „użyj … jeśli puste, użyj” z zapasem, np. Twoim PB.";
        case Label.CustomComparisonsOriginTitle:
            return "Skąd pochodzi ten czas";
        case Label.CustomComparisonsOriginEmpty:
            return "Ten segment nie ma czasu, więc każdy następny split też jest pusty.";
        case Label.CustomComparisonsOriginFillingGap:
            return "wypełnia lukę";
        case Label.CustomComparisonsOriginPicked:
            return "{0} z dwóch";
        case Label.CustomComparisonsOriginLowLimit:
            return "zatrzymane na granicy „nigdy szybciej niż”";
        case Label.CustomComparisonsOriginHighLimit:
            return "zatrzymane na granicy „nigdy wolniej niż”";
        case Label.CustomComparisonsClickRowHint:
            return "Kliknij wiersz, aby zobaczyć, skąd pochodzi jego czas.";
        case Label.CustomComparisonsDescYourGolds:
            return "Twoje goldy";
        case Label.CustomComparisonsDescYourPb:
            return "Twój PB";
        case Label.CustomComparisonsDescComparison:
            return "„{0}”";
        case Label.CustomComparisonsDescAttempt:
            return "próba nr {0}";
        case Label.CustomComparisonsDescBestRecentRun:
            return "Twój najlepszy run z ostatnich {0} dni";
        case Label.CustomComparisonsDescWeightedAverage:
            return "średnia ważona świeżością: {0}";
        case Label.CustomComparisonsDescClamp:
            return "{0} (nigdy szybciej niż: {1}; nigdy wolniej niż: {2})";
        case Label.CustomComparisonsDescRound:
            return "{0}, zaokrąglone do {1}";
        case Label.CustomComparisonsDescMedian:
            return "mediana: {0}";
        case Label.CustomComparisonsDescAverage:
            return "średnia: {0}";
        case Label.CustomComparisonsDescMin:
            return "najlepszy: {0}";
        case Label.CustomComparisonsDescMax:
            return "najgorszy: {0}";
        case Label.CustomComparisonsDescPercentile:
            return "percentyl {0}: {1}";
        case Label.CustomComparisonsDescAddTime:
            return "{0} + {1}";
        case Label.CustomComparisonsDescRemoveTime:
            return "{0} − {1}";
        case Label.CustomComparisonsDescScale:
            return "{1} × {0} %";
        case Label.CustomComparisonsDescStretch:
            return "{0}, rozciągnięte do czasu końcowego {1}";
        case Label.CustomComparisonsDescBlend:
            return "{0} % drogi: {1} → {2}";
        case Label.CustomComparisonsDescSlower:
            return "wolniejsze z dwóch: {0} i {1}";
        case Label.CustomComparisonsDescFaster:
            return "szybsze z dwóch: {0} i {1}";
        case Label.CustomComparisonsDescFallback:
            return "{0} (tam, gdzie puste: {1})";
        case Label.CustomComparisonsDescRangeArm:
            return "{1}: {0}";
        case Label.CustomComparisonsDescRangeOtherwise:
            return "{0}, w przeciwnym razie {1}";
        case Label.CustomComparisonsDescSomething:
            return "coś";
        case Label.CustomComparisonsDescAllTimes:
            return "wszystkie Twoje czasy";
        case Label.CustomComparisonsDescLastN:
            return "Twoje ostatnie czasy ({0})";
        case Label.CustomComparisonsQualCompleted:
            return "z ukończonych runów";
        case Label.CustomComparisonsQualRecentDays:
            return "z ostatnich {0} dni";
        case Label.CustomComparisonsQualUnder:
            return "z runów poniżej {0}";
        case Label.CustomComparisonsQualTrim:
            return "bez najszybszych i najwolniejszych {0} %";
        case Label.CustomComparisonsQualAtLeast:
            return "gdy jest ich co najmniej {0}";
        case Label.CustomComparisonsQualReached:
            return "z runów, które dotarły do {0}";
        case Label.CustomComparisonsSumGapsFilled:
            return "{0} Luki wypełnione przez {1}.";
        case Label.CustomComparisonsSumRangeArm:
            return "{0}: {1}";
        case Label.CustomComparisonsSumOtherSegments:
            return "Pozostałe segmenty: {0}";
        case Label.CustomComparisonsSegmentNumber:
            return "segment {0}";
        case Label.CustomComparisonsSegmentSpan:
            return "{0} do {1}";
        case Label.CustomComparisonsSeconds:
            return "{0} s";
        case Label.CustomComparisonsListAnd:
            return "{0} i {1}";
        case Label.CustomComparisonsWarnSegment:
            return "Używa segmentu {0}, ale Twoje splity mają {1}";
        case Label.CustomComparisonsWarnSegments:
            return "Używa segmentów {0}, ale Twoje splity mają {1}";
        case Label.CustomComparisonsSentence:
            return "{0}.";
    }
}
