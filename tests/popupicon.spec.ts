import { chromium, test } from "@playwright/test";

test("allocating icons for happy and sad joke response", async ({ page }) => {
  // const browser = await chromium.launch({
  //   headless: false,
  //   slowMo: 3000,
  // });
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto("http://localhost:5173/rate-joke");
  await page.locator('button[class="happy-click"]').click();
  await page.locator('span[class="happy"]').isVisible();
  await page.locator('button[class="sad-click"]').click();
  await page.locator('span[class="sad"]').isVisible;
});
