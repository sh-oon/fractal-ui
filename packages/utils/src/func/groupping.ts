import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isBetween from "dayjs/plugin/isBetween";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { isEmpty } from "./common";

dayjs.extend(relativeTime);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);
dayjs.extend(timezone);
dayjs.extend(utc);

type GroupDataKey = "오늘" | "어제" | "그저께" | "지난주" | "지난달" | "작년" | "그 이전";

type Locale = "ko" | "en";

type GroupHistoryByDateOptions<T> = {
	createdAtKey: keyof T;
	locale: Locale;
};

export const groupHistoryByDate = <T>(data: T[], options: GroupHistoryByDateOptions<T>) => {
	const { createdAtKey, locale } = options;

	const now = dayjs().tz(locale === "ko" ? "Asia/Seoul" : "America/New_York"); // 현재 시간 (한국 시간 기준)
	const yesterday = now.subtract(1, "day").startOf("day");
	const twoDaysAgo = now.subtract(2, "day").startOf("day");
	const lastWeek = now.subtract(7, "day").startOf("day");
	const lastMonth = now.subtract(1, "month").startOf("day");
	const lastYear = now.subtract(1, "year").startOf("day");

	const groupedData: Record<GroupDataKey, T[]> = {
		오늘: [],
		어제: [],
		그저께: [],
		지난주: [],
		지난달: [],
		작년: [],
		"그 이전": [],
	};

	data.forEach((item) => {
		if (isEmpty(item[createdAtKey])) {
			throw new Error("createdAtKey is required");
		}

		if (typeof item[createdAtKey] !== "string") {
			throw new Error("createdAtKey must be a string");
		}

		const createdAt = dayjs(item[createdAtKey]).tz("Asia/Seoul");

		switch (true) {
			case createdAt.isSame(now, "day"):
				groupedData["오늘"].push(item);
				break;
			case createdAt.isSame(yesterday, "day"):
				groupedData["어제"].push(item);
				break;
			case createdAt.isSame(twoDaysAgo, "day"):
				groupedData["그저께"].push(item);
				break;
			case createdAt.isAfter(lastWeek):
				groupedData["지난주"].push(item);
				break;
			case createdAt.isAfter(lastMonth):
				groupedData["지난달"].push(item);
				break;
			case createdAt.isAfter(lastYear):
				groupedData["작년"].push(item);
				break;
			default:
				groupedData["그 이전"].push(item);
				break;
		}
	});

	return groupedData;
};
