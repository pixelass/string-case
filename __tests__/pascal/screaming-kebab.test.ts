import { pascalToScreamingKebab } from "../../src/pascal/screaming-kebab";

describe("pascalToScreamingKebab", () => {
	const fixtures = [
		{
			from: "FooBar",
			expected: "FOO-BAR",
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
			expected: "F00-BAR",
		},
		{
			from: "F00B4r",
			expected: "F00-B4R",
		},
		{
			from: "F",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(pascalToScreamingKebab(from)).toBe(expected);
		});
	});
});
