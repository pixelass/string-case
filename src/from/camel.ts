import { camelToKebab } from "../camel/kebab";
import { camelToPascal } from "../camel/pascal";
import { camelToScreamingKebab } from "../camel/screaming-kebab";
import { camelToScreamingSnake } from "../camel/screaming-snake";
import { camelToSnake } from "../camel/snake";
import { keep } from "../keep";

export const fromCamel = {
	snake: camelToSnake,
	kebab: camelToKebab,
	screamingSnake: camelToScreamingSnake,
	screamingKebab: camelToScreamingKebab,
	camel: keep,
	pascal: camelToPascal,
};
