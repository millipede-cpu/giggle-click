import { test, expect } from "@playwright/test";

test("enter a joke and see it rendered on a page", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.locator('label="add-joke"]').isVisible();
  await page
    .locator("text=add-joke")
    .fill("Do tomatoes and potatoes have anything in common?Toes.");
});
