import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testMatch: [
    "/**/src/**/*.(test).{js,jsx,ts,tsx}",
    "/**/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}",
  ],
  verbose: true,
  moduleFileExtensions: ["js", "ts", "tsx", "jsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  testEnvironment: "jsdom",
};

export default config;
