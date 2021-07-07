module.exports = {
    "moduleFileExtensions": [
	"ts",
	"tsx",
	"js",
	"jsx"
    ],
    "transform": {
	"^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testMatch": [
	"**/*.test.+(ts|tsx)"
    ],
    "coverageDirectory": "flaskr/static/coverage",
    "testEnvironment": "jsdom"
};
