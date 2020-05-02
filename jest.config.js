module.exports = {
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ["<rootDir>/src/"],
    coverageReporters: ["json", "lcov", "junit"],
    setupFilesAfterEnv: ["<rootDir>/src/setupFiles.js"]
};