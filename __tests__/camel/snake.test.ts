import { camelToSnake } from "../../src/camel/snake";

describe("camelToSnake", () => {
	const fixtures = [
		{
			from: "fooBar",
			expected: "foo_bar",
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
			expected: "f00_bar",
		},
		{
			from: "f00B4r",
			expected: "f00_b4r",
		},
		{
			from: "f",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(camelToSnake(from)).toBe(expected);
		});
	});
});
