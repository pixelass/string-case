import { screamingKebabToPascal } from "../../src/screaming-kebab/pascal";

describe("screamingKebabToPascal", () => {
	const fixtures = [
		{
			from: "FOO-BAR",
			expected: "FooBar",
		},
		{
			from: "FOO",
			expected: "Foo",
		},
		{
			from: "F00",
			expected: "F00",
		},
		{
			from: "F00-BAR",
			expected: "F00Bar",
		},
		{
			from: "F00-B4R",
			expected: "F00B4r",
		},
		{
			from: "F",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingKebabToPascal(from)).toBe(expected);
		});
	});
});
