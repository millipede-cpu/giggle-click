import { test, expect } from "@playwright/test";

test("allocating icons for happy and sad joke response", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.locator('span[class="happy"]');
  await page.locator('span[class="sad"]');
});
