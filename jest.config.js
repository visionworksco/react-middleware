module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/src/test/jest.setup.ts'],
  verbose: true,
  errorOnDeprecated: true,
  collectCoverageFrom: ['<rootDir>/src/app/**/*.{js,ts}'],
  setupFiles: ['<rootDir>/src/test/jest.setup.ts'],
  setupFilesAfterEnv: ['./src/test/jest.setup-after.ts'],
  transformIgnorePatterns: ['/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/jest.filemock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  globals: {
    NODE_ENV: 'test',
  },
};
