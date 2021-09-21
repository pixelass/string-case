import { fromCamel } from "./from/camel";
import { fromKebab } from "./from/kebab";
import { fromPascal } from "./from/pascal";
import { fromScreamingKebab } from "./from/screaming-kebab";
import { fromScreamingSnake } from "./from/screaming-snake";
import { fromSnake } from "./from/snake";

export const from = {
	camel: { to: fromCamel },
	pascal: { to: fromPascal },
	kebab: { to: fromKebab },
	snake: { to: fromSnake },
	screamingKebab: { to: fromScreamingKebab },
	screamingSnake: { to: fromScreamingSnake },
};
