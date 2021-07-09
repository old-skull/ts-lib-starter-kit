import { MOCK_GET_RANDOM_STRING } from '@mocks/index';
import { REGEX_PASSWORD } from '.';

describe('Regex: password', () => {
  it('should fail for random string', () => {
    const isValid = REGEX_PASSWORD.test(MOCK_GET_RANDOM_STRING());

    expect(isValid).toBeFalsy();
  });
});
