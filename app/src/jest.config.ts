import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/e2e-tests", "/tests-examples"],
  testMatch: ["**/src/**/*.test.tsx"],
  testEnvironment: "jsdom",
};

export default config;
