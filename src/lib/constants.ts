import { differenceInYears } from "date-fns";
import { browser } from "$app/environment";

export const vibrateSmall = () => {
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
		return window.navigator.vibrate(50);
	}
};

export const workingYears = differenceInYears(new Date(), new Date(2009, 1, 1));
