import { Label } from ".";

export function resolveRussian(text: Label): string {
    switch (text) {
        case Label.Ok:
            return "ОК";
        case Label.Cancel:
            return "Отмена";
        case Label.Settings:
            return "Настройки";
        case Label.Language:
            return "Язык";
        case Label.LanguageDescription:
            return "Устанавливает язык, используемый в приложении.";
        case Label.LanguageAuto:
            return "Автоматически";
        case Label.Theme:
            return "Тема";
        case Label.ThemeDescription:
            return "Определяет, следовать ли системной теме или принудительно включить светлый или тёмный режим.";
        case Label.ThemeLightMode:
            return "Светлый режим";
        case Label.ThemeDarkMode:
            return "Тёмный режим";
        case Label.HotkeysHeading:
            return "Горячие клавиши";
        case Label.GeneralHeading:
            return "Общие";
        case Label.NetworkHeading:
            return "Сеть";
        case Label.FrameRate:
            return "Частота кадров";
        case Label.FrameRateDescription:
            return "Определяет частоту кадров, с которой отображается таймер. «С учётом батареи» пытается определить тип устройства и состояние зарядки, чтобы выбрать подходящую частоту. «По частоте экрана» заставляет таймер соответствовать частоте обновления экрана.";
        case Label.FrameRateBatteryAware:
            return "С учётом батареи";
        case Label.FrameRateMatchScreen:
            return "По частоте экрана";
        case Label.SaveOnReset:
            return "Сохранять при сбросе";
        case Label.SaveOnResetDescription:
            return "Определяет, следует ли автоматически сохранять сплиты при сбросе таймера.";
        case Label.ShowControlButtons:
            return "Показывать кнопки управления";
        case Label.ShowControlButtonsDescription:
            return "Определяет, следует ли показывать кнопки под таймером для управления им. Если отключено, нужно использовать горячие клавиши.";
        case Label.ShowManualGameTimeInput:
            return "Показывать ручной ввод игрового времени";
        case Label.ShowManualGameTimeInputDescription:
            return "Показывает поле ввода под таймером, позволяющее вручную вводить игровое время. Вы запускаете таймер и делаете сплиты, нажимая Enter в поле ввода. Убедитесь, что сравнение идет с «Game Time».";
        case Label.ManualGameTimeMode:
            return "Режим ручного игрового времени";
        case Label.ManualGameTimeModeDescription:
            return "Определяет, вводится ли ручное игровое время как времена сегментов или времена сплитов.";
        case Label.ManualGameTimeModeSegmentTimes:
            return "Времена сегментов";
        case Label.ManualGameTimeModeSplitTimes:
            return "Времена сплитов";
        case Label.AlwaysOnTop:
            return "Всегда поверх";
        case Label.AlwaysOnTopDescription:
            return "Держит окно поверх других окон.";
        case Label.SpeedrunComIntegration:
            return "Интеграция Speedrun.com";
        case Label.SpeedrunComIntegrationDescription:
            return "Запрашивает список игр, категорий и таблиц лидеров с speedrun.com.";
        case Label.ServerConnection:
            return "Подключение к серверу";
        case Label.ServerConnectionDescription:
            return "Позволяет подключиться к серверу WebSocket, который может управлять таймером, отправляя различные команды. Команды сейчас являются подмножеством команд, поддерживаемых оригинальным LiveSplit.";
        case Label.ServerConnectionExperimental:
            return "Эта функция экспериментальная, и протокол, вероятно, изменится в будущем.";
        case Label.TheRunGgIntegration:
            return "Интеграция с TheRun.gg";
        case Label.TheRunGgIntegrationDescription:
            return "Интегрируется с therun.gg для отслеживания забегов в реальном времени и автоматической загрузки статистики. Для использования этой функции нужен ключ загрузки из therun.gg.";
        case Label.TheRunGgLiveTracking:
            return "Отслеживание в реальном времени";
        case Label.TheRunGgLiveTrackingDescription:
            return "Если включено, данные сплитов в реальном времени отправляются на therun.gg после каждого действия со сплитом, что позволяет отслеживать забег на сайте в реальном времени.";
        case Label.TheRunGgStatsUploading:
            return "Загрузка статистики";
        case Label.TheRunGgStatsUploadingDescription:
            return "Если включено, файл сплитов загружается на therun.gg после каждого сброса или завершённого забега, автоматически синхронизируя ваши забеги с сайтом.";
        case Label.HotkeyAlreadyInUse:
            return "Эта горячая клавиша уже используется.";
        case Label.Start:
            return "Старт";
        case Label.Resume:
            return "Продолжить";
        case Label.Pause:
            return "Пауза";
        case Label.UndoSplit:
            return "Отменить сплит";
        case Label.Reset:
            return "Сброс";
        case Label.SkipSplit:
            return "Пропустить сплит";
        case Label.ManualGameTimePlaceholder:
            return "Ручное игровое время";
        case Label.LiveSplitLogoAlt:
            return "Логотип LiveSplit";
        case Label.LiveSplitOne:
            return "LiveSplit One";
        case Label.Splits:
            return "Сплиты";
        case Label.Layout:
            return "Макет";
        case Label.CompareAgainst:
            return "Сравнить с";
        case Label.RealTime:
            return "Реальное время";
        case Label.GameTime:
            return "Игровое время";
        case Label.PopOut:
            return "Окно отдельно";
        case Label.About:
            return "О программе";
        case Label.Back:
            return "Назад";
        case Label.AboutVersionPrefix:
            return "Версия:";
        case Label.AboutDescription:
            return "LiveSplit One — это мультиплатформенная версия LiveSplit, элегантного и высоко настраиваемого таймера для спидраннеров.";
        case Label.AboutViewSource:
            return "Посмотреть исходный код на GitHub";
        case Label.AboutRecentChanges:
            return "Недавние изменения";
        case Label.AboutContributors:
            return "Участники";
        case Label.Loading:
            return "Загрузка...";
        case Label.Add:
            return "Добавить";
        case Label.Import:
            return "Импорт";
        case Label.OpenSplits:
            return "Открыть сплиты";
        case Label.EditSplits:
            return "Редактировать сплиты";
        case Label.ExportSplits:
            return "Экспортировать сплиты";
        case Label.CopySplits:
            return "Копировать сплиты";
        case Label.RemoveSplits:
            return "Удалить сплиты";
        case Label.Untitled:
            return "Без названия";
        case Label.NoCategory:
            return "—";
        case Label.DiscardChangesTitle:
            return "Отбросить изменения?";
        case Label.DiscardChangesDescription:
            return "Текущие сплиты изменены и содержат несохранённые изменения. Продолжить и отбросить изменения?";
        case Label.DeleteSplitsTitle:
            return "Удалить сплиты?";
        case Label.DeleteSplitsDescription:
            return "Вы уверены, что хотите удалить сплиты? Это действие нельзя отменить.";
        case Label.SaveBestTimesTitle:
            return "Сохранить лучшие времена?";
        case Label.SaveBestTimesDescription:
            return "Вы побили некоторые из своих лучших времен. Хотите обновить их?";
        case Label.Yes:
            return "Да";
        case Label.No:
            return "Нет";
        case Label.DontReset:
            return "Не сбрасывать";
        case Label.FailedToExportSplits:
            return "Не удалось экспортировать сплиты.";
        case Label.CantImportEmptySplits:
            return "Нельзя импортировать пустые сплиты.";
        case Label.FailedToReadFile:
            return "Не удалось прочитать файл:";
        case Label.FailedToImportSplits:
            return "Не удалось импортировать сплиты:";
        case Label.CouldNotParseSplits:
            return "Не удалось разобрать сплиты.";
        case Label.LoadedSplitsInvalid:
            return "Загруженные сплиты недействительны.";
        case Label.NewSegmentName:
            return "Время";
        case Label.EditWhileRunningError:
            return "Нельзя редактировать сплиты, пока таймер запущен.";
        case Label.Edit:
            return "Редактировать";
        case Label.Save:
            return "Сохранить";
        case Label.Export:
            return "Экспорт";
        case Label.FailedToParseTimeSpan:
            return "Не удалось разобрать TimeSpan";
        case Label.Default:
            return "По умолчанию";
        case Label.Game:
            return "Игра";
        case Label.Category:
            return "Категория";
        case Label.StartTimerAt:
            return "Старт таймера с";
        case Label.Attempts:
            return "Попытки";
        case Label.SplitsEditor:
            return "Редактор сплитов";
        case Label.Variables:
            return "Переменные";
        case Label.Rules:
            return "Правила";
        case Label.Leaderboard:
            return "Таблица лидеров";
        case Label.InsertAbove:
            return "Вставить выше";
        case Label.InsertBelow:
            return "Вставить ниже";
        case Label.RemoveSegment:
            return "Удалить сегмент";
        case Label.MoveUp:
            return "Вверх";
        case Label.MoveDown:
            return "Вниз";
        case Label.CreateGroup:
            return "Создать группу";
        case Label.RemoveGroup:
            return "Удалить группу";
        case Label.AddVariable:
            return "Добавить переменную";
        case Label.OpenPbPage:
            return "Открыть страницу PB";
        case Label.AssociateRun:
            return "Связать забег";
        case Label.Icon:
            return "Иконка";
        case Label.SegmentName:
            return "Название сегмента";
        case Label.SplitTime:
            return "Время сплита";
        case Label.SegmentTime:
            return "Время сегмента";
        case Label.BestSegment:
            return "Лучший сегмент";
        case Label.SpeedrunComVariableTooltip:
            return "Переменная speedrun.com, специфичная для игры.";
        case Label.Region:
            return "Регион";
        case Label.RegionDescription:
            return "Регион игры, в которую играют.";
        case Label.Platform:
            return "Платформа";
        case Label.PlatformDescription:
            return "Платформа, на которой играют.";
        case Label.UsesEmulator:
            return "Используется эмулятор";
        case Label.UsesEmulatorDescription:
            return "Используется ли эмулятор для игры.";
        case Label.CustomVariableTooltip:
            return "Пользовательская переменная, заданная вами. Можно отображать в текстовом компоненте.";
        case Label.NoVariables:
            return "Сейчас нет пользовательских переменных для этой игры.";
        case Label.NoVariablesWithSpeedrunCom:
            return "Сейчас нет переменных speedrun.com или пользовательских переменных для этой игры.";
        case Label.TimedWithoutLoads:
            return "измеряются без времени загрузок";
        case Label.TimedWithGameTime:
            return "измеряются по игровому времени";
        case Label.RequireVideoProof:
            return "требуют видео‑доказательство";
        case Label.RunsOfThisGamePrefix:
            return "Забеги этой игры ";
        case Label.RunsOfThisGameSuffix:
            return ".";
        case Label.And:
            return "и";
        case Label.SetIcon:
            return "Установить иконку";
        case Label.SetIconDescription:
            return "Выберите изображение для иконки игры. Некоторые форматы могут не поддерживаться.";
        case Label.DownloadBoxArt:
            return "Скачать обложку";
        case Label.DownloadBoxArtDescription:
            return "Пытается скачать обложку игры с speedrun.com и установить как иконку.";
        case Label.DownloadIcon:
            return "Скачать иконку";
        case Label.DownloadIconDescription:
            return "Пытается скачать иконку игры с speedrun.com.";
        case Label.RemoveIcon:
            return "Удалить иконку";
        case Label.RemoveIconDescription:
            return "Удаляет иконку игры.";
        case Label.CleaningMenu:
            return "Очистка…";
        case Label.ClearOnlyHistory:
            return "Очистить только историю";
        case Label.ClearOnlyHistoryDescription:
            return "Сплиты хранят всю историю забегов. Эта операция очищает историю, не затрагивая PB, лучшие сегменты и сравнения.";
        case Label.ClearAllTimes:
            return "Очистить все времена";
        case Label.ClearAllTimesDescription:
            return "Удаляет все времена и историю, делая сплиты пустыми.";
        case Label.CleanSumOfBest:
            return "Очистить сумму лучших";
        case Label.CleanSumOfBestDescription:
            return "Позволяет интерактивно удалять проблемы в истории сегментов, влияющие на точность суммы лучших сегментов.";
        case Label.ComparisonsMenu:
            return "Сравнения…";
        case Label.AddComparison:
            return "Добавить сравнение";
        case Label.AddComparisonDescription:
            return "Добавляет пользовательское сравнение для хранения времен.";
        case Label.ImportComparison:
            return "Импортировать сравнение";
        case Label.ImportComparisonDescription:
            return "Импортирует Personal Best из файла сплитов как сравнение.";
        case Label.GenerateGoalComparison:
            return "Сгенерировать сравнение цели";
        case Label.GenerateGoalComparisonDescription:
            return "Создает сравнение на основе целевого времени.";
        case Label.CopyComparison:
            return "Копировать сравнение";
        case Label.CopyComparisonDescription:
            return "Копирует существующее сравнение в новое пользовательское сравнение.";
        case Label.SetSegmentIcon:
            return "Установить иконку";
        case Label.SetSegmentIconDescription:
            return "Выберите изображение для иконки сегмента. Некоторые форматы могут не поддерживаться.";
        case Label.RemoveSegmentIcon:
            return "Удалить иконку";
        case Label.RemoveSegmentIconDescription:
            return "Удаляет иконку сегмента.";
        case Label.Rename:
            return "Переименовать";
        case Label.RenameDescription:
            return "Выберите новое имя для пользовательского сравнения. Зарезервированные или дублирующиеся имена нельзя использовать.";
        case Label.CopyAction:
            return "Копировать";
        case Label.CopyDescription:
            return "Создает копию пользовательского сравнения.";
        case Label.ACopy:
            return "Копия";
        case Label.Remove:
            return "Удалить";
        case Label.RemoveDescription:
            return "Удаляет пользовательское сравнение.";
        case Label.AnyPercent:
            return "Any%";
        case Label.LowPercent:
            return "Low%";
        case Label.HundredPercent:
            return "100%";
        case Label.AddComparisonPrompt:
            return "Укажите имя сравнения, которое хотите добавить:";
        case Label.ComparisonAddError:
            return "Не удалось добавить сравнение. Возможно, имя дублируется или зарезервировано.";
        case Label.ImportComparisonPrompt:
            return "Укажите имя сравнения, которое хотите импортировать:";
        case Label.GenerateGoalComparisonPrompt:
            return "Укажите время, которого хотите достичь:";
        case Label.Generate:
            return "Сгенерировать";
        case Label.GenerateGoalComparisonError:
            return "Не удалось сгенерировать сравнение цели. Убедитесь, что время указано корректно.";
        case Label.CopyComparisonPrompt:
            return "Укажите имя сравнения, которое хотите скопировать:";
        case Label.CopyComparisonError:
            return "Не удалось скопировать сравнение. Возможно, его не существует.";
        case Label.NothingToCleanUp:
            return "Нечего очищать.";
        case Label.CleanPrompt:
            return "Очистить?";
        case Label.AssociateRunPrompt:
            return "Укажите ID или URL speedrun.com для забега:";
        case Label.Associate:
            return "Связать";
        case Label.InvalidSpeedrunUrl:
            return "Недействительный ID или URL speedrun.com.";
        case Label.AssociateRunError:
            return "Не удалось связать забег. ID может быть неверным.";
        case Label.AddVariablePrompt:
            return "Укажите имя пользовательской переменной для добавления:";
        case Label.RenameComparison:
            return "Переименовать сравнение";
        case Label.RenameComparisonPrompt:
            return "Укажите новое имя сравнения:";
        case Label.ComparisonRenameError:
            return "Не удалось переименовать сравнение. Возможно, имя дублируется или зарезервировано.";
        case Label.GameNotFound:
            return "Игра не найдена.";
        case Label.NoBoxArt:
            return "У игры нет обложки.";
        case Label.DownloadBoxArtError:
            return "Не удалось скачать обложку.";
        case Label.NoGameIcon:
            return "У игры нет иконки.";
        case Label.DownloadIconError:
            return "Не удалось скачать иконку.";
        case Label.Rank:
            return "Место";
        case Label.Player:
            return "Игрок";
        case Label.Time:
            return "Время";
        case Label.Date:
            return "Дата:";
        case Label.Emulator:
            return "Эмулятор";
        case Label.EmulatorTag:
            return "Эмулятор";
        case Label.ObsoleteRuns:
            return "Устаревшие забеги";
        case Label.Shown:
            return "Показаны";
        case Label.Hidden:
            return "Скрыты";
        case Label.OpenLeaderboard:
            return "Открыть таблицу";
        case Label.Filters:
            return "Фильтры";
        case Label.LayoutEditor:
            return "Редактор макета";
        case Label.Component:
            return "Компонент";
        case Label.AddComponent:
            return "Добавить компонент";
        case Label.RemoveComponent:
            return "Удалить компонент";
        case Label.DuplicateComponent:
            return "Дублировать компонент";
        case Label.MoveComponentUp:
            return "Переместить компонент вверх";
        case Label.MoveComponentDown:
            return "Переместить компонент вниз";
        case Label.ComponentTitle:
            return "Заголовок";
        case Label.ComponentTitleDescription:
            return "Показывает название игры и категории, иконки, попытки и количество завершений.";
        case Label.ComponentGraph:
            return "График";
        case Label.ComponentGraphDescription:
            return "Показывает опережение/отставание относительно сравнения по всем сплитам.";
        case Label.ComponentSplitsDescription:
            return "Основной компонент времен сплитов. Таблица с прокруткой.";
        case Label.ComponentDetailedTimer:
            return "Детальный таймер";
        case Label.ComponentDetailedTimerDescription:
            return "Показывает общее время и время текущего сегмента.";
        case Label.ComponentTimer:
            return "Таймер";
        case Label.ComponentTimerDescription:
            return "Показывает общее время в цифровом виде; цвет зависит от сравнения.";
        case Label.ComponentCurrentComparison:
            return "Текущее сравнение";
        case Label.ComponentCurrentComparisonDescription:
            return "Показывает имя текущего сравнения.";
        case Label.ComponentCurrentPace:
            return "Текущий темп";
        case Label.ComponentCurrentPaceDescription:
            return "Прогнозирует финальное время на основе выбранного сравнения.";
        case Label.ComponentDelta:
            return "Разница";
        case Label.ComponentDeltaDescription:
            return "Показывает опережение/отставание относительно сравнения.";
        case Label.ComponentPbChance:
            return "Шанс PB";
        case Label.ComponentPbChanceDescription:
            return "Показывает вероятность получения PB.";
        case Label.ComponentPossibleTimeSave:
            return "Возможная экономия времени";
        case Label.ComponentPossibleTimeSaveDescription:
            return "Показывает возможную экономию времени в текущем сегменте.";
        case Label.ComponentPreviousSegment:
            return "Предыдущий сегмент";
        case Label.ComponentPreviousSegmentDescription:
            return "Показывает прирост/потерю и потенциальную экономию предыдущего сегмента.";
        case Label.ComponentSegmentTime:
            return "Время сегмента";
        case Label.ComponentSegmentTimeDescription:
            return "Показывает время сегмента для выбранного сравнения.";
        case Label.ComponentSumOfBest:
            return "Сумма лучших";
        case Label.ComponentSumOfBestDescription:
            return "Показывает самое быстрое возможное время на основе истории.";
        case Label.ComponentText:
            return "Текст";
        case Label.ComponentTextDescription:
            return "Показывает центральный/левый/правый текст и пользовательские переменные.";
        case Label.ComponentTotalPlaytime:
            return "Общее время игры";
        case Label.ComponentTotalPlaytimeDescription:
            return "Показывает общее время игры в категории.";
        case Label.ComponentVariableDescription:
            return "Создает текст, показывающий значение пользовательской переменной «{name}».";
        case Label.ComponentBlankSpace:
            return "Пустое место";
        case Label.ComponentBlankSpaceDescription:
            return "Пустой компонент только с фоном.";
        case Label.ComponentCarousel:
            return "Карусель";
        case Label.ComponentCarouselDescription:
            return "Показывает по одному дочернему компоненту и переключается между ними. Отдаёт приоритет тем, у которых изменилось содержимое, иначе меняет их по интервалу.";
        case Label.ComponentSeparator:
            return "Разделитель";
        case Label.ComponentSeparatorDescription:
            return "Показывает разделительную линию между компонентами.";
        case Label.Row:
            return "Строка";
        case Label.RowDescription:
            return "Строка компонентов, расположенных горизонтально, изменяющая направление разметки для компонентов внутри.";
        case Label.Column:
            return "Столбец";
        case Label.ColumnDescription:
            return "Столбец компонентов, расположенных вертикально, изменяющий направление разметки для компонентов внутри.";
        case Label.AccuracySeconds:
            return "Секунды";
        case Label.AccuracyTenths:
            return "Десятые";
        case Label.AccuracyHundredths:
            return "Сотые";
        case Label.AccuracyMilliseconds:
            return "Миллисекунды";
        case Label.FontStyle:
            return "Стиль";
        case Label.FontWeight:
            return "Вес";
        case Label.FontStretch:
            return "Растяжение";
        case Label.FontStyleNormal:
            return "Обычный";
        case Label.FontStyleItalic:
            return "Курсив";
        case Label.AlignmentAutomatic:
            return "Автоматически";
        case Label.AlignmentLeft:
            return "Слева";
        case Label.AlignmentCenter:
            return "По центру";
        case Label.GradientTransparent:
            return "Прозрачный";
        case Label.GradientPlain:
            return "Однотонный";
        case Label.GradientVertical:
            return "Вертикальный";
        case Label.GradientHorizontal:
            return "Горизонтальный";
        case Label.GradientAlternating:
            return "Чередующийся";
        case Label.GradientPlainDelta:
            return "Однотонная дельта";
        case Label.GradientVerticalDelta:
            return "Вертикальная дельта";
        case Label.GradientHorizontalDelta:
            return "Горизонтальная дельта";
        case Label.LayoutBackgroundImage:
            return "Изображение";
        case Label.LayoutBackgroundBrightness:
            return "Яркость";
        case Label.LayoutBackgroundOpacity:
            return "Непрозрачность";
        case Label.LayoutBackgroundBlur:
            return "Размытие";
        case Label.LayoutDirectionVertical:
            return "Вертикальный";
        case Label.LayoutDirectionHorizontal:
            return "Горизонтальный";
        case Label.ColumnKindTime:
            return "Время";
        case Label.ColumnKindVariable:
            return "Переменная";
        case Label.ColumnStartWithEmpty:
            return "Пусто";
        case Label.ColumnStartWithComparisonTime:
            return "Время сравнения";
        case Label.ColumnStartWithComparisonSegmentTime:
            return "Время сегмента сравнения";
        case Label.ColumnStartWithPossibleTimeSave:
            return "Возможная экономия времени";
        case Label.IconDisplayModeBothRows:
            return "Обе строки";
        case Label.IconDisplayModeFirstRow:
            return "Только первая строка";
        case Label.SubsplitDisplayModeFlat:
            return "Плоский список";
        case Label.SubsplitDisplayModeCurrentGroupExpanded:
            return "Текущая группа раскрыта";
        case Label.SubsplitDisplayModeAllGroupsExpanded:
            return "Все группы раскрыты";
        case Label.ColumnUpdateWithDontUpdate:
            return "Не обновлять";
        case Label.ColumnUpdateWithSplitTime:
            return "Время сплита";
        case Label.ColumnUpdateWithDelta:
            return "Опережение / отставание";
        case Label.ColumnUpdateWithDeltaWithFallback:
            return "Опережение / отставание или время сплита, если пусто";
        case Label.ColumnUpdateWithSegmentTime:
            return "Время сегмента";
        case Label.ColumnUpdateWithSegmentDelta:
            return "Время сэкономлено / потеряно";
        case Label.ColumnUpdateWithSegmentDeltaWithFallback:
            return "Время сэкономлено / потеряно или время сегмента, если пусто";
        case Label.ColumnUpdateTriggerOnStartingSegment:
            return "При начале сегмента";
        case Label.ColumnUpdateTriggerContextual:
            return "Контекстно";
        case Label.ColumnUpdateTriggerOnEndingSegment:
            return "При завершении сегмента";
        case Label.ComparisonCurrentComparison:
            return "Текущее сравнение";
        case Label.CustomVariableNoneAvailable:
            return "Нет доступных переменных";
        case Label.CustomVariableNoneAvailableTooltip:
            return "Пользовательские переменные можно определить на вкладке «Переменные» при редактировании сплитов. Дополнительные пользовательские переменные могут автоматически предоставляться авто‑сплиттерами.";
        case Label.HotkeyButtonTooltip:
            return "Нажмите, чтобы записать горячую клавишу. Также можно использовать кнопки геймпада. Глобальные горячие клавиши сейчас невозможны. Кнопки геймпада работают глобально.";
        case Label.ServerConnect:
            return "Подключиться";
        case Label.ServerDisconnect:
            return "Отключиться";
        case Label.ServerConnecting:
            return "Подключение...";
        case Label.ServerDisconnecting:
            return "Отключение...";
        case Label.ConnectToServerTitle:
            return "Подключиться к серверу";
        case Label.ConnectToServerDescription:
            return "Укажите URL WebSocket:";
        case Label.Connect:
            return "Подключиться";
        case Label.UpdateAvailable:
            return "Доступна новая версия LiveSplit One! Нажмите здесь, чтобы перезагрузить.";
        case Label.UnsavedChangesBeforeUnload:
            return "Есть несохранённые изменения. Вы действительно хотите закрыть LiveSplit One?";
        case Label.OpenSidebarAriaLabel:
            return "Открыть боковую панель";
        case Label.FailedToSaveLayout:
            return "Не удалось сохранить раскладку.";
        case Label.FailedToSaveHotkeys:
            return "Не удалось сохранить настройки горячих клавиш.";
        case Label.FailedToSaveGeneralSettings:
            return "Не удалось сохранить общие настройки.";
        case Label.FailedToSaveSplits:
            return "Не удалось сохранить сплиты.";
        case Label.LayoutCouldNotBeLoaded:
            return "Не удалось загрузить раскладку. Возможно, это недействительная раскладка LiveSplit или LiveSplit One.";
        case Label.EmptySplitsNotSupported:
            return "Пустые сплиты не поддерживаются.";
        case Label.BugEncountered:
            return "Вы столкнулись с ошибкой:";
        case Label.PleaseReportIssueStart:
            return "Пожалуйста, сообщите об этой проблеме ";
        case Label.ReportHere:
            return "здесь";
        case Label.PleaseReportIssueEnd:
            return ".";
        case Label.BugReportInstructions:
            return "Чтобы помочь нам исправить эту проблему, укажите шаги для воспроизведения и приложите сплиты и раскладку, которые вы использовали, когда возникла проблема.";
        case Label.LoadFailedPrivateBrowsing:
            return "Не удалось загрузить LiveSplit One.\nВозможно, вы используете режим приватного просмотра.\nLiveSplit One не может сохранять сплиты, раскладки или другие настройки из‑за ограничений приватного режима браузера.\nЭти ограничения могут быть сняты в будущем.\nЧтобы использовать LiveSplit One сейчас, отключите приватный режим в настройках.";
        case Label.LoadFailedOutdatedBrowser:
            return "Не удалось загрузить LiveSplit One.\nВозможно, вы используете устаревший браузер.\nОбновите браузер или версию iOS и попробуйте снова.\nДругая причина может быть в расширении браузера, например блокировщике рекламы, которое блокирует доступ к важным скриптам.";
        case Label.CustomComparisonsSidebarEditingHint:
            return "Сначала сохраните или отмените сравнение, которое вы редактируете.";
        case Label.CustomComparisonsComparisonMenu:
            return "Другие действия";
        case Label.CustomComparisonsNameRequired:
            return "Дайте сравнению название.";
        case Label.CustomComparisonsSearchBlocks:
            return "Поиск блоков";
        case Label.CustomComparisonsNoBlocksFound:
            return "Подходящих блоков нет. Попробуйте другое слово.";
        case Label.CustomComparisonsAboutBlock:
            return "Что делает этот блок?";
        case Label.CustomComparisonsBlocks:
            return "Блоки";
        case Label.CustomComparisonsRailHint:
            return "Перетащите блок в слот или на другой блок, чтобы заменить его. Нажмите на блок, чтобы поставить его в первый подходящий пустой слот.";
        case Label.CustomComparisonsDragBlock:
            return "Перетащите, чтобы переместить этот блок";
        case Label.CustomComparisonsOpenEditorHint:
            return "Ваши собственные сравнения работают со всеми вашими сплитами и показываются рядом с остальными сравнениями.";
        case Label.CustomComparisons:
            return "Свои сравнения";
        case Label.CustomComparisonsExportAll:
            return "Экспортировать всё…";
        case Label.CustomComparisonsExportAllFileName:
            return "Свои сравнения";
        case Label.CustomComparisonsPluginUnavailable:
            return "Не удалось загрузить собственные сравнения, поэтому сейчас они не отображаются как сравнения: {0}";
        case Label.CustomComparisonsListHeading:
            return "Сравнения";
        case Label.CustomComparisonsNoComparisons:
            return "Собственных сравнений пока нет. Нажмите «Новое», чтобы создать первое.";
        case Label.CustomComparisonsNew:
            return "Новое…";
        case Label.CustomComparisonsEdit:
            return "Редактировать…";
        case Label.CustomComparisonsRename:
            return "Переименовать…";
        case Label.CustomComparisonsDuplicate:
            return "Дублировать";
        case Label.CustomComparisonsImport:
            return "Импорт…";
        case Label.CustomComparisonsExport:
            return "Экспорт…";
        case Label.CustomComparisonsCopyAsText:
            return "Копировать как текст";
        case Label.CustomComparisonsPaste:
            return "Вставить…";
        case Label.CustomComparisonsUsedBy:
            return "Используется другими сравнениями: {0}";
        case Label.CustomComparisonsUsedByOne:
            return "Используется 1 другим сравнением";
        case Label.CustomComparisonsUnreadable:
            return "Не удаётся прочитать";
        case Label.CustomComparisonsSaveReminder:
            return "Изменения сохраняются сразу, на этом устройстве. Используйте «Экспортировать всё», чтобы перенести их на другое.";
        case Label.CustomComparisonsCopiedToClipboard:
            return "Скопировано. Можно вставить в чат или сообщение на форуме.";
        case Label.CustomComparisonsCouldNotCopy:
            return "Не удалось скопировать в буфер обмена.";
        case Label.CustomComparisonsCouldNotReadClipboard:
            return "Не удалось прочитать буфер обмена. Вставьте текст сюда:";
        case Label.CustomComparisonsErrorTitle:
            return "Не получилось";
        case Label.CustomComparisonsRenameTitle:
            return "Переименовать сравнение";
        case Label.CustomComparisonsRenameDescription:
            return "Сравнения, которые используют это, получат новое название.";
        case Label.CustomComparisonsNameTakenTitle:
            return "Выберите другое название";
        case Label.CustomComparisonsNameTakenDescription:
            return "{0} Введите другое название:";
        case Label.CustomComparisonsRemoveTitle:
            return "Удалить сравнение";
        case Label.CustomComparisonsRemoveDescription:
            return "Удалить «{0}»?";
        case Label.CustomComparisonsRemoveUsedDescription:
            return "Удалить «{0}»? Его используют другие сравнения ({1}), и без него они перестанут работать.";
        case Label.CustomComparisonsRemoveUsedOneDescription:
            return "Удалить «{0}»? Его использует 1 другое сравнение, и без него оно перестанет работать.";
        case Label.CustomComparisonsPasteTitle:
            return "Вставить сравнение";
        case Label.CustomComparisonsPasteDescription:
            return "Вставьте текст сравнения, которым кто-то поделился:";
        case Label.CustomComparisonsCopySuffix:
            return "{0} (копия)";
        case Label.CustomComparisonsTemplatesTitle:
            return "Новое сравнение";
        case Label.CustomComparisonsTemplatesDescription:
            return "Выберите отправную точку. Каждая — готовое сравнение, которое можно использовать как есть или изменить.";
        case Label.CustomComparisonsTemplateGoalPace:
            return "Целевой темп";
        case Label.CustomComparisonsTemplateGoalPaceDescription:
            return "Ваши типичные забеги, растянутые так, чтобы закончиться ровно в целевое время.";
        case Label.CustomComparisonsTemplateRealisticPace:
            return "Реалистичный темп";
        case Label.CustomComparisonsTemplateRealisticPaceDescription:
            return "70-й процентиль за последние 30 дней: время, которое вы обгоняете примерно в 70 % случаев.";
        case Label.CustomComparisonsTemplateRecentForm:
            return "Текущая форма";
        case Label.CustomComparisonsTemplateRecentFormDescription:
            return "Медиана ваших последних 10 завершённых забегов без лучшей и худшей случайности.";
        case Label.CustomComparisonsTemplateSafePace:
            return "Безопасный темп";
        case Label.CustomComparisonsTemplateSafePaceDescription:
            return "Более медленное из ваших лучших сегментов + 2 с и вашей медианы, чтобы темп никогда не был нереально быстрым.";
        case Label.CustomComparisonsTemplateBlank:
            return "Пустое";
        case Label.CustomComparisonsTemplateBlankDescription:
            return "Начать с нуля.";
        case Label.CustomComparisonsNewComparisonName:
            return "Моё сравнение";
        case Label.CustomComparisonsEditorTitle:
            return "Своё сравнение";
        case Label.CustomComparisonsName:
            return "Название";
        case Label.CustomComparisonsUndo:
            return "Отменить";
        case Label.CustomComparisonsRedo:
            return "Повторить";
        case Label.CustomComparisonsChooseBlock:
            return "Выберите блок…";
        case Label.CustomComparisonsReplaceBlock:
            return "Заменить на…";
        case Label.CustomComparisonsWrapBlock:
            return "Поместить в…";
        case Label.CustomComparisonsUnwrapBlock:
            return "Удалить, оставить содержимое";
        case Label.CustomComparisonsPreviewBlock:
            return "Предпросмотр этого блока";
        case Label.CustomComparisonsBlockMenu:
            return "Действия с блоком";
        case Label.CustomComparisonsFillEmptySlots:
            return "Заполните пустые слоты, чтобы увидеть предпросмотр. В каждом слоте должен быть блок.";
        case Label.CustomComparisonsDiscardChangesDescription:
            return "В этом сравнении есть несохранённые изменения.";
        case Label.CustomComparisonsDiscard:
            return "Отбросить";
        case Label.CustomComparisonsKeepEditing:
            return "Продолжить редактирование";
        case Label.CustomComparisonsInvalidTime:
            return "Введите время, например 20:00 или 1:05:30.";
        case Label.CustomComparisonsNotFound:
            return "{0} (не найдено)";
        case Label.CustomComparisonsNotInSplits:
            return "{0}. (нет в ваших сплитах)";
        case Label.CustomComparisonsSegmentOption:
            return "{0}. {1}";
        case Label.CustomComparisonsAddRange:
            return "Добавить диапазон";
        case Label.CustomComparisonsRemoveRange:
            return "Удалить этот диапазон";
        case Label.CustomComparisonsRangeBackwards:
            return "Сегменты с {0} по {1} идут в обратном порядке. Поменяйте числа местами.";
        case Label.CustomComparisonsCategorySources:
            return "Источники";
        case Label.CustomComparisonsCategoryFilters:
            return "Фильтры";
        case Label.CustomComparisonsCategoryAggregates:
            return "Сводки";
        case Label.CustomComparisonsCategoryMath:
            return "Вычисления";
        case Label.CustomComparisonsCategoryControl:
            return "Управление";
        case Label.CustomComparisonsKindSamples:
            return "Список времён для каждого сегмента";
        case Label.CustomComparisonsKindTimes:
            return "Одно время для каждого сегмента";
        case Label.CustomComparisonsBlockResult:
            return "это сравнение —";
        case Label.CustomComparisonsBlockResultTip:
            return "Готовое сравнение. Поместите сюда блоки, из которых оно строится.";
        case Label.CustomComparisonsBlockSegmentHistory:
            return "все мои времена по каждому сегменту";
        case Label.CustomComparisonsBlockSegmentHistoryTip:
            return "Каждое время, записанное для каждого сегмента. Пропущенные сегменты и объединённый сегмент сразу после пропуска не учитываются.";
        case Label.CustomComparisonsBlockComparison:
            return "сравнение {name}";
        case Label.CustomComparisonsBlockComparisonTip:
            return "Существующее сравнение, сегмент за сегментом. Встроенные работают, даже если они выключены.";
        case Label.CustomComparisonsBlockAttempt:
            return "попытка № {number}";
        case Label.CustomComparisonsBlockAttemptTip:
            return "Сегменты одной прошлой попытки по её номеру в истории попыток. Пусто там, где этот забег пропустил сплит или был сброшен.";
        case Label.CustomComparisonsBlockBestRecentRun:
            return "мой лучший забег за последние {days} дн.";
        case Label.CustomComparisonsBlockBestRecentRunTip:
            return "Сегменты вашего самого быстрого завершённого забега за последние N дней: «свежий PB», который меняется по мере игры. Пусто, если за это время ни один забег не был завершён.";
        case Label.CustomComparisonsBlockLastN:
            return "последние {count} времён из";
        case Label.CustomComparisonsBlockLastNTip:
            return "Оставляет самые свежие времена каждого сегмента. Считаются прохождения этого сегмента, а не попытки.";
        case Label.CustomComparisonsBlockCompletedRunsOnly:
            return "только из завершённых забегов";
        case Label.CustomComparisonsBlockCompletedRunsOnlyTip:
            return "Оставляет только времена из попыток, в которых забег был пройден целиком.";
        case Label.CustomComparisonsBlockRecentDays:
            return "за последние {days} дн.";
        case Label.CustomComparisonsBlockRecentDaysTip:
            return "Оставляет только времена из попыток, закончившихся за последние N дней, чтобы старые времена больше не учитывались. Попытки без даты не учитываются.";
        case Label.CustomComparisonsBlockFinishedUnder:
            return "из забегов, завершённых быстрее {totalSeconds}";
        case Label.CustomComparisonsBlockFinishedUnderTip:
            return "Оставляет только времена из забегов, завершённых быстрее этого времени, чтобы учитывались только ваши хорошие забеги.";
        case Label.CustomComparisonsBlockReachedSegment:
            return "из забегов, дошедших до {segment}";
        case Label.CustomComparisonsBlockReachedSegmentTip:
            return "Оставляет только времена из попыток, дошедших хотя бы до этого сегмента. Как «только из завершённых забегов», но для игр, где большинство забегов сбрасывается рано. Если этого сегмента нет в ваших сплитах, вы увидите предупреждение, и никакие времена не останутся.";
        case Label.CustomComparisonsBlockTrimOutliers:
            return "без самых быстрых и медленных {percent} % из";
        case Label.CustomComparisonsBlockTrimOutliersTip:
            return "Убирает случайности перед усреднением: отбрасывает эту долю самых быстрых и самых медленных времён каждого сегмента. Если времён мало, ничего не отбрасывается.";
        case Label.CustomComparisonsBlockAtLeast:
            return "только если есть хотя бы {count} времён в";
        case Label.CustomComparisonsBlockAtLeastTip:
            return "Сегменты с меньшим числом времён становятся пустыми, чтобы их можно было заполнить через «если пусто, взять», а не полагаться на слишком мало данных.";
        case Label.CustomComparisonsBlockAggregate:
            return "{kind} из";
        case Label.CustomComparisonsBlockAggregateTip:
            return "Превращает список времён каждого сегмента в одно время. Сегмент без времён остаётся пустым.";
        case Label.CustomComparisonsAggregateMedian:
            return "медиана";
        case Label.CustomComparisonsAggregateAverage:
            return "среднее";
        case Label.CustomComparisonsAggregateMin:
            return "лучшее (мин.)";
        case Label.CustomComparisonsAggregateMax:
            return "худшее (макс.)";
        case Label.CustomComparisonsBlockPercentile:
            return "процентиль {percent} из";
        case Label.CustomComparisonsBlockPercentileTip:
            return "0 — ваше самое быстрое время, 100 — самое медленное, 50 — медиана. 70 означает: вы обгоняете это время примерно в 70 % случаев.";
        case Label.CustomComparisonsBlockWeightedAverage:
            return "среднее с упором на свежие из";
        case Label.CustomComparisonsBlockWeightedAverageFooter:
            return "вес уменьшается вдвое каждые {halfLife} более старых времён";
        case Label.CustomComparisonsBlockWeightedAverageTip:
            return "Среднее, в котором свежие времена весят больше. Самое новое время учитывается полностью, на N времён старше — наполовину, на 2N старше — на четверть, и так далее.";
        case Label.CustomComparisonsBlockAddTime:
            return "добавить {seconds} с на сегмент к";
        case Label.CustomComparisonsBlockAddTimeTip:
            return "Добавляет (или, если значение отрицательное, убирает) время к каждому сегменту. Никогда не опускается ниже нуля.";
        case Label.CustomComparisonsBlockScale:
            return "{percent} % от";
        case Label.CustomComparisonsBlockScaleTip:
            return "Масштабирует каждый сегмент. 103 % — на 3 % медленнее, 97 % — на 3 % быстрее.";
        case Label.CustomComparisonsBlockRound:
            return "округлить до {step}";
        case Label.CustomComparisonsBlockRoundTip:
            return "Округляет каждый сегмент до ближайших 0,1 с (или 1 с, 0,01 с), чтобы и времена сплитов были ровными.";
        case Label.CustomComparisonsRoundStep:
            return "{0} с";
        case Label.CustomComparisonsBlockClamp:
            return "держать";
        case Label.CustomComparisonsBlockClampTip:
            return "Держит каждый сегмент между двумя границами, например не быстрее ваших лучших сегментов и не медленнее вашего PB. Если границы пересекаются, побеждает «не быстрее чем».";
        case Label.CustomComparisonsSlotNeverFaster:
            return "не быстрее чем";
        case Label.CustomComparisonsSlotNeverSlower:
            return "не медленнее чем";
        case Label.CustomComparisonsBlockStretchToTotal:
            return "растянуть до финиша за {totalSeconds}";
        case Label.CustomComparisonsBlockStretchToTotalTip:
            return "Масштабирует все сегменты одинаково, чтобы весь забег в сумме дал целевое время. Если какой-то сегмент пуст, результат пуст: сначала заполните пробелы через «если пусто, взять».";
        case Label.CustomComparisonsBlockBlend:
            return "{percent} % пути от";
        case Label.CustomComparisonsBlockBlendTip:
            return "Смешивает два правила для каждого сегмента. 0 % — полностью первое, 100 % — полностью второе, 75 % — три четверти пути.";
        case Label.CustomComparisonsSlotTo:
            return "до";
        case Label.CustomComparisonsBlockPick:
            return "{kind} из";
        case Label.CustomComparisonsBlockPickTip:
            return "Для каждого сегмента более медленное (или быстрое) из двух правил. Если у одного нет времени для сегмента, берётся другое.";
        case Label.CustomComparisonsPickSlower:
            return "более медленное";
        case Label.CustomComparisonsPickFaster:
            return "более быстрое";
        case Label.CustomComparisonsSlotAnd:
            return "и";
        case Label.CustomComparisonsBlockFallback:
            return "взять";
        case Label.CustomComparisonsBlockFallbackTip:
            return "Заполняет только сегменты, которые первое правило оставляет пустыми, например потому что забегов ещё недостаточно.";
        case Label.CustomComparisonsSlotIfEmpty:
            return "если пусто, взять";
        case Label.CustomComparisonsBlockSegmentRange:
            return "для сегментов … взять … иначе …";
        case Label.CustomComparisonsBlockSegmentRangeTip:
            return "Использует одно правило для диапазона сегментов и другое для остальных. Добавьте диапазоны для новых правил: побеждает первый подходящий диапазон. Если диапазон выходит за конец ваших сплитов, вы увидите предупреждение.";
        case Label.CustomComparisonsBlockSegmentRangeHeader:
            return "разные правила для разных сегментов (побеждает первый подходящий диапазон)";
        case Label.CustomComparisonsRangeCase:
            return "для сегментов с {from} по {to} взять";
        case Label.CustomComparisonsSlotOtherwise:
            return "иначе";
        case Label.CustomComparisonsPreview:
            return "Предпросмотр";
        case Label.CustomComparisonsPreviewingBlock:
            return "Предпросмотр блока, а не сравнения";
        case Label.CustomComparisonsShowWholeComparison:
            return "Показать всё сравнение";
        case Label.CustomComparisonsSegment:
            return "Сегмент";
        case Label.CustomComparisonsDifferenceFrom:
            return "Разница с";
        case Label.CustomComparisonsFasterThanGold:
            return "Быстрее вашего лучшего времени на этом сегменте (вашего голда)";
        case Label.CustomComparisonsFasterThanGoldWarning:
            return "Сегментов быстрее ваших голдов: {0}. Это допустимо, но такой темп может быть нереалистичным.";
        case Label.CustomComparisonsFasterThanGoldWarningOne:
            return "1 сегмент быстрее вашего голда. Это допустимо, но такой темп может быть нереалистичным.";
        case Label.CustomComparisonsFinishLine:
            return "Финиш за {0}, {1} относительно {2}.";
        case Label.CustomComparisonsFinishVsSumOfBest:
            return "Ваша сумма лучших сегментов — {0}.";
        case Label.CustomComparisonsNoProblems:
            return "Проблем нет.";
        case Label.CustomComparisonsNoTimesLeft:
            return "Ни у одного сегмента нет времени. Нажмите на строку, чтобы узнать почему, или добавьте «взять … если пусто, взять» с запасным вариантом, например вашим PB.";
        case Label.CustomComparisonsOriginTitle:
            return "Откуда это время";
        case Label.CustomComparisonsOriginEmpty:
            return "У этого сегмента нет времени, поэтому все сплиты после него тоже пусты.";
        case Label.CustomComparisonsOriginFillingGap:
            return "заполняет пробел";
        case Label.CustomComparisonsOriginPicked:
            return "{0} из двух";
        case Label.CustomComparisonsOriginLowLimit:
            return "удержано на границе «не быстрее чем»";
        case Label.CustomComparisonsOriginHighLimit:
            return "удержано на границе «не медленнее чем»";
        case Label.CustomComparisonsClickRowHint:
            return "Нажмите на строку, чтобы увидеть, откуда её время.";
        case Label.CustomComparisonsDescYourGolds:
            return "ваши голды";
        case Label.CustomComparisonsDescYourPb:
            return "ваш PB";
        case Label.CustomComparisonsDescComparison:
            return "«{0}»";
        case Label.CustomComparisonsDescAttempt:
            return "попытка № {0}";
        case Label.CustomComparisonsDescBestRecentRun:
            return "ваш лучший забег за последние {0} дн.";
        case Label.CustomComparisonsDescWeightedAverage:
            return "среднее с упором на свежие: {0}";
        case Label.CustomComparisonsDescClamp:
            return "{0} (не быстрее чем: {1}; не медленнее чем: {2})";
        case Label.CustomComparisonsDescRound:
            return "{0}, округлённое до {1}";
        case Label.CustomComparisonsDescMedian:
            return "медиана: {0}";
        case Label.CustomComparisonsDescAverage:
            return "среднее: {0}";
        case Label.CustomComparisonsDescMin:
            return "лучшее: {0}";
        case Label.CustomComparisonsDescMax:
            return "худшее: {0}";
        case Label.CustomComparisonsDescPercentile:
            return "процентиль {0}: {1}";
        case Label.CustomComparisonsDescAddTime:
            return "{0} + {1}";
        case Label.CustomComparisonsDescRemoveTime:
            return "{0} − {1}";
        case Label.CustomComparisonsDescScale:
            return "{1} × {0} %";
        case Label.CustomComparisonsDescStretch:
            return "{0}, растянутое до финиша за {1}";
        case Label.CustomComparisonsDescBlend:
            return "{0} % пути: {1} → {2}";
        case Label.CustomComparisonsDescSlower:
            return "более медленное из двух: {0} и {1}";
        case Label.CustomComparisonsDescFaster:
            return "более быстрое из двух: {0} и {1}";
        case Label.CustomComparisonsDescFallback:
            return "{0} (где пусто: {1})";
        case Label.CustomComparisonsDescRangeArm:
            return "{1}: {0}";
        case Label.CustomComparisonsDescRangeOtherwise:
            return "{0}, иначе {1}";
        case Label.CustomComparisonsDescSomething:
            return "что-то";
        case Label.CustomComparisonsDescAllTimes:
            return "все ваши времена";
        case Label.CustomComparisonsDescLastN:
            return "ваши последние времена ({0})";
        case Label.CustomComparisonsQualCompleted:
            return "из завершённых забегов";
        case Label.CustomComparisonsQualRecentDays:
            return "за последние {0} дн.";
        case Label.CustomComparisonsQualUnder:
            return "из забегов быстрее {0}";
        case Label.CustomComparisonsQualTrim:
            return "без самых быстрых и медленных {0} %";
        case Label.CustomComparisonsQualAtLeast:
            return "если их не меньше {0}";
        case Label.CustomComparisonsQualReached:
            return "из забегов, дошедших до {0}";
        case Label.CustomComparisonsSumGapsFilled:
            return "{0} Пробелы заполнены из: {1}.";
        case Label.CustomComparisonsSumRangeArm:
            return "{0}: {1}";
        case Label.CustomComparisonsSumOtherSegments:
            return "Остальные сегменты: {0}";
        case Label.CustomComparisonsSegmentNumber:
            return "сегмент {0}";
        case Label.CustomComparisonsSegmentSpan:
            return "с {0} по {1}";
        case Label.CustomComparisonsSeconds:
            return "{0} с";
        case Label.CustomComparisonsListAnd:
            return "{0} и {1}";
        case Label.CustomComparisonsWarnSegment:
            return "Использует сегмент {0}, но в ваших сплитах их {1}";
        case Label.CustomComparisonsWarnSegments:
            return "Использует сегменты {0}, но в ваших сплитах их {1}";
        case Label.CustomComparisonsSentence:
            return "{0}.";
    }
}
