import { kebabToSnake } from "../../src/kebab/snake";

describe("kebabToSnake", () => {
	const fixtures = [
		{
			from: "foo-bar",
			expected: "foo_bar",
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
			from: "f00-bar",
			expected: "f00_bar",
		},
		{
			from: "f00-b4r",
			expected: "f00_b4r",
		},
		{
			from: "f",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(kebabToSnake(from)).toBe(expected);
		});
	});
});
