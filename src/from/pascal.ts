import { keep } from "../keep";
import { pascalToCamel } from "../pascal/camel";
import { pascalToKebab } from "../pascal/kebab";
import { pascalToScreamingKebab } from "../pascal/screaming-kebab";
import { pascalToScreamingSnake } from "../pascal/screaming-snake";
import { pascalToSnake } from "../pascal/snake";

export const fromPascal = {
	snake: pascalToSnake,
	kebab: pascalToKebab,
	screamingSnake: pascalToScreamingSnake,
	screamingKebab: pascalToScreamingKebab,
	camel: pascalToCamel,
	pascal: keep,
};
