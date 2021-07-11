/**
 * String capitalization function.
 *
 * @param str - input string
 * @returns Input string with upper case first letter.
 */
export const capitalize = (str: string): string => str.charAt(0).toLocaleUpperCase() + str.slice(1);
