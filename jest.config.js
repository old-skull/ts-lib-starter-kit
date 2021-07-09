module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '.spec.(t|j)s$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: './coverage',
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '@mocks/(.*)': '<rootDir>/src/__mocks__/$1',
  },
};
