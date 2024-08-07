import { test, expect } from '@playwright/test';
// test for employee addmission and category creation     
test.describe('test for employee addmission ', () => {


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



  test('test for creating employee department ', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'HR Management' }).first().click();
    await page.getByRole('link', { name: 'Employee department' }).click();
    await page.locator('div').filter({ hasText: /^Name \*$/ }).locator('div').nth(2).click();
    await page.getByPlaceholder('Enter name').fill('eeee');
    await page.locator('div').filter({ hasText: /^Code \*Max 5 characters$/ }).locator('div').nth(2).click();
    await page.getByPlaceholder('Enter code').fill('yyy');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('https://testschool.launchmysite.in/hr_management/employee_department');
    await expect(page.getByText('first div').nth(0)).toBeVisible()

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
    await page.waitForLoadState('networkidle');
    await page.goto('https://testschool.launchmysite.in/employee/view_all_employee');
    await page.waitForSelector('text=Test', { exact: true });
    await expect(page.getByText('test@gmail.com', { exact: true })).toBeVisible();

  });
  

  test('test for employee admission2', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    
    await page.locator('.mt-4 > div > .grid > div:nth-child(2)').first().click();
    await page.getByRole('link', { name: 'Employee Admission' }).click();
    
    
    await page.locator('input[name="employee_number"]').click();
    await page.locator('input[name="employee_number"]').fill('08');
    await page.getByPlaceholder('Enter your first name').click();
    await page.getByPlaceholder('Enter your first name').fill('testdfg');
    await page.locator('input[name="dob"]').fill('2000-01-01');
    await page.getByPlaceholder('example@gmail.com').click();
    await page.getByPlaceholder('example@gmail.com').fill('testfvh@gmail.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@sg');
    await page.locator('select[name="employee_department"]').selectOption('rUCfBpXTlyxU');
    await page.locator('select[name="employeecategories"]').selectOption('NBVTvQS6CItk');
    await page.getByPlaceholder('please enter 10 digit mobile').click();
    await page.getByPlaceholder('please enter 10 digit mobile').fill('4445484444');
    await page.getByLabel('Select Role').click();
    await page.getByLabel('Fee Creator', { exact: true }).click();
    
  
    await page.getByText('Submit').click();
    const employeeExists = await page.locator('text=test4').isVisible();
  });

  

      

  test('test for View All Employees', async ({ page }) => {
      await page.goto('https://testschool.launchmysite.in/');
      await page.locator('.group > div > .inline-flex').first().click();
      await page.getByPlaceholder('Enter your Email').fill('test@example.com');
      await page.getByPlaceholder('Enter your password').click();
      await page.getByPlaceholder('Enter your password').fill('test@123');
      await page.getByPlaceholder('Enter your password').press('Enter');
      await page.locator('.mt-4 > div > .grid > div:nth-child(2)').first().click();
      await page.getByRole('link', { name: 'View All Employees' }).click();
      await expect(page.getByText('test')).toBeVisible();
  });
  

  test('test for search employee by name', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Employee' }).first().click();
    await page.getByRole('link', { name: 'View All Employees' }).click();
    await page.getByPlaceholder('Search by name...').click();
    await page.getByPlaceholder('Search by name...').fill('test8');
  });
  

  test('test for deleting employee category', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'HR Management' }).first().click();
    await page.getByRole('link', { name: 'Manage Employee Category' }).click();
    await page.getByRole('heading', { name: 'second division' }).first().click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page.getByRole('button', { name: 'Delete' }).first().click();
  });


  
  test('test for editing employee department', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.locator('.mb-6 > div > .group > div > .inline-flex').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'HR Management' }).first().click();
    await page.getByRole('link', { name: 'Employee department' }).click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.locator('div').filter({ hasText: /^Name\*$/ }).locator('div').nth(3).click();
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('table').getByText('Updated successfully').click();
  });

  
  test('test for editing Manage Employee Category', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(2) > div:nth-child(4)').first().click();
    await page.getByRole('link', { name: 'Manage Employee Category' }).click();
    await page.getByRole('heading', { name: 'First divison' }).click();
    await page.getByRole('button', { name: 'Edit' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Name\*$/ }).locator('div').nth(3).click();
    await page.getByRole('button', { name: 'Update' }).click();
    await expect(page.getByRole('main').getByText('Updated successfully').first()).toBeVisible();
  });



  // test('test for deleting employee department', async ({ page }) => {
  //   await page.goto('https://testschool.launchmysite.in/');
  //   await page.locator('.group > div > .inline-flex').first().click();
  //   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  //   await page.getByPlaceholder('Enter your password').click();
  //   await page.getByPlaceholder('Enter your password').fill('test@123');
  //   await page.getByRole('button', { name: 'Sign In' }).click();
  //   await page.locator('div:nth-child(2) > div:nth-child(4)').first().click();
  //   await page.getByRole('link', { name: 'Employee department' }).click();
  //   await page.getByRole('row', { name: 'eeee yyy Edit Delete' }).locator('span').click();
  //   await page.getByRole('button', { name: 'Delete' }).click();
  // });



});      


test.describe.serial('test for event creation ', () => {


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
    await page.getByPlaceholder('Enter your description').fill('leave');
    await page.getByTestId('start-date').fill('2024-01-01');
    await page.getByTestId('end-date').fill('2024-01-01');
    await page.getByTestId('start-date').inputValue();
    // console.log('Start Date:', startDateValue);
    await page.getByTestId('end-date').inputValue();
    // console.log('End Date:', endDateValue); 
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Successfully Added Events')).toBeVisible();
    await page.locator('text=holiday2').isVisible();
  });
  
  
  
  test('test for deleting events', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(3) > div > .grid > div:nth-child(3)').click();
    await expect(page.getByText('holiday')).toBeVisible();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await expect(page.getByText('Successfully Delete Event')).toBeVisible();
    await expect(page.getByText('leave')).not.toBeVisible();
  });
  



});    