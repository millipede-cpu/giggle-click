import { test, expect } from "@playwright/test";

test("The joke is complete, type of boolean equal to true with a checkbox", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  expect(await page.isChecked('input[type="checkbox"]')).toBeFalsy();
});
