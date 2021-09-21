import { isKebab } from "../../src/is/kebab";
import { isScreamingKebab } from "../../src/is/screaming-kebab";
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

describe("isScreamingKebab", () => {
	const negative = {
		camel,
		kebab,
		pascal,
		screamingSnake,
		snake,
		lower,
		upper,
		sentence,
		button,
	};
	screamingKebab.forEach(value => {
		it(`should test ${value} as true`, () => {
			expect(isScreamingKebab(value)).toBe(true);
		});
	});
	Object.entries(negative).forEach(([key, values]) => {
		it(`should test ${key} as false`, () => {
			values.forEach(value => {
				expect(isScreamingKebab(value)).toBe(false);
			});
		});
	});
});
