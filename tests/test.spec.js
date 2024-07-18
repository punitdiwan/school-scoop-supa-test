// // // / half working
// import { test, expect } from '@playwright/test';

// test('test for Assign Transport Route Wise', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.locator('.group > div > .inline-flex').first().click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'Assign Transport Route Wise' }).click();
// //   await page.getByLabel('Class', { exact: true }).click();
// //   await page.getByLabel('nursery', { exact: true }).click();
// //   await page.getByLabel('Section', { exact: true }).click();
// //   await page.getByLabel('nursery-A-2024', { exact: true }).click();
// //   await page.getByLabel('Select Route', { exact: true }).click();
// //   await page.getByLabel('lalghati (100)', { exact: true }).click();
// //   await page.getByText('rishu').click();
// //   await page.getByLabel('Select Vehicle', { exact: true }).click();
// //   await page.getByLabel('mp05hk5210', { exact: true }).click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.locator('div').filter({ hasText: 'Transport Assigned' });
// });



// // /// not working(downdrop)
// // // import { test, expect } from '@playwright/test';

// test('test for Students Batch Promotion', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.locator('.group > div > .inline-flex').first().click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(3) > div > .grid > div:nth-child(5)').click();
//   await page.getByRole('link', { name: 'Student\'s Batch Promotion' }).click();
// //   await page.getByLabel('Select From Class', { exact: true }).click();
// //   await page.getByLabel('class-1st', { exact: true }).click();
// //   await page.getByLabel('Select From Batch', { exact: true }).click();
// //   await page.getByLabel('class-1st-A-2024', { exact: true }).click();
// //   await page.getByLabel('Select To Class', { exact: true }).click();
// //   await page.getByLabel('class-2nd', { exact: true }).click();
// //   await page.getByLabel('Select To Batch', { exact: true }).click();
// //   await page.getByLabel('class-2nd-A-2024', { exact: true }).click();
// //   await page.locator('[id="react-aria8469018712-\\:r1f\\:-KDFKnxJjbnci-_uid"] #c1-13').check();
// //   await page.getByRole('button', { name: 'Promote' }).click();
//   await page.locator('div').filter({ hasText: 'Student(s) Promoted' });
// });



// // // not working
// // // import { test, expect } from '@playwright/test';

// test('test to Archive Student', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.locator('.group > div > .inline-flex').first().click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(3) > div > .grid > div:nth-child(5)').click();
//   await page.getByRole('link', { name: 'Archive Student', exact: true }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('class-2nd', { exact: true }).click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('class-2nd-A-2024', { exact: true }).click();
//   await page.locator('[id="react-aria4888622972-\\:rv\\:-KDFKnxJjbnci-actions"]').click();
//   await page.locator('div').filter({ hasText: /^Archive Selected$/ }).click();
//   await page.getByRole('button', { name: 'Archive Selected' }).click();
//   await page.locator('[id="react-aria4888622972-\\:rv\\:-KDFKnxJjbnci-actions"] #c1-13').check();
//   await page.getByRole('button', { name: 'Archive Selected' }).click();
//   await page.locator('div').filter({ hasText: 'Successfully Archived Student' }).nth(3).click();
// });


// // // not working
// // // import { test, expect } from '@playwright/test';

// test('test to UnArchive Student ', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.locator('.group > div > .inline-flex').first().click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(3) > div > .grid > div:nth-child(5)').click();
//   await page.getByRole('link', { name: 'UnArchive Student' }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('class-2nd', { exact: true }).click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('class-2nd-A-2024', { exact: true }).click();
//   await page.locator('#c1-13').check();
//   await page.getByRole('button', { name: 'UnArchive Selected' }).click();
//   await page.locator('div').filter({ hasText: 'Successfully UnArchivded' }).nth(3).click();
// });


// // // not working
// // // import { test, expect } from '@playwright/test';

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


// // // half working
// // // import { test, expect } from '@playwright/test';

