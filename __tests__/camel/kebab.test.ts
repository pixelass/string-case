import { camelToKebab } from "../../src/camel/kebab";

describe("camelToKebab", () => {
	const fixtures = [
		{
			from: "fooBar",
			expected: "foo-bar",
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
			from: "f00Bar",
			expected: "f00-bar",
		},
		{
			from: "f00B4r",
			expected: "f00-b4r",
		},
		{
			from: "f",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(camelToKebab(from)).toBe(expected);
		});
	});
});
