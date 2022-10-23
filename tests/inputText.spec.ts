import { chromium, test } from "@playwright/test";

test("Typing a joke and pun should only appear on the page after clicking the Submit Joke button", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page
    .locator("#joke", {
      hasText: "Why do scientists not trust atoms?",
    })
    .locator(".submit-joke")
    .click({ force: true });
  await page.locator(
    '.showJokePun:has-text("Why do scientists not trust atoms?")'
  );
  await page
    .locator("#pun", {
      hasText: "Because they make up everything.",
    })
    .locator(".submit-pun")
    .click({ force: true });
  await page.locator(
    '.showJokePun:has-text("Because they make up everything.")'
  );
});
