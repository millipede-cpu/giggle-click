import { test, expect } from "@playwright/test";

test("Checkbox with a type of boolean has a falsy value until the checkbox is clicked and complete", async ({
  page,
}) => {
  await page.goto("http://localhost:5173");
  expect(await page.isChecked('input[type="checkbox"]')).toBeFalsy();
});
