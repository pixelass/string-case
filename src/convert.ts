import { fromCamel } from "./from/camel";
import { fromKebab } from "./from/kebab";
import { fromPascal } from "./from/pascal";
import { fromScreamingKebab } from "./from/screaming-kebab";
import { fromScreamingSnake } from "./from/screaming-snake";
import { fromSnake } from "./from/snake";
import { toCamel } from "./to/camel";
import { toKebab } from "./to/kebab";
import { toPascal } from "./to/pascal";
import { toScreamingKebab } from "./to/screaming-kebab";
import { toScreamingSnake } from "./to/screaming-snake";
import { toSnake } from "./to/snake";

export const convert = {
	snake: {
		from: toSnake,
		to: fromSnake,
	},
	kebab: {
		from: toKebab,
		to: fromKebab,
	},
	screamingSnake: {
		from: toScreamingSnake,
		to: fromScreamingSnake,
	},
	screamingKebab: {
		from: toScreamingKebab,
		to: fromScreamingKebab,
	},
	camel: {
		from: toCamel,
		to: fromCamel,
	},
	pascal: {
		from: toPascal,
		to: fromPascal,
	},
};
