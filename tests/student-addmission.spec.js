import { test, expect } from '@playwright/test';
// test for student addmission     
test.describe('test for student addmission ', () => {
  test('test for id card', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2nd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
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
  



test('test for academic year creation', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Academic Year' }).first().click();
  await page.locator('div').filter({ hasText: /^Start Year\*$/ }).locator('div').nth(3).click();
  await page.getByPlaceholder('Enter start year').fill('2025');
  await page.getByPlaceholder('Enter end year').click();
  await page.getByPlaceholder('Enter end year').fill('2026');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByText('Academic Year Created').click();
  await page.getByRole('columnheader', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
});






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
});





test('test for student admission', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Students' }).first().click();
  await page.getByRole('link', { name: 'Student Admissions' }).click();
  await page.getByPlaceholder('Enter Admission No').click();
  await page.getByPlaceholder('Enter Admission No').fill('05');
  await page.getByPlaceholder('Enter your Full name').click();
  await page.getByPlaceholder('Enter your Full name').fill('test3');
  await page.locator('div').filter({ hasText: /^D\.O\.B\.\*$/ }).locator('div').nth(3).click();
  await page.getByText('Categorycommoncommon1CategorySelect Category').click();
  await page.getByLabel('common', { exact: true }).click();
  await page.getByText('CasteGeneralOBCSCSTCasteSelect Caste').click();
  // await page.getByLabel('General', { exact: true }).click();
  // await page.getByText('Classnurserykg1class-1stClassSelect a Class').click();
  // await page.getByLabel('nursery', { exact: true }).click();
  // await page.getByText('Sectionnursery-A-2024 SectionSelect a Section').click();
  // await page.getByLabel('nursery-A-2024', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});




});

