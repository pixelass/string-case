export const sentencePattern = /^[A-Z]([a-z0-9]+)?(\s(([a-z0-9]+)?)+)+$/;
export const isSentence = (value: string) => Boolean(sentencePattern.exec(value));
