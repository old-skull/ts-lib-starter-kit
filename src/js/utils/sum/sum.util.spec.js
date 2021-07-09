import { sum } from './index';

describe('JS Utils: sum', () => {
  it('should sum two positive numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
