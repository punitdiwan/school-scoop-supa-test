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




// // // not working
// test('test to Download TC', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(3) > div > .grid > div:nth-child(5)').click();
//   await page.getByRole('link', { name: 'Download TC' }).click();
//   await page.getByLabel('Select Academic Year').click();
//   await page.getByLabel('AY-2024-2025', { exact: true }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('class-2nd', { exact: true }).click();
//   await page.getByLabel('Select a Section').click();
// //   await page.getByLabel('class-2nd-A-2024', { exact: true }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// });





// // // not working
// test('test for View All Student', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('.mt-4 > div > .grid > div').first().click();
//   await page.getByRole('link', { name: 'View All Student' }).click();
//   await page.getByLabel('Select a Class').click();
// //   await page.getByLabel('nursery', { exact: true }).click();
//   await page.getByLabel('Select a Section').click();
// //   await page.getByLabel('nursery-A-2024', { exact: true }).click();
//   await page.getByRole('link', { name: 'View profile' }).first().click();
// });






// // import { test, expect } from '@playwright/test';
// // not working
// test('test to pay Transport Fees ', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'Transport Fees', exact: true }).click();
//   await page.getByLabel('Select a Class', { exact: true }).click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).click();
//   await page.getByLabel('1', { exact: true }).getByRole('link', { name: 'Pay Fees' }).click();
//   await page.getByRole('button', { name: 'Select a Collection' }).click();
//   await page.getByLabel('first', { exact: true }).click();
//   await page.getByLabel('Select Payment Mode', { exact: true }).click();
//   await page.getByLabel('Cash', { exact: true }).click();
//   await page.locator('div').filter({ hasText: /^AmountEnter Amount$/ }).locator('div').nth(4).click();
//   await page.getByLabel('Enter Amount').fill('100');
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.accept().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Pay Fees' }).click();
//   await page.locator('div').filter({ hasText: 'Fees paid successfully' });
// });



/////------------------------------------------to fix
// const element = await expect(page.getByText('Success Generate Student Roll No.')).toBeVisible();
// await page.goto('https://testschool.launchmysite.in/manage_exam/student_roll_number');
// const element2 = await expect(page.getByText('Acadamic Year:- AY-2024-2025')).toBeVisible();






//// delete test
// const element = await expect(page.getByText('english')).toBeVisible();



//     await page.getByLabel('test', { exact: true }).getByText('Assign Class Teacher').click();

//  { exact: true }).getByText('Assign Class Teacher').click();
//   await page.getByRole('button', { name: 'Delete' }).click();


// -------
    //   await expect(page.getByText('test1').nth(0)).toBeVisible();


/// 20JUL
// // // copied
// test('test for academic year deletion', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(8)').click();
//   await page.getByText('AY-2027-2028').click();
//   await page.getByLabel('AY-2027-2028').getByRole('gridcell', { name: 'Delete' }).click();
//   await page.getByLabel('AY-2027-2028').getByText('Delete').click();
//   await expect(page.getByText('AY-2027-2028')).not.toBeVisible();
// });



// // // copied
// test('test for deleting student category', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('.mt-4 > div > .grid > div').first().click();
//     await page.getByRole('link', { name: 'Create Student Category' }).click();
//     await page.getByText('test1').nth(0).click();
//     await page.getByText('testdes').nth(0).click();
//     await page.getByLabel('test1').nth(0).getByRole('gridcell', { name: 'Delete' }).click();
//     page.once('dialog', dialog => {
//       console.log(`Dialog message: ${dialog.message()}`);
//       dialog.accept().catch(() => {});
//     });
//     await page.getByLabel('test1').nth(0).locator('div').filter({ hasText: /^Delete$/ }).click();
//     await page.goto('https://testschool.launchmysite.in/students/create_student_category');
//     await expect(page.getByText('test1')).not.toBeVisible();
//   });
  


// test('test for creating events', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(3) > div > .grid > div:nth-child(3)').click();
//     await page.getByPlaceholder('Enter Title').click();
//     await page.getByPlaceholder('Enter Title').fill('holiday');
//     await page.getByPlaceholder('Enter your description').click();
//     await page.getByPlaceholder('Enter your description').fill('holiday');
//   //   await page.locator('[id="react-aria8624273455-\\:rk\\:"]').fill('2024-07-01');
//   //   await page.locator('[id="react-aria8624273455-\\:ru\\:"]').fill('2024-07-03');
//     await page.locator('label').filter({ hasText: 'This event is Holiday' }).locator('svg').click();
//     await page.getByRole('button', { name: 'Submit' }).click();
//   });




