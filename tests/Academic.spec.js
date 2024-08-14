import { test, expect } from '@playwright/test';
// test for academic year   
test.describe.serial('test for academic year creation and deletion ', () => {
  
  test('test for academic year creation', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Academic Year' }).first().click();
    await page.getByTestId('start-year').click();
    await page.getByTestId('start-year').fill('2025');
    await page.getByTestId('end-year').click();
    await page.getByTestId('end-year').fill('2026');
    await page.getByRole('button', { name: 'Create' }).click();
    await expect(page.getByText('AY-2025-2026')).toBeVisible();
    });


  test('test for deleting academic year ', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Academic Year' }).first().click();
    await page.getByLabel('AY-2025-2026').getByText('Delete').click();
    await expect(page.getByText('AY-2025-2026')).not.toBeVisible();
      
  });  



});


test('test for update school detail', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'School Details' }).first().click();
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('2002');
  await page.getByLabel('CBSE,').click();
  await page.getByLabel('CBSE', { exact: true }).click();
  await page.getByLabel(',', { exact: true }).click();
  await page.getByLabel('CBSE', { exact: true }).getByText('CBSE').click();
  await page.getByRole('button', { name: 'update' }).click();
});
  

test.describe.serial('test for academic year creation and deletion ', () => {

  test('test for academic year creation2', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Academic Year' }).first().click();
    await page.getByTestId('start-year').click();
    await page.getByTestId('start-year').fill('2026');
    await page.getByTestId('end-year').click();
    await page.getByTestId('end-year').fill('2027');
    await page.getByRole('button', { name: 'Create' }).click();
    await expect(page.getByText('AY-2026-2027')).toBeVisible();
    });


    test('test for deleting academic year2 ', async ({ page }) => {
      await page.goto('https://testschool.launchmysite.in/');
      await page.getByPlaceholder('Enter your Email').click();
      await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
      await page.getByPlaceholder('Enter your password').click();
      await page.getByPlaceholder('Enter your password').fill('test@123');
      await page.getByRole('button', { name: 'Sign In' }).click();
      await page.getByRole('link', { name: 'Academic Year' }).first().click();
      await page.getByLabel('AY-2026-2027').getByText('Delete').click();
      await expect(page.getByText('AY-2026-2027')).not.toBeVisible();
    
    });  
    
});