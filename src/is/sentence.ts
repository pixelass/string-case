export const sentencePattern = /^[A-Z]([a-z0-9\s]+)$/;
export const isSentence = (value: string) => Boolean(sentencePattern.exec(value));
