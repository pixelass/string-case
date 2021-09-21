import { kebabToScreamingKebab } from "../../src/kebab/screaming-kebab";

describe("kebabToScreamingKebab", () => {
	const fixtures = [
		{
			from: "foo-bar",
			expected: "FOO-BAR",
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
			expected: "F00-BAR",
		},
		{
			from: "f00-b4r",
			expected: "F00-B4R",
		},
		{
			from: "f",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(kebabToScreamingKebab(from)).toBe(expected);
		});
	});
});
