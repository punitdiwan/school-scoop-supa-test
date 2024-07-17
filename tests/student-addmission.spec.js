import { test, expect } from '@playwright/test';
// test for student addmission     
test.describe('test for student addmission ', () => {
 
  test('test for creating student category and deleting it', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.locator('.mb-6 > div > .group > div > .inline-flex').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Create Student Category' }).click();
    await page.getByPlaceholder('Enter category name').click();
    await page.getByPlaceholder('Enter category name').fill('test1');
    await page.locator('div').filter({ hasText: /^Description \*Max 40 characters$/ }).locator('div').nth(2).click();
    await page.getByPlaceholder('Enter description').fill('test1');
    await page.getByRole('button', { name: 'Save' }).click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByText('Delete').nth(3).click();
  });



  test('test for student admissions', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.locator('.group > div > .inline-flex').first().click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Student Admissions' }).click();
    await page.getByPlaceholder('Enter Admission No').click();
    await page.getByPlaceholder('Enter Admission No').fill('06');
    await page.locator('div').filter({ hasText: /^Full name\*$/ }).locator('div').nth(3).click();
    await page.getByPlaceholder('Enter your Full name').fill('test6');
    await page.locator('div').filter({ hasText: /^D\.O\.B\.\*$/ }).locator('div').nth(3).click();
    // await page.locator('[id="react-aria615390900-\\:ru\\:"]').fill('2000-01-01');
    await page.getByLabel('Select Category').click();
    // await page.getByLabel('common', { exact: true }).click();
    await page.getByLabel('Select Caste').click();
    // await page.getByLabel('General', { exact: true }).click();
    await page.getByLabel('Select a Class').click();
    // await page.getByLabel('nursery', { exact: true }).click();
    await page.getByLabel('Select a Section').click();
    // await page.getByLabel('nursery-A-2024', { exact: true }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
  });





  test('test for printing character certificate', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Character Certificate' }).click();
    await page.locator('div').filter({ hasText: /^Select OptionNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP');
    await page.locator('div').filter({ hasText: /^Select OptionNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR');
    await page.locator('div').filter({ hasText: /^Select OptionRishuTest3Test4Test6$/ }).getByRole('combobox').selectOption('EK66476lqMPO');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  




  test('test for printing id card', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.getByLabel('Select Student(s)').click();
    await page.getByLabel('All Students', { exact: true }).click();
    await page.getByLabel('Select Colour').click();
    await page.getByLabel('Select Colour').click();
    // await page.getByLabel('Wine', { exact: true }).click();
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  




  test('test for generating student roll number', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Generete Student Roll Number' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024,');
    await page.getByPlaceholder('Enter Prifix').click();
    await page.getByPlaceholder('Enter Prifix').press('CapsLock');
    await page.getByPlaceholder('Enter Prifix').fill('N');
    await page.getByPlaceholder('Enter Prifix').press('CapsLock');
    await page.getByPlaceholder('Enter Start Roll No.').click();
    await page.getByPlaceholder('Enter Start Roll No.').fill('01');
    await page.getByRole('button', { name: 'Generate' }).click();
  });
  



 


});

