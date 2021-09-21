import { camelToPascal } from "../../src/camel/pascal";

describe("camelToPascal", () => {
	const fixtures = [
		{
			from: "fooBar",
			expected: "FooBar",
		},
		{
			from: "foo",
			expected: "Foo",
		},
		{
			from: "f00",
			expected: "F00",
		},
		{
			from: "f00Bar",
			expected: "F00Bar",
		},
		{
			from: "f00B4r",
			expected: "F00B4r",
		},
		{
			from: "f",
			expected: "F",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(camelToPascal(from)).toBe(expected);
		});
	});
});
