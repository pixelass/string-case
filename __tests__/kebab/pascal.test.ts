import { kebabToPascal } from "../../src/kebab/pascal";

describe("kebabToPascal", () => {
	const fixtures = [
		{
			from: "foo-bar",
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
			from: "f00-bar",
			expected: "F00Bar",
		},
		{
			from: "f00-b4r",
			expected: "F00B4r",
		},
		{
			from: "f",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(kebabToPascal(from)).toBe(expected);
		});
	});
});