// test('test for creating class & section', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.getByText('Class And Section').click();
//     await page.getByRole('link', { name: 'Create Class And Section' }).click();
//     await page.locator('input[name="class-2ndChecked"]').check();
//     await page.locator('div').filter({ hasText: /^class-2ndABCD$/ }).getByRole('checkbox').nth(1).check();
//     await page.locator('div').filter({ hasText: /^class-2ndABCD$/ }).getByRole('checkbox').nth(2).check();
//     await page.locator('#startdate').fill('2024-01-01');
//     await page.getByLabel('Select Academic Year').click();
//     // await page.getByLabel('AY-2024-2025', { exact: true }).click();
//     await page.getByLabel('Select Medium').click();
//     // await page.getByLabel('English', { exact: true }).click();
//     await page.getByRole('button', { name: 'Save' }).click();
//   });

////------
// test('test for id card printing(all)', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('.mt-4 > div > .grid > div').first().click();
//     await page.getByRole('link', { name: 'Student Identity Card' }).click();
//     await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
//     await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
//     await page.getByLabel('Select Student(s)').click();
//     await page.getByLabel('Rishu', { exact: true }).click();
//     await page.getByLabel('Select Colour').click();
//     await page.getByLabel('Select Colour').click();
//     await page.getByRole('button', { name: 'Submit Report' }).click();
//     const page1Promise = page.waitForEvent('popup');
//     await page.getByRole('button', { name: 'Print' }).click();
//     const page1 = await page1Promise;
//   //   await page.getByLabel('Wine,').click();
//   //   await page.getByLabel('Indigo', { exact: true }).click();
//     await page.getByRole('button', { name: 'Submit Report' }).click();
//     const page2Promise = page.waitForEvent('popup');
//     await page.getByRole('button', { name: 'Print' }).click();
//     const page2 = await page2Promise;
//   //   await page.getByLabel('Indigo,').click();
//   //   await page.getByLabel('Grassy', { exact: true }).click();
//     await page.getByRole('button', { name: 'Submit Report' }).click();
//     const page3Promise = page.waitForEvent('popup');
//     await page.getByRole('button', { name: 'Print' }).click();
//     const page3 = await page3Promise;
//   //   await page.getByLabel('Grassy,').click();
//   //   await page.getByLabel('Sky', { exact: true }).click();
//     await page.getByRole('button', { name: 'Submit Report' }).click();
//     const page4Promise = page.waitForEvent('popup');
//     await page.getByRole('button', { name: 'Print' }).click();
//     const page4 = await page4Promise;
//   //   await page.getByLabel('Sky,').click();
//   //   await page.getByLabel('newtemp', { exact: true }).click();
//     await page.getByRole('button', { name: 'Submit Report' }).click();
//     const page5Promise = page.waitForEvent('popup');
//     await page.getByRole('button', { name: 'Print' }).click();
//     const page5 = await page5Promise;
//   });



// test('test for printing character certificate', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('.mt-4 > div > .grid > div').first().click();
//     await page.getByRole('link', { name: 'Character Certificate' }).click();
//     await page.locator('div').filter({ hasText: /^Select OptionNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP');
//     await page.locator('div').filter({ hasText: /^Select OptionNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR');
//     await page.locator('div').filter({ hasText: /^Select OptionRishuTest3Test4Test6$/ }).getByRole('combobox').selectOption('EK66476lqMPO');
//     const page1Promise = page.waitForEvent('popup');
//     await page.getByRole('button', { name: 'Print' }).click();
//     const page1 = await page1Promise;
//   });
  


// test('test for Exam Report Before Publish and publish result', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(6)').first().click();
//     await page.getByRole('link', { name: 'Exam Report Before Publish' }).click();
//     await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,nursery');
//     await page.locator('div').filter({ hasText: /^Selectnursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,nursery-A-2024');
//     await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3-undefined');
//     await page.goto('https://testschool.launchmysite.in/manage_exam/exam_report_publish_result');
//     await page.getByText('Manage Exam /').click();
//     await page.getByRole('link', { name: 'Publish Result', exact: true }).click();
//     await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
//     await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
//     await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3-undefined');
//     await page.getByRole('button', { name: 'Un Publish Result' }).click();
//     await page.goto('https://testschool.launchmysite.in/manage_exam/publish_report');   

//   });

// test('test assinging student marks', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(6)').first().click();
//     await page.getByRole('link', { name: 'Assign Marks' }).click();
//     await page.locator('div').filter({ hasText: /^Class \* Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
//     await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
//     await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3,Final');
//     await page.getByText('english').click();
//     await page.getByRole('button', { name: 'Assign' }).first().click();
//     await page.locator('.h-full > .relative').first().click();
//     // await page.locator('[id="react-aria6510488863-\\:rn\\:"]').fill('80');
//     await page.locator('tr:nth-child(2) > td:nth-child(4) > .group > div > .relative').click();
//     // await page.locator('[id="react-aria6510488863-\\:r12\\:"]').fill('70');
//     await page.locator('tr:nth-child(3) > td:nth-child(4) > .group > div > .relative > .inline-flex').click();
//     // await page.locator('[id="react-aria6510488863-\\:r1d\\:"]').fill('60');
//     await page.getByRole('button', { name: 'Submit Marks' }).click();
//   });

