import { isButton } from "../../src/is/button";
import { isSentence } from "../../src/is/sentence";
import { button } from "../fixtures/button";
import { camel } from "../fixtures/camel";
import { kebab } from "../fixtures/kebab";
import { lower } from "../fixtures/lower";
import { pascal } from "../fixtures/pascal";
import { screamingKebab } from "../fixtures/screaming-kebab";
import { screamingSnake } from "../fixtures/screaming-snake";
import { sentence } from "../fixtures/sentence";
import { snake } from "../fixtures/snake";
import { upper } from "../fixtures/upper";

describe("isButton", () => {
	const negative = {
		camel,
		kebab,
		pascal,
		screamingKebab,
		screamingSnake,
		snake,
		lower,
		upper,
		sentence,
	};
	button.forEach(value => {
		it(`should test ${value} as true`, () => {
			expect(isButton(value)).toBe(true);
		});
	});
	Object.entries(negative).forEach(([key, values]) => {
		it(`should test ${key} as false`, () => {
			values.forEach(value => {
				expect(isButton(value)).toBe(false);
			});
		});
	});
});
