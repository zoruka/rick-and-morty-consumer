module.exports = {
	roots: ['<rootDir>/tests'],
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	testEnvironment: 'node',
	transform: {
		'.+\\.(ts|tsx)$': 'ts-jest',
	},
	moduleNameMapper: {
		'@/tests/(.*)': '<rootDir>/tests/$1',
		'@/(.*)': '<rootDir>/src/$1',
	},
};
