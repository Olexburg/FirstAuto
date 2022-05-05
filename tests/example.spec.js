const { test, expect } = require('@playwright/test');
test('basic test', async ({ page }) => {
    await page.goto('https://learn.javascript.ru/');
    const title = page.locator('//a[contains (text(),\'Курсы\')]');
    await expect(title).toHaveText('Курсы');
});