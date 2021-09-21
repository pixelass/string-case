import { toCase } from "../src/to-case";
import { Variant } from "../src/types";

const testStrings = {
	kebab: "foo-bar",
	pascal: "FooBar",
	snake: "foo_bar",
	camel: "fooBar",
	screamingSnake: "FOO_BAR",
	screamingKebab: "FOO-BAR",
};
describe("toCase", () => {
	const fixtures = Object.entries(testStrings).flatMap(([from, value]) => {
		return Object.entries(testStrings).map(([to, expected]) => {
			return {
				from,
				value,
				to,
				expected,
			};
		});
	});
	fixtures.forEach(({ from, to, value, expected }) => {
		it(`should convert ${value} from ${from} to ${to} as ${expected}`, () => {
			expect(toCase(value, to as Variant)).toBe(expected);
		});
	});
	const keepsStrings = ["foobar", "FOOBAR", "Foo_bar"];
	keepsStrings.forEach(value => {
		Object.keys(testStrings).forEach(variant => {
			it(`should keep ${value}`, () => {
				expect(toCase(value, variant as Variant)).toBe(value);
			});
		});
	});
});
