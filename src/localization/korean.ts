import { Label } from ".";

export function resolveKorean(text: Label): string {
    switch (text) {
        case Label.Ok:
            return "확인";
        case Label.Cancel:
            return "취소";
        case Label.Settings:
            return "설정";
        case Label.Language:
            return "언어";
        case Label.LanguageDescription:
            return "애플리케이션에서 사용되는 언어를 설정합니다.";
        case Label.LanguageAuto:
            return "자동";
        case Label.Theme:
            return "테마";
        case Label.ThemeDescription:
            return "시스템 테마를 따르거나 라이트 또는 다크 모드를 강제할지 결정합니다.";
        case Label.ThemeLightMode:
            return "라이트 모드";
        case Label.ThemeDarkMode:
            return "다크 모드";
        case Label.HotkeysHeading:
            return "단축키";
        case Label.GeneralHeading:
            return "일반";
        case Label.NetworkHeading:
            return "네트워크";
        case Label.FrameRate:
            return "프레임률";
        case Label.FrameRateDescription:
            return "타이머를 표시할 프레임률을 결정합니다. “배터리 고려”는 기기 유형과 충전 상태를 판단해 적절한 프레임률을 선택합니다. “화면에 맞춤”은 타이머를 화면의 새로 고침 빈도에 맞춥니다.";
        case Label.FrameRateBatteryAware:
            return "배터리 고려";
        case Label.FrameRateMatchScreen:
            return "화면에 맞춤";
        case Label.SaveOnReset:
            return "리셋 시 저장";
        case Label.SaveOnResetDescription:
            return "타이머를 리셋할 때 스플릿을 자동으로 저장할지 여부를 결정합니다.";
        case Label.ShowControlButtons:
            return "제어 버튼 표시";
        case Label.ShowControlButtonsDescription:
            return "타이머 아래에 제어 버튼을 표시할지 여부를 결정합니다. 비활성화하면 단축키를 사용해야 합니다.";
        case Label.ShowManualGameTimeInput:
            return "수동 게임 시간 입력 표시";
        case Label.ShowManualGameTimeInputDescription:
            return "타이머 아래에 게임 시간을 수동으로 입력할 수 있는 텍스트 상자를 표시합니다. 텍스트 상자에서 Enter 키를 눌러 타이머를 시작하고 스플릿을 진행합니다. “Game Time”과 비교하도록 하세요.";
        case Label.ManualGameTimeMode:
            return "수동 게임 시간 모드";
        case Label.ManualGameTimeModeDescription:
            return "수동 게임 시간을 세그먼트 시간으로 입력할지 스플릿 시간으로 입력할지 결정합니다.";
        case Label.ManualGameTimeModeSegmentTimes:
            return "세그먼트 시간";
        case Label.ManualGameTimeModeSplitTimes:
            return "스플릿 시간";
        case Label.AlwaysOnTop:
            return "항상 위";
        case Label.AlwaysOnTopDescription:
            return "창을 항상 다른 창 위에 표시합니다.";
        case Label.SpeedrunComIntegration:
            return "Speedrun.com 통합";
        case Label.SpeedrunComIntegrationDescription:
            return "speedrun.com에서 게임, 카테고리, 리더보드 목록을 조회합니다.";
        case Label.ServerConnection:
            return "서버 연결";
        case Label.ServerConnectionDescription:
            return "WebSocket 서버에 연결하여 다양한 명령을 전송함으로써 타이머를 제어할 수 있습니다. 현재 명령은 원래 LiveSplit이 지원하는 명령의 일부입니다.";
        case Label.ServerConnectionExperimental:
            return "이 기능은 실험적이며 프로토콜은 향후 변경될 가능성이 있습니다.";
        case Label.TheRunGgIntegration:
            return "TheRun.gg 통합";
        case Label.TheRunGgIntegrationDescription:
            return "therun.gg와 통합하여 런 실시간 추적과 통계 자동 업로드를 제공합니다. 이 기능을 사용하려면 therun.gg 업로드 키가 필요합니다.";
        case Label.TheRunGgLiveTracking:
            return "실시간 추적";
        case Label.TheRunGgLiveTrackingDescription:
            return "활성화하면 스플릿 동작을 할 때마다 실시간 스플릿 데이터가 therun.gg로 전송되어 웹사이트에서 런을 실시간으로 추적할 수 있습니다.";
        case Label.TheRunGgStatsUploading:
            return "통계 업로드";
        case Label.TheRunGgStatsUploadingDescription:
            return "활성화하면 리셋하거나 런을 완료할 때마다 스플릿 파일이 therun.gg에 업로드되어 런 기록이 웹사이트와 자동으로 동기화됩니다.";
        case Label.HotkeyAlreadyInUse:
            return "해당 단축키는 이미 사용 중입니다.";
        case Label.Start:
            return "시작";
        case Label.Resume:
            return "재개";
        case Label.Pause:
            return "일시정지";
        case Label.UndoSplit:
            return "스플릿 되돌리기";
        case Label.Reset:
            return "리셋";
        case Label.SkipSplit:
            return "스플릿 건너뛰기";
        case Label.ManualGameTimePlaceholder:
            return "수동 게임 시간";
        case Label.LiveSplitLogoAlt:
            return "LiveSplit 로고";
        case Label.LiveSplitOne:
            return "LiveSplit One";
        case Label.Splits:
            return "스플릿";
        case Label.Layout:
            return "레이아웃";
        case Label.CompareAgainst:
            return "비교 기준";
        case Label.RealTime:
            return "실시간";
        case Label.GameTime:
            return "게임 시간";
        case Label.PopOut:
            return "팝아웃";
        case Label.About:
            return "정보";
        case Label.Back:
            return "뒤로";
        case Label.AboutVersionPrefix:
            return "버전:";
        case Label.AboutDescription:
            return "LiveSplit One은 LiveSplit의 멀티플랫폼 버전으로, 스피드러너를 위한 세련되고 높은 사용자 지정이 가능한 타이머입니다.";
        case Label.AboutViewSource:
            return "GitHub에서 소스 코드 보기";
        case Label.AboutRecentChanges:
            return "최근 변경 사항";
        case Label.AboutContributors:
            return "기여자";
        case Label.Loading:
            return "불러오는 중...";
        case Label.Add:
            return "추가";
        case Label.Import:
            return "가져오기";
        case Label.OpenSplits:
            return "스플릿 열기";
        case Label.EditSplits:
            return "스플릿 편집";
        case Label.ExportSplits:
            return "스플릿 내보내기";
        case Label.CopySplits:
            return "스플릿 복사";
        case Label.RemoveSplits:
            return "스플릿 삭제";
        case Label.Untitled:
            return "제목 없음";
        case Label.NoCategory:
            return "—";
        case Label.DiscardChangesTitle:
            return "변경 사항을 버릴까요?";
        case Label.DiscardChangesDescription:
            return "현재 스플릿에 저장되지 않은 변경 사항이 있습니다. 계속 진행하여 변경 사항을 버릴까요?";
        case Label.DeleteSplitsTitle:
            return "스플릿을 삭제할까요?";
        case Label.DeleteSplitsDescription:
            return "스플릿을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.";
        case Label.SaveBestTimesTitle:
            return "최고 기록을 저장할까요?";
        case Label.SaveBestTimesDescription:
            return "일부 최고 기록을 갱신했습니다. 업데이트할까요?";
        case Label.Yes:
            return "예";
        case Label.No:
            return "아니요";
        case Label.DontReset:
            return "리셋 안 함";
        case Label.FailedToExportSplits:
            return "스플릿 내보내기에 실패했습니다.";
        case Label.CantImportEmptySplits:
            return "빈 스플릿은 가져올 수 없습니다.";
        case Label.FailedToReadFile:
            return "파일을 읽지 못했습니다:";
        case Label.FailedToImportSplits:
            return "스플릿 가져오기에 실패했습니다:";
        case Label.CouldNotParseSplits:
            return "스플릿을 파싱할 수 없습니다.";
        case Label.LoadedSplitsInvalid:
            return "불러온 스플릿이 유효하지 않습니다.";
        case Label.NewSegmentName:
            return "시간";
        case Label.EditWhileRunningError:
            return "타이머가 실행 중일 때는 스플릿을 편집할 수 없습니다.";
        case Label.Edit:
            return "편집";
        case Label.Save:
            return "저장";
        case Label.Export:
            return "내보내기";
        case Label.FailedToParseTimeSpan:
            return "TimeSpan을 파싱할 수 없습니다";
        case Label.Default:
            return "기본";
        case Label.Game:
            return "게임";
        case Label.Category:
            return "카테고리";
        case Label.StartTimerAt:
            return "타이머 시작 시간";
        case Label.Attempts:
            return "시도 횟수";
        case Label.SplitsEditor:
            return "스플릿 편집기";
        case Label.Variables:
            return "변수";
        case Label.Rules:
            return "규칙";
        case Label.Leaderboard:
            return "리더보드";
        case Label.InsertAbove:
            return "위에 삽입";
        case Label.InsertBelow:
            return "아래에 삽입";
        case Label.RemoveSegment:
            return "세그먼트 삭제";
        case Label.MoveUp:
            return "위로";
        case Label.MoveDown:
            return "아래로";
        case Label.CreateGroup:
            return "그룹 만들기";
        case Label.RemoveGroup:
            return "그룹 해제";
        case Label.AddVariable:
            return "변수 추가";
        case Label.OpenPbPage:
            return "PB 페이지 열기";
        case Label.AssociateRun:
            return "런 연결";
        case Label.Icon:
            return "아이콘";
        case Label.SegmentName:
            return "세그먼트 이름";
        case Label.SplitTime:
            return "스플릿 시간";
        case Label.SegmentTime:
            return "세그먼트 시간";
        case Label.BestSegment:
            return "최고 세그먼트";
        case Label.SpeedrunComVariableTooltip:
            return "게임에 대한 speedrun.com 변수입니다.";
        case Label.Region:
            return "지역";
        case Label.RegionDescription:
            return "플레이 중인 게임의 지역입니다.";
        case Label.Platform:
            return "플랫폼";
        case Label.PlatformDescription:
            return "게임을 플레이하는 플랫폼입니다.";
        case Label.UsesEmulator:
            return "에뮬레이터 사용";
        case Label.UsesEmulatorDescription:
            return "에뮬레이터 사용 여부입니다.";
        case Label.CustomVariableTooltip:
            return "사용자가 지정한 변수입니다. 텍스트 구성 요소로 표시할 수 있습니다.";
        case Label.NoVariables:
            return "이 게임에는 현재 사용자 지정 변수가 없습니다.";
        case Label.NoVariablesWithSpeedrunCom:
            return "이 게임에는 speedrun.com 변수 또는 사용자 지정 변수가 없습니다.";
        case Label.TimedWithoutLoads:
            return "로드 시간을 제외하여 측정됩니다";
        case Label.TimedWithGameTime:
            return "게임 시간으로 측정됩니다";
        case Label.RequireVideoProof:
            return "영상 증명이 필요합니다";
        case Label.RunsOfThisGamePrefix:
            return "이 게임의 런은 ";
        case Label.RunsOfThisGameSuffix:
            return "입니다.";
        case Label.And:
            return "및";
        case Label.SetIcon:
            return "아이콘 설정";
        case Label.SetIconDescription:
            return "이미지 파일을 선택해 게임 아이콘으로 설정합니다. 일부 형식은 지원되지 않을 수 있습니다.";
        case Label.DownloadBoxArt:
            return "박스 아트 다운로드";
        case Label.DownloadBoxArtDescription:
            return "speedrun.com에서 박스 아트를 다운로드하여 게임 아이콘으로 설정합니다.";
        case Label.DownloadIcon:
            return "아이콘 다운로드";
        case Label.DownloadIconDescription:
            return "speedrun.com에서 게임 아이콘을 다운로드합니다.";
        case Label.RemoveIcon:
            return "아이콘 제거";
        case Label.RemoveIconDescription:
            return "게임 아이콘을 제거합니다.";
        case Label.CleaningMenu:
            return "정리…";
        case Label.ClearOnlyHistory:
            return "기록만 지우기";
        case Label.ClearOnlyHistoryDescription:
            return "모든 런의 기록을 지웁니다. PB, 최고 세그먼트, 비교에는 영향이 없습니다.";
        case Label.ClearAllTimes:
            return "모든 시간 지우기";
        case Label.ClearAllTimesDescription:
            return "모든 시간과 기록을 제거하여 스플릿을 초기 상태로 만듭니다.";
        case Label.CleanSumOfBest:
            return "베스트 합계 정리";
        case Label.CleanSumOfBestDescription:
            return "세그먼트 기록의 문제를 제거해 베스트 세그먼트 합계의 정확성을 개선합니다.";
        case Label.ComparisonsMenu:
            return "비교…";
        case Label.AddComparison:
            return "비교 추가";
        case Label.AddComparisonDescription:
            return "시간을 저장할 수 있는 사용자 지정 비교를 추가합니다.";
        case Label.ImportComparison:
            return "비교 가져오기";
        case Label.ImportComparisonDescription:
            return "스플릿 파일의 PB를 비교로 가져옵니다.";
        case Label.GenerateGoalComparison:
            return "목표 비교 생성";
        case Label.GenerateGoalComparisonDescription:
            return "목표 시간에 기반한 비교를 생성합니다.";
        case Label.CopyComparison:
            return "비교 복사";
        case Label.CopyComparisonDescription:
            return "기존 비교를 새 사용자 지정 비교로 복사합니다.";
        case Label.SetSegmentIcon:
            return "아이콘 설정";
        case Label.SetSegmentIconDescription:
            return "이미지 파일을 선택해 세그먼트 아이콘으로 설정합니다.";
        case Label.RemoveSegmentIcon:
            return "아이콘 제거";
        case Label.RemoveSegmentIconDescription:
            return "세그먼트 아이콘을 제거합니다.";
        case Label.Rename:
            return "이름 변경";
        case Label.RenameDescription:
            return "사용자 지정 비교의 새 이름을 선택합니다. 예약되거나 중복된 이름은 사용할 수 없습니다.";
        case Label.CopyAction:
            return "복사";
        case Label.CopyDescription:
            return "사용자 지정 비교의 복사본을 만듭니다.";
        case Label.ACopy:
            return "복사본";
        case Label.Remove:
            return "제거";
        case Label.RemoveDescription:
            return "사용자 지정 비교를 제거합니다.";
        case Label.AnyPercent:
            return "Any%";
        case Label.LowPercent:
            return "Low%";
        case Label.HundredPercent:
            return "100%";
        case Label.AddComparisonPrompt:
            return "추가할 비교의 이름을 입력하세요:";
        case Label.ComparisonAddError:
            return "비교를 추가할 수 없습니다. 중복이거나 예약된 이름일 수 있습니다.";
        case Label.ImportComparisonPrompt:
            return "가져올 비교의 이름을 입력하세요:";
        case Label.GenerateGoalComparisonPrompt:
            return "달성할 시간을 입력하세요:";
        case Label.Generate:
            return "생성";
        case Label.GenerateGoalComparisonError:
            return "목표 비교 생성에 실패했습니다. 유효한 시간을 입력하세요.";
        case Label.CopyComparisonPrompt:
            return "복사할 비교의 이름을 입력하세요:";
        case Label.CopyComparisonError:
            return "비교 복사에 실패했습니다. 비교가 없을 수 있습니다.";
        case Label.NothingToCleanUp:
            return "정리할 항목이 없습니다.";
        case Label.CleanPrompt:
            return "정리할까요?";
        case Label.AssociateRunPrompt:
            return "speedrun.com 런 ID 또는 URL을 입력하세요:";
        case Label.Associate:
            return "연결";
        case Label.InvalidSpeedrunUrl:
            return "speedrun.com ID 또는 URL이 잘못되었습니다.";
        case Label.AssociateRunError:
            return "런을 연결할 수 없습니다. ID가 잘못되었을 수 있습니다.";
        case Label.AddVariablePrompt:
            return "추가할 사용자 지정 변수 이름을 입력하세요:";
        case Label.RenameComparison:
            return "비교 이름 변경";
        case Label.RenameComparisonPrompt:
            return "새 비교 이름을 입력하세요:";
        case Label.ComparisonRenameError:
            return "비교 이름을 변경할 수 없습니다. 중복이거나 예약된 이름일 수 있습니다.";
        case Label.GameNotFound:
            return "게임을 찾을 수 없습니다.";
        case Label.NoBoxArt:
            return "이 게임에는 박스 아트가 없습니다.";
        case Label.DownloadBoxArtError:
            return "박스 아트 다운로드에 실패했습니다.";
        case Label.NoGameIcon:
            return "이 게임에는 아이콘이 없습니다.";
        case Label.DownloadIconError:
            return "아이콘 다운로드에 실패했습니다.";
        case Label.Rank:
            return "순위";
        case Label.Player:
            return "플레이어";
        case Label.Time:
            return "시간";
        case Label.Date:
            return "날짜:";
        case Label.Emulator:
            return "에뮬레이터";
        case Label.EmulatorTag:
            return "에뮬레이터";
        case Label.ObsoleteRuns:
            return "오래된 기록";
        case Label.Shown:
            return "표시";
        case Label.Hidden:
            return "숨김";
        case Label.OpenLeaderboard:
            return "리더보드 열기";
        case Label.Filters:
            return "필터";
        case Label.LayoutEditor:
            return "레이아웃 편집기";
        case Label.Component:
            return "컴포넌트";
        case Label.AddComponent:
            return "컴포넌트 추가";
        case Label.RemoveComponent:
            return "컴포넌트 제거";
        case Label.DuplicateComponent:
            return "컴포넌트 복제";
        case Label.MoveComponentUp:
            return "컴포넌트 위로";
        case Label.MoveComponentDown:
            return "컴포넌트 아래로";
        case Label.ComponentTitle:
            return "제목";
        case Label.ComponentTitleDescription:
            return "게임/카테고리, 아이콘, 시도 횟수, 완주 횟수를 표시합니다.";
        case Label.ComponentGraph:
            return "그래프";
        case Label.ComponentGraphDescription:
            return "전체 스플릿에 걸친 비교 대비 앞/뒤를 표시합니다.";
        case Label.ComponentSplitsDescription:
            return "스플릿 시간의 주요 구성 요소입니다. 표 형식으로 스크롤할 수 있습니다.";
        case Label.ComponentDetailedTimer:
            return "상세 타이머";
        case Label.ComponentDetailedTimerDescription:
            return "전체 시간과 현재 세그먼트 시간을 표시합니다.";
        case Label.ComponentTimer:
            return "타이머";
        case Label.ComponentTimerDescription:
            return "전체 시간을 디지털로 표시하며, 색상은 비교 결과에 따라 결정됩니다.";
        case Label.ComponentCurrentComparison:
            return "현재 비교";
        case Label.ComponentCurrentComparisonDescription:
            return "현재 비교의 이름을 표시합니다.";
        case Label.ComponentCurrentPace:
            return "현재 페이스";
        case Label.ComponentCurrentPaceDescription:
            return "선택된 비교를 기반으로 최종 시간을 예측합니다.";
        case Label.ComponentDelta:
            return "차이";
        case Label.ComponentDeltaDescription:
            return "비교 대비 앞섬/뒤처짐을 표시합니다.";
        case Label.ComponentPbChance:
            return "PB 가능성";
        case Label.ComponentPbChanceDescription:
            return "PB를 갱신할 가능성을 표시합니다.";
        case Label.ComponentPossibleTimeSave:
            return "가능한 시간 절약";
        case Label.ComponentPossibleTimeSaveDescription:
            return "현재 세그먼트에서 절약 가능한 시간을 표시합니다.";
        case Label.ComponentPreviousSegment:
            return "이전 세그먼트";
        case Label.ComponentPreviousSegmentDescription:
            return "이전 세그먼트의 증가/감소와 잠재적 절약을 표시합니다.";
        case Label.ComponentSegmentTime:
            return "세그먼트 시간";
        case Label.ComponentSegmentTimeDescription:
            return "선택된 비교의 세그먼트 시간을 표시합니다.";
        case Label.ComponentSumOfBest:
            return "최고 합계";
        case Label.ComponentSumOfBestDescription:
            return "기록을 기반으로 가장 빠른 완주 시간을 표시합니다.";
        case Label.ComponentText:
            return "텍스트";
        case Label.ComponentTextDescription:
            return "중앙/좌우 텍스트와 사용자 지정 변수를 표시합니다.";
        case Label.ComponentTotalPlaytime:
            return "총 플레이 시간";
        case Label.ComponentTotalPlaytimeDescription:
            return "카테고리의 총 플레이 시간을 표시합니다.";
        case Label.ComponentVariableDescription:
            return "사용자 지정 변수 “{name}”의 값을 표시하는 텍스트를 만듭니다.";
        case Label.ComponentBlankSpace:
            return "빈 공간";
        case Label.ComponentBlankSpaceDescription:
            return "배경만 있는 빈 컴포넌트입니다.";
        case Label.ComponentCarousel:
            return "캐러셀";
        case Label.ComponentCarouselDescription:
            return "하위 컴포넌트를 한 번에 하나씩만 표시하며 순환합니다. 내용이 바뀐 항목을 우선 보여 주고, 그렇지 않으면 일정 간격으로 전환합니다.";
        case Label.ComponentSeparator:
            return "구분선";
        case Label.ComponentSeparatorDescription:
            return "컴포넌트 사이의 구분선을 표시합니다.";
        case Label.Row:
            return "행";
        case Label.RowDescription:
            return "수평으로 배치된 구성 요소의 행으로, 내부 구성 요소의 레이아웃 방향을 변경합니다.";
        case Label.Column:
            return "열";
        case Label.ColumnDescription:
            return "수직으로 배치된 구성 요소의 열로, 내부 구성 요소의 레이아웃 방향을 변경합니다.";
        case Label.AccuracySeconds:
            return "초";
        case Label.AccuracyTenths:
            return "0.1초";
        case Label.AccuracyHundredths:
            return "0.01초";
        case Label.AccuracyMilliseconds:
            return "밀리초";
        case Label.FontStyle:
            return "스타일";
        case Label.FontWeight:
            return "굵기";
        case Label.FontStretch:
            return "늘림";
        case Label.FontStyleNormal:
            return "보통";
        case Label.FontStyleItalic:
            return "이탤릭";
        case Label.AlignmentAutomatic:
            return "자동";
        case Label.AlignmentLeft:
            return "왼쪽";
        case Label.AlignmentCenter:
            return "가운데";
        case Label.GradientTransparent:
            return "투명";
        case Label.GradientPlain:
            return "단색";
        case Label.GradientVertical:
            return "수직";
        case Label.GradientHorizontal:
            return "수평";
        case Label.GradientAlternating:
            return "교대";
        case Label.GradientPlainDelta:
            return "단색 차이";
        case Label.GradientVerticalDelta:
            return "수직 차이";
        case Label.GradientHorizontalDelta:
            return "수평 차이";
        case Label.LayoutBackgroundImage:
            return "이미지";
        case Label.LayoutBackgroundBrightness:
            return "밝기";
        case Label.LayoutBackgroundOpacity:
            return "불투명도";
        case Label.LayoutBackgroundBlur:
            return "흐림";
        case Label.LayoutDirectionVertical:
            return "수직";
        case Label.LayoutDirectionHorizontal:
            return "수평";
        case Label.ColumnKindTime:
            return "시간";
        case Label.ColumnKindVariable:
            return "변수";
        case Label.ColumnStartWithEmpty:
            return "비어 있음";
        case Label.ColumnStartWithComparisonTime:
            return "비교 시간";
        case Label.ColumnStartWithComparisonSegmentTime:
            return "비교 세그먼트 시간";
        case Label.ColumnStartWithPossibleTimeSave:
            return "절약 가능한 시간";
        case Label.IconDisplayModeBothRows:
            return "두 행 모두";
        case Label.IconDisplayModeFirstRow:
            return "첫 번째 행만";
        case Label.SubsplitDisplayModeFlat:
            return "플랫";
        case Label.SubsplitDisplayModeCurrentGroupExpanded:
            return "현재 그룹 펼침";
        case Label.SubsplitDisplayModeAllGroupsExpanded:
            return "모든 그룹 펼침";
        case Label.ColumnUpdateWithDontUpdate:
            return "업데이트 안 함";
        case Label.ColumnUpdateWithSplitTime:
            return "스플릿 시간";
        case Label.ColumnUpdateWithDelta:
            return "앞섬/뒤처짐";
        case Label.ColumnUpdateWithDeltaWithFallback:
            return "앞섬/뒤처짐 (비어 있으면 스플릿 시간)";
        case Label.ColumnUpdateWithSegmentTime:
            return "세그먼트 시간";
        case Label.ColumnUpdateWithSegmentDelta:
            return "절약/손실 시간";
        case Label.ColumnUpdateWithSegmentDeltaWithFallback:
            return "절약/손실 시간 (비어 있으면 세그먼트 시간)";
        case Label.ColumnUpdateTriggerOnStartingSegment:
            return "세그먼트 시작 시";
        case Label.ColumnUpdateTriggerContextual:
            return "상황에 따라";
        case Label.ColumnUpdateTriggerOnEndingSegment:
            return "세그먼트 종료 시";
        case Label.ComparisonCurrentComparison:
            return "현재 비교";
        case Label.CustomVariableNoneAvailable:
            return "사용 가능한 변수가 없습니다";
        case Label.CustomVariableNoneAvailableTooltip:
            return "스플릿 편집의 변수 탭에서 사용자 지정 변수를 정의할 수 있습니다. 추가 사용자 지정 변수는 자동 분할기가 자동으로 제공할 수 있습니다.";
        case Label.HotkeyButtonTooltip:
            return "클릭하여 단축키를 기록합니다. 게임패드 버튼도 사용할 수 있습니다. 전역 단축키는 현재 불가능합니다. 게임패드 버튼은 전역으로 동작합니다.";
        case Label.ServerConnect:
            return "연결";
        case Label.ServerDisconnect:
            return "연결 해제";
        case Label.ServerConnecting:
            return "연결 중...";
        case Label.ServerDisconnecting:
            return "연결 해제 중...";
        case Label.ConnectToServerTitle:
            return "서버에 연결";
        case Label.ConnectToServerDescription:
            return "WebSocket URL을 지정하세요:";
        case Label.Connect:
            return "연결";
        case Label.UpdateAvailable:
            return "새 버전의 LiveSplit One을 사용할 수 있습니다! 여기를 클릭하여 다시 로드하세요.";
        case Label.UnsavedChangesBeforeUnload:
            return "저장되지 않은 변경 사항이 있습니다. LiveSplit One을 정말로 닫으시겠습니까?";
        case Label.OpenSidebarAriaLabel:
            return "사이드바 열기";
        case Label.FailedToSaveLayout:
            return "레이아웃을 저장하지 못했습니다.";
        case Label.FailedToSaveHotkeys:
            return "단축키 설정을 저장하지 못했습니다.";
        case Label.FailedToSaveGeneralSettings:
            return "일반 설정을 저장하지 못했습니다.";
        case Label.FailedToSaveSplits:
            return "스플릿을 저장하지 못했습니다.";
        case Label.LayoutCouldNotBeLoaded:
            return "레이아웃을 불러올 수 없습니다. 유효한 LiveSplit 또는 LiveSplit One 레이아웃이 아닐 수 있습니다.";
        case Label.EmptySplitsNotSupported:
            return "빈 스플릿은 지원되지 않습니다.";
        case Label.BugEncountered:
            return "버그가 발생했습니다:";
        case Label.PleaseReportIssueStart:
            return "이 문제를 ";
        case Label.ReportHere:
            return "여기";
        case Label.PleaseReportIssueEnd:
            return "로 신고해 주세요.";
        case Label.BugReportInstructions:
            return "이 문제를 해결하는 데 도움이 되도록 재현 절차를 포함하고 문제가 발생했을 때 사용하던 스플릿과 레이아웃을 첨부해 주세요.";
        case Label.LoadFailedPrivateBrowsing:
            return "LiveSplit One을 불러올 수 없습니다.\n시크릿/프라이빗 브라우징 모드일 수 있습니다.\n브라우저의 프라이빗 모드 제한으로 인해 LiveSplit One은 스플릿, 레이아웃 또는 다른 설정을 저장할 수 없습니다.\n이 제한은 향후 해제될 수 있습니다.\n지금 LiveSplit One을 사용하려면 설정에서 프라이빗 브라우징을 비활성화해 주세요.";
        case Label.LoadFailedOutdatedBrowser:
            return "LiveSplit One을 불러올 수 없습니다.\n브라우저가 최신 버전이 아닐 수 있습니다.\n브라우저 또는 iOS 버전을 업데이트한 후 다시 시도해 주세요.\n또 다른 이유로는 광고 차단기 같은 브라우저 확장 프로그램이 중요한 스크립트에 대한 접근을 차단하고 있을 수 있습니다.";
        case Label.CustomComparisonsSidebarEditingHint:
            return "먼저 편집 중인 비교를 저장하거나 취소하세요.";
        case Label.CustomComparisonsComparisonMenu:
            return "추가 작업";
        case Label.CustomComparisonsNameRequired:
            return "비교에 이름을 붙이세요.";
        case Label.CustomComparisonsSearchBlocks:
            return "블록 검색";
        case Label.CustomComparisonsNoBlocksFound:
            return "일치하는 블록이 없습니다. 다른 단어로 시도해 보세요.";
        case Label.CustomComparisonsAboutBlock:
            return "이 블록은 무엇을 하나요?";
        case Label.CustomComparisonsBlocks:
            return "블록";
        case Label.CustomComparisonsRailHint:
            return "블록을 빈 칸으로 끌어다 놓거나, 다른 블록 위에 놓아 교체하세요. 블록을 클릭하면 맞는 첫 번째 빈 칸에 들어갑니다.";
        case Label.CustomComparisonsDragBlock:
            return "끌어서 이 블록 이동";
        case Label.CustomComparisonsOpenEditorHint:
            return "사용자 지정 비교는 모든 스플릿에서 작동하며 다른 비교와 함께 표시됩니다.";
        case Label.CustomComparisons:
            return "사용자 지정 비교";
        case Label.CustomComparisonsExportAll:
            return "모두 내보내기…";
        case Label.CustomComparisonsExportAllFileName:
            return "사용자 지정 비교";
        case Label.CustomComparisonsPluginUnavailable:
            return "사용자 지정 비교를 불러오지 못해 지금은 비교로 표시되지 않습니다: {0}";
        case Label.CustomComparisonsListHeading:
            return "비교";
        case Label.CustomComparisonsNoComparisons:
            return "아직 사용자 지정 비교가 없습니다. 새로 만들기를 클릭해 첫 번째 비교를 만드세요.";
        case Label.CustomComparisonsNew:
            return "새로 만들기…";
        case Label.CustomComparisonsEdit:
            return "편집…";
        case Label.CustomComparisonsRename:
            return "이름 변경…";
        case Label.CustomComparisonsDuplicate:
            return "복제";
        case Label.CustomComparisonsImport:
            return "가져오기…";
        case Label.CustomComparisonsExport:
            return "내보내기…";
        case Label.CustomComparisonsCopyAsText:
            return "텍스트로 복사";
        case Label.CustomComparisonsPaste:
            return "붙여넣기…";
        case Label.CustomComparisonsUsedBy:
            return "다른 비교 {0}개에서 사용 중";
        case Label.CustomComparisonsUsedByOne:
            return "다른 비교 1개에서 사용 중";
        case Label.CustomComparisonsUnreadable:
            return "읽을 수 없음";
        case Label.CustomComparisonsSaveReminder:
            return "변경 사항은 이 기기에 바로 저장됩니다. 다른 기기로 옮기려면 모두 내보내기를 사용하세요.";
        case Label.CustomComparisonsCopiedToClipboard:
            return "복사했습니다. 채팅이나 포럼 글에 붙여넣을 수 있습니다.";
        case Label.CustomComparisonsCouldNotCopy:
            return "클립보드에 복사하지 못했습니다.";
        case Label.CustomComparisonsCouldNotReadClipboard:
            return "클립보드를 읽지 못했습니다. 대신 여기에 텍스트를 붙여넣으세요:";
        case Label.CustomComparisonsErrorTitle:
            return "작업에 실패했습니다";
        case Label.CustomComparisonsRenameTitle:
            return "비교 이름 변경";
        case Label.CustomComparisonsRenameDescription:
            return "이 비교를 사용하는 비교도 새 이름으로 업데이트됩니다.";
        case Label.CustomComparisonsNameTakenTitle:
            return "다른 이름 선택";
        case Label.CustomComparisonsNameTakenDescription:
            return "{0} 다른 이름을 입력하세요:";
        case Label.CustomComparisonsRemoveTitle:
            return "비교 제거";
        case Label.CustomComparisonsRemoveDescription:
            return '"{0}"을(를) 제거할까요?';
        case Label.CustomComparisonsRemoveUsedDescription:
            return '"{0}"을(를) 제거할까요? 다른 비교 {1}개가 이를 사용하며, 없으면 작동하지 않습니다.';
        case Label.CustomComparisonsRemoveUsedOneDescription:
            return '"{0}"을(를) 제거할까요? 다른 비교 1개가 이를 사용하며, 없으면 작동하지 않습니다.';
        case Label.CustomComparisonsPasteTitle:
            return "비교 붙여넣기";
        case Label.CustomComparisonsPasteDescription:
            return "다른 사람이 공유한 비교의 텍스트를 붙여넣으세요:";
        case Label.CustomComparisonsCopySuffix:
            return "{0} (복사본)";
        case Label.CustomComparisonsTemplatesTitle:
            return "새 비교";
        case Label.CustomComparisonsTemplatesDescription:
            return "시작점을 고르세요. 각각 그대로 쓰거나 바꿀 수 있는 완성된 비교입니다.";
        case Label.CustomComparisonsTemplateGoalPace:
            return "목표 페이스";
        case Label.CustomComparisonsTemplateGoalPaceDescription:
            return "평소의 런을 목표 시간에 정확히 끝나도록 늘인 것입니다.";
        case Label.CustomComparisonsTemplateRealisticPace:
            return "현실적인 페이스";
        case Label.CustomComparisonsTemplateRealisticPaceDescription:
            return "최근 30일의 70번째 백분위수: 약 70 %의 확률로 이기는 시간입니다.";
        case Label.CustomComparisonsTemplateRecentForm:
            return "최근 컨디션";
        case Label.CustomComparisonsTemplateRecentFormDescription:
            return "최근 완주한 10번의 런의 중앙값으로, 가장 좋은 우연과 가장 나쁜 우연은 제외합니다.";
        case Label.CustomComparisonsTemplateSafePace:
            return "안전한 페이스";
        case Label.CustomComparisonsTemplateSafePaceDescription:
            return "최고 세그먼트 + 2초와 중앙값 중 느린 쪽이라 비현실적으로 빨라지지 않습니다.";
        case Label.CustomComparisonsTemplateBlank:
            return "빈 비교";
        case Label.CustomComparisonsTemplateBlankDescription:
            return "처음부터 시작합니다.";
        case Label.CustomComparisonsNewComparisonName:
            return "내 비교";
        case Label.CustomComparisonsEditorTitle:
            return "사용자 지정 비교";
        case Label.CustomComparisonsName:
            return "이름";
        case Label.CustomComparisonsUndo:
            return "실행 취소";
        case Label.CustomComparisonsRedo:
            return "다시 실행";
        case Label.CustomComparisonsChooseBlock:
            return "블록 선택…";
        case Label.CustomComparisonsReplaceBlock:
            return "다음으로 교체…";
        case Label.CustomComparisonsWrapBlock:
            return "안에 넣기…";
        case Label.CustomComparisonsUnwrapBlock:
            return "제거하고 안의 내용은 유지";
        case Label.CustomComparisonsPreviewBlock:
            return "이 블록 미리 보기";
        case Label.CustomComparisonsBlockMenu:
            return "블록 작업";
        case Label.CustomComparisonsFillEmptySlots:
            return "미리 보기를 보려면 빈 칸을 채우세요. 모든 칸에 블록이 필요합니다.";
        case Label.CustomComparisonsDiscardChangesDescription:
            return "이 비교에 저장되지 않은 변경 사항이 있습니다.";
        case Label.CustomComparisonsDiscard:
            return "버리기";
        case Label.CustomComparisonsKeepEditing:
            return "계속 편집";
        case Label.CustomComparisonsInvalidTime:
            return "20:00 또는 1:05:30처럼 시간을 입력하세요.";
        case Label.CustomComparisonsNotFound:
            return "{0} (찾을 수 없음)";
        case Label.CustomComparisonsNotInSplits:
            return "{0}. (스플릿에 없음)";
        case Label.CustomComparisonsSegmentOption:
            return "{0}. {1}";
        case Label.CustomComparisonsAddRange:
            return "범위 추가";
        case Label.CustomComparisonsRemoveRange:
            return "이 범위 제거";
        case Label.CustomComparisonsRangeBackwards:
            return "세그먼트 {0}~{1}이(가) 거꾸로 되어 있습니다. 숫자를 바꾸세요.";
        case Label.CustomComparisonsCategorySources:
            return "소스";
        case Label.CustomComparisonsCategoryFilters:
            return "필터";
        case Label.CustomComparisonsCategoryAggregates:
            return "집계";
        case Label.CustomComparisonsCategoryMath:
            return "계산";
        case Label.CustomComparisonsCategoryControl:
            return "제어";
        case Label.CustomComparisonsKindSamples:
            return "세그먼트별 시간 목록";
        case Label.CustomComparisonsKindTimes:
            return "세그먼트별 시간 하나";
        case Label.CustomComparisonsBlockResult:
            return "이 비교는";
        case Label.CustomComparisonsBlockResultTip:
            return "완성된 비교입니다. 이를 만드는 블록을 여기에 넣으세요.";
        case Label.CustomComparisonsBlockSegmentHistory:
            return "각 세그먼트의 내 모든 시간";
        case Label.CustomComparisonsBlockSegmentHistoryTip:
            return "각 세그먼트에 기록한 모든 시간입니다. 건너뛴 세그먼트와 건너뛴 직후의 합쳐진 세그먼트는 제외됩니다.";
        case Label.CustomComparisonsBlockComparison:
            return "비교 {name}";
        case Label.CustomComparisonsBlockComparisonTip:
            return "기존 비교를 세그먼트별로 사용합니다. 기본 제공 비교는 꺼져 있어도 작동합니다.";
        case Label.CustomComparisonsBlockAttempt:
            return "시도 #{number}";
        case Label.CustomComparisonsBlockAttemptTip:
            return "시도 기록의 번호로 지정한 지난 시도의 세그먼트입니다. 그 런이 스플릿을 건너뛰거나 리셋한 곳은 비어 있습니다.";
        case Label.CustomComparisonsBlockBestRecentRun:
            return "최근 {days}일 동안의 내 최고 런";
        case Label.CustomComparisonsBlockBestRecentRunTip:
            return '최근 N일 동안 완주한 가장 빠른 런의 세그먼트입니다. 플레이할수록 바뀌는 "최근 PB"입니다. 그 기간에 완주한 런이 없으면 비어 있습니다.';
        case Label.CustomComparisonsBlockLastN:
            return "최근 {count}개의 시간:";
        case Label.CustomComparisonsBlockLastNTip:
            return "각 세그먼트의 가장 최근 시간을 유지합니다. 시도 횟수가 아니라 그 세그먼트를 완료한 횟수를 셉니다.";
        case Label.CustomComparisonsBlockCompletedRunsOnly:
            return "완주한 런만";
        case Label.CustomComparisonsBlockCompletedRunsOnlyTip:
            return "런 전체를 완주한 시도의 시간만 유지합니다.";
        case Label.CustomComparisonsBlockRecentDays:
            return "최근 {days}일";
        case Label.CustomComparisonsBlockRecentDaysTip:
            return "최근 N일 안에 끝난 시도의 시간만 유지해 오래된 시간이 더 이상 반영되지 않게 합니다. 날짜가 없는 시도는 제외됩니다.";
        case Label.CustomComparisonsBlockFinishedUnder:
            return "{totalSeconds} 안에 완주한 런";
        case Label.CustomComparisonsBlockFinishedUnderTip:
            return "이보다 빨리 완주한 런의 시간만 유지해 좋은 런만 반영되게 합니다.";
        case Label.CustomComparisonsBlockReachedSegment:
            return "{segment}까지 도달한 런";
        case Label.CustomComparisonsBlockReachedSegmentTip:
            return '적어도 이 세그먼트까지 도달한 시도의 시간만 유지합니다. "완주한 런만"과 비슷하지만 대부분의 런이 일찍 리셋되는 게임용입니다. 이 세그먼트가 스플릿에 없으면 경고가 표시되고 남는 시간이 없습니다.';
        case Label.CustomComparisonsBlockTrimOutliers:
            return "가장 빠르고 느린 {percent} % 제외:";
        case Label.CustomComparisonsBlockTrimOutliersTip:
            return "평균을 내기 전에 우연을 제거합니다. 각 세그먼트의 가장 빠른 시간과 가장 느린 시간을 이 비율만큼 버립니다. 시간이 적으면 아무것도 버리지 않습니다.";
        case Label.CustomComparisonsBlockAtLeast:
            return "시간이 {count}개 이상일 때만:";
        case Label.CustomComparisonsBlockAtLeastTip:
            return '시간이 적은 세그먼트는 비게 되므로, 너무 적은 데이터를 믿는 대신 "비어 있으면 사용"으로 채울 수 있습니다.';
        case Label.CustomComparisonsBlockAggregate:
            return "{kind}:";
        case Label.CustomComparisonsBlockAggregateTip:
            return "각 세그먼트의 시간 목록을 하나의 시간으로 만듭니다. 시간이 없는 세그먼트는 비어 있습니다.";
        case Label.CustomComparisonsAggregateMedian:
            return "중앙값";
        case Label.CustomComparisonsAggregateAverage:
            return "평균";
        case Label.CustomComparisonsAggregateMin:
            return "최고 (최소)";
        case Label.CustomComparisonsAggregateMax:
            return "최저 (최대)";
        case Label.CustomComparisonsBlockPercentile:
            return "{percent}번째 백분위수:";
        case Label.CustomComparisonsBlockPercentileTip:
            return "0은 가장 빠른 시간, 100은 가장 느린 시간, 50은 중앙값입니다. 70은 약 70 %의 확률로 이 시간을 이긴다는 뜻입니다.";
        case Label.CustomComparisonsBlockWeightedAverage:
            return "최근 가중 평균:";
        case Label.CustomComparisonsBlockWeightedAverageFooter:
            return "{halfLife}개 더 오래될 때마다 가중치가 절반으로";
        case Label.CustomComparisonsBlockWeightedAverageTip:
            return "최근 시간일수록 더 크게 반영되는 평균입니다. 가장 최근 시간은 온전히, N개 더 오래된 시간은 절반, 2N개 더 오래된 시간은 4분의 1로 반영되는 식입니다.";
        case Label.CustomComparisonsBlockAddTime:
            return "세그먼트마다 {seconds}초 더하기:";
        case Label.CustomComparisonsBlockAddTimeTip:
            return "모든 세그먼트에 시간을 더합니다(음수이면 뺍니다). 0 아래로 내려가지 않습니다.";
        case Label.CustomComparisonsBlockScale:
            return "{percent} %:";
        case Label.CustomComparisonsBlockScaleTip:
            return "모든 세그먼트의 크기를 조절합니다. 103 %는 3 % 느리게, 97 %는 3 % 빠르게 합니다.";
        case Label.CustomComparisonsBlockRound:
            return "{step} 단위로 반올림";
        case Label.CustomComparisonsBlockRoundTip:
            return "모든 세그먼트를 가장 가까운 0.1초(또는 1초, 0.01초)로 반올림해 스플릿 시간도 깔끔하게 만듭니다.";
        case Label.CustomComparisonsRoundStep:
            return "{0}초";
        case Label.CustomComparisonsBlockClamp:
            return "범위 유지";
        case Label.CustomComparisonsBlockClampTip:
            return '각 세그먼트를 두 한계 사이로 유지합니다. 예를 들어 최고 세그먼트보다 빠르지 않고 PB보다 느리지 않게 합니다. 한계가 서로 엇갈리면 "이보다 빠르지 않게"가 우선합니다.';
        case Label.CustomComparisonsSlotNeverFaster:
            return "이보다 빠르지 않게";
        case Label.CustomComparisonsSlotNeverSlower:
            return "이보다 느리지 않게";
        case Label.CustomComparisonsBlockStretchToTotal:
            return "{totalSeconds}에 완주하도록 늘이기";
        case Label.CustomComparisonsBlockStretchToTotalTip:
            return '모든 세그먼트를 같은 비율로 조절해 런 전체의 합이 목표 시간이 되게 합니다. 빈 세그먼트가 있으면 결과도 비어 있습니다. 먼저 "비어 있으면 사용"으로 빈 곳을 채우세요.';
        case Label.CustomComparisonsBlockBlend:
            return "{percent} % 지점:";
        case Label.CustomComparisonsBlockBlendTip:
            return "세그먼트마다 두 규칙을 섞습니다. 0 %는 전부 첫 번째, 100 %는 전부 두 번째, 75 %는 4분의 3 지점입니다.";
        case Label.CustomComparisonsSlotTo:
            return "에서";
        case Label.CustomComparisonsBlockPick:
            return "더 {kind} 쪽:";
        case Label.CustomComparisonsBlockPickTip:
            return "세그먼트마다 두 규칙 중 더 느린(또는 빠른) 쪽을 씁니다. 한쪽에 그 세그먼트의 시간이 없으면 다른 쪽을 씁니다.";
        case Label.CustomComparisonsPickSlower:
            return "느린";
        case Label.CustomComparisonsPickFaster:
            return "빠른";
        case Label.CustomComparisonsSlotAnd:
            return "그리고";
        case Label.CustomComparisonsBlockFallback:
            return "사용";
        case Label.CustomComparisonsBlockFallbackTip:
            return "첫 번째 규칙이 비워 둔 세그먼트만 채웁니다. 예를 들어 아직 런이 충분하지 않을 때입니다.";
        case Label.CustomComparisonsSlotIfEmpty:
            return "비어 있으면 사용";
        case Label.CustomComparisonsBlockSegmentRange:
            return "세그먼트 …에는 … 사용, 그 외에는 …";
        case Label.CustomComparisonsBlockSegmentRangeTip:
            return "세그먼트 범위 하나에는 한 규칙을, 나머지에는 다른 규칙을 씁니다. 범위를 추가해 규칙을 늘릴 수 있으며, 처음 일치하는 범위가 우선합니다. 범위가 스플릿 끝을 넘어가면 경고가 표시됩니다.";
        case Label.CustomComparisonsBlockSegmentRangeHeader:
            return "세그먼트마다 다른 규칙 (처음 일치하는 범위가 우선)";
        case Label.CustomComparisonsRangeCase:
            return "세그먼트 {from}~{to}에는 사용";
        case Label.CustomComparisonsSlotOtherwise:
            return "그 외에는";
        case Label.CustomComparisonsPreview:
            return "미리 보기";
        case Label.CustomComparisonsPreviewingBlock:
            return "비교가 아닌 블록을 미리 보는 중";
        case Label.CustomComparisonsShowWholeComparison:
            return "비교 전체 보기";
        case Label.CustomComparisonsSegment:
            return "세그먼트";
        case Label.CustomComparisonsDifferenceFrom:
            return "차이 비교 대상";
        case Label.CustomComparisonsFasterThanGold:
            return "이 세그먼트의 최고 시간(골드)보다 빠름";
        case Label.CustomComparisonsFasterThanGoldWarning:
            return "세그먼트 {0}개가 골드보다 빠릅니다. 허용되지만 이 페이스는 현실적이지 않을 수 있습니다.";
        case Label.CustomComparisonsFasterThanGoldWarningOne:
            return "세그먼트 1개가 골드보다 빠릅니다. 허용되지만 이 페이스는 현실적이지 않을 수 있습니다.";
        case Label.CustomComparisonsFinishLine:
            return "{0}에 완주, {2} 대비 {1}.";
        case Label.CustomComparisonsFinishVsSumOfBest:
            return "최고 세그먼트 합계는 {0}입니다.";
        case Label.CustomComparisonsNoProblems:
            return "문제가 없습니다.";
        case Label.CustomComparisonsNoTimesLeft:
            return '시간이 있는 세그먼트가 없습니다. 행을 클릭해 이유를 확인하거나, PB 같은 예비 값으로 "… 비어 있으면 사용"을 추가하세요.';
        case Label.CustomComparisonsOriginTitle:
            return "이 시간의 출처";
        case Label.CustomComparisonsOriginEmpty:
            return "이 세그먼트에 시간이 없어서 이후의 모든 스플릿도 비어 있습니다.";
        case Label.CustomComparisonsOriginFillingGap:
            return "빈 곳을 채움";
        case Label.CustomComparisonsOriginPicked:
            return "둘 중 더 {0} 쪽";
        case Label.CustomComparisonsOriginLowLimit:
            return '"이보다 빠르지 않게" 한계에서 유지됨';
        case Label.CustomComparisonsOriginHighLimit:
            return '"이보다 느리지 않게" 한계에서 유지됨';
        case Label.CustomComparisonsClickRowHint:
            return "행을 클릭하면 그 시간의 출처를 볼 수 있습니다.";
        case Label.CustomComparisonsDescYourGolds:
            return "내 골드";
        case Label.CustomComparisonsDescYourPb:
            return "내 PB";
        case Label.CustomComparisonsDescComparison:
            return '"{0}"';
        case Label.CustomComparisonsDescAttempt:
            return "시도 #{0}";
        case Label.CustomComparisonsDescBestRecentRun:
            return "최근 {0}일 동안의 내 최고 런";
        case Label.CustomComparisonsDescWeightedAverage:
            return "{0}의 최근 가중 평균";
        case Label.CustomComparisonsDescClamp:
            return "{1}와(과) {2} 사이로 유지한 {0}";
        case Label.CustomComparisonsDescRound:
            return "{1} 단위로 반올림한 {0}";
        case Label.CustomComparisonsDescMedian:
            return "{0}의 중앙값";
        case Label.CustomComparisonsDescAverage:
            return "{0}의 평균";
        case Label.CustomComparisonsDescMin:
            return "{0} 중 최고";
        case Label.CustomComparisonsDescMax:
            return "{0} 중 최저";
        case Label.CustomComparisonsDescPercentile:
            return "{1}의 {0}번째 백분위수";
        case Label.CustomComparisonsDescAddTime:
            return "{0} + {1}";
        case Label.CustomComparisonsDescRemoveTime:
            return "{0} − {1}";
        case Label.CustomComparisonsDescScale:
            return "{1}의 {0} %";
        case Label.CustomComparisonsDescStretch:
            return "{1}에 완주하도록 늘인 {0}";
        case Label.CustomComparisonsDescBlend:
            return "{1}에서 {2}까지의 {0} % 지점";
        case Label.CustomComparisonsDescSlower:
            return "{0}와(과) {1} 중 느린 쪽";
        case Label.CustomComparisonsDescFaster:
            return "{0}와(과) {1} 중 빠른 쪽";
        case Label.CustomComparisonsDescFallback:
            return "{0} (비어 있는 곳은 {1})";
        case Label.CustomComparisonsDescRangeArm:
            return "{1}에는 {0}";
        case Label.CustomComparisonsDescRangeOtherwise:
            return "{0}, 그 외에는 {1}";
        case Label.CustomComparisonsDescSomething:
            return "무언가";
        case Label.CustomComparisonsDescAllTimes:
            return "내 모든 시간";
        case Label.CustomComparisonsDescLastN:
            return "내 최근 {0}개의 시간";
        case Label.CustomComparisonsQualCompleted:
            return "(완주한 런만)";
        case Label.CustomComparisonsQualRecentDays:
            return "(최근 {0}일)";
        case Label.CustomComparisonsQualUnder:
            return "({0} 안에 끝난 런)";
        case Label.CustomComparisonsQualTrim:
            return "(가장 빠르고 느린 {0} % 제외)";
        case Label.CustomComparisonsQualAtLeast:
            return "({0}개 이상일 때)";
        case Label.CustomComparisonsQualReached:
            return "({0}까지 도달한 런)";
        case Label.CustomComparisonsSumGapsFilled:
            return "{0} 빈 곳은 {1}(으)로 채웁니다.";
        case Label.CustomComparisonsSumRangeArm:
            return "{0}: {1}";
        case Label.CustomComparisonsSumOtherSegments:
            return "나머지 세그먼트: {0}";
        case Label.CustomComparisonsSegmentNumber:
            return "세그먼트 {0}";
        case Label.CustomComparisonsSegmentSpan:
            return "{0}~{1}";
        case Label.CustomComparisonsSeconds:
            return "{0}초";
        case Label.CustomComparisonsListAnd:
            return "{0} 및 {1}";
        case Label.CustomComparisonsWarnSegment:
            return "세그먼트 {0}을(를) 사용하지만 스플릿에는 {1}개뿐입니다";
        case Label.CustomComparisonsWarnSegments:
            return "세그먼트 {0}을(를) 사용하지만 스플릿에는 {1}개뿐입니다";
        case Label.CustomComparisonsSentence:
            return "{0}.";
    }
}
