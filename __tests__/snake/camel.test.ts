import { snakeToCamel } from "../../src/snake/camel";

describe("snakeToCamel", () => {
	const fixtures = [
		{
			from: "foo_bar",
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
			from: "f00_bar",
			expected: "f00Bar",
		},
		{
			from: "f00_b4r",
			expected: "f00B4r",
		},
		{
			from: "f",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(snakeToCamel(from)).toBe(expected);
		});
	});
});
