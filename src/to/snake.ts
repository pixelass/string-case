import { camelToSnake } from "../camel/snake";
import { kebabToSnake } from "../kebab/snake";
import { keep } from "../keep";
import { pascalToSnake } from "../pascal/snake";
import { screamingKebabToSnake } from "../screaming-kebab/snake";
import { screamingSnakeToSnake } from "../screaming-snake/snake";

export const toSnake = {
	snake: keep,
	kebab: kebabToSnake,
	screamingSnake: screamingSnakeToSnake,
	screamingKebab: screamingKebabToSnake,
	camel: camelToSnake,
	pascal: pascalToSnake,
};
