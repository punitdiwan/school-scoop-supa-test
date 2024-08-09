// import { test, expect } from '@playwright/test';

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

// // // // // ===-=-=-=-==-=-=-=
// test('test for archive a student', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByPlaceholder('Enter your password').press('Enter');
//   await page.waitForLoadState('networkidle');
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.waitForLoadState('networkidle');
//   await page.getByRole('link', { name: 'Archive Student', exact: true }).click();
//   await page.waitForLoadState('networkidle');
//   await page.getByTestId('select-class').click();
//   await page.waitForSelector('text=class-6th', { state: 'visible', timeout: 10000 });
//   console.log("Class 'class-6th' is visible");
//   await page.locator('text=class-6th').first().selectOption('P63FiTHZYVl7');
//   /// /// // / /
//   await page.waitForLoadState('networkidle');
//   // await page.locator("[name='batches']").click();
//   console.log("Class 'class-6th-a-2024' is visible");

//   // await page.locator('text=class-6th-A-2024').first().selectOption('EWYvDK0YxC8Z');

//   // // await page.getByTestId('select-class').click();
//   // // await page.waitForSelector('text=class-6th', { state: 'visible', timeout: 10000 });
//   // // console.log("Class 'class-6th' is visible");
//   // // await page.locator('text=class-6th').first().selectOption('P63FiTHZYVl7');
//   // // await page.getByLabel('Select a Section').click();
//   // // await page.getByLabel('class-6th-A-2024', { exact: true }).click();
//   // await page.locator('tr').filter({ hasText: 'class-6th-A-2024test440No' }).locator('#c1-13').check();
//   // await page.getByRole('button', { name: 'Archive Selected' }).click();
//   // await page.getByText('Successfully Archived Student').click();
// });





