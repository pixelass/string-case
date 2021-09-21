import { is } from "./is";
import { Variant } from "./types";
import { variants } from "./variants";

export const getCase = (value: string): Variant | "unknown" | "uppercase" | "lowercase" => {
	for (const variant of variants) {
		if (is[variant](value)) {
			return variant;
		}
	}
	if (!/[-_a-z]/.exec(value)) {
		return "uppercase";
	}
	if (!/[-_A-Z]/.exec(value)) {
		return "lowercase";
	}
	return "unknown";
};
