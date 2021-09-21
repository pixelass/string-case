import { toCamel } from "./to/camel";
import { toKebab } from "./to/kebab";
import { toPascal } from "./to/pascal";
import { toScreamingKebab } from "./to/screaming-kebab";
import { toScreamingSnake } from "./to/screaming-snake";
import { toSnake } from "./to/snake";

export const to = {
	camel: { from: toCamel },
	pascal: { from: toPascal },
	kebab: { from: toKebab },
	snake: { from: toSnake },
	screamingKebab: { from: toScreamingKebab },
	screamingSnake: { from: toScreamingSnake },
};
