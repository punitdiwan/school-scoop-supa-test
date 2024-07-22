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
      await page.locator('div:nth-child(8)').click();
      await page.getByPlaceholder('Enter start year', { timeout: 60000 }).click();
      // await page.getByPlaceholder('Enter start year').fill('2027');
      await page.getByPlaceholder('Enter start year').fill('2027');
      await page.getByPlaceholder('Enter end year').click();
      await page.getByPlaceholder('Enter end year').fill('2028');
      await page.getByRole('button', { name: 'Create' }).click();
      await expect(page.getByText('Academic Year Created Successfully!')).toBeVisible();
      });






      test('test for deleting academic year ', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.locator('div:nth-child(8)').click();
        await page.getByText('AY-2027-2028').click();
        await page.getByLabel('AY-2027-2028').getByText('Delete').click();
        await expect(page.getByText('AY-2027-2028')).not.toBeVisible();
      
      });  


    

});


