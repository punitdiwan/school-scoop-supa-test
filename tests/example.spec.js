import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('http://localhost:3001/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/React/);
// });

// // test('has word', async ({ page }) => {
// //   await page.goto('http://localhost:3001/');

// //   // Expect a title "to contain" a substring.
// //   await expect(page).toHaveTitle(/Add React to your page/);
// // });

// test('get started link', async ({ page }) => {
//   await page.goto('http://localhost:3001/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Learn React' }).click();

//   // Expects page to have a heading with the name of Installation.
//   // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//   // await expect(page.getByRole('heading', { name: 'Go full-stack with a framework' })).toBeVisible();
 

// });

// test('check if the word is present on the page', async ({ page }) => {
//   // Navigate to the target page
//   await page.goto('http://localhost:3001/');

//   // Get the page content
//   const pageContent = await page.content();

//   // Check if the word "example" is present
//   const wordExists = pageContent.includes('Knee Replacement Surgery Procedure'); // Replace with the word you want to check

//   // Assert the word presence
//   expect(wordExists).toBe(true);
// });
// test('Fill out the contact form', async ({ page }) => {
//   // Go to the website
//   await page.goto('https://www.alayzalifescience.com/Contactus');
//   // await page.getByText('Contactus').click();

//   // Wait for the "Contact Us" form to be visible
//   await page.waitForSelector('form');

//   // Fill out the form
//   await page.getByLabel('Your Name').fill('John');
//   await page.getByLabel('Your Number').fill('john.doe@example.com');
//   await page.getByLabel('Your Email').fill('9874561230');
//   await page.getByLabel('Your Message').fill('Hello, this is a test message.');
  
//   // await page.fill('input[name="email"]', 'john.doe@example.com');

//   // Submit the form
//   await page.click('button[type="SUBMIT"]');
//   // await expect(page.locator('text=Appointment Booked!')).toBeVisible();
//   // await expect(page.getByText('Appointment Booked!')).toBeVisible();
// });



// test case for completing contact us form, complete
// test('contact us form of drumangsite', async ({ page }) => {
//   await page.goto('https://drumang.launchmysite.in/');
//   await page.getByRole('link', { name: 'CONTACT US' }).click();
//   await page.getByLabel('Your Name').click();
//   await page.getByLabel('Your Name').fill('test1');
//   await page.getByLabel('Your Email').click();
//   await page.getByLabel('Your Email').fill('test1@gmail.com');
//   await page.getByLabel('Your Email').press('Tab');
//   await page.getByLabel('Your Number').fill('1234678801');
//   await page.getByLabel('Select Date').fill('2024-07-18');
//   await page.getByLabel('Your Message').click();
//   await page.getByLabel('Your Message').fill('hi there');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByText('Appointment Booked!').click();
// });


// test case for printing exam report for school    complete
// test('Exam Report For School', async ({ page }) => {
//   await page.goto('https://demoschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('demoschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('Password@321');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByText('Manage Exam').click();
//   await page.getByRole('link', { name: 'Exam Report For School' }).click();
//   await page.getByRole('combobox').first().selectOption('HhOLTrq6neQ7,Class-11th');
//   await page.locator('div').filter({ hasText: /^SelectClass-11th-A-2024$/ }).getByRole('combobox').selectOption('v91ZNOGn46Wo,Class-11th-A-2024,');
//   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('GSmkFzBs0ltR-Final');
//   await page.getByRole('combobox').nth(3).selectOption('z6AZjOPXrzNY-Anurag');
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
//   await page1.goto('about:blank');
// });



// test case for view exam report   complete

// test('view exam report', async ({ page }) => {
//   await page.goto('https://demoschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('demoschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('Password@321');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByText('Manage Exam').click();
//   await page.getByRole('link', { name: 'Exam Report Before Publish' }).click();
//   await page.getByRole('combobox').first().selectOption('HhOLTrq6neQ7,class-11th');
//   await page.locator('div').filter({ hasText: /^Selectclass-11th-A-2024$/ }).getByRole('combobox').selectOption('v91ZNOGn46Wo,class-11th-A-2024');
//   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('GSmkFzBs0ltR-undefined');
//   await page.getByText('Overall Class Percentage').click();
// });


 
// not complete
// test('student addmission', async ({ page }) => {
//   await page.goto('https://demoschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('demoschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('Password@321');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByText('Students', { exact: true }).click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();
//   await page.getByPlaceholder('Enter Admission No').click();
//   await page.getByPlaceholder('Enter Admission No').fill('445');
//   await page.getByPlaceholder('Enter your Full name').click();
//   await page.getByPlaceholder('Enter your Full name').fill('test2');
//   await page.locator('D.O.B.').fill('2020-01-10');
// //   await page.locator('[id="react-aria892483892-\\:ru\\:"]').fill('2020-01-10');
//   await page.locator('label').filter({ hasText: 'Female' }).locator('span').first().click();
//   await page.locator('label').filter({ hasText: /^Male$/ }).locator('span').first().click();
//   await page.locator('div').filter({ hasText: /^Student Discount Category\*CategoryCommonRTECategorySelect Category$/ }).first().click();
//   await page.getByLabel('Common', { exact: true }).getByText('Common').click();
//   await page.getByLabel('Select Caste').click();
//   await page.getByLabel('General', { exact: true }).getByText('General').click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('class-11th', { exact: true }).getByText('class-11th').click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('class-11th-A-2024', { exact: true }).getByText('class-11th-A-').click();
//   await page.getByRole('button', { name: 'Submit' }).click();
// });

// not complete
// test('view student and print id card', async ({ page }) => {
//   await page.goto('https://demoschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('demoschool@example.in');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('Password@321');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('button').click();
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('demoschool@example.com');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByText('Students', { exact: true }).click();
//   await page.getByRole('link', { name: 'View All Student' }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('class-11th', { exact: true }).getByText('class-11th').click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('class-11th-A-2024', { exact: true }).getByText('class-11th-A-2024').click();
//   await page.getByRole('gridcell', { name: '445' }).click();
//   await page.getByRole('gridcell', { name: '445' }).click();
//   await page.getByRole('link', { name: 'Student' }).click();
//   await page.getByRole('link', { name: 'Student Identity Card' }).click();
//   await page.getByRole('combobox').first().selectOption('HhOLTrq6neQ7,Class-11th');
//   await page.locator('div').filter({ hasText: /^SelectClass-11th-A-2024$/ }).getByRole('combobox').selectOption('v91ZNOGn46Wo,Class-11th-A-2024');
//   await page.getByLabel('Select Student(s)').click();
//   await page.getByLabel('Test2', { exact: true }).getByText('Test2').click();
//   await page.getByLabel('Select Colour').click();
//   await page.getByLabel('Select Colour').click();
//   await page.getByLabel('Wine', { exact: true }).getByText('Wine').click();
//   await page.getByRole('button', { name: 'Submit Report' }).click();
//   await page.locator('div').filter({ hasText: /^Print$/ }).click();
// });

// not complete
// test('test for creating academic year, student category,and admission of student', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByText('Academic Year').click();
//   await page.getByPlaceholder('Enter start year').click();
//   await page.getByPlaceholder('Enter start year').fill('2024');
//   await page.getByPlaceholder('Enter end year').click();
//   await page.getByPlaceholder('Enter end year').fill('2025');
//   await page.getByRole('button', { name: 'Create' }).click();
//   await page.getByRole('link', { name: 'Dashboard' }).click();
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Create Student Category' }).click();
//   await page.locator('div').filter({ hasText: /^Category Name \*$/ }).locator('div').nth(3).click();
//   await page.getByPlaceholder('Enter category name').fill('common1');
//   await page.getByPlaceholder('Enter description').click();
//   await page.getByPlaceholder('Enter description').fill('common1');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.getByRole('link', { name: 'Student' }).click();
//   await page.getByLabel('Breadcrumbs').getByText('Home').click();
//   await page.getByText('Class And Section').click();
//   await page.getByRole('link', { name: 'Create Class And Section' }).click();
//   await page.locator('input[name="nurseryChecked"]').check();
//   await page.locator('div').filter({ hasText: /^nurseryABCD$/ }).getByRole('checkbox').nth(1).check();
//   await page.locator('#startdate').fill('2024-06-01');
//   await page.getByLabel('Select Academic Year').click();
//   await page.getByLabel('AY-2024-2025', { exact: true }).getByText('AY-2024-2025').click();
//   await page.getByLabel('Select Medium').click();
//   await page.getByLabel('English', { exact: true }).getByText('English').click();
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.getByRole('link', { name: 'Dashboard' }).click();
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();
//   await page.getByPlaceholder('Enter your Full name').click();
//   await page.getByPlaceholder('Enter your Full name').fill('zeeshan');
//   await page.getByPlaceholder('Enter Admission No').click();
//   await page.getByPlaceholder('Enter Admission No').fill('01');
//   await page.locator('D.O.B.').fill('01-01-1999');
//   await page.locator('label').filter({ hasText: 'Female' }).locator('span').first().click();
//   await page.locator('label').filter({ hasText: /^Male$/ }).locator('span').first().click();
//   await page.getByLabel('Select Category').click();
//   await page.getByLabel('common1', { exact: true }).getByText('common1').click();
//   await page.getByLabel('Select Caste').click();
//   await page.getByLabel('General', { exact: true }).getByText('General').click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('nursery', { exact: true }).getByText('nursery').click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).getByText('nursery-A-').click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('link', { name: 'Student' }).click();
//   await page.getByRole('link', { name: 'View All Student' }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('nursery', { exact: true }).getByText('nursery').click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).getByText('nursery-A-').click();
//   await page.getByRole('link', { name: 'View profile' }).click();
//   await page.getByRole('button', { name: 'Print' }).click();
// });


// not working
// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByText('Academic Year').click();
//   await page.getByPlaceholder('Enter start year').click();
//   await page.getByPlaceholder('Enter start year').fill('2024');
//   await page.getByPlaceholder('Enter end year').click();
//   await page.getByPlaceholder('Enter end year').fill('2025');
//   await page.getByRole('button', { name: 'Create' }).click();
//   await page.getByPlaceholder('Enter start year').click();
//   await page.getByPlaceholder('Enter start year').fill('2025');
//   await page.getByPlaceholder('Enter end year').click();
//   await page.getByPlaceholder('Enter end year').fill('2026');
//   await page.getByRole('button', { name: 'Create' }).click();
//   await page.getByRole('link', { name: 'Dashboard' }).click();
//   await page.getByText('Class And Section').click();
//   await page.getByRole('link', { name: 'Create Class And Section' }).click();
//   await page.locator('input[name="kg1Checked"]').check();
//   await page.locator('div').filter({ hasText: /^kg1ABCD$/ }).getByRole('checkbox').nth(1).check();
//   await page.locator('div').filter({ hasText: /^kg1ABCD$/ }).getByRole('checkbox').nth(2).check();
//   await page.locator('div').filter({ hasText: /^kg1ABCD$/ }).getByRole('checkbox').nth(3).check();
//   await page.locator('div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(4) > div > .mb-2\\.5').click();
//   await page.locator('div').filter({ hasText: /^kg1ABCD$/ }).getByRole('checkbox').nth(4).check();
//   await page.locator('#startdate').fill('2025-01-01');
//   await page.getByLabel('Select Medium').click();
//   await page.getByLabel('English', { exact: true }).getByText('English').click();
//   await page.getByLabel('Select Academic Year').click();
//   await page.getByLabel('AY-2025-2026', { exact: true }).click();
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.getByRole('gridcell', { name: 'View Section (4)' }).click();
//   await page.getByText('Class: kg1Add New Section').click();
//   await page.getByText('Class: kg1Add New Section').click();
//   await page.getByText('List Of SectionsAcadamic Year:- AY-2025-2026Dashboard / Manage Class / List Of SectionClass: kg1Add New SectionDrop to group by ActionsSection Name0Start Date0End Date0Section ID0C-202501-01-202501-01-2026l2XijEGMfxCuA-202501-01-202501-01-2026mhlx8oQk7oUTD-202501-01-202501-01-2026P2D3UL4w5wrVB-202501-01-202501-01-2026Kngs4irRb77VRows per page101-4 of').click();
//   await page.getByText('List Of SectionsAcadamic Year:- AY-2025-2026Dashboard / Manage Class / List Of SectionClass: kg1Add New SectionDrop to group by ActionsSection Name0Start Date0End Date0Section ID0C-202501-01-202501-01-2026l2XijEGMfxCuA-202501-01-202501-01-2026mhlx8oQk7oUTD-202501-01-202501-01-2026P2D3UL4w5wrVB-202501-01-202501-01-2026Kngs4irRb77VRows per page101-4 of').click();
//   await page.getByText('List Of SectionsAcadamic Year:- AY-2025-2026Dashboard / Manage Class / List Of SectionClass: kg1Add New SectionDrop to group by ActionsSection Name0Start Date0End Date0Section ID0C-202501-01-202501-01-2026l2XijEGMfxCuA-202501-01-202501-01-2026mhlx8oQk7oUTD-202501-01-202501-01-2026P2D3UL4w5wrVB-202501-01-202501-01-2026Kngs4irRb77VRows per page101-4 of').click();
//   await page.getByText('List Of SectionsAcadamic Year:- AY-2025-2026Dashboard / Manage Class / List Of SectionClass: kg1Add New SectionDrop to group by ActionsSection Name0Start Date0End Date0Section ID0C-202501-01-202501-01-2026l2XijEGMfxCuA-202501-01-202501-01-2026mhlx8oQk7oUTD-202501-01-202501-01-2026P2D3UL4w5wrVB-202501-01-202501-01-2026Kngs4irRb77VRows per page101-4 of').click();
//   await page.getByRole('cell', { name: '-01-2025' }).first().click();
//   await page.getByRole('link', { name: 'Dashboard' }).click();
//   await page.getByText('Students', { exact: true }).click();
//   await page.getByRole('link', { name: 'View All Student' }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('nursery', { exact: true }).click();
//   await page.getByRole('main').locator('div').filter({ hasText: 'My Class*Class Listnurserykg1Class Listnursery,Section*Section Listnursery-A-' }).nth(3).click();
//   await page.getByLabel('Select a Section').click();
//   await page.locator('div').filter({ hasText: /^nursery-A-2024$/ }).nth(2).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('gridcell', { name: 'View profile Delete' }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('gridcell', { name: 'View profile Delete' }).click();
//   await page.getByRole('link', { name: 'View profile' }).click();
//   await page.getByRole('button', { name: 'Edit' }).click();
//   await page.getByRole('button', { name: 'Update' }).click();
//   await page.getByRole('button', { name: 'Print' }).click();
// });



//--- test to print id card of a student   (except wine working)
// test('test to print id card of a student', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByPlaceholder('Enter your password').press('Enter');
//   await page.getByText('Students', { exact: true }).click();
//   await page.getByRole('link', { name: 'Student Identity Card' }).click();
//   await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
//   await page.locator('div').filter({ hasText: /^SelectKg1-A-2025Kg1-B-2025Kg1-C-2025Kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,Kg1-A-2025');
//   await page.getByLabel('Select Student(s)').click();
//   await page.getByLabel('Rishu', { exact: true }).getByText('Rishu').click();
//   await page.getByLabel('Select Colour').click();
// //   await page.getByLabel('Wine', { exact: true }).getByText('Wine').click();
//   await page.getByRole('button', { name: 'Submit Report' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// });





// student admission not working
// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();
//   await page.getByPlaceholder('Enter Admission No').click();
//   await page.getByPlaceholder('Enter Admission No').fill('03');
//   await page.getByPlaceholder('Enter Admission No').click();
//   await page.getByPlaceholder('Enter your Full name').click();
//   await page.getByPlaceholder('Enter your Full name').fill('test');
//   await page.locator('D.O.B').fill('01-01-2000');
//   await page.getByLabel('Select Category').click();
//   await page.locator('[id="react-aria913177512-\\:r27\\:-option-0b8yXgJNrKCB"]').click();
//   await page.getByLabel('Select Caste').click();
//   await page.getByLabel('General', { exact: true }).getByText('General').click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('kg1', { exact: true }).getByText('kg1').click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('kg1-A-2025', { exact: true }).getByText('kg1-A-').click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.locator('div > div > div > .go4109123758 > .go2072408551 > .go685806154 > .go1579819456').click();
//   await page.getByRole('main').getByText('Student Created!').click();
//   await page.getByRole('link', { name: 'Student' }).click();
//   await page.getByRole('link', { name: 'View All Student' }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('kg1', { exact: true }).getByText('kg1').click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('kg1-A-2025', { exact: true }).getByText('kg1-A-').click();
//   await page.getByText('Test', { exact: true }).click();
//   await page.getByRole('link', { name: 'View profile' }).nth(1).click();
//   await page.getByRole('button', { name: 'Edit' }).click();
//   await page.getByRole('button', { name: 'Update' }).click();
//   await page.getByText('Updated Successfully!').click();
//   await page.getByRole('button', { name: 'Print' }).click();
// });



// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByText('School Details').click();
//   await page.locator('div').filter({ hasText: /^School Name\*$/ }).locator('div').nth(3).click();
//   await page.getByPlaceholder('Enter your school name').fill('test school');
//   await page.locator('div').filter({ hasText: /^School Code$/ }).locator('div').nth(3).click();
//   await page.getByPlaceholder('Enter your school code').fill('001');
//   await page.getByPlaceholder('YYYY').click();
//   await page.getByPlaceholder('YYYY').fill('2000');
//   await page.getByPlaceholder('Ex:').click();
// //   await page.getByRole('button', { name: 'update' }).click();
// //   await page.getByLabel(',', { exact: true }).click();
// //   await page.getByRole('listbox', { name: 'Affiliated with' }).click();
// //   await page.getByLabel('CBSE', { exact: true }).getByText('CBSE').click();
// //   await page.getByRole('button', { name: 'update' }).click();
// //   await page.getByText('School Details created').click();
//   await page.getByRole('link', { name: 'Dashboard' }).click();
//   await page.getByText('Manage Subject').click();
//   await page.getByRole('link', { name: 'Manage Major Subject' }).click();
//   await page.locator('div').filter({ hasText: /^Select Classnurserykg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,kg1');
//   await page.locator('div').filter({ hasText: /^Selectkg1-A-2025kg1-B-2025kg1-C-2025kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,kg1-A-2025');
//   await page.getByRole('button', { name: '+ ADD SUBJECT' }).click();
//   await page.getByPlaceholder('Enter Subject Name').click();
//   await page.getByPlaceholder('Enter Subject Name').fill('english');
//   await page.getByPlaceholder('Enter Subject Code').click();
//   await page.getByPlaceholder('Enter Subject Code').fill('01');
//   await page.getByPlaceholder('Enter Days Per Week').click();
//   await page.getByPlaceholder('Enter Days Per Week').fill('5');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('button', { name: '+ ADD SUBJECT' }).click();
//   await page.getByPlaceholder('Enter Subject Name').click();
//   await page.getByPlaceholder('Enter Subject Name').fill('hindi');
//   await page.locator('div:nth-child(2) > .relative > .inline-flex').first().click();
//   await page.getByPlaceholder('Enter Subject Code').fill('02');
//   await page.getByPlaceholder('Enter Days Per Week').click();
//   await page.getByPlaceholder('Enter Days Per Week').fill('5');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('button', { name: '+ ADD SUBJECT' }).click();
//   await page.getByPlaceholder('Enter Subject Name').click();
//   await page.getByPlaceholder('Enter Subject Name').fill('maths');
//   await page.getByPlaceholder('Enter Subject Code').click();
//   await page.getByPlaceholder('Enter Subject Code').fill('03');
//   await page.getByPlaceholder('Enter Days Per Week').click();
//   await page.getByPlaceholder('Enter Days Per Week').fill('5');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('button', { name: '+ ADD SUBJECT' }).click();
//   await page.getByPlaceholder('Enter Subject Name').click();
//   await page.getByPlaceholder('Enter Subject Name').fill('science');
//   await page.getByPlaceholder('Enter Subject Code').click();
//   await page.getByPlaceholder('Enter Subject Code').fill('04');
//   await page.getByPlaceholder('Enter Days Per Week').click();
//   await page.getByPlaceholder('Enter Days Per Week').fill('5');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('link', { name: 'Manage Subject' }).click();
//   await page.getByLabel('Breadcrumbs').getByText('Home').click();
//   await page.getByText('Manage Exam').click();
//   await page.getByRole('link', { name: 'Manage Grade' }).click();
//   await page.getByRole('button', { name: 'Add Grading Group' }).click();
//   await page.getByLabel('Name *').click();
//   await page.getByLabel('Name *').fill('test');
//   await page.getByRole('button', { name: 'Add' }).click();
// //   await page.getByRole('button', { name: 'Open test Click To See Grade' }).click();
// //   await page.getByRole('button', { name: 'Open test Click To See Grade' }).click();
// //   await page.getByRole('button', { name: 'Open test Click To See Grade' }).click();
//   await page.getByRole('link', { name: 'Manage Exam' }).click();
//   await page.getByRole('link', { name: 'Manage Division' }).click();
//   await page.locator('div').filter({ hasText: /^Class \* Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0');
//   await page.getByRole('button', { name: 'Add Division Group' }).click();
//   await page.getByLabel('Name *').click();
//   await page.getByLabel('Name *').fill('test');
//   await page.getByRole('button', { name: 'Add' }).click();
// //   await page.getByRole('button', { name: 'Open test Click To See' }).click();
// //   await page.getByRole('button', { name: 'Open test Click To See' }).click();
// //   await page.getByRole('button', { name: 'Open test Click To See' }).click();
//   await page.locator('div').filter({ hasText: /^Class \* Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('');
//   await page.locator('div').filter({ hasText: /^Class \* Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0');
//   await page.getByRole('link', { name: 'Manage Exam' }).click();
//   await page.getByRole('link', { name: 'Manage Exam Group' }).click();
//   await page.getByPlaceholder('ex: QUARTERLY').click();
//   await page.getByPlaceholder('ex: QUARTERLY').fill('final');
//   await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
//   await page.getByLabel('Kg1-A-').check();
//   await page.getByPlaceholder('ex: QUARTERLY').click();
//   await page.getByPlaceholder('ex: QUARTERLY').fill('final');
//   await page.locator('div').filter({ hasText: /^Exam Type \* SelectMarksGradeGrade and Marks$/ }).getByRole('combobox').selectOption('Marks');
// //   await page.locator('div').filter({ hasText: /^Select Grade Grouptest$/ }).getByRole('combobox').selectOption('9UQktLPothHp');
//   await page.getByRole('button', { name: 'Add Group' }).click();
// //   await page.locator('div').filter({ hasText: /^Select Grade Grouptest$/ }).getByRole('img').click();
// //   await page.locator('div').filter({ hasText: /^Select Grade Grouptest$/ }).getByRole('img').click();
// //   await page.locator('div').filter({ hasText: /^Select Grade Grouptest$/ }).getByRole('combobox').selectOption('');
//   await page.getByRole('button', { name: 'Add Group' }).click();
// //   await page.getByRole('main').getByText('Successfully Added Group').click();
// //   await page.getByRole('button', { name: 'final' }).click();
// //   await page.locator('[id="react-aria1207494108-\\:r9a\\:"]').fill('2025-01-01');
// //   await page.locator('[id="react-aria1207494108-\\:r9f\\:"]').click();
// //   await page.locator('div').filter({ hasText: /^All Maximum Marks$/ }).locator('div').nth(3).click();
// //   await page.locator('[id="react-aria1207494108-\\:r9f\\:"]').fill('99');
// //   await page.locator('div').filter({ hasText: /^All Minimum Marks$/ }).locator('div').nth(3).click();
// //   await page.locator('[id="react-aria1207494108-\\:r9k\\:"]').fill('33');
// //   await page.locator('div').filter({ hasText: /^All Start Time$/ }).locator('div').nth(3).click();
// //   await page.locator('[id="react-aria1207494108-\\:r9p\\:"]').fill('09:00');
// //   await page.locator('div').filter({ hasText: /^All End Time$/ }).locator('div').nth(2).click();
// //   await page.locator('[id="react-aria1207494108-\\:r9u\\:"]').fill('12:00');
// //   await page.getByRole('button', { name: 'Submit' }).click();
// //   await page.getByRole('main').getByText('Successfully Added Exams').nth(3).click();
// //   await page.getByRole('button', { name: 'Publish' }).click();
//   await page.getByText('Manage Exam /').click();
//   await page.getByRole('link', { name: 'Assign Marks' }).click();
//   await page.locator('div').filter({ hasText: /^Class \* Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
//   await page.locator('div').filter({ hasText: /^SelectKg1-A-2025Kg1-B-2025Kg1-C-2025Kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,Kg1-A-2025');
//   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('9pbfLIZXITM4,Final');
//   await page.getByRole('button', { name: 'Assign' }).first().click();
// //   await page.locator('[id="react-aria1207494108-\\:rdt\\:"]').click();
// //   await page.locator('[id="react-aria1207494108-\\:rdt\\:"]').fill('80');
// //   await page.locator('[id="react-aria1207494108-\\:re8\\:"]').click();
// //   await page.locator('[id="react-aria1207494108-\\:re8\\:"]').fill('70');
//   await page.getByRole('button', { name: 'Submit Marks' }).click();
//   await page.getByText('Successfully Added Score');
//   await page.locator('div').filter({ hasText: /^Class \* Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
//   await page.locator('div').filter({ hasText: /^SelectKg1-A-2025Kg1-B-2025Kg1-C-2025Kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,Kg1-A-2025');
//   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('9pbfLIZXITM4,Final');
//   await page.getByRole('button', { name: 'Assign' }).nth(1).click();
// //   await page.locator('[id="react-aria1207494108-\\:rev\\:"]').click();
// //   await page.locator('[id="react-aria1207494108-\\:rev\\:"]').fill('90');
//   await page.locator('tr:nth-child(2) > td:nth-child(4) > .group > div > .relative > .inline-flex').click();
// //   await page.locator('[id="react-aria1207494108-\\:rfa\\:"]').fill('80');
//   await page.getByRole('button', { name: 'Submit Marks' }).click();
//   await page.getByText('Successfully Added Score').nth(3).click();
//   await page.locator('div').filter({ hasText: /^Class \* Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
//   await page.getByText('Batch *SelectKg1-A-2025Kg1-B-').click();
//   await page.locator('div').filter({ hasText: /^SelectKg1-A-2025Kg1-B-2025Kg1-C-2025Kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,Kg1-A-2025');
//   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('9pbfLIZXITM4,Final');
//   await page.getByRole('button', { name: 'Assign' }).nth(2).click();
// //   await page.locator('[id="react-aria1207494108-\\:rg1\\:"]').click();
// //   await page.locator('[id="react-aria1207494108-\\:rg1\\:"]').fill('88');
// //   await page.locator('[id="react-aria1207494108-\\:rgc\\:"]').click();
// //   await page.locator('[id="react-aria1207494108-\\:rgc\\:"]').fill('77');
//   await page.getByRole('button', { name: 'Submit Marks' }).click();
//   await page.getByText('Class * Select ClassNurseryKg1').click();
// //   await page.locator('div').filter({ hasText: /^SelectKg1-A-2025Kg1-B-2025Kg1-C-2025Kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,Kg1-A-2025');
// //   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('9pbfLIZXITM4,Final');
// //   await page.getByRole('button', { name: 'Assign' });
// //   await page.locator('[id="react-aria1207494108-\\:rh3\\:"]').click();
// //   await page.locator('[id="react-aria1207494108-\\:rh3\\:"]').fill('80');
// //   await page.locator('tr:nth-child(2) > td:nth-child(4) > .group > div > .relative > .inline-flex').click();
// //   await page.locator('[id="react-aria1207494108-\\:rhe\\:"]').fill('60');
// //   await page.getByRole('button', { name: 'Submit Marks' }).click();
// //   await page.getByText('Successfully Added Score');
//   await page.getByRole('link', { name: 'Manage Exam' }).click();
//   await page.getByRole('link', { name: 'Exam Report Before Publish' }).click();
//   await page.locator('div').filter({ hasText: /^Select Classnurserykg1$/ }).getByRole('img').click();
//   await page.locator('div').filter({ hasText: /^Select Classnurserykg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,kg1');
//   await page.locator('div').filter({ hasText: /^Selectkg1-A-2025kg1-B-2025kg1-C-2025kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,kg1-A-2025');
//   await page.locator('div').filter({ hasText: /^Group \* Selectfinal$/ }).getByRole('combobox').selectOption('9pbfLIZXITM4-undefined');
//   await page.getByRole('cell', { name: 'rishu' }).click();
//   await page.getByRole('cell', { name: 'test' }).click();
//   await page.getByText('Overall Class Percentage').click();
//   await page.getByRole('link', { name: 'Manage Exam' }).click();
//   await page.getByRole('link', { name: 'Publish Result', exact: true }).click();
//   await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
//   await page.locator('div').filter({ hasText: /^SelectKg1-A-2025Kg1-B-2025Kg1-C-2025Kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,Kg1-A-2025');
//   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('9pbfLIZXITM4-undefined');
// //   await page.getByRole('button', { name: 'Publish Result', exact: true }).click();
//   await page.getByLabel('Final').getByText('Final').click();
//   await page.getByText('Marks').click();
//   await page.getByLabel('Final').getByText('Kg1-A-').click();
//   await page.getByText('11-07-').click();
//   await page.getByRole('link', { name: 'Manage Exam' }).click();
//   await page.getByRole('link', { name: 'Manage Weightage Template' }).click();
//   await page.locator('div').filter({ hasText: /^Assign Template$/ }).nth(1).click();
//   await page.getByLabel('Select a Class').click();
// //   await page.getByLabel('kg1', { exact: true }).getByText('kg1').click();
//   await page.getByLabel('Select a Section').click();
// //   await page.getByLabel('kg1-A-2025', { exact: true }).getByText('kg1-A-2025').click();
//   await page.getByLabel('Select a Template Name').click();
// //   await page.locator('[id="react-aria1207494108-\\:rnn\\:"]').click();
//   await page.getByRole('button', { name: 'Select a Type Personal Detail' }).click();
// //   await page.getByLabel('Normal', { exact: true }).click();
//   await page.getByLabel('Yes / No').click();
// //   await page.getByLabel('Yes', { exact: true }).click();
// //   await page.getByLabel('Select a Type').click();
// //   await page.getByLabel('Advance', { exact: true }).getByText('Advance').click();
//   await page.getByLabel('Select a Color').click();
// //   await page.getByLabel('Red', { exact: true }).getByText('Red').click();
//   await page.getByLabel('Select a Border Type').click();
// //   await page.getByLabel('Thick ===========', { exact: true }).getByText('Thick ===========').click();
//   await page.getByLabel('Select a Border Color').click();
// //   await page.getByLabel('Red', { exact: true }).getByText('Red').click();
//   await page.getByLabel('Select a Heading Color').click();
// //   await page.getByLabel('Green', { exact: true }).getByText('Green').click();
//   await page.getByLabel('(Recomended - 20)').click();
// //   await page.getByLabel('16', { exact: true }).getByText('16').click();
//   await page.getByLabel('16,').click();
// //   await page.getByLabel('20', { exact: true }).click();
//   await page.getByLabel('Font Style', { exact: true }).click();
// //   await page.getByLabel('Times', { exact: true }).getByText('Times').click();
//   await page.getByLabel('(Recomended - 10/12)').click();
// //   await page.getByLabel('10', { exact: true }).getByText('10').click();
//   await page.getByLabel('(Recomended - 25)').click();
// //   await page.getByLabel('30', { exact: true }).getByText('30').click();
// //   await page.getByLabel('30,').click();
//   await page.getByLabel('25', { exact: true }).getByText('25').click();
//   await page.getByLabel('Student Image ?').click();
// //   await page.getByLabel('Yes', { exact: true }).getByText('Yes').click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('link', { name: 'Manage Exam' }).click();
//   await page.getByRole('link', { name: 'Exam Report For School' }).click();
//   await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
//   await page.getByText('Batch *SelectKg1-A-2025Kg1-B-').click();
//   await page.locator('div').filter({ hasText: /^SelectKg1-A-2025Kg1-B-2025Kg1-C-2025Kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,Kg1-A-2025,');
//   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('9pbfLIZXITM4-Final');
//   await page.locator('div').filter({ hasText: /^Student \* SelectRishuTest$/ }).getByRole('combobox').selectOption('EK66476lqMPO-Rishu');
//   await page.getByRole('cell', { name: 'ENGLISH' }).click();
//   await page.getByRole('cell', { name: 'HINDI' }).click();
//   await page.getByRole('cell', { name: 'MATHS' }).click();
//   await page.getByRole('cell', { name: 'SCIENCE' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// });




test('test', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your Email').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.getByRole('link', { name: 'Manage Exam' }).first().click();
  await page.getByRole('link', { name: 'Manage Weightage Template' }).click();
  await page.getByRole('button', { name: 'Assign Template' }).click();
  await page.getByLabel('Select a Class').click();
//   await page.getByLabel('kg1', { exact: true }).getByText('kg1').click();
  await page.getByLabel('Select a Section').click();
//   await page.getByLabel('kg1-A-2025').getByText('kg1-A-2025').click();
  await page.getByLabel('Select a Template Name').click();
//   await page.locator('[id="react-aria2677234340-\\:r65\\:"]').click();
  await page.getByRole('button', { name: 'Select a Type Personal Detail' }).click();
  await page.getByLabel('Normal', { exact: true }).getByText('Normal').click();
  await page.getByLabel('Yes / No').click();
//   await page.getByLabel('Yes', { exact: true }).click();
//   await page.getByLabel('Select a Type').click();
//   await page.getByLabel('Advance', { exact: true }).getByText('Advance').click();
  await page.getByLabel('Select a Color').click();
//   await page.getByLabel('Red', { exact: true }).getByText('Red').click();
  await page.getByLabel('Select a Border Type').click();
//   await page.getByLabel('Thick ===========', { exact: true }).getByText('Thick ===========').click();
  await page.getByLabel('Select a Border Color').click();
//   await page.getByLabel('Red', { exact: true }).getByText('Red').click();
//   await page.getByLabel('Select a Heading Color').click();
//   await page.getByLabel('Red', { exact: true }).getByText('Red').click();
//   await page.getByLabel('(Recomended - 20)').click();
//   await page.getByLabel('20', { exact: true }).getByText('20').click();
//   await page.getByLabel('Font Style', { exact: true }).click();
//   await page.getByLabel('Helvetica', { exact: true }).getByText('Helvetica').click();
//   await page.getByLabel('(Recomended - 10/12)').click();
//   await page.getByLabel('10', { exact: true }).getByText('10').click();
//   await page.getByLabel('(Recomended - 25)').click();
//   await page.getByLabel('25', { exact: true }).getByText('25').click();
//   await page.getByLabel('Student Image ?').click();
//   await page.getByLabel('Yes', { exact: true }).getByText('Yes').click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.getByRole('link', { name: 'Manage Exam' }).click();
//   await page.getByRole('link', { name: 'Exam Report For School' }).click();


//   await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1$/ }).getByRole('combobox').selectOption('x3sih05fuiX0,Kg1');
//   await page.locator('div').filter({ hasText: /^SelectKg1-A-2025Kg1-B-2025Kg1-C-2025Kg1-D-2025$/ }).getByRole('combobox').selectOption('mhlx8oQk7oUT,Kg1-A-2025,');
//   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('9pbfLIZXITM4-Final');
//   await page.locator('div').filter({ hasText: /^Student \* SelectRishuTest$/ }).getByRole('combobox').selectOption('EK66476lqMPO-Rishu');
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
});



