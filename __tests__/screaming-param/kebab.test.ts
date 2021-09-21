import { screamingKebabToKebab } from "../../src/screaming-kebab/kebab";

describe("screamingKebabToKebab", () => {
	const fixtures = [
		{
			from: "FOO-BAR",
			expected: "foo-bar",
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
			expected: "f00-bar",
		},
		{
			from: "F00-B4R",
			expected: "f00-b4r",
		},
		{
			from: "F",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingKebabToKebab(from)).toBe(expected);
		});
	});
});
