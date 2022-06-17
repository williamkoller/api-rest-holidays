module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/modules/app/**',
    '!<rootDir>/src/config/**',
    '!<rootDir>/src/docs/**',
    '!<rootDir>/src/modules/**/**.module.ts',
    '!<rootDir>/src/modules/**/**.settings.ts',
    '!<rootDir>/src/modules/**/dtos/**/**.dto.ts',
    '!<rootDir>/src/data/protocols/db/**/index.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
