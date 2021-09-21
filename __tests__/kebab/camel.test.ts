import { kebabToCamel } from "../../src/kebab/camel";

describe("kebabToCamel", () => {
	const fixtures = [
		{
			from: "foo-bar",
			expected: "fooBar",
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
			from: "f00-bar",
			expected: "f00Bar",
		},
		{
			from: "f00-b4r",
			expected: "f00B4r",
		},
		{
			from: "f",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(kebabToCamel(from)).toBe(expected);
		});
	});
});
