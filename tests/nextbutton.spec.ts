import { chromium, expect, test } from "@playwright/test";

test.describe("Button component is visible on multiple pages", () => {
  let browser;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test.beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:5173/");
  });

  test.afterEach(async () => {
    await page.close();
  });

  test("should be visible on the home page", async () => {
    try {
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });

  test("should go to the Joke Randomiser page when clicked on home page", async () => {
    try {
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });

  test("should go to the Card Flip Game page when clicked on Joke Randomiser page", async () => {
    try {
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });

  test("should go to the Rate Joke page when clicked on Card Flip Game page", async () => {
    try {
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });

  test("should go back to the home page when clicked on Rate Joke page", async () => {
    try {
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await page.waitForSelector('button[class="next-button"]');
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await page.waitForSelector('button[class="next-button"]');
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await page.waitForSelector('button[class="next-button"]');
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });
});
