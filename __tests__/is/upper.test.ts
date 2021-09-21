import { isKebab } from "../../src/is/kebab";
import { isUpper } from "../../src/is/upper";
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

describe("isUpper", () => {
	const negative = {
		camel,
		kebab,
		pascal,
		screamingKebab,
		screamingSnake,
		snake,
		lower,
		sentence,
		button,
	};
	upper.forEach(value => {
		it(`should test ${value} as true`, () => {
			expect(isUpper(value)).toBe(true);
		});
	});
	Object.entries(negative).forEach(([key, values]) => {
		it(`should test ${key} as false`, () => {
			values.forEach(value => {
				expect(isUpper(value)).toBe(false);
			});
		});
	});
});
