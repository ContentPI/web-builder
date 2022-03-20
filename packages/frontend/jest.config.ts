import type { InitialOptionsTsJest } from 'ts-jest/dist/types'
import { defaults as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {
      compiler: 'typescript'
    }
  },
  globalSetup: '<rootDir>/src/testing/setupTests.ts',
  modulePaths: ['<rootDir>/'],
  transform: {
    ...tsjPreset.transform
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/testing/setupTests.ts'],
  testRegex: '(\\.|/)(test|spec)\\.(jsx?|tsx?)$',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*style*', '!src/**/*test*/**/*'],
  coverageThreshold: {
    global: {
      statements: 46,
      branches: 22,
      functions: 25,
      lines: 46
    }
  }
}
