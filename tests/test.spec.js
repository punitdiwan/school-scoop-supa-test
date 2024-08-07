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
  await page.locator("[name='batches']").selectOption('4P1Fblfev3yF, class-4th-A-2024');
  await page.getByRole('button', { name: 'Submit' }).click();
});

// // // // // ===-=-=-=-==-=-=-=-=
//     await expect(page.getByText('Created')).toBeVisible();
///////////////=-=-/=-=/-=/-/=-/=-/=-/=/-
//// ///// ////
// /// /// /// /// 
// //// /// //// 

// test('test', async ({ page }) => {
//   // Navigate to the website
//   await page.goto('https://testschool.launchmysite.in/');

//   // Log in
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Navigate to Download TC section
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'Download TC' }).click();

//   // Select Academic Year
//   await page.getByTestId('select-academic-year').click();
//   await page.waitForSelector('option[value="vl6k9EGIAbQD"]', { state: 'visible', timeout: 60000 }); // Ensure the option is visible
//   await page.getByLabel('AY-2024-2025', { exact: true }).click();

//   // Select Class
//   await page.getByTestId('select-class').click();
//   await page.waitForSelector('option[value="class-6th"]', { state: 'visible', timeout: 60000 }); // Ensure the option is visible
//   await page.getByLabel('class-6th', { exact: true }).getByText('class-6th').click();

//   // Select Section
//   await page.getByTestId('select-batch').click();
//   await page.waitForSelector('option[value="class-6th-A-2024"]', { state: 'visible', timeout: 60000 }); // Ensure the option is visible
//   await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-2024').click();

//   // Select Student and Print
//   await page.getByText('Test6').click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByLabel('Test6').getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;

//   // Add any additional assertions or actions if needed
// });



// test('test', async ({ page }) => {
//   // Navigate to the website
//   await page.goto('https://testschool.launchmysite.in/');

//   // Log in
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Wait for the Promotion link to be visible and click
//   await page.waitForSelector('role=link[name="Promotion"]', { state: 'visible' });
//   await page.getByRole('link', { name: 'Promotion' }).first().click();

//   // Wait for the Download TC link to be visible and click
//   await page.waitForSelector('role=link[name="Download TC"]', { state: 'visible' });
//   await page.getByRole('link', { name: 'Download TC' }).click();

//   // Wait for the Academic Year dropdown to be visible and select
//   await page.waitForSelector('data-testid=select-academic-year', { state: 'visible' });
//   await page.getByTestId('select-academic-year').scrollIntoViewIfNeeded();
//   await page.getByTestId('select-academic-year').click();
//   await page.waitForSelector('label[for="Academic YearAY-2024-2025"]', { state: 'visible' });
//   await page.getByLabel('Academic YearAY-2024-2025').click();

//   // Wait for the Class dropdown to be visible and select
//   await page.waitForSelector('data-testid=select-class', { state: 'visible' });
//   await page.getByTestId('select-class').scrollIntoViewIfNeeded();
//   await page.getByTestId('select-class').click();
//   await page.waitForSelector('text=class-6th', { state: 'visible' });
//   await page.getByText('class-6th').click();

//   // Wait for the Section dropdown to be visible and select
//   await page.waitForSelector('data-testid=select-batch', { state: 'visible' });
//   await page.getByTestId('select-batch').scrollIntoViewIfNeeded();
//   await page.getByTestId('select-batch').click();
//   await page.waitForSelector('text=class-6th-A-2024', { state: 'visible' });
//   await page.getByText('class-6th-A-2024').click();

//   // Wait for the Student name to be visible and click
//   await page.waitForSelector('text=Test6', { state: 'visible' });
//   await page.getByText('Test6').scrollIntoViewIfNeeded();
//   await page.getByText('Test6').click();

//   // Wait for the Print button to be visible and click
//   await page.waitForSelector('label[for="Test6"] >> role=button[name="Print"]', { state: 'visible' });
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByLabel('Test6').scrollIntoViewIfNeeded();
//   await page.getByLabel('Test6').getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;

//   // Add any additional assertions or actions if needed
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
//   await page.getByTestId('select-academic-year').click();
//   await page.getByLabel('AY-2024-2025', { exact: true }).click();
//   await page.getByTestId('select-class').click();
//   await page.getByLabel('class-6th', { exact: true }).getByText('class-6th').click();
//   await page.getByTestId('select-batch').click();
//   await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-2024').click();
//   await page.getByText('Test6').click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByLabel('Test6').getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// });

//////
/////
/////
/////
////

// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Exam' }).first().click();
//   await page.getByRole('link', { name: 'Manage Weightage Template' }).click();
//   await page.getByRole('button', { name: 'Assign Template' }).click();
//   await page.getByTestId('select-class').click();
//   await page.getByTestId('select-class').click();
//   await page.getByLabel('class-4th', { exact: true }).click();
//   await page.getByTestId('select-batches').click();
//   await page.getByTestId('select-batches').click();
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   await page.getByTestId('select-temp-name').click();
//   await page.getByRole('option', { name: 'Template 4' }).click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('main').getByText('Successfully Assign Template').click();
// });



// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Exam' }).first().click();
//   await page.getByRole('link', { name: 'Manage Weightage Template' }).click();
//   await page.getByRole('button', { name: 'Assign Template' }).click();
//   await page.locator('div').filter({ hasText: /^Class Listclass-4thclass-6thClass ListSelect a Class$/ }).first().click();
//   await page.getByLabel('class-4th', { exact: true }).click();
//   await page.locator('div').filter({ hasText: /^Section Listclass-4th-A-2024class-4th-B-2024Section ListSelect a Section$/ }).first().click();
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   await page.getByLabel('Manage Template').locator('div').filter({ hasText: 'Template NameTemplate 1Template 2Template 4Template 6Template NameSelect a' }).nth(2).click();
//   await page.getByRole('option', { name: 'Template 4' }).click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('main').getByText('Successfully Assign Template').click();
// });
 



// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Exam' }).first().click();
//   await page.getByRole('link', { name: 'Manage Weightage Template' }).click();
//   await page.getByRole('button', { name: 'Assign Template' }).click();
//   await page.getByTestId('select-class').getByText('class-4th').click();
//   // await page.getByLabel('class-4th', { exact: true }).click();
//   await page.getByTestId('select-batches').getByText('class-4th-A-2024').click();
//   // await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   await page.getByTestId('select-temp-name').getByText('Template 4').click();
//   // await page.getByRole('option', { name: 'Template 4' }).click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   // await page.getByRole('main').getByText('Successfully Assign Template').click();
// });