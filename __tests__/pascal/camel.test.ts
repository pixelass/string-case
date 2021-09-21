import { pascalToCamel } from "../../src/pascal/camel";

describe("pascalToCamel", () => {
	const fixtures = [
		{
			from: "FooBar",
			expected: "fooBar",
		},
		{
			from: "Foo",
			expected: "foo",
		},
		{
			from: "F00",
			expected: "f00",
		},
		{
			from: "F00Bar",
			expected: "f00Bar",
		},
		{
			from: "F00B4r",
			expected: "f00B4r",
		},
		{
			from: "F",
			expected: "f",
		},
	];
	fixtures.forEach(({ from, expected }) => {
		it(`should convert ${from} to ${expected}`, () => {
			expect(pascalToCamel(from)).toBe(expected);
		});
	});
});
