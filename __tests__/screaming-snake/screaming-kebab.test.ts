import { screamingSnakeToScreamingKebab } from "../../src/screaming-snake/screaming-kebab";

describe("screamingSnakeToScreamingKebab", () => {
	const fixtures = [
		{
			from: "FOO_BAR",
			expected: "FOO-BAR",
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
			from: "F00_BAR",
			expected: "F00-BAR",
		},
		{
			from: "F00_B4R",
			expected: "F00-B4R",
		},
		{
			from: "F",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingSnakeToScreamingKebab(from)).toBe(expected);
		});
	});
});
