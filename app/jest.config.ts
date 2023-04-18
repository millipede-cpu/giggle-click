import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testEnvironment: "jsdom",
};

export default config;

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1",
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };
