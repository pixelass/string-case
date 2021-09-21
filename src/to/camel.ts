import { kebabToCamel } from "../kebab/camel";
import { keep } from "../keep";
import { pascalToCamel } from "../pascal/camel";
import { screamingKebabToCamel } from "../screaming-kebab/camel";
import { screamingSnakeToCamel } from "../screaming-snake/camel";
import { snakeToCamel } from "../snake/camel";

export const toCamel = {
	snake: snakeToCamel,
	kebab: kebabToCamel,
	screamingSnake: screamingSnakeToCamel,
	screamingKebab: screamingKebabToCamel,
	camel: keep,
	pascal: pascalToCamel,
};
