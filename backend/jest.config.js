module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['<rootDir>/test/**/*.test.ts'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  };
  