import { test, expect } from '@playwright/test';
// test for academic year   
test.describe.serial('test for academic year creation and deletion ', () => {



  test('test for creating employee category ', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'HR Management' }).first().click();
    await page.getByRole('link', { name: 'Manage Employee Category' }).click();
    await page.getByPlaceholder('Enter category name').click();
    await page.getByPlaceholder('Enter category name').fill('second division');
    await page.getByPlaceholder('Enter prefix').click();
    await page.getByPlaceholder('Enter prefix').fill('test2');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('https://testschool.launchmysite.in/hr_management/employee_category');
    await expect(page.getByText('test').nth(0)).toBeVisible()
  });


  test('test for academic year creation', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
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
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Academic Year' }).first().click();
    await page.getByLabel('AY-2025-2026').getByText('Delete').click();
    await expect(page.getByText('AY-2025-2026')).not.toBeVisible();
      
  });  

  test('test for update school detail', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'School Details' }).first().click();
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('2002');
    await page.getByRole('button', { name: 'update' }).click();
    await page.getByLabel('CBSE,').click();
    await page.getByLabel('CBSE', { exact: true }).click();
    await page.getByLabel(',', { exact: true }).click();
    await page.getByLabel('CBSE', { exact: true }).getByText('CBSE').click();
    await page.getByRole('button', { name: 'update' }).click();
  });
    

});


test.describe.serial('test for academic year creation and deletion ', () => {

  test('test for academic year creation2', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
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
      await page.getByPlaceholder('Enter your Email').fill('test@example.com');
      await page.getByPlaceholder('Enter your password').click();
      await page.getByPlaceholder('Enter your password').fill('test@123');
      await page.getByRole('button', { name: 'Sign In' }).click();
      await page.getByRole('link', { name: 'Academic Year' }).first().click();
      await page.getByLabel('AY-2026-2027').getByText('Delete').click();
      await expect(page.getByText('AY-2026-2027')).not.toBeVisible();
    
    });  
    
});



test.describe.serial('test for class and section ', () => {

  test('test for assign class teacher', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByPlaceholder('Enter your password').press('Enter');
    await page.locator('.mt-4 > div > .grid > div:nth-child(2)').first().click();
    await page.getByText('EmployeeHomeEmployee').click();
    await page.getByLabel('Breadcrumbs').getByText('Home').click();
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.getByRole('link', { name: 'Classs Teacher' }).click();
    await page.locator('div').filter({ hasText: /^Select Classclass-4thclass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,class-4th');
    await page.locator('div').filter({ hasText: /^Selectclass-4th-A-2024class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,class-4th-A-2024');
    await page.getByText('No Teacher Assigned').click();
    await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
    await expect(page.getByText('Assign Class Teacher')).not.toBeVisible();
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
  await page.locator('div').filter({ hasText: /^Select Classclass-4thclass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,class-4th');
  await page.locator('div').filter({ hasText: /^Selectclass-4th-A-2024class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,class-4th-A-2024');
  await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
  await page.getByLabel('test5').getByText('Assign Class Teacher').click();
  await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
});

});
