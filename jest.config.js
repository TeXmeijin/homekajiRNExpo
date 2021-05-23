module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "\\.(ts)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/",
  ],
  cacheDirectory: ".jest/cache",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
};
