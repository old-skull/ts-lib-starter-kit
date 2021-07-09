/**
 * Password RegExp
 *
 * Rules:
 *
 * 1) At least one upper case English letter
 * 2) At least one lower case English letter
 * 3) One number
 * 4) One special character
 * 5) Length: from 8 to 32
 */
export const REGEX_PASSWORD: RegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_]).{8,32}$/;
