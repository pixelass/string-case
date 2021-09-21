import { getCase } from "../src/get-case";

describe("getCase", () => {
	const fixtures = [
		{
			value: "fooBar",
			expected: "camel",
		},
		{
			value: "FooBar",
			expected: "pascal",
		},
		{
			value: "foo-bar",
			expected: "kebab",
		},
		{
			value: "foo_bar",
			expected: "snake",
		},
		{
			value: "FOO-BAR",
			expected: "screamingKebab",
		},
		{
			value: "FOO_BAR",
			expected: "screamingSnake",
		},
		{
			value: "foo",
			expected: "lowercase",
		},
		{
			value: "FOO",
			expected: "uppercase",
		},
		{
			value: "0_abc-A",
			expected: "unknown",
		},
		{
			value: "0-abc",
			expected: "unknown",
		},
		{
			value: "0_abc",
			expected: "unknown",
		},
		{
			value: "0Abc",
			expected: "unknown",
		},
		{
			value: "Abc",
			expected: "unknown",
		},
		{
			value: "abc-A",
			expected: "unknown",
		},
		{
			value: "Abc-A",
			expected: "unknown",
		},
	];
	fixtures.forEach(({ value, expected }) => {
		it(`should detect ${value} as ${expected}`, () => {
			expect(getCase(value)).toBe(expected);
		});
	});
});
