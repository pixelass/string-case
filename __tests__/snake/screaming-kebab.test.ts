import { snakeToScreamingKebab } from "../../src/snake/screaming-kebab";

describe("snakeToScreamingKebab", () => {
	const fixtures = [
		{
			from: "foo_bar",
			expected: "FOO-BAR",
		},
		{
			from: "foo",
			expected: "FOO",
		},
		{
			from: "f00",
			expected: "F00",
		},
		{
			from: "f00_bar",
			expected: "F00-BAR",
		},
		{
			from: "f00_b4r",
			expected: "F00-B4R",
		},
		{
			from: "f",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(snakeToScreamingKebab(from)).toBe(expected);
		});
	});
});
