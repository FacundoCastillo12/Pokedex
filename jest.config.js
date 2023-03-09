/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: '../coverage/',
  testPathIgnorePatterns: ['/node_modules/', '.*fixture.js', '.*fixture.ts', '/dist/'],
  coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js', '.*fixture.ts', '/dist/'],
  resolver: 'jest-ts-webcompat-resolver',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
};
