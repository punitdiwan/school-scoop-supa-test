
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




// const path = require('path');
// const fs = require('fs');
// const pdfParse = require('pdf-parse');

// test('test for PDF download after waiting for Test1 text', async ({ page }) => {
//   // Go to the page and perform the necessary actions
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'View All Student' }).click();
  
//   // Fill the admission number
//   await page.getByPlaceholder('fullname or admission no. or').click();
//   await page.getByPlaceholder('fullname or admission no. or').fill('01');
  
//   // await page.waitForTimeout(4000); // Wait for 3 seconds
//   // await expect(page.getByText('Test1')).toBeVisible();
  
//   // Setup download folder
//   const downloadPath = path.resolve(__dirname, 'Downloads'); // Ensure 'Downloads' folder exists or create it
//   if (!fs.existsSync(downloadPath)) {
//     fs.mkdirSync(downloadPath);
//   }

//   // Listen for the download event
//   const [download] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'PDF' }).click()
//   ]);

//   // Save the downloaded PDF to the specified folder
//   const downloadFilePath = path.join(downloadPath, 'student-report.pdf');
//   await download.saveAs(downloadFilePath);

//   // Verify the file was downloaded and saved correctly
//   expect(fs.existsSync(downloadFilePath)).toBe(true);

//   // Read and parse the PDF
//   try {
//     const pdfData = fs.readFileSync(downloadFilePath);
//     const parsedData = await pdfParse(pdfData);
//     console.log(`PDF Content:`, parsedData.text);
//   } catch (error) {
//     console.error(`Error parsing PDF:`, error);
//   }
// });



//// ///
//////////
////////
//////

// const path = require('path');
// const fs = require('fs');
// const pdfParse = require('pdf-parse');

// test('test for PDF download', async ({ page }) => {
//   // Go to the page and perform the necessary actions
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'View All Student' }).click();
//   await page.getByPlaceholder('fullname or admission no. or').click();
//   await page.getByPlaceholder('fullname or admission no. or').fill('01');
//   // Assuming clicking on a student is necessary; uncomment if needed
//   // await page.getByText('Test1').click();

//   // Setup download folder
//   const downloadPath = path.resolve(__dirname, 'Downloads'); // Ensure 'Downloads' folder exists or create it
//   if (!fs.existsSync(downloadPath)) {
//     fs.mkdirSync(downloadPath);
//   }

//   // Listen for the download event
//   const [download] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByRole('button', { name: 'PDF' }).click()
//   ]);

//   // Save the downloaded PDF to the specified folder
//   const downloadFilePath = path.join(downloadPath, 'student-report.pdf');
//   await download.saveAs(downloadFilePath);

//   // Verify the file was downloaded and saved correctly
//   expect(fs.existsSync(downloadFilePath)).toBe(true);

//   // Read and parse the PDF
//   try {
//     const pdfData = fs.readFileSync(downloadFilePath);
//     const parsedData = await pdfParse(pdfData);
//     console.log(`PDF Content:`, parsedData.text);
//   } catch (error) {
//     console.error(`Error parsing PDF:`, error);
//   }
// });






// const path = require('path');
// const fs = require('fs');

// test('Download page from print preview', async ({ page }) => {
//   // Create a directory for downloads if it doesn't exist
//   const downloadDir = path.join(__dirname, 'Downloads');
//   if (!fs.existsSync(downloadDir)) {
//     fs.mkdirSync(downloadDir);
//   }

//   // Navigate to the page
//   await page.goto('https://testschool.launchmysite.in/');

//   // Perform actions to reach print preview
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Student Identity Card' }).click();
//   await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,Class-4th');
//   await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,Class-4th-A-2024');
//   await page.getByTestId('select-student').click();
//   await page.getByLabel('All Students', { exact: true }).getByText('All Students').click();
//   await page.getByTestId('select-idcard').click();
//   await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Wine');
  
//   // Click Submit Report to trigger print preview
//   await page.getByRole('button', { name: 'Submit Report' }).click();
//   console.log('Clicked Submit Report button');

//   // Wait for print preview to open in a new page
//   const [newPage] = await Promise.all([
//     page.waitForEvent('popup', { timeout: 60000 }), // Adjust timeout as needed
//     page.getByRole('button', { name: 'Print' }).click()
//   ]);

//   console.log('Print preview opened');

//   // Wait for the download event
//   const [download] = await Promise.all([
//     // newPage.waitForEvent('download', { timeout: 60000 }),
//     newPage.getByRole('button', { name: 'save' }).click()
//   ]);

//   // Save the downloaded file
//   const filePath = path.join(downloadDir, 'id_card.pdf'); // Adjust the filename as needed
//   await download.saveAs(filePath);

//   console.log(`File saved to ${filePath}`);
// });

