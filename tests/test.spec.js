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


test('test for student addmission1', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Students' }).first().click();
  await page.getByRole('link', { name: 'Student Admissions' }).click();
  await page.getByPlaceholder('Enter Admission No').click();
  await page.getByPlaceholder('Enter Admission No').fill('02');
  await page.getByPlaceholder('Enter your Full name').click();
  await page.getByPlaceholder('Enter your Full name').fill('test2');
  await page.getByTestId('date-birth').fill('2002-02-02');
  await page.locator("[name='student_category_id']").selectOption('common');
  await page.locator("[name='caste_name']").selectOption('General');
  await page.locator("[name='classs']").selectOption('class-4th');
  await page.getByTestId('Section').click();
  // await page.locator("[name='batches']").selectOption('4P1Fblfev3yF, class-4th-A-2024');
  await page.getByRole('button', { name: 'Submit' }).click();
});

// // // // // ===-=-=-=-==-=-=-=-=
//     await expect(page.getByText('Created')).toBeVisible();
///////////////=-=-/=-=/-=/-/=-/=-/=-/=/-
//// ///// ////
// /// /// /// /// 
// //// /// //// 
// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'Download TC' }).click();
//   await page.getByLabel('Select Academic Year').click();
//   await page.getByLabel('AY-2024-2025', { exact: true }).getByText('AY-2024-').click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('class-6th', { exact: true }).getByText('class-6th').click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-').click();
//   await page.getByLabel('Test6').getByText('class-6th-A-').click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByLabel('Test6').getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// });




// test('test', async ({ page }) => {
//   // Navigate to the page
//   await page.goto('https://testschool.launchmysite.in/');

//   // Login
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Navigate to Download TC
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'Download TC' }).click();

//   // Wait for and click the "Select Academic Year" dropdown
//   await page.waitForSelector('select[aria-label="Select Academic Year"]');
//   await page.getByLabel('Select Academic Year').click();

//   // Wait for the "AY-2024-2025" option to be visible and select it
//   const academicYearOption = await page.locator('text=AY-2024-2025').first().click();
//   await academicYearOption.waitFor({ state: 'visible' });
//   await academicYearOption.click();

//   // Select Class
//   await page.getByLabel('Select a Class').click();
//   const classOption = await page.locator('text=class-6th').first();
//   await classOption.waitFor({ state: 'visible' });
//   await classOption.click();

//   // Select Section
//   await page.getByLabel('Select a Section').click();
//   const sectionOption = await page.locator('text=class-6th-A-2024').first();
//   await sectionOption.waitFor({ state: 'visible' });
//   await sectionOption.click();

//   // Select Student
//   await page.getByText('Test6').click();

//   // Wait for and click the Print button
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;

//   // Assertions or further interactions can go here  select-academic-year
// });



// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'Download TC' }).click();
//   // await page.getByLabel('Select Academic Year').click();   vl6k9EGIAbQD
//   await page.getByTestId('select-academic-year').click();
//   await page.getByLabel('AY-2024-2025', { exact: true }).getByText('AY-2024-').click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('class-6th', { exact: true }).getByText('class-6th').click();
//   // await page.getByLabel('Select a Section').click();
//   await page.getByTestId('select-batch').click();
//   await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-').click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByLabel('Test6').getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// });


// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');

//   // Log in
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Navigate to Download TC
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'Download TC' }).click();

//   // Select Academic Year
//   await page.getByTestId('select-academic-year').click();
//   await page.getByRole('option', { name: 'AY-2024-2025' }).click();

//   // Select Class
//   await page.getByLabel('Select a Class').click();
//   await page.getByRole('option', { name: 'class-6th' }).click();

//   // Select Section
//   await page.getByTestId('select-batch').click();
//   await page.getByRole('option', { name: 'class-6th-A-2024' }).click();

//   // Select Student
//   await page.getByLabel('Test6').click();

//   // Wait for and click the Print button
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;

//   // Assertions or further interactions can go here
// });




// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'Archive Student', exact: true }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('class-6th', { exact: true }).click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('class-6th-A-2024', { exact: true }).click();
//   await page.getByText('test5').click();
//   await page.locator('[id="react-aria9677000811-\\:rv\\:-GDhvc5WqAolZ-actions"] #c1-13').check();
//   await page.getByRole('button', { name: 'Archive Selected' }).click();
//   await page.getByText('Successfully Archived Student').click();
// });