/**
 * Email RegExp
 *
 * Rules:
 *
 * 1) `@` symbol required
 * 2) `.` symbol required
 */
export const REGEX_EMAIL: RegExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
