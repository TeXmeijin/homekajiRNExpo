module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/",
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  cacheDirectory: ".jest/cache",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
};
