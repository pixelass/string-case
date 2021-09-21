import { camelToKebab } from "../camel/kebab";
import { kebabToPascal } from "../kebab/pascal";
import { keep } from "../keep";
import { screamingSnakeToPascal } from "../screaming-snake/pascal";
import { snakeToPascal } from "../snake/pascal";

export const toPascal = {
	snake: snakeToPascal,
	kebab: kebabToPascal,
	screamingSnake: screamingSnakeToPascal,
	screamingKebab: screamingSnakeToPascal,
	camel: camelToKebab,
	pascal: keep,
};
