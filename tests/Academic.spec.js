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
      await page.getByTestId('start-year').fill('2027');
      await page.getByTestId('end-year').fill('2028');
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
        await page.getByText('AY-2027-2028').first().click();
        await page.getByLabel('AY-2027-2028').getByText('Delete').click();
        await expect(page.getByText('AY-2027-2028')).not.toBeVisible();
      
      });  


    

});


test.describe.serial('test for academic year creation and deletion ', () => {

  test('test for academic year creation', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(8)').click();
    await page.getByTestId('start-year').fill('2027');
    await page.getByTestId('end-year').fill('2028');
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







test.describe.serial('test for class and section ', () => {

test('test for assign class teacher', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
  await page.getByRole('link', { name: 'Classs Teacher' }).click();
  await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
  await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
  await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
  await page.getByLabel('test3').getByText('Assign Class Teacher').click();
  await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
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
  await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
  await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
  await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
  await page.getByLabel('test5').getByText('Assign Class Teacher').click();
  await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
});

});
