import { snakeToScreamingSnake } from "../../src/snake/screaming-snake";

describe("snakeToScreamingSnake", () => {
	const fixtures = [
		{
			from: "foo_bar",
			expected: "FOO_BAR",
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
			expected: "F00_BAR",
		},
		{
			from: "f00_b4r",
			expected: "F00_B4R",
		},
		{
			from: "f",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(snakeToScreamingSnake(from)).toBe(expected);
		});
	});
});
