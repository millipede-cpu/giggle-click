import { chromium, test } from "@playwright/test";

test("Typing a joke and a pun and clicking the seperate buttons should render the text on the homepage", async () => {
  // Simualte a chromium browser with an attribute to slow the running time down by 3 seconds so that you can visually see the test going through each step.
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  // 1. user enters page.
  await page.goto("http://localhost:5173");
  // 2. user inputs text with placeholder.
  await page
    .getByPlaceholder("Type something funny")
    .fill("I used to be addicted to soap, but I'm clean now.");
  // 3. user clicks addjoke button.
  await page.locator(".submit-joke").click();
  // 4. joke displayed on page.
  await page
    .locator(
      '.showJokePun:has-text("I used to be addicted to soap, but I\'m clean now.")'
    )
    .isVisible();
  // 5. user inputs text with placeholder whats the pun?

  // 6. user clicks addpun button.
  // 7. pun displayed next to joke on page.
});
