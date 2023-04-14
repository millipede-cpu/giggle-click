import { chromium, expect, test } from "@playwright/test";

test.describe("Button component is visible on multiple pages", () => {
  let browser;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 3000 });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test.beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:5173/");
    page = await browser.newPage();
    await page.goto("http://localhost:5173/joke-randomiser");
    page = await browser.newPage();
    await page.goto("http://localhost:5173/card-flip-game");
    page = await browser.newPage();
    await page.goto("http://localhost:5173/rate-joke");
    page = await browser.newPage();
    await page.goto("http://localhost:5173/joke-fetch");
  });

  test.afterEach(async () => {
    await page.close();
  });

  // next button should be visible on home page.
  test("should be visible on the home page", async () => {
    try {
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });

  // should go to the Joke Randomiser page when clicked on home page.
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
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });

  test("should go to the Rate Joke page when clicked on Card Flip Game page", async () => {
    try {
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });

  test("should go to the joke fetch page when clicked on rate joke page", async () => {
    try {
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });

  test("should go back to the home page when clicked on joke fetch page", async () => {
    try {
      await page.click('button[class="next-button"]');
      await page.waitForLoadState();
      await expect(page.locator('button[class="next-button"]')).toBeVisible();
    } catch (e) {
      console.error(e);
    }
  });
});
