import { snakeToPascal } from "../../src/snake/pascal";

describe("snakeToPascal", () => {
	const fixtures = [
		{
			from: "foo_bar",
			expected: "FooBar",
		},
		{
			from: "foo",
			expected: "Foo",
		},
		{
			from: "f00",
			expected: "F00",
		},
		{
			from: "f00_bar",
			expected: "F00Bar",
		},
		{
			from: "f00_b4r",
			expected: "F00B4r",
		},
		{
			from: "f",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(snakeToPascal(from)).toBe(expected);
		});
	});
});
