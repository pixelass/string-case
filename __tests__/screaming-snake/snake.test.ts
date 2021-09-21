import { screamingSnakeToSnake } from "../../src/screaming-snake/snake";

describe("screamingSnakeToSnake", () => {
	const fixtures = [
		{
			from: "FOO_BAR",
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
			from: "F00_BAR",
			expected: "f00_bar",
		},
		{
			from: "F00_B4R",
			expected: "f00_b4r",
		},
		{
			from: "F",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingSnakeToSnake(from)).toBe(expected);
		});
	});
});
