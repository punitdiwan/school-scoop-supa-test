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
    await page.getByPlaceholder('Enter description').fill('testdes');
    await page.getByRole('button', { name: 'Save' }).click();
    const element = await expect(page.getByText('Created successfully')).toBeVisible();
    // page.once('dialog', dialog => {
    //   console.log(`Dialog message: ${dialog.message()}`);
    //   dialog.dismiss().catch(() => {});
    // });
    // await page.getByText('Delete').nth(3).click();
    await page.goto('https://testschool.launchmysite.in/students/create_student_category');
    const element2 = await expect(page.getByText('test1')).toBeVisible();
  });



  test('test for viewing siblings', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'View All Siblings' }).click();
    await page.goto('https://testschool.launchmysite.in/students/view_all_siblings');
    const element = await expect(page.getByText('test@gmail.com')).toBeVisible();
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
  




  test('test for printing id card(wine)', async ({ page }) => {
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
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  

  test('test for printing id card(indigo)', async ({ page }) => {
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
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  


  test('test for printing id card(Grassy)', async ({ page }) => {
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
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  


  test('test for printing id card(sky)', async ({ page }) => {
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
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });


  test('test for printing id card(newtemp)', async ({ page }) => {
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
    await page.getByPlaceholder('Enter Start Roll No.').fill('2');
    await page.getByRole('button', { name: 'Generate' }).click();
    const element = await expect(page.getByText('Success Generate Student Roll No.')).toBeVisible();
    await page.goto('https://testschool.launchmysite.in/manage_exam/student_roll_number');
    const element2 = await expect(page.getByText('Acadamic Year:- AY-2024-2025')).toBeVisible();

  });



  

 


});

