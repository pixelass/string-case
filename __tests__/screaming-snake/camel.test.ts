import { screamingSnakeToCamel } from "../../src/screaming-snake/camel";

describe("screamingSnakeToCamel", () => {
	const fixtures = [
		{
			from: "FOO_BAR",
			expected: "fooBar",
		},
		{
			from: "FOO",
			expected: "foo",
		},
		{
			from: "F00",
			expected: "f00",
		},
		{
			from: "F00_BAR",
			expected: "f00Bar",
		},
		{
			from: "F00_B4R",
			expected: "f00B4r",
		},
		{
			from: "F",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingSnakeToCamel(from)).toBe(expected);
		});
	});
});
