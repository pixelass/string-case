import { isButton } from "./is/button";
import { isCamel } from "./is/camel";
import { isKebab } from "./is/kebab";
import { isLower } from "./is/lower";
import { isPascal } from "./is/pascal";
import { isScreamingKebab } from "./is/screaming-kebab";
import { isScreamingSnake } from "./is/screaming-snake";
import { isSentence } from "./is/sentence";
import { isSnake } from "./is/snake";
import { isUpper } from "./is/upper";

export const is = {
	camel: isCamel,
	pascal: isPascal,
	kebab: isKebab,
	snake: isSnake,
	screamingKebab: isScreamingKebab,
	screamingSnake: isScreamingSnake,
	lower: isLower,
	upper: isUpper,
	sentence: isSentence,
	button: isButton,
};
