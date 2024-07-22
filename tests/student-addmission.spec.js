import { test, expect } from '@playwright/test';
// test for student addmission     
test.describe('test for student addmission ', () => {
 
  test('test for creating student category', async ({ page }) => {
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
    await expect(page.getByText('Created successfully')).toBeVisible();
    await page.goto('https://testschool.launchmysite.in/students/create_student_category');
    await expect(page.getByText('test1').nth(0)).toBeVisible();
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
    await expect(page.getByText('test@gmail.com')).toBeVisible();
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
    await page.locator('div').filter({ hasText: /^Select OptionKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP');
    await page.locator('div').filter({ hasText: /^Select OptionNursery-A-2024Nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR');
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
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
    await page.getByText('Class *Select ClassKg1Class-1stClass-2ndClass-3rdBatch *SelectSelect Students*').click();
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024Nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.getByLabel('Select Student(s)').click();
    await page.getByLabel('Rishu', { exact: true }).getByText('Rishu').click();
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
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
    await page.getByText('Class *Select ClassKg1Class-1stClass-2ndClass-3rdBatch *SelectSelect Students*').click();
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024Nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.getByLabel('Select Student(s)').click();
    await page.getByLabel('Rishu', { exact: true }).getByText('Rishu').click();
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
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
    await page.getByText('Class *Select ClassKg1Class-1stClass-2ndClass-3rdBatch *SelectSelect Students*').click();
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024Nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.getByLabel('Select Student(s)').click();
    await page.getByLabel('Rishu', { exact: true }).getByText('Rishu').click();
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
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
    await page.getByText('Class *Select ClassKg1Class-1stClass-2ndClass-3rdBatch *SelectSelect Students*').click();
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024Nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.getByLabel('Select Student(s)').click();
    await page.getByLabel('Rishu', { exact: true }).getByText('Rishu').click();
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
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
    await page.getByText('Class *Select ClassKg1Class-1stClass-2ndClass-3rdBatch *SelectSelect Students*').click();
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024Nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.getByLabel('Select Student(s)').click();
    await page.getByLabel('Rishu', { exact: true }).getByText('Rishu').click();
    await page.getByLabel('Select Colour').click();
    await page.getByLabel('Select Colour').click();
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  
  test('test for id card printing(all)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024Nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.getByLabel('Select Student(s)').click();
    await page.getByLabel('Rishu', { exact: true }).click();
    await page.getByLabel('Select Colour').click();
    await page.getByLabel('Select Colour').click();
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page2 = await page2Promise;
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page3 = await page3Promise;
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page4Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page4 = await page4Promise;
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page5Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page5 = await page5Promise;
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
  await page.locator('div').filter({ hasText: /^Select ClassKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
  await page.locator('div').filter({ hasText: /^SelectNursery-A-2024Nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024,');
  await page.getByPlaceholder('Enter Prifix').click();
  await page.getByPlaceholder('Enter Prifix').fill('r');
  await page.getByPlaceholder('Enter Start Roll No.').click();
  await page.getByPlaceholder('Enter Start Roll No.').fill('1');
  await page.getByRole('button', { name: 'Generate' }).click();
        await expect(page.getByText('Success Generate Student Roll No.')).toBeVisible();
      await page.goto('https://testschool.launchmysite.in/manage_exam/student_roll_number');
      await expect(page.getByText('Acadamic Year:- AY-2024-2025')).toBeVisible();
  });


  test('test for Attendance Register', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.locator('.group > div > .inline-flex').first().click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(3) > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Attendance Register' }).click();
    await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^Selectnursery-A-2024nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,nursery-A-2024,KWPU7c8CRxmc');
    await page.getByRole('button', { name: 'View Students' }).click();
    await expect(page.getByText('rishu')).toBeVisible();
    await page.getByLabel('Select Month:').selectOption('5');
    await page.getByText('Select Year:').click();
    await page.getByRole('button', { name: 'View Students' }).click();
    await expect(page.getByText('rishu')).toBeVisible();
  });
  
  
  
  
  test('test for Attendance Report', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(3) > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Attendance Report' }).click();
    await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,');
    await page.locator('div').filter({ hasText: /^Selectnursery-A-2024nursery-B-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,01-06-2024');
    await expect(page.getByText('rishu')).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });


  test('test for View All Student', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'View All Student' }).click();
    await page.getByLabel('Select a Class').click();
  //   await page.getByLabel('nursery', { exact: true }).click();
    await page.getByLabel('Select a Section').click();
  //   await page.getByLabel('nursery-A-2024', { exact: true }).click();
  
  });




  test('test for deleting student category', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Create Student Category' }).click();
    await page.getByText('test1').click();
    await page.getByLabel('test1').getByRole('gridcell', { name: 'Edit Delete' }).click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page.getByLabel('test1').getByText('Delete').click();
    await expect(page.getByText('Deleted Successfully!')).toBeVisible();
    await expect(page.getByText('test1')).not.toBeVisible();
  });
  

 


});

