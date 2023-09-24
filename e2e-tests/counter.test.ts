import { test, chromium, expect } from "@playwright/test";

test("Counter button increments by one each time it is clicked", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    // go to homepage
    await page.goto("http://localhost:5173");
    // wait for counter button selector
    await page.waitForLoadState();
    const button = await page.$(".counter-button");
    // initialise incrementedNumber variable
    const incrementedNumber = await page.$(".incremented-number");
    // iterate through incremented numbers, beginning at 1 and ending at 10
    for (let i = 0; i < 10; i++) {
      await button?.click();
    }
    // inititalise text variable to keep track of the incrementing numbers shown on the page
    const text = await page.evaluate(
      (element) => element?.textContent,
      incrementedNumber
    );
    await expect(text).toContain("10");
  } catch (e) {
    console.error(e);
  }
});
