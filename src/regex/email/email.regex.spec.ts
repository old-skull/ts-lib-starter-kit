import { MOCK_GET_RANDOM_STRING } from '@mocks/index';
import { REGEX_EMAIL } from '.';

describe('Regex: email', () => {
  it('should fail for random string', () => {
    const isValid = REGEX_EMAIL.test(MOCK_GET_RANDOM_STRING());

    expect(isValid).toBeFalsy();
  });
});
