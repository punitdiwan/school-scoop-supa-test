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


/// 22JUL
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
//   //   await page.locator('[id="react-aria1647346651-:r160:"]').fill('2024-07-01');
//   //   await page.locator('[id="react-aria1647346651-:r16a:"]').fill('2024-07-03');
//     await page.locator('label').filter({ hasText: 'This event is Holiday' }).locator('svg').click();
//     await page.getByRole('button', { name: 'Submit' }).click();
//   });

// // copied
// test('test for deleting student category', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('.mt-4 > div > .grid > div').first().click();
//     await page.getByRole('link', { name: 'Create Student Category' }).click();
//     await page.getByText('test1').click();
//     await page.getByLabel('test1').getByRole('gridcell', { name: 'Edit Delete' }).click();
//     page.once('dialog', dialog => {
//       console.log(`Dialog message: ${dialog.message()}`);
//       dialog.accept().catch(() => {});
//     });
//     await page.getByLabel('test1').getByText('Delete').click();
//     await expect(page.getByText('Deleted Successfully!')).toBeVisible();
//     await expect(page.getByText('test1')).not.toBeVisible();
//   });



// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('.mt-4 > div > .grid > div').first().click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();
//   await page.getByPlaceholder('Enter Admission No').click();
//   await page.getByPlaceholder('Enter Admission No').fill('10');
//   await page.getByPlaceholder('Enter your Full name').click();
//   await page.getByPlaceholder('Enter your Full name').fill('test10');
//   await page.locator('div').filter({ hasText: /^D\.O\.B\.\*$/ }).locator('div').nth(3).click();
// //   await page.locator('[id="react-aria1912123645-\\:ru\\:"]').fill('2000-01-01');
//   await page.getByLabel('Select Category').click();
//   await page.getByLabel('common', { exact: true }).click();
// //   await page.getByLabel('Select Caste').click(); 
//   const dropDownList = page.locator('#Select Caste');
//   dropDownList.selectOption('General');
// //   await page.getByLabel('General', { exact: true }).click();
//   await page.getByLabel('Select a Class').click();
//   const dropDownList2 = page.locator('#class-3rd',{exact: true}).click();
// //   await page.getByLabel('class-3rd', { exact: true }).click();
//   await page.getByLabel('Select a Section').click();
//   const dropDownList3 = page.locator('#class-3rd-A-2024',{exact: true});
// //   await page.getByLabel('class-3rd-A-2024', { exact: true }).click();
//   await page.getByRole('button', { name: 'Submit' }).click();
// //   await page.getByText('HomeMenuSearchtestschooladminMy ProfileLog Out').click();
// });




// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.locator('.group > div > .inline-flex').first().click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(3) > div > .grid > div:nth-child(5)').click();
//   await page.getByRole('link', { name: 'Generate TC' }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('class-3rd', { exact: true }).click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('class-3rd-A-2024', { exact: true }).click();
//   await page.locator('p').filter({ hasText: 'TC Number' }).locator('div').nth(2).click();
//   await page.getByPlaceholder('Enter TC Serial no. ').click();
//   await page.getByPlaceholder('Enter TC Serial no. ').fill('01');
//   await page.getByRole('main').locator('div').filter({ hasText: 'From CourseClass Listkg1class-1stclass-2ndclass-3rdClass Listclass-3rd,From' }).nth(3).click();
//   await page.getByLabel('Example table with dynamic').getByText('class-3rd-A-').click();
//   await page.locator('#c1-13').check();
//   await page.locator('div').filter({ hasText: /^Generate TC$/ }).click();
// });


///////// flacky

// test('test for academic year creation', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(8)').click();
//     await page.getByPlaceholder('Enter start year').click();
//     await page.getByPlaceholder('Enter start year').fill('2027');
//     await page.getByPlaceholder('Enter end year').click();
//     await page.getByPlaceholder('Enter end year').fill('2028');
//     await page.getByRole('button', { name: 'Create' }).click();
//     await expect(page.getByText('Academic Year Created Successfully!')).toBeVisible(); 
//     await page.goto('https://testschool.launchmysite.in/academicYear');
//     await expect(page.getByText('AY-2027-2028').nth(0)).toBeVisible();
//   });








// test('test for academic year deletion', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(8)').click();
//     await page.getByText('AY-2027-2028').click();
//     await page.getByLabel('AY-2027-2028').getByRole('gridcell', { name: 'Delete' }).click();
//     await page.getByLabel('AY-2027-2028').getByText('Delete').click();
//     await expect(page.getByText('AY-2027-2028')).not.toBeVisible();
//   });
  



// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//   await page.getByRole('link', { name: 'Classs Teacher' }).click();
//   await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
//   await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
//   await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
//   await page.getByLabel('test3').getByText('Assign Class Teacher').click();
//   await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
// });




// test('test2', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//     await page.getByRole('link', { name: 'Classs Teacher' }).click();
//     await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
//     await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
//     await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
//     await page.getByLabel('test5').getByText('Assign Class Teacher').click();
//     await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
//   });

// // /// // 23jul---




      
// test('test for employee admission', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('.mt-4 > div > .grid > div:nth-child(2)').first().click();
//   await page.getByRole('link', { name: 'Employee Admission' }).click();
//   await page.locator('input[name="employee_number"]').click();
//   await page.locator('input[name="employee_number"]').fill('05');
//   await page.getByPlaceholder('Enter your first name').click();
//   await page.getByPlaceholder('Enter your first name').fill('test5');
//   await page.locator('input[name="dob"]').fill('2005-05-05');
//   await page.locator('label').filter({ hasText: /^Male$/ }).locator('div').nth(1).click();
//   await page.locator('label').filter({ hasText: /^Male$/ }).locator('div').nth(1).click();
//   await page.getByPlaceholder('example@gmail.com').click();
//   await page.getByPlaceholder('example@gmail.com').fill('test5@gmail.com');
//   await page.locator('div').filter({ hasText: /^Password$/ }).locator('div').nth(2).click();
//   await page.getByPlaceholder('Enter your password').fill('test5@1');
//   await page.locator('select[name="employee_department"]').selectOption('rUCfBpXTlyxU');
//   await page.locator('select[name="employeecategories"]').selectOption('NBVTvQS6CItk');
//   await page.getByPlaceholder('please enter 10 digit mobile').click();
//   await page.getByPlaceholder('please enter 10 digit mobile').fill('55555555555');
//   await page.getByLabel('Select Role').click();
//   await page.getByLabel('Class Teacher', { exact: true }).click();
//   await page.getByText('Submit').click();
//   await page.goto('https://testschool.launchmysite.in/employee/view_all_employee');
//   // await expect(page.getByText('test')).toBeVisible();

// });





// test('test for employee admission', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('.mt-4 > div > .grid > div:nth-child(2)').first().click();
//   await page.getByRole('link', { name: 'Employee Admission' }).click();
//   await page.locator('input[name="employee_number"]').click();
//   await page.locator('input[name="employee_number"]').fill('04');
//   await page.getByPlaceholder('Enter your first name').click();
//   await page.getByPlaceholder('Enter your first name').fill('test4');
//   await page.locator('input[name="dob"]').fill('2000-01-01');
//   await page.getByPlaceholder('example@gmail.com').click();
//   await page.getByPlaceholder('example@gmail.com').fill('test4@gmail.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@4');
//   await page.locator('select[name="employee_department"]').selectOption('rUCfBpXTlyxU');
//   await page.locator('select[name="employeecategories"]').selectOption('NBVTvQS6CItk');
//   await page.getByPlaceholder('please enter 10 digit mobile').click();
//   await page.getByPlaceholder('please enter 10 digit mobile').fill('4444444444');
//   await page.getByLabel('Select Role').click();
//   await page.getByLabel('Fee Creator', { exact: true }).click();
//   await page.getByText('Submit').click();
// });




// test.describe.serial('test for class and section ', () => {

//   test('test for assign class teacher', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//     await page.getByRole('link', { name: 'Classs Teacher' }).click();
//     await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rdclass-4th$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
//   await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
//     await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
//     await page.getByLabel('test3').getByText('Assign Class Teacher').click();
//     await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
//   });


//   test('test for assign class teacher2', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//     await page.getByRole('link', { name: 'Classs Teacher' }).click();
//     await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rdclass-4th$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
//     await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
//     await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
//     await page.getByLabel('test5').getByText('Assign Class Teacher').click();
//     await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
//   });

// });







// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByText('EmailPasswordSign InDon’t').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//   await page.getByRole('link', { name: 'Classs Teacher' }).click();
//   await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rdclass-4th$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
//   await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
//   await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
//   await page.getByLabel('test5').getByText('test5').click();
//   await page.getByLabel('test5').getByText('Assign Class Teacher').click();
//   await page.getByRole('rowheader', { name: 'test3' }).click();
// });










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
//   await expect(page.getByText('B-2024')).not.toBeVisible()
// });


