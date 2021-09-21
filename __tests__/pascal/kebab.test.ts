import { pascalToKebab } from "../../src/pascal/kebab";

describe("pascalToKebab", () => {
	const fixtures = [
		{
			from: "FooBar",
			expected: "foo-bar",
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
			expected: "f00-bar",
		},
		{
			from: "F00B4r",
			expected: "f00-b4r",
		},
		{
			from: "F",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(pascalToKebab(from)).toBe(expected);
		});
	});
});
