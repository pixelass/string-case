import { screamingSnakeToKebab } from "../../src/screaming-snake/kebab";

describe("screamingSnakeToKebab", () => {
	const fixtures = [
		{
			from: "FOO_BAR",
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
			from: "F00_BAR",
			expected: "f00-bar",
		},
		{
			from: "F00_B4R",
			expected: "f00-b4r",
		},
		{
			from: "F",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingSnakeToKebab(from)).toBe(expected);
		});
	});
});
