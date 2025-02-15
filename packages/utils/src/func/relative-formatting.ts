import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // ✅ 한국어 로케일 추가

dayjs.extend(relativeTime);
dayjs.locale("ko"); // ✅ 한국어 로케일 적용

/**
 * 주어진 날짜를 조건에 맞게 포맷팅하는 함수
 * - 1주일 이내: n분 전, n시간 전, n일 전
 * - 1주일 이후: YYYY-MM-DD
 *
 * @param date - 포매팅할 날짜 (Date, string, number)
 * @returns 포맷팅된 날짜 문자열
 */
export const formatRelativeTime = (date: dayjs.ConfigType): string => {
	const now = dayjs(); // 현재 시간
	const targetDate = dayjs(date); // 입력된 날짜

	const diffInDays = now.diff(targetDate, "day"); // 현재와 입력 날짜의 차이 (일)

	if (diffInDays < 7) {
		// 1주일 이내면 상대적 시간으로 표시
		return targetDate.fromNow();
	}

	// 1주일 이후면 YYYY-MM-DD로 표시
	return targetDate.format("YYYY-MM-DD");
};
