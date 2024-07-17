import { test, expect } from '@playwright/test';
// test for employee addmission and category creation     
test.describe('test for student addmission ', () => {



    test('test for creating employee category and department ', async ({ page }) => {
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
        await page.getByPlaceholder('Enter prefix').fill('sdiv');
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('link', { name: 'Dashboard' }).click();
        await page.getByRole('link', { name: 'HR Management' }).first().click();
        await page.getByRole('link', { name: 'Employee department' }).click();
        await page.locator('div').filter({ hasText: /^Name \*$/ }).locator('div').nth(2).click();
        await page.getByPlaceholder('Enter name').fill('second div');
        await page.locator('div').filter({ hasText: /^Code \*Max 5 characters$/ }).locator('div').nth(2).click();
        await page.getByPlaceholder('Enter code').fill('sdiv2');
        await page.getByRole('button', { name: 'Save' }).click();
      });
      
      
      
      test('test for employee admission', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByRole('link', { name: 'Employee' }).first().click();
        await page.getByRole('link', { name: 'Employee Admission' }).click();
        await page.locator('input[name="employee_number"]').click();
        await page.locator('input[name="employee_number"]').fill('03');
        await page.getByPlaceholder('Enter your first name').click();
        await page.getByPlaceholder('Enter your first name').fill('test3');
        await page.locator('input[name="dob"]').fill('2001-01-02');
        await page.getByPlaceholder('example@gmail.com').click();
        await page.getByPlaceholder('example@gmail.com').fill('test3@gmail.com');
        await page.locator('div').filter({ hasText: /^Password$/ }).locator('div').nth(2).click();
        await page.getByPlaceholder('Enter your password').fill('test@1');
        await page.locator('select[name="employee_department"]').selectOption('mNkGupYgmYUd');
        await page.locator('select[name="employeecategories"]').selectOption('ErPLtjJqRmIV');
        await page.getByPlaceholder('please enter 10 digit mobile').click();
        await page.getByPlaceholder('please enter 10 digit mobile').fill('9874563211');
        await page.getByLabel('Select Role').click();
        await page.getByLabel('Fee Manager', { exact: true }).click();
        await page.getByText('Submit').click();
        await page.getByText('Successfully Register Employee');
      });

      

    test('test for View All Employees', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div:nth-child(2)').first().click();
    await page.getByRole('link', { name: 'View All Employees' }).click();
    await page.getByRole('link', { name: 'Edit' }).nth(1).click();
    await page.getByRole('link', { name: 'Employee' }).click();
    await page.getByRole('link', { name: 'View All Employees' }).click();
    page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
    });
  await page.getByRole('link', { name: 'Delete' }).nth(1).click();
  });
      
});    