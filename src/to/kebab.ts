import { camelToKebab } from "../camel/kebab";
import { keep } from "../keep";
import { pascalToKebab } from "../pascal/kebab";
import { screamingKebabToKebab } from "../screaming-kebab/kebab";
import { screamingSnakeToKebab } from "../screaming-snake/kebab";
import { snakeToKebab } from "../snake/kebab";

export const toKebab = {
	snake: snakeToKebab,
	kebab: keep,
	screamingSnake: screamingSnakeToKebab,
	screamingKebab: screamingKebabToKebab,
	camel: camelToKebab,
	pascal: pascalToKebab,
};
