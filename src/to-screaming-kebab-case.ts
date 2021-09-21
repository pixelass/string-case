import { getCase } from "./get-case";
import { toScreamingKebab } from "./to/screaming-kebab";

export const toScreamingKebabCase = (value: string) => toScreamingKebab[getCase(value)](value);
