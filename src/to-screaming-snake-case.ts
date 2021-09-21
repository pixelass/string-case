import { getCase } from "./get-case";
import { toScreamingSnake } from "./to/screaming-snake";

export const toScreamingSnakeCase = (value: string) => toScreamingSnake[getCase(value)](value);
