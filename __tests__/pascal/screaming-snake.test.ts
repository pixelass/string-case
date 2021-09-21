import { pascalToScreamingSnake } from "../../src/pascal/screaming-snake";

describe("pascalToScreamingSnake", () => {
	const fixtures = [
		{
			from: "FooBar",
			expected: "FOO_BAR",
		},
		{
			from: "Foo",
			expected: "FOO",
		},
		{
			from: "F00",
			expected: "F00",
		},
		{
			from: "F00Bar",
			expected: "F00_BAR",
		},
		{
			from: "F00B4r",
			expected: "F00_B4R",
		},
		{
			from: "F",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(pascalToScreamingSnake(from)).toBe(expected);
		});
	});
});
