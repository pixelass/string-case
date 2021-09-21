import { camelToScreamingSnake } from "../camel/screaming-snake";
import { kebabToScreamingSnake } from "../kebab/screaming-snake";
import { keep } from "../keep";
import { pascalToScreamingSnake } from "../pascal/screaming-snake";
import { screamingKebabToSnake } from "../screaming-kebab/snake";
import { snakeToScreamingSnake } from "../snake/screaming-snake";

export const toScreamingSnake = {
	snake: snakeToScreamingSnake,
	kebab: kebabToScreamingSnake,
	screamingSnake: keep,
	screamingKebab: screamingKebabToSnake,
	camel: camelToScreamingSnake,
	pascal: pascalToScreamingSnake,
};
