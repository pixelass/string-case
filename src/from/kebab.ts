import { kebabToCamel } from "../kebab/camel";
import { kebabToPascal } from "../kebab/pascal";
import { kebabToScreamingKebab } from "../kebab/screaming-kebab";
import { kebabToScreamingSnake } from "../kebab/screaming-snake";
import { kebabToSnake } from "../kebab/snake";
import { keep } from "../keep";

export const fromKebab = {
	snake: kebabToSnake,
	kebab: keep,
	screamingSnake: kebabToScreamingSnake,
	screamingKebab: kebabToScreamingKebab,
	camel: kebabToCamel,
	pascal: kebabToPascal,
};
