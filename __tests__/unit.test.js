// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

/**
 * isPhoneNumber Tests
 */

test('brackets, space, hyphen', () => {
  expect(isPhoneNumber("(111) 111-1111")).toBe(true);
});

test('no area code, hyphen', () => {
  expect(isPhoneNumber("999-9999")).toBe(true);
});

test('no formatting', () => {
  expect(isPhoneNumber("0123456789")).toBe(false);
});

test('unexpected space in the middle', () => {
  expect(isPhoneNumber("(111)11 1-1111")).toBe(false);
});

/**
 * isEmail Tests
 */

test('standard edu email, letters and numbers', () => {
  expect(isEmail("johnCena123@ucsd.edu")).toBe(true);
});

test('2 character domain', () => {
  expect(isEmail("HELLO@ai.co")).toBe(true);
});

test('no @ symbol', () => {
  expect(isEmail("abc.gmail.com")).toBe(false);
});

test('no . symbol', () => {
  expect(isEmail("abc@gmailcom")).toBe(false);
});

/**
 * isStrongPassword Tests
 */

test('15 characters, letters and numbers', () => {
  expect(isStrongPassword("a2cDEFgHIjkLMNo")).toBe(true);
});

test('4 characters, ends in underscore', () => {
  expect(isStrongPassword("abc_")).toBe(true);
});

test('3 characters, letters only', () => {
  expect(isStrongPassword("abc")).toBe(false);
});

test('starts in number', () => {
  expect(isStrongPassword("2abcd")).toBe(false);
});

/**
 * isDate Tests
 */

test('2 digits / 2 digits / 4 digits', () => {
  expect(isDate("99/99/9999")).toBe(true);
});

test('1 digit / 1 digit / 4 digits', () => {
  expect(isDate("0/0/0000")).toBe(true);
});

test('only 1 /', () => {
  expect(isDate("11/2020")).toBe(false);
});

test('leading space', () => {
  expect(isDate(" 01/01/2014")).toBe(false);
})

/**
 * isHexColor Tests
 */
test('#, 6 characters', () => {
  expect(isHexColor("#012abc")).toBe(true);
})

test('no #, 3 characters', () => {
  expect(isHexColor("0ff")).toBe(true);
})

test('#, 4 characters', () => {
  expect(isHexColor("0123")).toBe(false);
})

test('#, 6 characters, invalid letter', () => {
  expect(isHexColor("#012345G")).toBe(false);
})