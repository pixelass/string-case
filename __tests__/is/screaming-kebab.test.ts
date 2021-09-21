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
	it(`should test screamingKebab as true`, () => {
		screamingKebab.forEach(value => {
			expect(isScreamingKebab(value)).toBe(true);
		});
	});
	it(`should test negatives as false`, () => {
		Object.values(negative).forEach(values => {
			values.forEach(value => {
				expect(isScreamingKebab(value)).toBe(false);
			});
		});
	});
});
