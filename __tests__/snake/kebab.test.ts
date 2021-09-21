import { snakeToKebab } from "../../src/snake/kebab";

describe("snakeToKebab", () => {
	const fixtures = [
		{
			from: "foo_bar",
			expected: "foo-bar",
		},
		{
			from: "foo",
			expected: "foo",
		},
		{
			from: "f00",
			expected: "f00",
		},
		{
			from: "f00_bar",
			expected: "f00-bar",
		},
		{
			from: "f00_b4r",
			expected: "f00-b4r",
		},
		{
			from: "f",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(snakeToKebab(from)).toBe(expected);
		});
	});
});
