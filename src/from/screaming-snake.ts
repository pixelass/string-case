import { keep } from "../keep";
import { screamingSnakeToCamel } from "../screaming-snake/camel";
import { screamingSnakeToKebab } from "../screaming-snake/kebab";
import { screamingSnakeToPascal } from "../screaming-snake/pascal";
import { screamingSnakeToScreamingKebab } from "../screaming-snake/screaming-kebab";
import { screamingSnakeToSnake } from "../screaming-snake/snake";

export const fromScreamingSnake = {
	snake: screamingSnakeToSnake,
	kebab: screamingSnakeToKebab,
	screamingSnake: keep,
	screamingKebab: screamingSnakeToScreamingKebab,
	camel: screamingSnakeToCamel,
	pascal: screamingSnakeToPascal,
};
