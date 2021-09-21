import { camelToScreamingSnake } from "../../src/camel/screaming-snake";

describe("camelToScreamingSnake", () => {
	const fixtures = [
		{
			from: "fooBar",
			expected: "FOO_BAR",
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
			expected: "F00_BAR",
		},
		{
			from: "f00B4r",
			expected: "F00_B4R",
		},
		{
			from: "f",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(camelToScreamingSnake(from)).toBe(expected);
		});
	});
});
