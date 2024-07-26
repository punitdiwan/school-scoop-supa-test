import { test, expect } from '@playwright/test';

// // // test for Assign Transport Route Wise'
// // //'test for Students Batch Promotion'
// // // test to Archive Student
// // // test to unArchive Student
// // // test to test to Download TC
// // // test to test to Unassign Transport
// // // test to test for Class Batch Wise Report
// // // test to Manage Student Of Buses
// // // test for Defaulter student list
// // // test for student admissions
// // // test for class creation   (working but class is not creating)





// -------
    //   await expect(page.getByText('test1').nth(0)).toBeVisible();

// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//   await page.getByRole('link', { name: 'Create Class And Section' }).click();
//   await page.locator('input[name="class-5thChecked"]').check();
//   await page.getByText('class-5th').click();
//   await page.locator('div').filter({ hasText: /^class-5thABCD$/ }).getByRole('checkbox').nth(1).check();
//   await page.locator('div').filter({ hasText: /^class-5thABCD$/ }).getByRole('checkbox').nth(2).check();
//   await page.getByTestId('start-date').fill('2024-05-01');
//   await page.getByLabel('Select Academic Year').click();
//   await page.getByLabel('AY-2025-2026', { exact: true }).press('ArrowDown');
//   await page.getByLabel('AY-2024-2025', { exact: true }).press('Enter');
//   await page.getByLabel('Select Medium').click();
//   await page.locator('select[name="medium"]').selectOption({ label: 'English' });
//   await page.getByRole('button', { name: 'Save' }).click();
// });

 


// test('test for creating class section(4th-B)', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//   await page.getByRole('link', { name: 'Manage Class' }).click();
//   await page.getByText('class-4th').click();
//   await page.getByRole('link', { name: 'View Section (1)' }).click();
//   await page.getByRole('button', { name: 'Add New Section' }).click();
//   await page.getByPlaceholder('Enter section name').click();
//   await page.getByPlaceholder('Enter section name').press('CapsLock');
//   await page.getByPlaceholder('Enter section name').fill('B');
//   await page.getByPlaceholder('Enter section name').press('CapsLock');
//   await page.getByPlaceholder('Enter start date').fill('2024-01-01');
//   await page.getByText('EndDate').click();
//   await page.getByPlaceholder('Enter end date').fill('2025-01-01');
//   await page.getByLabel('Select Academic Year').click();
//   await page.getByLabel('AY-2025-2026', { exact: true }).press('ArrowDown');
//   await page.getByLabel('AY-2024-2025', { exact: true }).press('Enter');
//   await page.getByRole('button', { name: 'Add' }).click();
//   await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class/view-section/Pg1M57neFKBx')
//   await expect(page.getByText('B-2024')).toBeVisible()
// });





// test('test for deleting a section (4-b)', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//   await page.getByRole('link', { name: 'Manage Class' }).click();
//   await page.getByText('class-4th').click();
//   await page.getByLabel('class-4th').getByRole('link', { name: 'View Section (2)' }).click();
//   await page.getByRole('cell', { name: 'B-' }).click();
//   await page.getByRole('row', { name: 'Row Actions B-2024 01-01-2024' }).getByLabel('Row Actions').click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.accept().catch(() => {});
//   });
//   await page.getByRole('menuitem', { name: 'Delete' }).click();
//     await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class/view-section/Pg1M57neFKBx')
//   await expect(page.getByText('B-2024')).not.toBeVisible()
// });





///// //////////////////////////////////////////////---------------------------------



 
// test('test for class creation', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//   await page.getByRole('link', { name: 'Create Class And Section' }).click();
//   await page.locator('input[name="class-4thChecked"]').check();
//   await page.locator('div').filter({ hasText: /^class-4thABCD$/ }).getByRole('checkbox').nth(1).check();
//   await page.locator('div').filter({ hasText: /^class-4thABCD$/ }).getByRole('checkbox').nth(2).check();
//   await page.getByTestId('start-date').fill('2024-05-01');
//   await page.getByLabel('Select Academic Year').click();
//   await page.getByLabel('AY-2025-2026', { exact: true }).press('ArrowDown');
//   await page.getByLabel('AY-2024-2025', { exact: true }).press('Enter');
//   await page.getByLabel('Select Medium').click();
//   await page.locator('select[name="medium"]').selectOption({ label: 'English' });
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class');
//   await expect(page.getByText('class-4th')).toBeVisible();

