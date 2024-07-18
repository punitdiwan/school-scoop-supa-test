// // / half working
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






// // /---half
// // import { test, expect } from '@playwright/test';

// test('test for View All Collection of transport', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'View All Collection' }).click();
//   await page.getByLabel('Select a Section').click();
// //   await page.getByLabel('nursery-A-2024', { exact: true }).click();
// //   await page.getByLabel('1', { exact: true }).getByRole('button', { name: 'Edit' }).click();
// //   await page.getByRole('button', { name: 'Update' }).click();
// //   await page.getByLabel('2', { exact: true }).getByRole('button', { name: 'Edit' }).click();
// //   await page.getByRole('button', { name: 'Update' }).click();
// });


// // / not working
// // import { test, expect } from '@playwright/test';

// test('test for Transport Fees', async ({ page }) => {
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
//   await page.getByRole('link', { name: 'Pay Fees' }).click();
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



// // / not working
// // import { test, expect } from '@playwright/test';

// test('test for Unassign Transport', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'Unassign Transport' }).click();
//   await page.getByLabel('Select Current Course', { exact: true }).click();
//   await page.getByLabel('nursery', { exact: true }).click();
//   await page.getByLabel('Select Current Batch', { exact: true }).click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).click();
//   await page.getByLabel('Select Collection', { exact: true }).click();
//   await page.getByLabel('first', { exact: true }).click();
//   await page.getByRole('button', { name: 'View Student List' }).click();
//   await page.getByLabel('04').getByRole('button', { name: 'Unassign' }).click();
//   await page.locator('div').filter({ hasText: 'Transport Unassigned' });
// });





// // not working
// // import { test, expect } from '@playwright/test';

// test('test for creating time table', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(3) > div > .grid > div:nth-child(4)').click();
//   await page.getByRole('link', { name: 'Set Class Timings' }).click();
//   await page.getByLabel('Select Class').click();
//   await page.getByLabel('class-1st', { exact: true }).click();
//   await page.getByLabel('Select Section').click();
//   await page.getByLabel('class-1st-A-2024', { exact: true }).click();
//   await page.getByRole('button', { name: 'Add New Time' }).click();
//   await page.getByLabel('Select a Class and Section').click();
//   await page.getByLabel('class-1st', { exact: true }).click();
//   await page.getByLabel('Select Section').click();
//   await page.getByLabel('class-1st-A-2024', { exact: true }).click();
//   await page.getByPlaceholder('Enter a Name').click();
//   await page.getByPlaceholder('Enter a Name').fill('maths');
//   await page.getByPlaceholder('Enter your Start Time').click();
//   await page.getByPlaceholder('Enter your Start Time').fill('10:00');
//   await page.getByPlaceholder('Enter your End Time').click();
//   await page.getByPlaceholder('Enter your End Time').fill('11:00');
//   await page.getByRole('button', { name: 'Add' }).click();
//   await page.locator('div').filter({ hasText: 'Successfully Added Class Time' }).nth(3).click();
//   await page.getByRole('button', { name: 'Add New Time' }).click();
//   await page.getByLabel('Select a Class and Section').click();
//   await page.getByLabel('class-1st', { exact: true }).click();
//   await page.getByLabel('Select Section').click();
//   await page.getByLabel('class-1st-A-2024', { exact: true }).click();
//   await page.locator('div:nth-child(3) > .relative > .inline-flex').click();
//   await page.getByPlaceholder('Enter a Name').fill('hindi');
//   await page.getByPlaceholder('Enter your Start Time').click();
//   await page.getByPlaceholder('Enter your Start Time').fill('10:00');
//   await page.getByPlaceholder('Enter your Start Time').click();
//   await page.getByPlaceholder('Enter your End Time').click();
//   await page.getByPlaceholder('Enter your End Time').fill('12:00');
//   await page.getByRole('button', { name: 'Add' }).click();
// });



// /// not working(downdrop)
// // import { test, expect } from '@playwright/test';

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



// // not working
// // import { test, expect } from '@playwright/test';

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


// // not working
// // import { test, expect } from '@playwright/test';

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


// // not working
// // import { test, expect } from '@playwright/test';

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


// // half working
// // import { test, expect } from '@playwright/test';

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




// //not working
// //import { test, expect } from '@playwright/test';

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

/////------18jul


// // //working

