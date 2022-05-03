const config = require('./jest.config');

const configUpdated = {
  ...config,
  roots: ['<rootDir>/src/test/integration'],
  testEnvironment: 'node',
};

module.exports = configUpdated;
