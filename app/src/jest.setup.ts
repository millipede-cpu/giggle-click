import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./test-utils/server";

// Enable API mocking before tests
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done
afterAll(() => server.close());