// test('test for id card printing', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('.mt-4 > div > .grid > div').first().click();
//   await page.getByRole('link', { name: 'Student Identity Card' }).click();
//   await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
//   await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
//   await page.getByLabel('Select Student(s)').click();
//   await page.getByLabel('Rishu', { exact: true }).click();
//   await page.getByLabel('Select Colour').click();
//   await page.getByLabel('Select Colour').click();
// //   await page.getByLabel('Wine', { exact: true }).click();
//   await page.getByRole('button', { name: 'Submit Report' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// //   await page.getByLabel('Wine,').click();
// //   await page.getByLabel('Indigo', { exact: true }).click();
//   await page.getByRole('button', { name: 'Submit Report' }).click();
//   const page2Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page2 = await page2Promise;
// //   await page.getByLabel('Indigo,').click();
// //   await page.getByLabel('Grassy', { exact: true }).click();
//   await page.getByRole('button', { name: 'Submit Report' }).click();
//   const page3Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page3 = await page3Promise;
// //   await page.getByLabel('Grassy,').click();
// //   await page.getByLabel('Sky', { exact: true }).click();
//   await page.getByRole('button', { name: 'Submit Report' }).click();
//   const page4Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page4 = await page4Promise;
// //   await page.getByLabel('Sky,').click();
// //   await page.getByLabel('newtemp', { exact: true }).click();
//   await page.getByRole('button', { name: 'Submit Report' }).click();
//   const page5Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page5 = await page5Promise;
// });




// // //not working
// // //import { test, expect } from '@playwright/test';

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

// test('test to Unassign Transport', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'Unassign Transport' }).click();
// //   await page.getByLabel('Select Current Course', { exact: true }).click();
// //   await page.getByLabel('nursery', { exact: true }).click();
// //   await page.getByLabel('Select Current Batch', { exact: true }).click();
// //   await page.getByLabel('nursery-A-2024', { exact: true }).click();
// //   await page.getByLabel('Select Collection', { exact: true }).click();
// //   await page.getByLabel('first', { exact: true }).click();
// //   await page.getByRole('button', { name: 'View Student List' }).click();
// //   await page.getByLabel('04').getByRole('button', { name: 'Unassign' }).click();
//   await page.locator('div').filter({ hasText: 'Transport Unassigned' });
// });




// // import { test, expect } from '@playwright/test';

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
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Pay Fees' }).click();
//   await page.locator('div').filter({ hasText: 'Fees paid successfully' });
// });


// // import { test, expect } from '@playwright/test';

// test('test for Class Batch Wise Report', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'Class Batch Wise Report' }).click();
// //   await page.getByLabel('Select Current Course', { exact: true }).click();
// //   await page.getByLabel('nursery', { exact: true }).click();
// //   await page.getByLabel('Select Current Batch', { exact: true }).click();
// //   await page.getByLabel('nursery-A-2024', { exact: true }).click();
// //   await page.getByLabel('Select Collection', { exact: true }).click();
// //   await page.getByLabel('first', { exact: true }).click();
// //   await page.getByRole('button', { name: 'View Student List' }).click();
// });



// // import { test, expect } from '@playwright/test';

// test('test for Route Wise Report', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'Route Wise Report' }).click();
// //   await page.getByLabel('Select Route', { exact: true }).click();
// //   await page.locator('[id="react-aria9435319578-\\:rg\\:-option-yqPvUjmR8jOx"]').click();
// });




// // import { test, expect } from '@playwright/test';

