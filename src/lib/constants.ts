import { browser } from "$app/environment";

export const vibrate = (value: number | number[]) => {
	if (browser && !window) {
		return;
	}

	if (browser && !window.navigator) {
		return;
	}

	if (browser && !window.navigator.vibrate) {
		return;
	}
	if (browser && window.navigator.vibrate) {
		return window.navigator.vibrate(value);
	}
};

const differenceInYears = (laterDate: Date, earlierDate: Date) => {
	let years = laterDate.getFullYear() - earlierDate.getFullYear();
	const laterMonthDay = laterDate.getMonth() * 100 + laterDate.getDate();
	const earlierMonthDay = earlierDate.getMonth() * 100 + earlierDate.getDate();

	if (laterMonthDay < earlierMonthDay) {
		years -= 1;
	}

	return years;
};

export const workingYears = differenceInYears(new Date(), new Date(2009, 1, 1));
