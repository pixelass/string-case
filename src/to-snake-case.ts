import { getCase } from "./get-case";
import { toSnake } from "./to/snake";

export const toSnakeCase = (value: string) => toSnake[getCase(value)](value);
