import { type Locale } from "./config";
import { messages as enMessages } from "./messages/en";
import { messages as esMessages } from "./messages/es";

const messageMap = {
  en: enMessages,
  es: esMessages,
} as const;

export function getMessages(locale: Locale) {
  return messageMap[locale];
}

export type Messages = typeof enMessages;
