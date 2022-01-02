module.exports = {
  roots: ['<rootDir>/src'],
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'],
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [
    '<rootDir>/src/__test__/jest.setup.js',
    '<rootDir>/src/__test__/jest.setup-after.js',
  ],
  verbose: true,
  errorOnDeprecated: true,
  collectCoverageFrom: ['<rootDir>/src/app/**/*.{js,ts}'],
  setupFiles: ['<rootDir>/src/__test__/jest.setup.js'],
  setupFilesAfterEnv: ['./src/__test__/jest.setup-after.js'],
  runner: 'groups', // jest-runner-groups,
  globals: {
    DEBUG: 'true',
    MOCK_DATA: 'true',
  },
};
