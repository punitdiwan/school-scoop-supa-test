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



///-- working after unpublishing exam group
// test('test for publishing exam group(quarterly)', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(6)').first().click();
//   await page.getByRole('link', { name: 'Manage Exam Group' }).click();
//   await page.getByLabel('quarterly').getByText('Marks').click();
//   await page.getByText('Class-4th-A-2024').click();
//   await page.getByRole('button', { name: 'Publish' }).click();
//   await page.getByRole('main').locator('div').filter({ hasText: /^Exam Published Successfully$/ }).nth(2).click();
// });


/// // // // not working
// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(6)').first().click();
//   await page.getByRole('link', { name: 'Manage Exam Group' }).click();
//   await page.getByRole('tab', { name: 'View Published Group' }).click();
//   // await page.getByLabel('quarterly').getByText('Marks').click();
//   // await page.getByText('Class-4th-A-2024').click();
//   await page.getByRole('button', { name: 'UnPublish' }).click();
// });






// // // not working
// test('test for publish result', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your Email').press('Enter');
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(6)').first().click();
//   await page.getByRole('link', { name: 'Publish Result', exact: true }).click();
//   await page.locator('div').filter({ hasText: /^Select ClassClass-4th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
//   await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
//   await page.locator('div').filter({ hasText: /^Group \* SelectFinalQuarterly$/ }).getByRole('combobox').selectOption('Final');
//   await page.getByRole('button', { name: 'Publish Result', exact: true }).click();
//   await page.getByText('Marks').click();
//   await expect(page.getByText('Final')).toBeVisible();
// });

// // // // / /
// // // // /// /
// // / / // / / /
// // ////////
// test('test for student addmission1', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();
//   await page.getByPlaceholder('Enter Admission No').click();
//   await page.getByPlaceholder('Enter Admission No').fill('02');
//   await page.getByPlaceholder('Enter your Full name').click();
//   await page.getByPlaceholder('Enter your Full name').fill('test2');
//   await page.getByTestId('date-birth').fill('2002-02-02');
//   await page.locator("[name='student_category_id']").selectOption('common');
//   await page.locator("[name='caste_name']").selectOption('General');
//   await page.locator("[name='classs']").selectOption('class-4th');
//   await page.getByTestId('Section').click();
//   // await page.locator("[name='batches']").selectOption('4P1Fblfev3yF, class-4th-A-2024');
//   await page.getByRole('button', { name: 'Submit' }).click();
// });

// // // // // ===-=-=-=-==-=-=-=-=
//     await expect(page.getByText('Created')).toBeVisible();
// // // // // ===-=-=-=-=-=-=-=-=-=
// // // // // ===-=-=-=-=-=-=-=-=-=

// // // // not working 
// test('test2 create fee particular', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Fees' }).first().click();
//   await page.getByRole('link', { name: 'Fee Particular' }).click();
//   await page.getByRole('button', { name: 'Select Category Name' }).click();
//   await page.getByLabel('first', { exact: true }).getByText('first').click();
//   await page.getByPlaceholder('Enter a Particular Name').click();
//   await page.getByPlaceholder('Enter a Particular Name').fill('first particular');
//   await page.getByPlaceholder('Enter Particular Description').click();
//   await page.getByPlaceholder('Enter Particular Description').fill('particular description');
//   await page.getByPlaceholder('Enter a Fee Amount').click();
//   await page.getByPlaceholder('Enter a Fee Amount').fill('10000');
//   await page.getByRole('button', { name: 'Create Fee Particular' }).click();
// });



// // // // // working in ui
// test('test for creating fee collection', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Fees' }).first().click();
//   await page.getByRole('link', { name: 'Fees Collection' }).click();
//   await page.locator('div').filter({ hasText: /^Category NamefirstCategory Name$/ }).first().click();
//   await page.getByLabel('first', { exact: true }).getByText('first').click();
//   await page.locator('.mb-4\\.5 > div').click();
//   await page.getByLabel('Select Collection Type', { exact: true }).click();
//   await page.getByLabel('Select Collection Type,').click();
//   await page.getByLabel('YEARLY', { exact: true }).getByText('YEARLY').click();
//   await page.locator('label').filter({ hasText: 'Select All' }).locator('svg').click();
//   await page.getByPlaceholder('Enter Fee Collection Name').click();
//   await page.getByPlaceholder('Enter Fee Collection Name').fill('first feecollection');
//   await page.locator('#startDate-1').fill('2024-01-01');
//   await page.locator('#endDate-1').fill('2024-12-01');
//   await page.getByRole('button', { name: 'Create Fee Collection' }).click();
//   await page.getByRole('main').locator('div').filter({ hasText: /^Created Successfully!$/ }).nth(2).click();
// });

