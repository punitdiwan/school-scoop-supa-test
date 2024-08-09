
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

// Paths to the pre-downloaded PDF files
const pdfFiles = [
  path.resolve(__dirname, 'Downloads/marksheet1.pdf'),
  path.resolve(__dirname, 'Downloads/123.pdf'),
  path.resolve(__dirname, 'Downloads/id card 2.pdf')
];

test('parse pre-downloaded PDFs', async () => {
  for (const pdfFilePath of pdfFiles) {
    // Check if the file exists
    if (!fs.existsSync(pdfFilePath)) {
      throw new Error(`File not found: ${pdfFilePath}`);
    }

    // Read the pre-downloaded PDF file
    const pdfData = fs.readFileSync(pdfFilePath);

    // Parse the PDF
    try {
      const parsedData = await pdfParse(pdfData);
      console.log(`PDF Content (${path.basename(pdfFilePath)}):`, parsedData.text);
    } catch (error) {
      console.error(`Error parsing PDF (${path.basename(pdfFilePath)}):`, error);
    }
  }

  const allParsedTexts = pdfFiles.map(pdfFilePath => fs.readFileSync(pdfFilePath));
  const foundCertificate = allParsedTexts.some(text => text.includes('Akshay'));
  expect(foundCertificate).toBeTruthy();
});






test('test for student addmission1', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
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
  await page.locator("[name='classs']").selectOption('class-5th');
  await page.getByTestId('Section').click();
  // await page.locator("[name='batches']").selectOption('4P1Fblfev3yF, class-4th-A-2024');
  await page.getByRole('button', { name: 'Submit' }).click();
});



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
