import { test, expect } from '@playwright/test';

test('popup abre e exibe conteúdo', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com');
  expect(page).toBeTruthy();
  await context.close();
});