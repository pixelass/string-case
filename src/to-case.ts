import { convert } from "./convert";
import { getCase } from "./get-case";
import { Variant } from "./types";

export const toCase = (value: string, nextCase: Variant) => {
	const previousCase = getCase(value);
	switch (previousCase) {
		case "camel":
		case "pascal":
		case "kebab":
		case "snake":
		case "screamingKebab":
		case "screamingSnake":
			return convert[previousCase].to[nextCase](value);
		case "unknown":
		case "uppercase":
		case "lowercase":
		default:
			return value;
	}
};
