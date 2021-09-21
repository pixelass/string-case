import { getCase } from "./get-case";
import { toKebab } from "./to/kebab";

export const toKebabCase = (value: string) => toKebab[getCase(value)](value);
