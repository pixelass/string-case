import { screamingKebabToScreamingSnake } from "../../src/screaming-kebab/screaming-snake";

describe("screamingKebabToScreamingSnake", () => {
	const fixtures = [
		{
			from: "FOO-BAR",
			expected: "FOO_BAR",
		},
		{
			from: "FOO",
			expected: "FOO",
		},
		{
			from: "F00",
			expected: "F00",
		},
		{
			from: "F00-BAR",
			expected: "F00_BAR",
		},
		{
			from: "F00-B4R",
			expected: "F00_B4R",
		},
		{
			from: "F",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingKebabToScreamingSnake(from)).toBe(expected);
		});
	});
});
