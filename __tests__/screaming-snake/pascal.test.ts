import { screamingSnakeToPascal } from "../../src/screaming-snake/pascal";

describe("screamingSnakeToPascal", () => {
	const fixtures = [
		{
			from: "FOO_BAR",
			expected: "FooBar",
		},
		{
			from: "FOO",
			expected: "Foo",
		},
		{
			from: "F00",
			expected: "F00",
		},
		{
			from: "F00_BAR",
			expected: "F00Bar",
		},
		{
			from: "F00_B4R",
			expected: "F00B4r",
		},
		{
			from: "F",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(screamingSnakeToPascal(from)).toBe(expected);
		});
	});
});
