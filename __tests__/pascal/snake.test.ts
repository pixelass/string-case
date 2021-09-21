import { pascalToSnake } from "../../src/pascal/snake";

describe("pascalToSnake", () => {
	const fixtures = [
		{
			from: "FooBar",
			expected: "foo_bar",
		},
		{
			from: "Foo",
			expected: "foo",
		},
		{
			from: "F00",
			expected: "f00",
		},
		{
			from: "F00Bar",
			expected: "f00_bar",
		},
		{
			from: "F00B4r",
			expected: "f00_b4r",
		},
		{
			from: "F",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(pascalToSnake(from)).toBe(expected);
		});
	});
});
