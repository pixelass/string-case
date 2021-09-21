import { keep } from "../keep";
import { snakeToCamel } from "../snake/camel";
import { snakeToKebab } from "../snake/kebab";
import { snakeToPascal } from "../snake/pascal";
import { snakeToScreamingKebab } from "../snake/screaming-kebab";
import { snakeToScreamingSnake } from "../snake/screaming-snake";

export const fromSnake = {
	snake: keep,
	kebab: snakeToKebab,
	screamingSnake: snakeToScreamingSnake,
	screamingKebab: snakeToScreamingKebab,
	camel: snakeToCamel,
	pascal: snakeToPascal,
};
