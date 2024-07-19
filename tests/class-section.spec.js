import { test, expect } from '@playwright/test';
// test for class and section    
test.describe('test for class and section ', () => {

  test('test for academic year creation', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Academic Year' }).first().click();
    await page.locator('div').filter({ hasText: /^Start Year\*$/ }).locator('div').nth(3).click();
    await page.getByPlaceholder('Enter start year').fill('2027');
    await page.getByPlaceholder('Enter end year').click();
    await page.getByPlaceholder('Enter end year').fill('2028');
    await page.getByRole('button', { name: 'Create' }).click(); 
    const element = await expect(page.getByText('Academic Year Created Successfully!')).toBeVisible(); 
    await page.goto('https://testschool.launchmysite.in/academicYear');
    const element2 = await expect(page.getByText('AY-2027-2028')).toBeVisible();
  });

  

test('test for creating class & section', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByText('Class And Section').click();
    await page.getByRole('link', { name: 'Create Class And Section' }).click();
    await page.locator('input[name="class-2ndChecked"]').check();
    await page.locator('div').filter({ hasText: /^class-2ndABCD$/ }).getByRole('checkbox').nth(1).check();
    await page.locator('div').filter({ hasText: /^class-2ndABCD$/ }).getByRole('checkbox').nth(2).check();
    await page.locator('#startdate').fill('2024-01-01');
    await page.getByLabel('Select Academic Year').click();
    // await page.getByLabel('AY-2024-2025', { exact: true }).click();
    await page.getByLabel('Select Medium').click();
    // await page.getByLabel('English', { exact: true }).click();
    await page.getByRole('button', { name: 'Save' });
  });




  test('test for assign class teacher', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.getByRole('link', { name: 'Classs Teacher' }).click();
    await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,nursery');
    await page.locator('div').filter({ hasText: /^Selectnursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,nursery-A-2024');
    await page.getByRole('combobox').nth(2).selectOption('O9W9TBEI4Cqr');
    await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
    await page.getByLabel('test', { exact: true }).getByText('Assign Class Teacher').click();
        const element1 = await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
  });


  test('test for assign class teacher2', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.getByRole('link', { name: 'Classs Teacher' }).click();
    await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,nursery');
    await page.locator('div').filter({ hasText: /^Selectnursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,nursery-A-2024');
    await page.getByRole('combobox').nth(2).selectOption('O9W9TBEI4Cqr');
    await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
    await page.getByLabel('test3', { exact: true }).getByText('Assign Class Teacher').click();
        const element1 = await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
  });


  
test('test for student batch shifting', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Class And Section').click();
  await page.getByRole('link', { name: 'Student\'s Batch Shifting' }).click();
  await page.getByLabel('Select a Class', { exact: true }).click();
  await page.getByLabel('Nursery', { exact: true }).click();
  await page.getByLabel('Select a Section', { exact: true }).click();
  await page.getByLabel('A_2019_2020', { exact: true }).click();
  await page.locator('.grow').click();
  await page.getByRole('option', { name: 'akshay' }).click();
  await page.getByLabel('Select a Batch', { exact: true }).click();
  await page.getByLabel('Select a Batch', { exact: true }).click();
  await page.getByLabel('KG1_A_2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Transfer' }).click();
});



test('test for academic year deletion', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(8)').click();
  await page.getByLabel('AY-2027-2028').getByText('Delete').click();
});



});


  