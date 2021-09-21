import { screamingKebabToSnake } from "../../src/screaming-kebab/snake";

describe("screamingKebabToSnake", () => {
	const fixtures = [
		{
			from: "FOO-BAR",
			expected: "foo_bar",
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
			expected: "f00_bar",
		},
		{
			from: "F00-B4R",
			expected: "f00_b4r",
		},
		{
			from: "F",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingKebabToSnake(from)).toBe(expected);
		});
	});
});
