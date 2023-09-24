import { chromium, expect, test } from "@playwright/test";

test.describe("Button component is visible on multiple pages", () => {
  let browser;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test.beforeEach(async () => {
    await page.goto("http://localhost:5173");
  });

  // Define a reusable function to navigate to pages and check buttons
  async function navigateToPageAndCheckButton(pageUrl) {
    await page.goto(`http://localhost:5173${pageUrl}`);
    await expect(page.getByTestId("next-button")).toBeVisible();
  }

  test("should be visible on the home page", async () => {
    // Check the home page
    await expect(page.getByTestId("next-button")).toBeVisible();
  });

  test("should navigate through pages and check the button", async () => {
    // Define the sequence of page navigation
    const pageSequence = [
      "/joke-randomiser",
      "/card-flip-game",
      "/rate-joke",
      "/joke-fetch",
    ];

    // Iterate through pages and check the button
    for (const pageUrl of pageSequence) {
      await navigateToPageAndCheckButton(pageUrl);
    }
  });

  test("should go back to the home page from joke fetch page", async () => {
    // Navigate to joke-fetch page
    await navigateToPageAndCheckButton("/joke-fetch");

    // Go back to the home page
    await page.goBack();
    await expect(page.getByTestId("next-button")).toBeVisible();
  });
});
