const config = require('./jest.config');

const configUpdated = {
  ...config,
  roots: ['<rootDir>/src/api', '<rootDir>/src/app'],
};

module.exports = configUpdated;
