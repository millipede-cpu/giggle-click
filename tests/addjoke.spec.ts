import { test, expect } from "@playwright/test";

test("enter a joke and see it rendered on a page", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page
    .locator('input[id="joke"]')
    .fill("Do tomatoes and potatoes have anything in common?Toes.");
  await page.locator('button[class="submit-joke"]').click();
  await page
    .locator(
      'span:has-text("Do tomatoes and potatoes have anything in common?Toes.")'
    )
    .isVisible();
});
