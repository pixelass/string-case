import { camelToScreamingKebab } from "../../src/camel/screaming-kebab";

describe("camelToScreamingKebab", () => {
	const fixtures = [
		{
			from: "fooBar",
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
			from: "f00Bar",
			expected: "F00-BAR",
		},
		{
			from: "f00B4r",
			expected: "F00-B4R",
		},
		{
			from: "f",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(camelToScreamingKebab(from)).toBe(expected);
		});
	});
});
