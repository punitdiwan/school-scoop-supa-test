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
//   await page.getByText('Appointment Booked!');
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





test('test for student admissions1', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.locator('.group > div > .inline-flex').first().click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Student Admissions' }).click();
    await page.getByPlaceholder('Enter Admission No').click();
    await page.getByPlaceholder('Enter Admission No').fill('06');
    await page.locator('div').filter({ hasText: /^Full name\*$/ }).locator('div').nth(3).click();
    await page.getByPlaceholder('Enter your Full name').fill('test6');
    await page.locator('div').filter({ hasText: /^D\.O\.B\.\*$/ }).locator('div').nth(3).click();
    // await page.locator('[id="react-aria615390900-\\:ru\\:"]').fill('2000-01-01');
    await page.getByLabel('Select Category').click();
    // await page.getByLabel('common', { exact: true }).click();  
    await page.getByLabel('Select Caste').click();
    // await page.getByLabel('General', { exact: true }).click();
    await page.getByLabel('Select a Class').click();
    // await page.getByLabel('nursery', { exact: true }).click();
    await page.getByLabel('Select a Section').click();
    // await page.getByLabel('nursery-A-2024', { exact: true }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    // const element = await expect(page.getByText('Student Created!')).toBeVisible();
  });