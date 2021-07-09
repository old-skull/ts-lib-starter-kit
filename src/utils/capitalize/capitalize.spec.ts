import { capitalize } from './index';

describe('String: capitalize', () => {
  it('should return capitalized string', () => {
    expect(capitalize('string')).toBe('String');
  });
});

describe('String: capitalize', () => {
  it('should return exact same string for string of numbers', () => {
    expect(capitalize('1234')).toBe('1234');
  });
});

describe('String: capitalize', () => {
  it('should return exact same string for capitalized string', () => {
    expect(capitalize('String')).toBe('String');
  });
});
