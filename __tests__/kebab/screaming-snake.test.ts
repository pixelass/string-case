import { kebabToScreamingSnake } from "../../src/kebab/screaming-snake";

describe("kebabToScreamingSnake", () => {
	const fixtures = [
		{
			from: "foo-bar",
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
			from: "f00-bar",
			expected: "F00_BAR",
		},
		{
			from: "f00-b4r",
			expected: "F00_B4R",
		},
		{
			from: "f",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(kebabToScreamingSnake(from)).toBe(expected);
		});
	});
});
