import { camelToScreamingKebab } from "../camel/screaming-kebab";
import { kebabToScreamingKebab } from "../kebab/screaming-kebab";
import { keep } from "../keep";
import { screamingSnakeToScreamingKebab } from "../screaming-snake/screaming-kebab";
import { snakeToScreamingKebab } from "../snake/screaming-kebab";

export const toScreamingKebab = {
	snake: snakeToScreamingKebab,
	kebab: kebabToScreamingKebab,
	screamingSnake: screamingSnakeToScreamingKebab,
	screamingKebab: keep,
	camel: camelToScreamingKebab,
	pascal: kebabToScreamingKebab,
};
