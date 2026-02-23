const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^framer-motion$': '<rootDir>/__mocks__/framer-motion.js',
    '^lucide-react$': '<rootDir>/__mocks__/lucide-react.js',
  },
}

module.exports = createJestConfig(customJestConfig)
