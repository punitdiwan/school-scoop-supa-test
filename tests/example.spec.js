
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