// test('test to Manage Student Of Buses', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'Manage Student Of Buses' }).click();
// //   await page.getByLabel('Select Current Bus', { exact: true }).click();
// //   await page.getByLabel('mp05hk5210', { exact: true }).click();
// //   await page.getByLabel('Select New Route', { exact: true }).click();
// //   await page.locator('[id="react-aria2918820699-\\:ru\\:-option-yqPvUjmR8jOx"]').click();
// //   await page.getByLabel('Select Buses', { exact: true }).click();
// //   await page.getByLabel('mp05hk5210', { exact: true }).click();
// //   await page.locator('[id="react-aria2918820699-\\:r1d\\:"]').click();
// //   await page.locator('[id="react-aria2918820699-\\:r1d\\:"]').fill('100');
// //   await page.getByRole('gridcell', { name: 'Select 05' }).locator('span').click();
// //   await page.getByRole('button', { name: 'Transfer' }).click();
//   await page.locator('div').filter({ hasText: 'Bus Transfered Successfully' });
// });




// // import { test, expect } from '@playwright/test';

// test('test for Defaulter student list', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.locator('.group > div > .inline-flex').first().click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'Defaulter' }).click();
// //   await page.getByLabel('Select Current Course', { exact: true }).click();
// //   await page.getByLabel('class-1st', { exact: true }).click();
// //   await page.getByLabel('Select Current Batch', { exact: true }).click();
// //   await page.getByLabel('class-1st-A-2024', { exact: true }).click();
// //   await page.getByLabel('Select Collection', { exact: true }).click();
// //   await page.getByLabel('first').nth(1).click();
// //   await page.getByRole('button', { name: 'View Student List' }).click();
// //   await page.getByText('rishu').click();
// });

/////------------------------------------------to fix
// const element = await expect(page.getByText('Success Generate Student Roll No.')).toBeVisible();
// await page.goto('https://testschool.launchmysite.in/manage_exam/student_roll_number');
// const element2 = await expect(page.getByText('Acadamic Year:- AY-2024-2025')).toBeVisible();


// import { test, expect } from '@playwright/test';
// test('test for student admissions1', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.locator('.group > div > .inline-flex').first().click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('.mt-4 > div > .grid > div').first().click();
//     await page.getByRole('link', { name: 'Student Admissions' }).click();
//     await page.getByPlaceholder('Enter Admission No').click();
//     await page.getByPlaceholder('Enter Admission No').fill('06');
//     await page.locator('div').filter({ hasText: /^Full name\*$/ }).locator('div').nth(3).click();
//     await page.getByPlaceholder('Enter your Full name').fill('test6');
//     await page.locator('div').filter({ hasText: /^D\.O\.B\.\*$/ }).locator('div').nth(3).click();
//     await page.locator('[id="react-aria615390900-\\:ru\\:"]').fill('2000-01-01', { timeout: 5000 });   
//     await page.getByLabel('Select Category').click();
//     await page.getByLabel('common', { exact: true }).click();  
//     await page.getByLabel('Select Caste').click();
//     await page.getByLabel('General', { exact: true }).click();
//     await page.getByLabel('Select a Class').click();
//     await page.getByLabel('nursery', { exact: true }).click();
//     await page.getByLabel('Select a Section').click();
//     await page.getByLabel('nursery-A-2024', { exact: true }).click();
//     await page.getByRole('button', { name: 'Submit' }).click();
//     const element = await expect(page.getByText('Student Created')).toBeVisible();
//   });



import { test, expect } from '@playwright/test';
// test('test for academic year creation', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.getByRole('link', { name: 'Academic Year' }).first().click();
//     await page.locator('div').filter({ hasText: /^Start Year\*$/ }).locator('div').nth(3).click();
//     await page.getByPlaceholder('Enter start year').fill('2027');
//     await page.getByPlaceholder('Enter end year').click();
//     await page.getByPlaceholder('Enter end year').fill('2028');
//     await page.getByRole('button', { name: 'Create' }).click(); 
//     const element = await expect(page.getByText('Academic Year Created Successfully!')).toBeVisible(); 
//     await page.goto('https://testschool.launchmysite.in/academicYear');
//     const element2 = await expect(page.getByText('AY-2027-2028')).toBeVisible();
//   });







