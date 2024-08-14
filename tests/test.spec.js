import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Promotion' }).first().click();
  await page.getByRole('link', { name: 'Download TC' }).click();
  await page.getByTestId('select-academic-year').click();
  await page.getByLabel('AY-2024-2025', { exact: true }).click();
  await page.getByTestId('select-class').click();
  await page.getByLabel('class-6th', { exact: true }).click();
  await page.getByTestId('select-batch').click();
  await page.getByLabel('class-6th-B-2024', { exact: true }).click();
  await page.getByText('Test6').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page1 = await page1Promise;
});