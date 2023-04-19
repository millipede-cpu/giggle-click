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

// import type { Config } from "@jest/types";

// const config: Config.InitialOptions = {
//   verbose: true,
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
//   testEnvironment: "jsdom",
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1",
//   },
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
//   collectCoverage: true,
//   coverageThreshold: {
//     global: {
//       statements: 90,
//       branches: 90,
//       functions: 90,
//       lines: 90,
//     },
//   },
// };

// export default config;

// import type { Config } from "@jest/types";

// const config: Config.InitialOptions = {
//   verbose: true,
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
//   testEnvironment: "jsdom",
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1",
//   },
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
//   collectCoverage: true,
//   coverageThreshold: {
//     global: {
//       statements: 90,
//       branches: 90,
//       functions: 90,
//       lines: 90,
//     },
//   },
//   preset: "ts-jest",
// };

// export default config;

// import type { Config } from "@jest/types";

// const config: Config.InitialOptions = {
//   preset: "react-native ts-jest",
//   verbose: true,
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
//   testEnvironment: "jsdom",
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1",
//   },
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
//   collectCoverage: true,
//   coverageThreshold: {
//     global: {
//       statements: 90,
//       branches: 90,
//       functions: 90,
//       lines: 90,
//     },
//   },
// };

// export default config;

// jest.config.js
// module.exports = {
//   preset: "ts-jest/presets/default-esm",
//   testEnvironment: "node",
//   testMatch: ["<rootDir>/src/**/*.spec.ts"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1",
//   },
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   globals: {
//     "ts-jest": {
//       tsconfig: "<rootDir>/tsconfig.json",
//     },
//   },
// };

// export {};
