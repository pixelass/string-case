import { isSnake } from "../../src/is/snake";
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

describe("isSnake", () => {
	const negative = {
		camel,
		kebab,
		pascal,
		screamingKebab,
		screamingSnake,
		lower,
		upper,
		sentence,
		button,
	};
	it(`should test snake as true`, () => {
		snake.forEach(value => {
			expect(isSnake(value)).toBe(true);
		});
	});
	it(`should test negatives as false`, () => {
		Object.values(negative).forEach(values => {
			values.forEach(value => {
				expect(isSnake(value)).toBe(false);
			});
		});
	});
});
