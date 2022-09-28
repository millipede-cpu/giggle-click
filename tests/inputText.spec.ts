import { chromium, test, expect } from "@playwright/test";

test("Typing a joke and punchline should only appear on the page after clicking the Submit Joke button", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  // Typing text shouldn't appear on the home page
  // until Submit Joke button is clicked
  await page
    .locator('input[id="joke"]')
    .fill(
      "Why do scientists not trust atoms? Because they make up everything."
    );
  await page.locator('button[class="submit-joke"]').click();
  await page.locator(
    'p:has-text("Why do scientists not trust atoms? Because they make up everything.")'
  );
});
