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
///////////////=-=-/=-=/-=/-/=-/=-/=-/=/-
///////////////=-=-/=-=/-=/-/=-/=-/=-/=/-
///////////////=-=-/=-=/-=/-/=-/=-/=-/=/-
///////////////=-=-/=-=/-=/-/=-/=-/=-/=/-
///////////////=-=-/=-=/-=/-/=-/=-/=-/=/-
// /// // transport




// test('test for assign transport(4-b)', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Transport' }).first().click();
//   await page.getByRole('link', { name: 'Assign Transport Route Wise' }).click();
//   await page.getByTestId('select-class').click();
//   await page.getByLabel('class-4th', { exact: true }).click();
//   await page.getByTestId('select-batch').click();
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   await page.getByTestId('select-batch').click();
//   await page.getByLabel('class-4th-B-2024', { exact: true }).click();
//   await page.getByText('test2').click();
//   await page.getByTestId('select-route').click();
//   await page.getByLabel('lalghati (100)', { exact: true }).click();
//   await page.getByTestId('select-vehicle').click();
//   await page.getByLabel('mp05hk5210', { exact: true }).click();
//   await page.getByTestId('input-charge').click();
//   await page.getByTestId('input-charge').fill('200');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.locator('div').filter({ hasText: 'Transport Assigned' }).nth(3).click();
// });



// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Transport' }).first().click();
//   await page.getByRole('link', { name: 'View All Collection' }).click();
//   await page.getByTestId('view-collection').click();
//   await page.waitForSelector('label[for="class-4th-A-2024"]');
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   await expect(page.getByText('6/30/2024', {exact:true})).toBeVisible();
// })


// test('test for deleting fee collection(4a)', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Transport' }).first().click();
//   await page.getByRole('link', { name: 'View All Collection' }).click();
//   await page.getByTestId('view-collection').click();
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.accept().catch(() => {});
//   });
//   await page.getByLabel('2', { exact: true }).getByRole('button', { name: 'Delete' }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByLabel('2', { exact: true }).getByRole('button', { name: 'Delete' }).click();
// });




// test('test for route wise report', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Transport' }).first().click();
//   await page.getByRole('link', { name: 'Route Wise Report' }).click();
//   await page.getByTestId('select-route').click();
//   await page.getByLabel('lalghati', { exact: true }).getByText('lalghati').click();
//   await page.getByText('test', { exact: true }).click();
// });





// test('test Class Batch Wise Report', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Transport' }).first().click();
//   await page.getByRole('link', { name: 'Class Batch Wise Report' }).click();
//   await page.getByLabel('Select Current Course').first().selectOption('class-4th');
//   await page.waitForResponse(res => res.status() === 200) 
//   await page.getByTestId('select-class').click();
//   await page.getByLabel('class-4th', { exact: true }).click();
//   await page.getByTestId('select-batch').click();
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   await page.getByTestId('select-collection').click();
//   await page.getByLabel('first', { exact: true }).click();
//   await page.getByRole('button', { name: 'View Student List' }).click();
//   await page.getByText('test', { exact: true }).click();
// });

//// ///// ////
 //// ///// / /




