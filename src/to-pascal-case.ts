import { getCase } from "./get-case";
import { toPascal } from "./to/pascal";

export const toPascalCase = (value: string) => toPascal[getCase(value)](value);
