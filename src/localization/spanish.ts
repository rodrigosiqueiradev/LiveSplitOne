import { Label } from ".";

export function resolveSpanish(text: Label): string {
    switch (text) {
        case Label.Ok:
            return "Aceptar";
        case Label.Cancel:
            return "Cancelar";
        case Label.Settings:
            return "Configuración";
        case Label.Language:
            return "Idioma";
        case Label.LanguageDescription:
            return "Establece el idioma utilizado en la aplicación.";
        case Label.LanguageAuto:
            return "Automático";
        case Label.Theme:
            return "Tema";
        case Label.ThemeDescription:
            return "Determina si se sigue el tema del sistema o se fuerza el modo claro u oscuro.";
        case Label.ThemeLightMode:
            return "Modo Claro";
        case Label.ThemeDarkMode:
            return "Modo Oscuro";
        case Label.HotkeysHeading:
            return "Atajos de teclado";
        case Label.GeneralHeading:
            return "General";
        case Label.NetworkHeading:
            return "Red";
        case Label.FrameRate:
            return "Tasa de fotogramas";
        case Label.FrameRateDescription:
            return "Determina la tasa de fotogramas a la que se muestra el temporizador. «Consciente de la batería» intenta determinar el tipo de dispositivo y el estado de carga para elegir una buena tasa de fotogramas. «Igualar a la pantalla» hace que el temporizador coincida con la tasa de refresco de la pantalla.";
        case Label.FrameRateBatteryAware:
            return "Consciente de la batería";
        case Label.FrameRateMatchScreen:
            return "Igualar a la pantalla";
        case Label.SaveOnReset:
            return "Guardar al reiniciar";
        case Label.SaveOnResetDescription:
            return "Determina si los splits se guardan automáticamente al reiniciar el temporizador.";
        case Label.ShowControlButtons:
            return "Mostrar botones de control";
        case Label.ShowControlButtonsDescription:
            return "Determina si se muestran botones debajo del temporizador que permiten controlarlo. Cuando está desactivado, debes usar los atajos de teclado.";
        case Label.ShowManualGameTimeInput:
            return "Mostrar entrada manual del tiempo de juego";
        case Label.ShowManualGameTimeInputDescription:
            return "Muestra un cuadro de texto debajo del temporizador que te permite introducir manualmente el tiempo de juego. Inicias el temporizador y haces splits presionando la tecla Enter en el cuadro de texto. Asegúrate de comparar con «Game Time».";
        case Label.ManualGameTimeMode:
            return "Modo de tiempo de juego manual";
        case Label.ManualGameTimeModeDescription:
            return "Determina si el tiempo de juego manual se introduce como tiempos de segmento o tiempos de split.";
        case Label.ManualGameTimeModeSegmentTimes:
            return "Tiempos de segmento";
        case Label.ManualGameTimeModeSplitTimes:
            return "Tiempos de split";
        case Label.AlwaysOnTop:
            return "Siempre encima";
        case Label.AlwaysOnTopDescription:
            return "Mantiene la ventana siempre encima de otras ventanas.";
        case Label.SpeedrunComIntegration:
            return "Integración con Speedrun.com";
        case Label.SpeedrunComIntegrationDescription:
            return "Consulta la lista de juegos, categorías y tablas de clasificación de speedrun.com.";
        case Label.ServerConnection:
            return "Conexión al servidor";
        case Label.ServerConnectionDescription:
            return "Permite conectarte a un servidor WebSocket que puede controlar el temporizador enviando varios comandos. Los comandos actualmente son un subconjunto de los comandos compatibles con el LiveSplit original.";
        case Label.ServerConnectionExperimental:
            return "Esta función es experimental y es probable que el protocolo cambie en el futuro.";
        case Label.TheRunGgIntegration:
            return "Integración con TheRun.gg";
        case Label.TheRunGgIntegrationDescription:
            return "Se integra con therun.gg para el seguimiento en vivo de tus runs y la subida automática de estadísticas. Necesitas una clave de subida de therun.gg para usar esta función.";
        case Label.TheRunGgLiveTracking:
            return "Seguimiento en vivo";
        case Label.TheRunGgLiveTrackingDescription:
            return "Cuando está activado, los datos de splits en vivo se envían a therun.gg después de cada acción de split, lo que permite seguir la run en vivo en el sitio web.";
        case Label.TheRunGgStatsUploading:
            return "Subida de estadísticas";
        case Label.TheRunGgStatsUploadingDescription:
            return "Cuando está activado, el archivo de splits se sube a therun.gg tras cada reinicio o run finalizada, sincronizando automáticamente tus runs con el sitio.";
        case Label.HotkeyAlreadyInUse:
            return "El atajo de teclado ya está en uso.";
        case Label.Start:
            return "Iniciar";
        case Label.Resume:
            return "Reanudar";
        case Label.Pause:
            return "Pausar";
        case Label.UndoSplit:
            return "Deshacer split";
        case Label.Reset:
            return "Reiniciar";
        case Label.SkipSplit:
            return "Omitir split";
        case Label.ManualGameTimePlaceholder:
            return "Tiempo de juego manual";
        case Label.LiveSplitLogoAlt:
            return "Logotipo de LiveSplit";
        case Label.LiveSplitOne:
            return "LiveSplit One";
        case Label.Splits:
            return "Splits";
        case Label.Layout:
            return "Diseño";
        case Label.CompareAgainst:
            return "Comparar con";
        case Label.RealTime:
            return "Tiempo real";
        case Label.GameTime:
            return "Tiempo de juego";
        case Label.PopOut:
            return "Ventana emergente";
        case Label.About:
            return "Acerca de";
        case Label.Back:
            return "Atrás";
        case Label.AboutVersionPrefix:
            return "Versión:";
        case Label.AboutDescription:
            return "LiveSplit One es una versión multiplataforma de LiveSplit, el elegante y altamente personalizable temporizador para speedrunners.";
        case Label.AboutViewSource:
            return "Ver el código fuente en GitHub";
        case Label.AboutRecentChanges:
            return "Cambios recientes";
        case Label.AboutContributors:
            return "Colaboradores";
        case Label.Loading:
            return "Cargando...";
        case Label.Add:
            return "Agregar";
        case Label.Import:
            return "Importar";
        case Label.OpenSplits:
            return "Abrir splits";
        case Label.EditSplits:
            return "Editar splits";
        case Label.ExportSplits:
            return "Exportar splits";
        case Label.CopySplits:
            return "Copiar splits";
        case Label.RemoveSplits:
            return "Eliminar splits";
        case Label.Untitled:
            return "Sin título";
        case Label.NoCategory:
            return "—";
        case Label.DiscardChangesTitle:
            return "¿Descartar cambios?";
        case Label.DiscardChangesDescription:
            return "Tus splits actuales están modificados y tienen cambios sin guardar. ¿Quieres continuar y descartar esos cambios?";
        case Label.DeleteSplitsTitle:
            return "¿Eliminar splits?";
        case Label.DeleteSplitsDescription:
            return "¿Seguro que quieres eliminar los splits? Esta operación no se puede deshacer.";
        case Label.SaveBestTimesTitle:
            return "¿Guardar mejores tiempos?";
        case Label.SaveBestTimesDescription:
            return "Has superado algunos de tus mejores tiempos. ¿Quieres actualizarlos?";
        case Label.Yes:
            return "Sí";
        case Label.No:
            return "No";
        case Label.DontReset:
            return "No reiniciar";
        case Label.FailedToExportSplits:
            return "No se pudieron exportar los splits.";
        case Label.CantImportEmptySplits:
            return "No se pueden importar splits vacíos.";
        case Label.FailedToReadFile:
            return "No se pudo leer el archivo:";
        case Label.FailedToImportSplits:
            return "No se pudieron importar los splits:";
        case Label.CouldNotParseSplits:
            return "No se pudieron analizar los splits.";
        case Label.LoadedSplitsInvalid:
            return "Los splits cargados no son válidos.";
        case Label.NewSegmentName:
            return "Tiempo";
        case Label.EditWhileRunningError:
            return "No puedes editar los splits mientras el temporizador está en marcha.";
        case Label.Edit:
            return "Editar";
        case Label.Save:
            return "Guardar";
        case Label.Export:
            return "Exportar";
        case Label.FailedToParseTimeSpan:
            return "No se pudo analizar TimeSpan";
        case Label.Default:
            return "Predeterminado";
        case Label.Game:
            return "Juego";
        case Label.Category:
            return "Categoría";
        case Label.StartTimerAt:
            return "Iniciar temporizador en";
        case Label.Attempts:
            return "Intentos";
        case Label.SplitsEditor:
            return "Editor de splits";
        case Label.Variables:
            return "Variables";
        case Label.Rules:
            return "Reglas";
        case Label.Leaderboard:
            return "Clasificación";
        case Label.InsertAbove:
            return "Insertar arriba";
        case Label.InsertBelow:
            return "Insertar abajo";
        case Label.RemoveSegment:
            return "Eliminar segmento";
        case Label.MoveUp:
            return "Subir";
        case Label.MoveDown:
            return "Bajar";
        case Label.CreateGroup:
            return "Crear grupo";
        case Label.RemoveGroup:
            return "Eliminar grupo";
        case Label.AddVariable:
            return "Agregar variable";
        case Label.OpenPbPage:
            return "Abrir página PB";
        case Label.AssociateRun:
            return "Asociar run";
        case Label.Icon:
            return "Icono";
        case Label.SegmentName:
            return "Nombre del segmento";
        case Label.SplitTime:
            return "Tiempo del split";
        case Label.SegmentTime:
            return "Tiempo del segmento";
        case Label.BestSegment:
            return "Mejor segmento";
        case Label.SpeedrunComVariableTooltip:
            return "Variable de speedrun.com específica del juego.";
        case Label.Region:
            return "Región";
        case Label.RegionDescription:
            return "La región del juego que se está jugando.";
        case Label.Platform:
            return "Plataforma";
        case Label.PlatformDescription:
            return "La plataforma en la que se juega.";
        case Label.UsesEmulator:
            return "Usa emulador";
        case Label.UsesEmulatorDescription:
            return "Si se está usando un emulador para jugar.";
        case Label.CustomVariableTooltip:
            return "Variable personalizada definida por ti. Puede mostrarse con el componente de texto.";
        case Label.NoVariables:
            return "Actualmente no hay variables personalizadas para este juego.";
        case Label.NoVariablesWithSpeedrunCom:
            return "Actualmente no hay variables de speedrun.com ni variables personalizadas para este juego.";
        case Label.TimedWithoutLoads:
            return "se cronometran sin tiempos de carga";
        case Label.TimedWithGameTime:
            return "se cronometran con Game Time";
        case Label.RequireVideoProof:
            return "requieren prueba en vídeo";
        case Label.RunsOfThisGamePrefix:
            return "Las runs de este juego ";
        case Label.RunsOfThisGameSuffix:
            return ".";
        case Label.And:
            return "y";
        case Label.SetIcon:
            return "Establecer icono";
        case Label.SetIconDescription:
            return "Elige una imagen como icono del juego. Algunos formatos pueden no funcionar en todas partes.";
        case Label.DownloadBoxArt:
            return "Descargar carátula";
        case Label.DownloadBoxArtDescription:
            return "Intenta descargar la carátula de speedrun.com para usarla como icono del juego.";
        case Label.DownloadIcon:
            return "Descargar icono";
        case Label.DownloadIconDescription:
            return "Intenta descargar el icono del juego desde speedrun.com.";
        case Label.RemoveIcon:
            return "Quitar icono";
        case Label.RemoveIconDescription:
            return "Quita el icono del juego.";
        case Label.CleaningMenu:
            return "Limpieza…";
        case Label.ClearOnlyHistory:
            return "Borrar solo historial";
        case Label.ClearOnlyHistoryDescription:
            return "Los splits guardan todo el historial de runs. Esto borra el historial sin afectar PB, mejores segmentos ni comparaciones.";
        case Label.ClearAllTimes:
            return "Borrar todos los tiempos";
        case Label.ClearAllTimesDescription:
            return "Elimina todos los tiempos y el historial, dejando los splits vacíos.";
        case Label.CleanSumOfBest:
            return "Limpiar suma de mejores";
        case Label.CleanSumOfBestDescription:
            return "Permite eliminar problemas en el historial de segmentos que hacen que la suma de mejores segmentos sea inexacta.";
        case Label.ComparisonsMenu:
            return "Comparaciones…";
        case Label.AddComparison:
            return "Agregar comparación";
        case Label.AddComparisonDescription:
            return "Agrega una comparación personalizada donde puedes guardar tiempos.";
        case Label.ImportComparison:
            return "Importar comparación";
        case Label.ImportComparisonDescription:
            return "Importa el Personal Best de un archivo de splits como comparación.";
        case Label.GenerateGoalComparison:
            return "Generar comparación de objetivo";
        case Label.GenerateGoalComparisonDescription:
            return "Genera una comparación de objetivo basada en un tiempo objetivo.";
        case Label.CopyComparison:
            return "Copiar comparación";
        case Label.CopyComparisonDescription:
            return "Copia una comparación existente como nueva comparación personalizada.";
        case Label.SetSegmentIcon:
            return "Establecer icono";
        case Label.SetSegmentIconDescription:
            return "Elige una imagen como icono del segmento. Algunos formatos pueden no funcionar en todas partes.";
        case Label.RemoveSegmentIcon:
            return "Quitar icono";
        case Label.RemoveSegmentIconDescription:
            return "Quita el icono del segmento.";
        case Label.Rename:
            return "Renombrar";
        case Label.RenameDescription:
            return "Elige un nuevo nombre para la comparación personalizada. Nombres reservados o duplicados no están permitidos.";
        case Label.CopyAction:
            return "Copiar";
        case Label.CopyDescription:
            return "Crea una copia de la comparación personalizada.";
        case Label.ACopy:
            return "Copia";
        case Label.Remove:
            return "Eliminar";
        case Label.RemoveDescription:
            return "Elimina la comparación personalizada.";
        case Label.AnyPercent:
            return "Any%";
        case Label.LowPercent:
            return "Low%";
        case Label.HundredPercent:
            return "100%";
        case Label.AddComparisonPrompt:
            return "Especifica el nombre de la comparación que quieres agregar:";
        case Label.ComparisonAddError:
            return "No se pudo agregar la comparación. Puede estar duplicada o ser un nombre reservado.";
        case Label.ImportComparisonPrompt:
            return "Especifica el nombre de la comparación que quieres importar:";
        case Label.GenerateGoalComparisonPrompt:
            return "Especifica el tiempo que quieres alcanzar:";
        case Label.Generate:
            return "Generar";
        case Label.GenerateGoalComparisonError:
            return "Error al generar la comparación de objetivo. Asegúrate de indicar un tiempo válido.";
        case Label.CopyComparisonPrompt:
            return "Especifica el nombre de la comparación que quieres copiar:";
        case Label.CopyComparisonError:
            return "Error al copiar la comparación. La comparación puede no existir.";
        case Label.NothingToCleanUp:
            return "No hay nada que limpiar.";
        case Label.CleanPrompt:
            return "¿Limpiar?";
        case Label.AssociateRunPrompt:
            return "Especifica el ID o URL de speedrun.com de la run:";
        case Label.Associate:
            return "Asociar";
        case Label.InvalidSpeedrunUrl:
            return "ID o URL de speedrun.com inválido.";
        case Label.AssociateRunError:
            return "No se pudo asociar la run. El ID puede no ser válido.";
        case Label.AddVariablePrompt:
            return "Especifica el nombre de la variable personalizada que quieres agregar:";
        case Label.RenameComparison:
            return "Renombrar comparación";
        case Label.RenameComparisonPrompt:
            return "Especifica el nuevo nombre de la comparación:";
        case Label.ComparisonRenameError:
            return "No se pudo renombrar la comparación. Puede estar duplicada o ser un nombre reservado.";
        case Label.GameNotFound:
            return "No se encontró el juego.";
        case Label.NoBoxArt:
            return "El juego no tiene carátula.";
        case Label.DownloadBoxArtError:
            return "No se pudo descargar la carátula.";
        case Label.NoGameIcon:
            return "El juego no tiene icono.";
        case Label.DownloadIconError:
            return "No se pudo descargar el icono.";
        case Label.Rank:
            return "Puesto";
        case Label.Player:
            return "Jugador";
        case Label.Time:
            return "Tiempo";
        case Label.Date:
            return "Fecha:";
        case Label.Emulator:
            return "Emulador";
        case Label.EmulatorTag:
            return "Emulador";
        case Label.ObsoleteRuns:
            return "Runs obsoletas";
        case Label.Shown:
            return "Mostradas";
        case Label.Hidden:
            return "Ocultas";
        case Label.OpenLeaderboard:
            return "Abrir clasificación";
        case Label.Filters:
            return "Filtros";
        case Label.LayoutEditor:
            return "Editor de diseño";
        case Label.Component:
            return "Componente";
        case Label.AddComponent:
            return "Agregar componente";
        case Label.RemoveComponent:
            return "Eliminar componente";
        case Label.DuplicateComponent:
            return "Duplicar componente";
        case Label.MoveComponentUp:
            return "Mover componente hacia arriba";
        case Label.MoveComponentDown:
            return "Mover componente hacia abajo";
        case Label.ComponentTitle:
            return "Título";
        case Label.ComponentTitleDescription:
            return "Muestra el nombre del juego y la categoría, iconos, intentos y número de finalizaciones.";
        case Label.ComponentGraph:
            return "Gráfico";
        case Label.ComponentGraphDescription:
            return "Muestra el adelanto/retraso respecto a la comparación en todos los splits.";
        case Label.ComponentSplitsDescription:
            return "El componente principal de los tiempos de split. Muestra una tabla desplazable.";
        case Label.ComponentDetailedTimer:
            return "Temporizador detallado";
        case Label.ComponentDetailedTimerDescription:
            return "Muestra el tiempo total y el tiempo del segmento actual.";
        case Label.ComponentTimer:
            return "Temporizador";
        case Label.ComponentTimerDescription:
            return "Muestra el tiempo total en formato digital; el color depende de la comparación.";
        case Label.ComponentCurrentComparison:
            return "Comparación actual";
        case Label.ComponentCurrentComparisonDescription:
            return "Muestra el nombre de la comparación actual.";
        case Label.ComponentCurrentPace:
            return "Ritmo actual";
        case Label.ComponentCurrentPaceDescription:
            return "Predice el tiempo final según la comparación seleccionada.";
        case Label.ComponentDelta:
            return "Diferencia";
        case Label.ComponentDeltaDescription:
            return "Muestra el adelanto/retraso respecto a la comparación.";
        case Label.ComponentPbChance:
            return "Probabilidad de PB";
        case Label.ComponentPbChanceDescription:
            return "Muestra la probabilidad de conseguir un PB.";
        case Label.ComponentPossibleTimeSave:
            return "Ahorro de tiempo posible";
        case Label.ComponentPossibleTimeSaveDescription:
            return "Muestra el tiempo que se puede ahorrar en el segmento actual.";
        case Label.ComponentPreviousSegment:
            return "Segmento anterior";
        case Label.ComponentPreviousSegmentDescription:
            return "Muestra la ganancia/pérdida y el ahorro potencial del segmento anterior.";
        case Label.ComponentSegmentTime:
            return "Tiempo de segmento";
        case Label.ComponentSegmentTimeDescription:
            return "Muestra el tiempo del segmento para la comparación seleccionada.";
        case Label.ComponentSumOfBest:
            return "Suma de mejores";
        case Label.ComponentSumOfBestDescription:
            return "Muestra el tiempo más rápido posible según el historial.";
        case Label.ComponentText:
            return "Texto";
        case Label.ComponentTextDescription:
            return "Muestra texto central/izquierda/derecha y variables personalizadas.";
        case Label.ComponentTotalPlaytime:
            return "Tiempo total de juego";
        case Label.ComponentTotalPlaytimeDescription:
            return "Muestra el tiempo total jugado en la categoría.";
        case Label.ComponentVariableDescription:
            return "Crea texto que muestra el valor de la variable personalizada «{name}».";
        case Label.ComponentBlankSpace:
            return "Espacio en blanco";
        case Label.ComponentBlankSpaceDescription:
            return "Componente vacío con solo el fondo.";
        case Label.ComponentCarousel:
            return "Carrusel";
        case Label.ComponentCarouselDescription:
            return "Muestra un componente hijo a la vez y va rotando entre ellos. Prioriza los que cambiaron de contenido y, en caso contrario, cambia según un intervalo.";
        case Label.ComponentSeparator:
            return "Separador";
        case Label.ComponentSeparatorDescription:
            return "Muestra una línea separadora entre componentes.";
        case Label.Row:
            return "Fila";
        case Label.RowDescription:
            return "Una fila de componentes dispuestos horizontalmente, cambiando la dirección del diseño para los componentes interiores.";
        case Label.Column:
            return "Columna";
        case Label.ColumnDescription:
            return "Una columna de componentes dispuestos verticalmente, cambiando la dirección del diseño para los componentes interiores.";
        case Label.AccuracySeconds:
            return "Segundos";
        case Label.AccuracyTenths:
            return "Décimas";
        case Label.AccuracyHundredths:
            return "Centésimas";
        case Label.AccuracyMilliseconds:
            return "Milisegundos";
        case Label.FontStyle:
            return "Estilo";
        case Label.FontWeight:
            return "Peso";
        case Label.FontStretch:
            return "Estiramiento";
        case Label.FontStyleNormal:
            return "Normal";
        case Label.FontStyleItalic:
            return "Cursiva";
        case Label.AlignmentAutomatic:
            return "Automático";
        case Label.AlignmentLeft:
            return "Izquierda";
        case Label.AlignmentCenter:
            return "Centro";
        case Label.GradientTransparent:
            return "Transparente";
        case Label.GradientPlain:
            return "Sólido";
        case Label.GradientVertical:
            return "Vertical";
        case Label.GradientHorizontal:
            return "Horizontal";
        case Label.GradientAlternating:
            return "Alternado";
        case Label.GradientPlainDelta:
            return "Delta sólido";
        case Label.GradientVerticalDelta:
            return "Delta vertical";
        case Label.GradientHorizontalDelta:
            return "Delta horizontal";
        case Label.LayoutBackgroundImage:
            return "Imagen";
        case Label.LayoutBackgroundBrightness:
            return "Brillo";
        case Label.LayoutBackgroundOpacity:
            return "Opacidad";
        case Label.LayoutBackgroundBlur:
            return "Desenfoque";
        case Label.LayoutDirectionVertical:
            return "Vertical";
        case Label.LayoutDirectionHorizontal:
            return "Horizontal";
        case Label.ColumnKindTime:
            return "Tiempo";
        case Label.ColumnKindVariable:
            return "Variable";
        case Label.ColumnStartWithEmpty:
            return "Vacío";
        case Label.ColumnStartWithComparisonTime:
            return "Tiempo de comparación";
        case Label.ColumnStartWithComparisonSegmentTime:
            return "Tiempo de segmento de comparación";
        case Label.ColumnStartWithPossibleTimeSave:
            return "Tiempo posible de ahorrar";
        case Label.IconDisplayModeBothRows:
            return "Ambas filas";
        case Label.IconDisplayModeFirstRow:
            return "Solo la primera fila";
        case Label.SubsplitDisplayModeFlat:
            return "Plano";
        case Label.SubsplitDisplayModeCurrentGroupExpanded:
            return "Grupo actual expandido";
        case Label.SubsplitDisplayModeAllGroupsExpanded:
            return "Todos los grupos expandidos";
        case Label.ColumnUpdateWithDontUpdate:
            return "No actualizar";
        case Label.ColumnUpdateWithSplitTime:
            return "Tiempo del split";
        case Label.ColumnUpdateWithDelta:
            return "Tiempo a favor / en contra";
        case Label.ColumnUpdateWithDeltaWithFallback:
            return "Tiempo a favor / en contra o tiempo del split si está vacío";
        case Label.ColumnUpdateWithSegmentTime:
            return "Tiempo de segmento";
        case Label.ColumnUpdateWithSegmentDelta:
            return "Tiempo ganado / perdido";
        case Label.ColumnUpdateWithSegmentDeltaWithFallback:
            return "Tiempo ganado / perdido o tiempo de segmento si está vacío";
        case Label.ColumnUpdateTriggerOnStartingSegment:
            return "Al iniciar el segmento";
        case Label.ColumnUpdateTriggerContextual:
            return "Contextual";
        case Label.ColumnUpdateTriggerOnEndingSegment:
            return "Al terminar el segmento";
        case Label.ComparisonCurrentComparison:
            return "Comparación actual";
        case Label.CustomVariableNoneAvailable:
            return "No hay variables disponibles";
        case Label.CustomVariableNoneAvailableTooltip:
            return "Las variables personalizadas se pueden definir en la pestaña Variables al editar splits. Variables personalizadas adicionales pueden ser proporcionadas automáticamente por auto splitters.";
        case Label.HotkeyButtonTooltip:
            return "Haz clic para grabar un atajo. También puedes usar botones de gamepad. Los atajos globales no son posibles actualmente. Los botones del gamepad funcionan de forma global.";
        case Label.ServerConnect:
            return "Conectar";
        case Label.ServerDisconnect:
            return "Desconectar";
        case Label.ServerConnecting:
            return "Conectando...";
        case Label.ServerDisconnecting:
            return "Desconectando...";
        case Label.ConnectToServerTitle:
            return "Conectar al servidor";
        case Label.ConnectToServerDescription:
            return "Indica la URL de WebSocket:";
        case Label.Connect:
            return "Conectar";
        case Label.UpdateAvailable:
            return "¡Hay una nueva versión de LiveSplit One disponible! Haz clic aquí para recargar.";
        case Label.UnsavedChangesBeforeUnload:
            return "Hay cambios sin guardar. ¿Seguro que quieres cerrar LiveSplit One?";
        case Label.OpenSidebarAriaLabel:
            return "Abrir barra lateral";
        case Label.FailedToSaveLayout:
            return "No se pudo guardar el diseño.";
        case Label.FailedToSaveHotkeys:
            return "No se pudieron guardar los atajos de teclado.";
        case Label.FailedToSaveGeneralSettings:
            return "No se pudieron guardar los ajustes generales.";
        case Label.FailedToSaveSplits:
            return "No se pudieron guardar los splits.";
        case Label.LayoutCouldNotBeLoaded:
            return "No se pudo cargar el diseño. Es posible que no sea un diseño válido de LiveSplit o LiveSplit One.";
        case Label.EmptySplitsNotSupported:
            return "No se admiten splits vacíos.";
        case Label.BugEncountered:
            return "Encontraste un error:";
        case Label.PleaseReportIssueStart:
            return "Por favor, informa de este problema ";
        case Label.ReportHere:
            return "aquí";
        case Label.PleaseReportIssueEnd:
            return ".";
        case Label.BugReportInstructions:
            return "Para ayudarnos a corregir este problema, incluye los pasos para reproducirlo y adjunta los splits y el diseño que estabas usando cuando ocurrió el problema.";
        case Label.LoadFailedPrivateBrowsing:
            return "No se pudo cargar LiveSplit One.\nEs posible que estés en modo de navegación privada.\nLiveSplit One no puede almacenar splits, diseños u otros ajustes debido a las limitaciones de la navegación privada del navegador.\nEstas limitaciones podrían eliminarse en el futuro.\nPara usar LiveSplit One por ahora, desactiva la navegación privada en tus ajustes.";
        case Label.LoadFailedOutdatedBrowser:
            return "No se pudo cargar LiveSplit One.\nEs posible que estés usando un navegador desactualizado.\nActualiza tu navegador o tu versión de iOS e inténtalo de nuevo.\nOtra posible causa es una extensión del navegador, como un bloqueador de anuncios, que esté bloqueando el acceso a scripts importantes.";
        case Label.CustomComparisonsSidebarEditingHint:
            return "Primero guarda o cancela la comparación que estás editando.";
        case Label.CustomComparisonsComparisonMenu:
            return "Más acciones";
        case Label.CustomComparisonsNameRequired:
            return "Ponle un nombre a la comparación.";
        case Label.CustomComparisonsSearchBlocks:
            return "Buscar bloques";
        case Label.CustomComparisonsNoBlocksFound:
            return "Ningún bloque coincide. Prueba con otra palabra.";
        case Label.CustomComparisonsAboutBlock:
            return "¿Qué hace este bloque?";
        case Label.CustomComparisonsBlocks:
            return "Bloques";
        case Label.CustomComparisonsRailHint:
            return "Arrastra un bloque a un hueco, o sobre un bloque para reemplazarlo. Haz clic en uno para ponerlo en el primer hueco vacío donde encaje.";
        case Label.CustomComparisonsDragBlock:
            return "Arrastra para mover este bloque";
        case Label.CustomComparisonsOpenEditorHint:
            return "Tus comparaciones personalizadas funcionan con todos tus splits y aparecen junto a las demás comparaciones.";
        case Label.CustomComparisons:
            return "Comparaciones personalizadas";
        case Label.CustomComparisonsExportAll:
            return "Exportar todo…";
        case Label.CustomComparisonsExportAllFileName:
            return "Comparaciones personalizadas";
        case Label.CustomComparisonsPluginUnavailable:
            return "No se pudieron cargar las comparaciones personalizadas, así que por ahora no aparecen como comparaciones: {0}";
        case Label.CustomComparisonsListHeading:
            return "Comparaciones";
        case Label.CustomComparisonsNoComparisons:
            return "Todavía no hay comparaciones personalizadas. Haz clic en Nueva para crear la primera.";
        case Label.CustomComparisonsNew:
            return "Nueva…";
        case Label.CustomComparisonsEdit:
            return "Editar…";
        case Label.CustomComparisonsRename:
            return "Renombrar…";
        case Label.CustomComparisonsDuplicate:
            return "Duplicar";
        case Label.CustomComparisonsImport:
            return "Importar…";
        case Label.CustomComparisonsExport:
            return "Exportar…";
        case Label.CustomComparisonsCopyAsText:
            return "Copiar como texto";
        case Label.CustomComparisonsPaste:
            return "Pegar…";
        case Label.CustomComparisonsUsedBy:
            return "Usada por otras {0} comparaciones";
        case Label.CustomComparisonsUsedByOne:
            return "Usada por otra comparación";
        case Label.CustomComparisonsUnreadable:
            return "No se puede leer";
        case Label.CustomComparisonsSaveReminder:
            return "Los cambios se guardan al momento, en este dispositivo. Usa Exportar todo para llevarlos a otro.";
        case Label.CustomComparisonsCopiedToClipboard:
            return "Copiado. Puedes pegarlo en un chat o en un foro.";
        case Label.CustomComparisonsCouldNotCopy:
            return "No se pudo copiar al portapapeles.";
        case Label.CustomComparisonsCouldNotReadClipboard:
            return "No se pudo leer el portapapeles. Pega el texto aquí:";
        case Label.CustomComparisonsErrorTitle:
            return "Eso no funcionó";
        case Label.CustomComparisonsRenameTitle:
            return "Renombrar comparación";
        case Label.CustomComparisonsRenameDescription:
            return "Las comparaciones que usan esta se actualizan con el nuevo nombre.";
        case Label.CustomComparisonsNameTakenTitle:
            return "Elige otro nombre";
        case Label.CustomComparisonsNameTakenDescription:
            return "{0} Escribe otro nombre:";
        case Label.CustomComparisonsRemoveTitle:
            return "Eliminar comparación";
        case Label.CustomComparisonsRemoveDescription:
            return "¿Eliminar «{0}»?";
        case Label.CustomComparisonsRemoveUsedDescription:
            return "¿Eliminar «{0}»? Otras {1} comparaciones la usan y dejarán de funcionar sin ella.";
        case Label.CustomComparisonsRemoveUsedOneDescription:
            return "¿Eliminar «{0}»? Otra comparación la usa y dejará de funcionar sin ella.";
        case Label.CustomComparisonsPasteTitle:
            return "Pegar una comparación";
        case Label.CustomComparisonsPasteDescription:
            return "Pega el texto de una comparación que alguien compartió:";
        case Label.CustomComparisonsCopySuffix:
            return "{0} (copia)";
        case Label.CustomComparisonsTemplatesTitle:
            return "Nueva comparación";
        case Label.CustomComparisonsTemplatesDescription:
            return "Elige un punto de partida. Cada uno es una comparación completa que puedes usar tal cual o cambiar.";
        case Label.CustomComparisonsTemplateGoalPace:
            return "Ritmo objetivo";
        case Label.CustomComparisonsTemplateGoalPaceDescription:
            return "Tus runs habituales, estiradas para terminar justo en un tiempo objetivo.";
        case Label.CustomComparisonsTemplateRealisticPace:
            return "Ritmo realista";
        case Label.CustomComparisonsTemplateRealisticPaceDescription:
            return "Percentil 70 de los últimos 30 días: tiempos que superas alrededor del 70 % de las veces.";
        case Label.CustomComparisonsTemplateRecentForm:
            return "Forma reciente";
        case Label.CustomComparisonsTemplateRecentFormDescription:
            return "La mediana de tus últimas 10 runs completadas, sin la mejor ni la peor casualidad.";
        case Label.CustomComparisonsTemplateSafePace:
            return "Ritmo seguro";
        case Label.CustomComparisonsTemplateSafePaceDescription:
            return "El más lento entre tus golds + 2 s y tu mediana, para que nunca sea irrealmente rápido.";
        case Label.CustomComparisonsTemplateBlank:
            return "En blanco";
        case Label.CustomComparisonsTemplateBlankDescription:
            return "Empezar desde cero.";
        case Label.CustomComparisonsNewComparisonName:
            return "Mi comparación";
        case Label.CustomComparisonsEditorTitle:
            return "Comparación personalizada";
        case Label.CustomComparisonsName:
            return "Nombre";
        case Label.CustomComparisonsUndo:
            return "Deshacer";
        case Label.CustomComparisonsRedo:
            return "Rehacer";
        case Label.CustomComparisonsChooseBlock:
            return "Elige un bloque…";
        case Label.CustomComparisonsReplaceBlock:
            return "Reemplazar por…";
        case Label.CustomComparisonsWrapBlock:
            return "Meter dentro de…";
        case Label.CustomComparisonsUnwrapBlock:
            return "Eliminar, conservar lo de dentro";
        case Label.CustomComparisonsPreviewBlock:
            return "Vista previa de este bloque";
        case Label.CustomComparisonsBlockMenu:
            return "Acciones del bloque";
        case Label.CustomComparisonsFillEmptySlots:
            return "Rellena los huecos vacíos para ver la vista previa. Cada hueco necesita un bloque.";
        case Label.CustomComparisonsDiscardChangesDescription:
            return "Esta comparación tiene cambios sin guardar.";
        case Label.CustomComparisonsDiscard:
            return "Descartar";
        case Label.CustomComparisonsKeepEditing:
            return "Seguir editando";
        case Label.CustomComparisonsInvalidTime:
            return "Escribe un tiempo como 20:00 o 1:05:30.";
        case Label.CustomComparisonsNotFound:
            return "{0} (no encontrada)";
        case Label.CustomComparisonsNotInSplits:
            return "{0}. (no está en tus splits)";
        case Label.CustomComparisonsSegmentOption:
            return "{0}. {1}";
        case Label.CustomComparisonsAddRange:
            return "Agregar un rango";
        case Label.CustomComparisonsRemoveRange:
            return "Eliminar este rango";
        case Label.CustomComparisonsRangeBackwards:
            return "Los segmentos {0} a {1} están al revés. Intercambia los números.";
        case Label.CustomComparisonsCategorySources:
            return "Fuentes";
        case Label.CustomComparisonsCategoryFilters:
            return "Filtros";
        case Label.CustomComparisonsCategoryAggregates:
            return "Agregados";
        case Label.CustomComparisonsCategoryMath:
            return "Cálculo";
        case Label.CustomComparisonsCategoryControl:
            return "Control";
        case Label.CustomComparisonsKindSamples:
            return "Una lista de tiempos por segmento";
        case Label.CustomComparisonsKindTimes:
            return "Un tiempo por segmento";
        case Label.CustomComparisonsBlockResult:
            return "esta comparación es";
        case Label.CustomComparisonsBlockResultTip:
            return "La comparación terminada. Pon aquí los bloques que la forman.";
        case Label.CustomComparisonsBlockSegmentHistory:
            return "todos mis tiempos de cada segmento";
        case Label.CustomComparisonsBlockSegmentHistoryTip:
            return "Cada tiempo que registraste en cada segmento. Se excluyen los segmentos saltados y el segmento combinado justo después de un salto.";
        case Label.CustomComparisonsBlockComparison:
            return "comparación {name}";
        case Label.CustomComparisonsBlockComparisonTip:
            return "Una comparación existente, segmento a segmento. Las integradas funcionan aunque estén desactivadas.";
        case Label.CustomComparisonsBlockAttempt:
            return "intento n.º {number}";
        case Label.CustomComparisonsBlockAttemptTip:
            return "Los segmentos de un intento anterior, según su número en el historial de intentos. Vacío donde esa run saltó un split o se reinició.";
        case Label.CustomComparisonsBlockBestRecentRun:
            return "mi mejor run de los últimos {days} días";
        case Label.CustomComparisonsBlockBestRecentRunTip:
            return "Los segmentos de tu run terminada más rápida de los últimos N días: un «PB reciente» que se mueve a medida que juegas. Vacío si ninguna run terminó en ese tiempo.";
        case Label.CustomComparisonsBlockLastN:
            return "últimos {count} tiempos de";
        case Label.CustomComparisonsBlockLastNTip:
            return "Conserva los tiempos más recientes de cada segmento. Cuenta las veces que se completó ese segmento, no los intentos.";
        case Label.CustomComparisonsBlockCompletedRunsOnly:
            return "solo de runs completadas";
        case Label.CustomComparisonsBlockCompletedRunsOnlyTip:
            return "Conserva solo los tiempos de intentos que terminaron la run completa.";
        case Label.CustomComparisonsBlockRecentDays:
            return "de los últimos {days} días";
        case Label.CustomComparisonsBlockRecentDaysTip:
            return "Conserva solo los tiempos de intentos que terminaron en los últimos N días, para que los tiempos viejos dejen de contar. Se excluyen los intentos sin fecha.";
        case Label.CustomComparisonsBlockFinishedUnder:
            return "de runs que terminaron en menos de {totalSeconds}";
        case Label.CustomComparisonsBlockFinishedUnderTip:
            return "Conserva solo los tiempos de runs que terminaron más rápido que esto, para que solo cuenten tus buenas runs.";
        case Label.CustomComparisonsBlockReachedSegment:
            return "de runs que llegaron a {segment}";
        case Label.CustomComparisonsBlockReachedSegmentTip:
            return "Conserva solo los tiempos de intentos que llegaron al menos hasta este segmento. Como «solo de runs completadas», pero para juegos en los que la mayoría de las runs se reinician pronto. Si este segmento no está en tus splits, verás un aviso y no se conserva ningún tiempo.";
        case Label.CustomComparisonsBlockTrimOutliers:
            return "quitar el {percent} % más rápido y más lento de";
        case Label.CustomComparisonsBlockTrimOutliersTip:
            return "Elimina las casualidades antes de promediar: descarta esa parte de los tiempos más rápidos y más lentos de cada segmento. Con pocos tiempos no se descarta nada.";
        case Label.CustomComparisonsBlockAtLeast:
            return "solo si hay al menos {count} tiempos en";
        case Label.CustomComparisonsBlockAtLeastTip:
            return "Los segmentos con menos tiempos quedan vacíos, para que puedas rellenarlos con «si está vacío, usar» en lugar de fiarte de muy pocos datos.";
        case Label.CustomComparisonsBlockAggregate:
            return "{kind} de";
        case Label.CustomComparisonsBlockAggregateTip:
            return "Convierte la lista de tiempos de cada segmento en un solo tiempo. Un segmento sin tiempos queda vacío.";
        case Label.CustomComparisonsAggregateMedian:
            return "mediana";
        case Label.CustomComparisonsAggregateAverage:
            return "promedio";
        case Label.CustomComparisonsAggregateMin:
            return "mejor (mín.)";
        case Label.CustomComparisonsAggregateMax:
            return "peor (máx.)";
        case Label.CustomComparisonsBlockPercentile:
            return "percentil {percent} de";
        case Label.CustomComparisonsBlockPercentileTip:
            return "0 es tu tiempo más rápido, 100 el más lento, 50 la mediana. 70 significa: superas este tiempo alrededor del 70 % de las veces.";
        case Label.CustomComparisonsBlockWeightedAverage:
            return "promedio ponderado por recientes de";
        case Label.CustomComparisonsBlockWeightedAverageFooter:
            return "el peso se reduce a la mitad cada {halfLife} tiempos más antiguos";
        case Label.CustomComparisonsBlockWeightedAverageTip:
            return "Un promedio en el que los tiempos recientes cuentan más. El tiempo más nuevo cuenta entero, uno N tiempos más antiguo cuenta la mitad, 2N tiempos más antiguo un cuarto, y así sucesivamente.";
        case Label.CustomComparisonsBlockAddTime:
            return "sumar {seconds} s por segmento a";
        case Label.CustomComparisonsBlockAddTimeTip:
            return "Suma (o, si es negativo, resta) tiempo a cada segmento. Nunca baja de cero.";
        case Label.CustomComparisonsBlockScale:
            return "{percent} % de";
        case Label.CustomComparisonsBlockScaleTip:
            return "Escala cada segmento. 103 % es un 3 % más lento, 97 % es un 3 % más rápido.";
        case Label.CustomComparisonsBlockRound:
            return "redondear a {step}";
        case Label.CustomComparisonsBlockRoundTip:
            return "Redondea cada segmento a los 0,1 s más cercanos (o 1 s, 0,01 s), para que los tiempos de split también queden limpios.";
        case Label.CustomComparisonsRoundStep:
            return "{0} s";
        case Label.CustomComparisonsBlockClamp:
            return "mantener";
        case Label.CustomComparisonsBlockClampTip:
            return "Mantiene cada segmento entre dos límites, por ejemplo nunca más rápido que tus golds y nunca más lento que tu PB. Si los límites se cruzan, gana «nunca más rápido que».";
        case Label.CustomComparisonsSlotNeverFaster:
            return "nunca más rápido que";
        case Label.CustomComparisonsSlotNeverSlower:
            return "nunca más lento que";
        case Label.CustomComparisonsBlockStretchToTotal:
            return "estirar para terminar en {totalSeconds}";
        case Label.CustomComparisonsBlockStretchToTotalTip:
            return "Escala todos los segmentos por igual para que la run completa sume el tiempo objetivo. Si algún segmento está vacío, el resultado está vacío: rellena primero los huecos con «si está vacío, usar».";
        case Label.CustomComparisonsBlockBlend:
            return "{percent} % del camino desde";
        case Label.CustomComparisonsBlockBlendTip:
            return "Mezcla dos reglas por segmento. 0 % es todo la primera, 100 % todo la segunda, 75 % es tres cuartos del camino.";
        case Label.CustomComparisonsSlotTo:
            return "hasta";
        case Label.CustomComparisonsBlockPick:
            return "el más {kind} de";
        case Label.CustomComparisonsBlockPickTip:
            return "Para cada segmento, la más lenta (o más rápida) de las dos reglas. Si una no tiene tiempo para un segmento, se usa la otra.";
        case Label.CustomComparisonsPickSlower:
            return "lento";
        case Label.CustomComparisonsPickFaster:
            return "rápido";
        case Label.CustomComparisonsSlotAnd:
            return "y";
        case Label.CustomComparisonsBlockFallback:
            return "usar";
        case Label.CustomComparisonsBlockFallbackTip:
            return "Rellena solo los segmentos que la primera regla deja vacíos, por ejemplo porque todavía no hay suficientes runs.";
        case Label.CustomComparisonsSlotIfEmpty:
            return "si está vacío, usar";
        case Label.CustomComparisonsBlockSegmentRange:
            return "para los segmentos … usar … si no …";
        case Label.CustomComparisonsBlockSegmentRangeTip:
            return "Usa una regla para un rango de segmentos y otra para el resto. Agrega más rangos para más reglas: gana el primer rango que coincida. Si un rango va más allá del final de tus splits, verás un aviso.";
        case Label.CustomComparisonsBlockSegmentRangeHeader:
            return "reglas distintas para segmentos distintos (gana el primer rango que coincida)";
        case Label.CustomComparisonsRangeCase:
            return "para los segmentos {from} a {to} usar";
        case Label.CustomComparisonsSlotOtherwise:
            return "si no";
        case Label.CustomComparisonsPreview:
            return "Vista previa";
        case Label.CustomComparisonsPreviewingBlock:
            return "Vista previa de un bloque, no de la comparación";
        case Label.CustomComparisonsShowWholeComparison:
            return "Mostrar la comparación completa";
        case Label.CustomComparisonsSegment:
            return "Segmento";
        case Label.CustomComparisonsDifferenceFrom:
            return "Diferencia con";
        case Label.CustomComparisonsFasterThanGold:
            return "Más rápido que tu mejor tiempo en este segmento (tu gold)";
        case Label.CustomComparisonsFasterThanGoldWarning:
            return "{0} segmentos son más rápidos que tus golds. Está permitido, pero puede que este ritmo no sea realista.";
        case Label.CustomComparisonsFasterThanGoldWarningOne:
            return "1 segmento es más rápido que tu gold. Está permitido, pero puede que este ritmo no sea realista.";
        case Label.CustomComparisonsFinishLine:
            return "Termina en {0}, {1} respecto a {2}.";
        case Label.CustomComparisonsFinishVsSumOfBest:
            return "Tu suma de mejores segmentos es {0}.";
        case Label.CustomComparisonsNoProblems:
            return "Sin problemas.";
        case Label.CustomComparisonsNoTimesLeft:
            return "Ningún segmento tiene tiempo. Haz clic en una fila para ver por qué, o agrega «usar … si está vacío, usar» con un respaldo como tu PB.";
        case Label.CustomComparisonsOriginTitle:
            return "De dónde viene este tiempo";
        case Label.CustomComparisonsOriginEmpty:
            return "Este segmento no tiene tiempo, así que todos los splits siguientes también están vacíos.";
        case Label.CustomComparisonsOriginFillingGap:
            return "rellenando un hueco";
        case Label.CustomComparisonsOriginPicked:
            return "el más {0} de los dos";
        case Label.CustomComparisonsOriginLowLimit:
            return "sujeto al límite «nunca más rápido que»";
        case Label.CustomComparisonsOriginHighLimit:
            return "sujeto al límite «nunca más lento que»";
        case Label.CustomComparisonsClickRowHint:
            return "Haz clic en una fila para ver de dónde viene su tiempo.";
        case Label.CustomComparisonsDescYourGolds:
            return "tus golds";
        case Label.CustomComparisonsDescYourPb:
            return "tu PB";
        case Label.CustomComparisonsDescComparison:
            return "«{0}»";
        case Label.CustomComparisonsDescAttempt:
            return "el intento n.º {0}";
        case Label.CustomComparisonsDescBestRecentRun:
            return "tu mejor run de los últimos {0} días";
        case Label.CustomComparisonsDescWeightedAverage:
            return "el promedio ponderado por recientes de {0}";
        case Label.CustomComparisonsDescClamp:
            return "{0}, entre {1} y {2}";
        case Label.CustomComparisonsDescRound:
            return "{0}, redondeado a {1}";
        case Label.CustomComparisonsDescMedian:
            return "la mediana de {0}";
        case Label.CustomComparisonsDescAverage:
            return "el promedio de {0}";
        case Label.CustomComparisonsDescMin:
            return "el mejor de {0}";
        case Label.CustomComparisonsDescMax:
            return "el peor de {0}";
        case Label.CustomComparisonsDescPercentile:
            return "el percentil {0} de {1}";
        case Label.CustomComparisonsDescAddTime:
            return "{0} + {1}";
        case Label.CustomComparisonsDescRemoveTime:
            return "{0} − {1}";
        case Label.CustomComparisonsDescScale:
            return "{1} × {0} %";
        case Label.CustomComparisonsDescStretch:
            return "{0}, estirado para terminar en {1}";
        case Label.CustomComparisonsDescBlend:
            return "{0} % del camino desde {1} hasta {2}";
        case Label.CustomComparisonsDescSlower:
            return "el más lento entre {0} y {1}";
        case Label.CustomComparisonsDescFaster:
            return "el más rápido entre {0} y {1}";
        case Label.CustomComparisonsDescFallback:
            return "{0} (o {1} donde esté vacío)";
        case Label.CustomComparisonsDescRangeArm:
            return "{0} para {1}";
        case Label.CustomComparisonsDescRangeOtherwise:
            return "{0}; si no, {1}";
        case Label.CustomComparisonsDescSomething:
            return "algo";
        case Label.CustomComparisonsDescAllTimes:
            return "todos tus tiempos";
        case Label.CustomComparisonsDescLastN:
            return "tus últimos {0} tiempos";
        case Label.CustomComparisonsQualCompleted:
            return "de runs completadas";
        case Label.CustomComparisonsQualRecentDays:
            return "de los últimos {0} días";
        case Label.CustomComparisonsQualUnder:
            return "de runs de menos de {0}";
        case Label.CustomComparisonsQualTrim:
            return "sin el {0} % más rápido y más lento";
        case Label.CustomComparisonsQualAtLeast:
            return "cuando hay al menos {0}";
        case Label.CustomComparisonsQualReached:
            return "de runs que llegaron a {0}";
        case Label.CustomComparisonsSumGapsFilled:
            return "{0} Huecos rellenados con {1}.";
        case Label.CustomComparisonsSumRangeArm:
            return "{0}: {1}";
        case Label.CustomComparisonsSumOtherSegments:
            return "Otros segmentos: {0}";
        case Label.CustomComparisonsSegmentNumber:
            return "segmento {0}";
        case Label.CustomComparisonsSegmentSpan:
            return "{0} a {1}";
        case Label.CustomComparisonsSeconds:
            return "{0} s";
        case Label.CustomComparisonsListAnd:
            return "{0} y {1}";
        case Label.CustomComparisonsWarnSegment:
            return "Usa el segmento {0}, pero tus splits tienen {1}";
        case Label.CustomComparisonsWarnSegments:
            return "Usa los segmentos {0}, pero tus splits tienen {1}";
        case Label.CustomComparisonsSentence:
            return "{0}.";
    }
}
