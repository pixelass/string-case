import { screamingKebabToCamel } from "../../src/screaming-kebab/camel";

describe("screamingKebabToCamel", () => {
	const fixtures = [
		{
			from: "FOO-BAR",
			expected: "fooBar",
		},
		{
			from: "FOO",
			expected: "foo",
		},
		{
			from: "F00",
			expected: "f00",
		},
		{
			from: "F00-BAR",
			expected: "f00Bar",
		},
		{
			from: "F00-B4R",
			expected: "f00B4r",
		},
		{
			from: "F",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingKebabToCamel(from)).toBe(expected);
		});
	});
});
