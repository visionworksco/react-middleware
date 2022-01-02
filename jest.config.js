module.exports = {
  roots: ['<rootDir>/src'],
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'],
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
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