// test('test for generating admit cards', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(6)').first().click();
//     await page.getByRole('link', { name: 'Generate Admit Card' }).click();
//     await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
//     await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
//     await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3-Final');
//     await page.locator('label').filter({ hasText: 'All Student' }).locator('svg').click();
//     await page.getByRole('button', { name: 'View Report' }).click();
//     // const element = await expect(page.getByText('ADMIT CARD Nursery-A-2024 - Final')).toBeVisible(); 
//     await page.getByRole('button', { name: 'Print' }).click();
//     const page1 = await page1Promise;


//   });
  
// test('test for assign class teacher', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
//     await page.getByRole('link', { name: 'Classs Teacher' }).click();
//     await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,nursery');
//     await page.locator('div').filter({ hasText: /^Selectnursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,nursery-A-2024');
//     await page.locator('div').filter({ hasText: /^Select DepartmentFirst divisonfirst divsecond div$/ }).getByRole('combobox').selectOption('rUCfBpXTlyxU');
//     await page.getByLabel('test3').getByText('Assign Class Teacher').click();
//     const element = await expect(page.getByText('Successfully assignd teacher to nursery-A-2024')).toBeVisible(); 
//     await page.goto('https://testschool.launchmysite.in/class_and_section/class-teacher');
//     const element2 = await expect(page.getByText('test')).toBeVisible();
//   });




// import { test, expect } from '@playwright/test';

// test('test for creating employee category and department ', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.getByRole('link', { name: 'HR Management' }).first().click();
//     await page.getByRole('link', { name: 'Manage Employee Category' }).click();
//     await page.getByPlaceholder('Enter category name').click();
//     await page.getByPlaceholder('Enter category name').fill('second division');
//     await page.getByPlaceholder('Enter prefix').click();
//     await page.getByPlaceholder('Enter prefix').fill('test2');
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.goto('https://testschool.launchmysite.in/hr_management/employee_category');
//     const element = await expect(page.getByText('first division')).toBeVisible()
//     await page.getByRole('link', { name: 'Dashboard' }).click();
//     await page.getByRole('link', { name: 'HR Management' }).first().click();
//     await page.getByRole('link', { name: 'Employee department' }).click();
//     await page.locator('div').filter({ hasText: /^Name \*$/ }).locator('div').nth(2).click();
//     await page.getByPlaceholder('Enter name').fill('second div');
//     await page.locator('div').filter({ hasText: /^Code \*Max 5 characters$/ }).locator('div').nth(2).click();
//     await page.getByPlaceholder('Enter code').fill('test3');
//     await page.getByRole('button', { name: 'Save' }).click();
//     await page.goto('https://testschool.launchmysite.in/hr_management/employee_department');
//     const element1 = await expect(page.getByText('first div')).toBeVisible()

//   });
      


// test('test for Attendance Register and Report ', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.locator('div:nth-child(3) > div > .grid > div').first().click();
//     await page.getByRole('link', { name: 'Attendance Register' }).click();
//     await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,nursery');
//     await page.locator('div').filter({ hasText: /^Selectnursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,nursery-A-2024,KWPU7c8CRxmc');
//     await page.getByRole('button', { name: 'View Students' }).click();
//     const element = await expect(page.getByText('rishu')).toBeVisible();
//     await page.getByLabel('Select Month:').selectOption('5');
//     await page.getByRole('button', { name: 'View Students' }).click();
//     const element2 = await expect(page.getByText('rishu')).toBeVisible();
//     await page.getByRole('link', { name: 'Attendance' }).click();
//     await page.getByRole('link', { name: 'Attendance Report' }).click();
//     await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,nursery');
//     await page.locator('div').filter({ hasText: /^Selectnursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,01-06-2024');
//     const page1Promise = page.waitForEvent('popup');
//     const element3 = await expect(page.getByText('rishu')).toBeVisible();
//     await page.getByRole('button', { name: 'Print' }).click();
//     const page1 = await page1Promise;
//   });








