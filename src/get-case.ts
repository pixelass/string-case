import { is } from "./is";
import { Case, Variant } from "./types";
import { variants } from "./variants";

export const getCase = (value: string): Variant | Case => {
	for (const variant of variants) {
		if (is[variant](value)) {
			return variant;
		}
	}
	if (is.upper(value)) {
		return "uppercase";
	}
	if (is.lower(value)) {
		return "lowercase";
	}
	if (is.sentence(value)) {
		return "sentence";
	}
	if (is.button(value)) {
		return "button";
	}
	return "unknown";
};
