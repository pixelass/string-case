import { keep } from "../keep";
import { screamingKebabToCamel } from "../screaming-kebab/camel";
import { screamingKebabToKebab } from "../screaming-kebab/kebab";
import { screamingKebabToPascal } from "../screaming-kebab/pascal";
import { screamingKebabToScreamingSnake } from "../screaming-kebab/screaming-snake";
import { screamingKebabToSnake } from "../screaming-kebab/snake";

export const fromScreamingKebab = {
	snake: screamingKebabToSnake,
	kebab: screamingKebabToKebab,
	screamingSnake: screamingKebabToScreamingSnake,
	screamingKebab: keep,
	camel: screamingKebabToCamel,
	pascal: screamingKebabToPascal,
};
