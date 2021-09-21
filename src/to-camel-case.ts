import { getCase } from "./get-case";
import { toCamel } from "./to/camel";

export const toCamelCase = (value: string) => toCamel[getCase(value)](value);