// // // // // working in ui
// test('test for viewing all one time fees', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByText('Manage Fees').click();
//   await page.getByRole('link', { name: 'View All Onetime' }).click();
//   await page.getByRole('button', { name: 'Class' }).click();
//   await page.getByLabel('class-4th', { exact: true }).getByText('class-4th').click();
//   await page.getByText('Section*Sectionclass-4th-A-').click();
//   await page.getByLabel(',', { exact: true }).click();
//   await page.getByLabel('class-4th-B-2024', { exact: true }).click();
//   await expect(page.getByText('8000')).toBeVisible();
// });


// // // working in ui
// test('test for deleting one time fee', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Fees' }).first().click();
//   await page.getByRole('link', { name: 'View All Onetime' }).click();
//   await page.getByRole('button', { name: 'Class' }).click();
//   await page.getByLabel('class-4th', { exact: true }).click();
//   await page.getByLabel(',', { exact: true }).click();
//   await page.getByLabel('class-4th-B-2024', { exact: true }).click();
//   await page.getByText('8000').click();
//   await page.getByRole('link', { name: 'Delete' }).click();
//   await page.getByText('Deleted Successfully').click();
//   await page.goto('https://testschool.launchmysite.in/manage_fees/ViewAllOneTime?classId=vpcYXc5qHJwJ&batchId=Bk3sEOf01ai1');
//   await expect(page.getByText('8000')).not.toBeVisible();
// });

// // // not working
// test('test for view all fee collection', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.locator('.group > div > .inline-flex').first().click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Fees' }).first().click();
//   await page.getByRole('link', { name: 'View All Fee Collection' }).click();
//   await page.getByText('Class*Classclass-4thClass,').click();
//   await page.getByLabel('Class', { exact: true }).click();
//   await page.getByLabel('class-4th', { exact: true }).click();
//   await page.getByLabel(',', { exact: true }).click();
//   await page.getByLabel('class-4th-B-2024', { exact: true }).click();
// });



// // // // // //-=-=-=-=-=-=-=-
// // // // // 30 jul
// test('test for viewing collection defaulters', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Fees' }).first().click();
//   await page.getByRole('link', { name: 'Reports' }).click();
//   await page.getByRole('link', { name: 'Collection_Defaulters' }).click();
//   await page.getByRole('button', { name: 'Select a Class' }).click();
//   await page.getByLabel('class-4th', { exact: true }).click();
//   await page.getByLabel('Select Section').first().click();
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   await page.getByLabel('Select a Collection', { exact: true }).click();
//   await page.getByLabel('first feecollection', { exact: true }).first().click();
//   await page.getByRole('button', { name: 'View Student List' }).click();
//   await page.getByText('Due Date : 01/12/').click();
// });


// test('test for viewing fee structure', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Fees' }).first().click();
//   await page.getByRole('link', { name: 'Fees Structure' }).click();
//   // await page.locator("[name='academic_year']").selectOption('AY-2024-2025');

//   await page.getByRole('button', { name: 'Select academic year' }).click();
//   await page.getByLabel('AY-2024-2025', { exact: true }).click();
//   await page.locator('#myBatch').click();
//   await page.getByLabel('class-4th-B-2024', { exact: true }).click();
//   await page.getByRole('link', { name: 'View structure' }).click();
//   await page.getByRole('cell', { name: 'collection1' }).click();
// });





  
 test('test for creating exam(time and max-min marks)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@1233');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('button').click();
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Manage Exam Group' }).click();
    await page.getByRole('button', { name: 'Final' }).click();
    await page.locator('div').filter({ hasText: /^Date$/ }).locator('div').nth(2).click();
    await page.locator('[id="react-aria1132712081-\\:rn\\:"]').fill('2024-01-01');
    await page.locator('div').filter({ hasText: /^All Maximum Marks$/ }).locator('div').nth(3).click();
    await page.locator('[id="react-aria1132712081-\\:rs\\:"]').fill('99');
    await page.locator('div').filter({ hasText: /^All Minimum Marks$/ }).locator('div').nth(2).click();
    await page.locator('[id="react-aria1132712081-\\:r11\\:"]').fill('33');
    await page.locator('div').filter({ hasText: /^All Start Time$/ }).locator('div').nth(3).click();
    await page.locator('[id="react-aria1132712081-\\:r16\\:"]').fill('10:00');
    await page.locator('div').filter({ hasText: /^All End Time$/ }).locator('div').nth(2).click();
    await page.locator('[id="react-aria1132712081-\\:r1b\\:"]').fill('12:00');
    await page.getByRole('button', { name: 'Submit' }).click();
  });