// });




// test('test for creating class section(4th-B)', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//   await page.getByRole('link', { name: 'Manage Class' }).click();
//   await page.getByText('class-4th').click();
//   await page.getByRole('link', { name: 'View Section (0)' }).click();
//   await page.getByRole('button', { name: 'Add New Section' }).click();
//   await page.getByPlaceholder('Enter section name').click();
//   await page.getByPlaceholder('Enter section name').press('CapsLock');
//   await page.getByPlaceholder('Enter section name').fill('B');
//   await page.getByPlaceholder('Enter section name').press('CapsLock');
//   await page.getByPlaceholder('Enter start date').fill('2024-01-01');
//   await page.getByText('EndDate').click();
//   await page.getByPlaceholder('Enter end date').fill('2025-01-01');
//   await page.getByLabel('Select Academic Year').click();
//   await page.getByLabel('AY-2025-2026', { exact: true }).press('ArrowDown');
//   await page.getByLabel('AY-2024-2025', { exact: true }).press('Enter');
//   await page.getByRole('button', { name: 'Add' }).click();
//   await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class/view-section/Pg1M57neFKBx')
//   // await expect(page.getByText('B-2024')).toBeVisible()
// });





// test('test for deleting a section (4-b)', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//   await page.getByRole('link', { name: 'Manage Class' }).click();
//   await page.getByText('class-4th').click();
//   await page.getByLabel('class-4th').getByRole('link', { name: 'View Section (1)' }).click();
//   await page.getByRole('cell', { name: 'B-' }).click();
//   await page.getByRole('row', { name: 'Row Actions B-2024 01-01-2024' }).getByLabel('Row Actions').click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.accept().catch(() => {});
//   });
//   await page.getByRole('menuitem', { name: 'Delete' }).click();
//     await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class/view-section/Pg1M57neFKBx')
//   await expect(page.getByText('B-2024')).not.toBeVisible();
// });
///////------------------------------------------------
///////////-------------------

/////////////////////////----- 



// test('test for student addmission', async ({ page }) => {
//   await page.goto('https://demoschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('.mt-4 > div > .grid > div').first().click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();
//   await page.getByPlaceholder('Enter Admission No').click();
//   await page.getByPlaceholder('Enter Admission No').fill('01');
//   await page.getByPlaceholder('Enter your Full name').click();
//   await page.getByPlaceholder('Enter your Full name').fill('test@2');
//   await page.getByTestId('date-birth').fill('2000-01-01');

  
 
//   await page.locator("[name='student_category_id']").selectOption('common');
//   await page.locator("[name='caste_name']").selectOption('General');
//   await page.locator("[name='classs']").selectOption('class-4th');
//   await page.waitForSelector('select[name="classs"]');
//   const options = await page.$$eval('select[name="classs"] option', options => options.map(option => option.value));
//   console.log('Available options:', options);
//   // await page.locator("[name='batches']").selectOption('class-4th-A-2024');
//   await page.waitForSelector('select[name="batches"]');
//   const options2 = await page.$$eval('select[name="batches"] option', options => options.map(option => option.value));
//   console.log('Available options:', options);
//   // await page.getByTestId('Section').click();
//   //   await page.locator("[name='batches']").selectOption('class-4th-A-2024');
//    // await page.getByLabel('class-4th-A-2024', { exact: true }).getByText('class-4th-A-2024').click();

//   // await page.getByTestId('Section').click();
//   // await page.getByLabel('class-4th-A-2024', { exact: true }).click();

//   // await page.getByTestId('Section').selectOption('class-4th-A-2024');
//   await page.getByRole('button', { name: 'Submit' }).click();
// });





test('test', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('.mt-4 > div > .grid > div').first().click();
  await page.getByRole('link', { name: 'Character Certificate' }).click();
  await page.locator('div').filter({ hasText: /^Select OptionClass-4th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ');
  await page.locator('div').filter({ hasText: /^Select OptionClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF');
  await page.locator('div').filter({ hasText: /^Select OptionTest$/ }).getByRole('combobox').selectOption('AwFawVj3nW0X');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page1 = await page1Promise;
});