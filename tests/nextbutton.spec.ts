import { chromium, test, expect } from "@playwright/test";

test("Button component is visible on multiple pages", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://localhost:5173");
  await page.isVisible("_react=NextButton");
});
