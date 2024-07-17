import { test, expect } from '@playwright/test';
// test for transportation     
test.describe.serial('test for transportation ', () => {



test('test for creating a route and assigning vehicle', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('link', { name: 'Route', exact: true }).click();
  await page.getByLabel('Enter a Destination').click();
  await page.getByLabel('Enter a Destination').fill('lalghati');
  await page.locator('div').filter({ hasText: /^Stop Covered\*Enter Stop Covered$/ }).locator('div').nth(4).click();
  await page.getByLabel('Enter Stop Covered').fill('2');
  await page.locator('div').filter({ hasText: /^Cost \* Enter a cost$/ }).locator('div').nth(4).click();
  await page.getByLabel('Enter a cost').fill('100');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Transport' }).click();
  await page.getByRole('link', { name: 'Vehicle' }).click();
  await page.locator('div').filter({ hasText: /^Vehicle No\*Vehicle No$/ }).locator('div').nth(4).click();
  await page.getByLabel('Vehicle No').fill('mp05hk5210');
  await page.locator('div').filter({ hasText: /^No of Seats \* No of Seats$/ }).locator('div').nth(4).click();
  await page.getByLabel('No of Seats').fill('50');
  // await page.getByLabel('Route', { exact: true }).click();
  // await page.getByLabel('lalghati', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});



});