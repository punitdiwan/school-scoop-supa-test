import { test, expect } from '@playwright/test';
// test for employee addmission and category creation     
test.describe('test for employee addmission ', () => {


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
    await page.getByPlaceholder('Enter prefix').fill('test2');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('https://testschool.launchmysite.in/hr_management/employee_category');
    const element = await expect(page.getByText('first division')).toBeVisible()
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.getByRole('link', { name: 'HR Management' }).first().click();
    await page.getByRole('link', { name: 'Employee department' }).click();
    await page.locator('div').filter({ hasText: /^Name \*$/ }).locator('div').nth(2).click();
    await page.getByPlaceholder('Enter name').fill('second div');
    await page.locator('div').filter({ hasText: /^Code \*Max 5 characters$/ }).locator('div').nth(2).click();
    await page.getByPlaceholder('Enter code').fill('test3');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('https://testschool.launchmysite.in/hr_management/employee_department');
    const element1 = await expect(page.getByText('first div')).toBeVisible()

  });
      
      
      
  test('test for employee admission', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div:nth-child(2)').first().click();
    await page.getByRole('link', { name: 'Employee Admission' }).click();
    await page.locator('input[name="employee_number"]').click();
    await page.locator('input[name="employee_number"]').fill('05');
    await page.getByPlaceholder('Enter your first name').click();
    await page.getByPlaceholder('Enter your first name').fill('test5');
    await page.locator('input[name="dob"]').fill('2005-05-05');
    await page.locator('label').filter({ hasText: /^Male$/ }).locator('div').nth(1).click();
    await page.locator('label').filter({ hasText: /^Male$/ }).locator('div').nth(1).click();
    await page.getByPlaceholder('example@gmail.com').click();
    await page.getByPlaceholder('example@gmail.com').fill('test5@gmail.com');
    await page.locator('div').filter({ hasText: /^Password$/ }).locator('div').nth(2).click();
    await page.getByPlaceholder('Enter your password').fill('test5@1');
    await page.locator('select[name="employee_department"]').selectOption('rUCfBpXTlyxU');
    await page.locator('select[name="employeecategories"]').selectOption('NBVTvQS6CItk');
    await page.getByPlaceholder('please enter 10 digit mobile').click();
    await page.getByPlaceholder('please enter 10 digit mobile').fill('55555555555');
    await page.getByLabel('Select Role').click();
    await page.getByLabel('Class Teacher', { exact: true }).click();
    await page.getByText('Submit').click();
    await page.goto('https://testschool.launchmysite.in/employee/view_all_employee');
    const element = await expect(page.getByText('test')).toBeVisible();

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
    const element = await expect(page.getByText('test')).toBeVisible();
  //   page.once('dialog', dialog => {
  //   console.log(`Dialog message: ${dialog.message()}`);
  //   dialog.dismiss().catch(() => {});
  //   });
  // await page.getByRole('link', { name: 'Delete' }).nth(1).click();



  });
});      


test.describe('test for event creation ', () => {

test('test for creating events', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(3) > div > .grid > div:nth-child(3)').click();
  await page.getByPlaceholder('Enter Title').click();
  await page.getByPlaceholder('Enter Title').fill('holiday');
  await page.getByPlaceholder('Enter your description').click();
  await page.getByPlaceholder('Enter your description').fill('holiday');
//   await page.locator('[id="react-aria8624273455-\\:rk\\:"]').fill('2024-07-01');
//   await page.locator('[id="react-aria8624273455-\\:ru\\:"]').fill('2024-07-03');
  await page.locator('label').filter({ hasText: 'This event is Holiday' }).locator('svg').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});



test('test for deleting events', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(3) > div > .grid > div:nth-child(3)').click();
  const element = await expect(page.getByText('holiday')).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  const element2 = await expect(page.getByText('Successfully Delete Event')).toBeVisible();
});




});    