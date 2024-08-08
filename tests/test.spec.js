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
///////////////=-=-/=-=/-=/-/=-/=-/=-/=/-
//// ///// ////
// /// /// /// /// 
//////
/////
// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByPlaceholder('Enter your password').press('Enter');
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'Download TC' }).click();
//   await page.getByTestId('select-academic-year').click();
//   await page.getByLabel('AY-2024-2025', { exact: true }).click();
//   await page.getByTestId('select-class').click();
//   await page.getByLabel('class-6th', { exact: true }).getByText('class-6th').click();
//   await page.getByTestId('select-batch').click();
//   await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-').click();
//   await page.getByText('Test6').click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// });




// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByPlaceholder('Enter your password').press('Enter');
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'Archive Student', exact: true }).click();
//   await page.getByTestId('select-class').click();
//   await page.getByLabel('class-6th', { exact: true }).click();
//   await page.getByTestId('select-batch').click();
//   await page.getByLabel('class-6th-A-2024', { exact: true }).click();
//   await page.getByText('05').click();
//   await page.locator('[id="react-aria4661126511-\\:rv\\:-GDhvc5WqAolZ-actions"] #c1-13').check();
//   await page.getByRole('button', { name: 'Archive Selected' }).click();
//   await page.getByText('Successfully Archived Student').click();
// });

/// //// // /
/// / // / / 

// test('test2', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
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
//   // await page.getByTestId('select-batch').click();
//   // console.log("Batch 'class-6th-A-2024' is visible");

//   await page.getByTestId('select-batch').click();
//   await page.waitForSelector('select[name="batches"]', { state: 'visible', timeout: 10000 });
//   console.log("Batch dropdown is visible");

//   const batchOptions = await page.locator('select[name="batches"] option').allTextContents();
//   console.log("Batch options:", batchOptions);

//   const batchSelect = page.locator('select[name="batches"]');
//   // await batchSelect.getByTestId('select-batch').click();
//   // await page.getByText('class-6th-A-2024').click();
//   // await page.locator('text=class-6th-A-2024').first().click();
//   // await page.locator('select[name="batches"]').first().selectOption('EWYvDK0YxC8Z');

//   // await page.getByText('05').click();
//   // const checkbox = page.locator('[id="react-aria4661126511-\\:rv\\:-GDhvc5WqAolZ-actions"] #c1-13');
//   // await checkbox.waitFor({ state: 'visible', timeout: 10000 });
//   // await checkbox.check();
//   // await page.getByRole('button', { name: 'Archive Selected' }).click();
//   // await page.waitForSelector('text=Successfully Archived Student', { state: 'visible', timeout: 10000 });
// });



// test('test for archive a student', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
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


 
  // test('test for UnArchive Student', async ({ page }) => {
  //   await page.goto('https://testschool.launchmysite.in/');
  //   await page.getByPlaceholder('Enter your Email').click();
  //   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  //   await page.getByPlaceholder('Enter your password').click();
  //   await page.getByPlaceholder('Enter your password').fill('test@123');
  //   await page.getByRole('button', { name: 'Sign In' }).click();
  //   await page.getByRole('link', { name: 'Promotion' }).first().click();
  //   await page.getByRole('link', { name: 'Archive Student', exact: true }).click();
  //   await page.getByLabel('Select a Class').click();
  //   await page.getByLabel('class-6th', { exact: true }).click();
  //   await page.getByLabel('Select a Section').click();
  //   await page.getByLabel('class-6th-A-2024', { exact: true }).click();
  //   await page.locator('tr').filter({ hasText: 'class-6th-A-2024test440No' }).locator('#c1-13').check();
  //   await page.getByRole('button', { name: 'UnArchive Selected' }).click();
  //   await page.getByText('Successfully UnArchivded').click();
  // });
  




//   const { test, expect } = require('@playwright/test');
// const fs = require('fs');
// const path = require('path');
// const pdfParse = require('pdf-parse');

// // Paths to the pre-downloaded PDF files
// const pdfFiles = [
//   path.resolve(__dirname, 'Downloads/marksheet1.pdf'),
//   path.resolve(__dirname, 'Downloads/123.pdf'),
//   path.resolve(__dirname, 'Downloads/id card 2.pdf')
// ];

// test('parse pre-downloaded PDFs', async () => {
//   for (const pdfFilePath of pdfFiles) {
//     // Check if the file exists
//     if (!fs.existsSync(pdfFilePath)) {
//       throw new Error(`File not found: ${pdfFilePath}`);
//     }

//     // Read the pre-downloaded PDF file
//     const pdfData = fs.readFileSync(pdfFilePath);

//     // Parse the PDF
//     try {
//       const parsedData = await pdfParse(pdfData);
//       console.log(`PDF Content (${path.basename(pdfFilePath)}):`, parsedData.text);
//     } catch (error) {
//       console.error(`Error parsing PDF (${path.basename(pdfFilePath)}):`, error);
//     }
//   }

//   const allParsedTexts = pdfFiles.map(pdfFilePath => fs.readFileSync(pdfFilePath));
//   const foundCertificate = allParsedTexts.some(text => text.includes('50'));
//   expect(foundCertificate).toBeTruthy();
// });



// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demoschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('demoschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').press('CapsLock');
//   await page.getByPlaceholder('Enter your password').fill('P');
//   await page.getByPlaceholder('Enter your password').press('CapsLock');
//   await page.getByPlaceholder('Enter your password').fill('Password@321');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Character Certificate' }).click();
//   await page.getByTestId('select-class').getByRole('combobox').selectOption('8QYZJhVcffu1');
//   await page.getByTestId('select-batch').getByRole('combobox').selectOption('dm1JhrlIcSVq');
//   await page.getByTestId('select-student').getByRole('combobox').selectOption('opXmOaUHcbLD');
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;


//     // Start waiting for download before clicking. Note no await.
//   const downloadPromise = page.waitForEvent('download');
//   await page.getById('downloads').click();
//   const download = await downloadPromise;
  
//   // Wait for the download process to complete and save the downloaded file somewhere.
//   await download.saveAs('/path/to/save/at/' + download.suggestedFilename());

// });



