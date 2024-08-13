import { test, expect } from '@playwright/test';


// test('test for student addmission', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
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
//   await page.locator("[name='batches']").selectOption('class-4th-A-2024');
//   await page.getByRole('button', { name: 'Submit' }).click();

// });




// test('test for class creation', async ({ page }) => {
    
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Class And Section' }).first().click();
//   await page.getByRole('link', { name: 'Create Class And Section' }).click();
//   await page.locator('input[name="class-5thChecked"]').check();
//   await page.locator('div').filter({ hasText: /^class-5thABCD$/ }).getByRole('checkbox').nth(1).check();
//   await page.getByTestId('start-date').fill('2024-06-01');
//   await page.getByText('Academic Year *Academic').click();
//   await page.locator("[name='academic_year']").selectOption('AY-2024-2025');
//   await page.getByText('Medium *MediumEnglishHindiMediumSelect Medium').click();
//   await page.getByLabel('English', { exact: true }).click();    
//   await page.getByRole('button', { name: 'Save' }).click();
//   await expect(page.getByText('class-5th & Sections Created').first()).toBeVisible();
//   await page.waitForTimeout(2000);
//   await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class');
//   await expect(page.getByText('class-5th')).toBeVisible();
// });




// test('test1', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
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
//   await page.getByTestId('select-idcard').click();
//   await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Wine');
//   await page.getByRole('button', { name: 'Submit Report' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   const downloadPromise = page.waitForEvent('download');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
//   const download = await downloadPromise;
// });


 


// test('test', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
  
//   // Navigate to Student Admissions
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();
  
//   // Fill in the form
//   await page.getByPlaceholder('Enter Admission No').click();
//   await page.getByPlaceholder('Enter Admission No').fill('03');
//   await page.getByPlaceholder('Enter your Full name').click();
//   await page.getByPlaceholder('Enter your Full name').fill('test3');
//   await page.getByTestId('date-birth').fill('2003-03-01');

//   // Interact with the 'Select Category' dropdown
//   await page.getByLabel('Select Category').click();  // Open the dropdown
//   // await expect(page.getByText('common')).toBeVisible();  // Ensure the option is visible
//   // await page.getByRole('option', { name: 'common' }).click(); // Click the specific option by its name
//   // await page.waitForSelector('option[value="fFK2aF97vxKv"]', { state: 'visible' });  // Adjust selector if needed
//   // await page.locator('option[value="fFK2aF97vxKv"]').click(); // Dire
//   await page.waitForSelector('option[value="fFK2aF97vxKv"]', { state: 'visible', timeout: 10000 });

//   // Click the 'common' option by its value
//   await page.locator('option[value="fFK2aF97vxKv"]').click();

//   // Interact with 'Select Caste' dropdown
//   await page.getByLabel('Select Caste').click();
//   await page.getByRole('option', { name: 'General' }).click();  // Click the "General" option

//   // Select class and section
//   await page.getByTestId('select-class').click();
//   await page.getByLabel('class-4th', { exact: true }).click();
//   await page.getByTestId('Section').click();
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();

//   // Submit the form
//   await page.getByRole('button', { name: 'Submit' }).click();
  
//   // Verify the success message
//   await expect(page.getByText('Student Created!')).toBeVisible();
// });



//  // // // // // student creation

// test('test2', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');

//   // Login
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Navigate to Student Admissions
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();

//   // Fill in the Admission No and other details
//   await page.getByTestId('inpul-admissionno').fill('02');
//   await page.getByPlaceholder('Enter your Full name').fill('test2');
//   await page.getByTestId('date-birth').fill('2002-02-01');

//   // Select Category
//   await page.getByTestId('select-category').click();  // Open the dropdown
//   await page.getByRole('option', { name: 'common' }).click();  // Select 'common'
//   await page.locator('option[value="common"]').click();  // Select 'common' by its value attribute
//  await page.getByTestId('select-category').click();  // Open the dropdown
//   await page.waitForSelector('div[data-option]', { state: 'visible' });
//   // Select 'common' by visible text
//   await page.locator('text=common').click();




//   // Select Caste
//   await page.getByTestId('select-caste').click();
//   await page.getByRole('option', { name: 'General' }).click();  // Select 'General'

//   // Select Class
//   await page.getByTestId('select-class').click();
//   await page.getByRole('option', { name: 'class-4th' }).click();  // Select 'class-4th'
//   const options = await page.locator('div[data-option]').allTextContents();
//   console.log('Available options:', options);
//   // Select Section
//   await page.getByTestId('Section').click();
//   await page.getByRole('option', { name: 'class-4th-A-2024' }).click();  // Select 'class-4th-A-2024'

//   // Submit the form
//   await page.getByRole('button', { name: 'Submit' }).click();

//   // Verify the success message
//   await expect(page.getByText('Student Created!')).toBeVisible();
// });


// test('test1', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();
//   await page.getByTestId('inpul-admissionno').click();
//   await page.getByTestId('inpul-admissionno').fill('02');
//   await page.getByPlaceholder('Enter your Full name').click();
//   await page.getByPlaceholder('Enter your Full name').fill('test2');
//   await page.getByTestId('date-birth').fill('2002-02-01');
//   await page.getByText('Student Discount Category*CategorycommonCategorySelect Category').click();
//     const options = await page.locator('div[data-option]').allTextContents();
//   console.log('Available options:', options);
//   await page.getByLabel('common', { exact: true }).click();
//   await page.getByText('Caste *CasteGeneralOBCSCSTCasteSelect Caste').click();
//   await page.getByLabel('General', { exact: true }).click();
//   await page.getByText('ClassClassclass-4thclass-').click();
//   await page.getByLabel('class-4th', { exact: true }).click();
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await expect(page.getByText('Student Created!')).toBeVisible();
// });


// await page.getByText('Section *Selectclass-4th-A-').click();
// await page.locator('select[name="from_section"]').selectOption('4P1Fblfev3yF');


// test('test Student Admissions', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');

//   // Sign in
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // Wait for navigation to complete

//   // Navigate to Student Admissions
//   await page.getByRole('link', { name: 'Students' }).first().click();
//   await page.getByRole('link', { name: 'Student Admissions' }).click();

//   // Fill out the form
//   await page.getByTestId('inpul-admissionno').fill('02');
//   await page.getByPlaceholder('Enter your Full name').fill('test2');
//   await page.getByTestId('date-birth').fill('2002-02-01');

//   await page.getByTestId('select-category').click();
//   await page.locator("[name='student_category_id']").selectOption('common');
//   // await page.getByPlaceholder('Category', { exact: true }).click();
//   // await page.getByLabel('Category', { exact: true }).click();
  

//   await page.getByTestId('select-caste').click();
//   await page.getByLabel('General', { exact: true }).click();
//   await page.locator("[name='classs']").selectOption('class-4th');
//   await page.locator("[name='batches']").selectOption('class-4th-A-2024');

//   // await page.getByTestId('select-class').click();
//   // await page.getByLabel('class-4th', { exact: true }).click();

//   await page.getByTestId('Section').click();
//   await page.getByLabel('class-4th-A-2024', { exact: true }).click();

//   // Submit the form
//   await page.getByRole('button', { name: 'Submit' }).click();

//   // Wait for the success message
//   const successMessage = await page.getByRole('main').getByText('Student Created!');
//   await expect(successMessage).toBeVisible();
// });



// test('test for student addmission', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
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
//   await page.locator("[name='classs']").selectOption('class-5th');
//   await page.getByTestId('Section').click();

//   await page.evaluate(() => window.scrollBy(0, 100));
//   const batchesLocator = page.locator("[name='batches']");
//   await batchesLocator.click({ position: { x: 10, y: 10 } });
//   // await page.waitForSelector("[name='batches']", { state: 'visible' });
//   // await page.locator("[name='batches']").click();
  
//   // Select the batch
//   await page.getByText('class-4th-A-2024').click();

//   // await page.locator("[name='batches']").click();
//   // await page.getByText('class-4th-A-2024').click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await expect(page.getByText('Student Created!')).toBeVisible();
// });

// // //not working
// test('test for creating fee collection', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Fees' }).first().click();
//   await page.getByRole('link', { name: 'Fee Particular' }).click();
//   await page.getByTestId('select-category').click();
//   await page.getByLabel('tution fee', { exact: true }).getByText('tution fee').click();
//   await page.getByTestId('input-particular').click();
//   await page.getByTestId('input-particular').fill('tution fee particular2');
//   await page.getByTestId('input-description').click();
//   await page.getByTestId('input-description').fill('tution fee particular2 description');
//   await page.getByTestId('input-amount').click();
//   await page.getByTestId('input-amount').fill('10000');
//   await page.getByRole('button', { name: 'Create Fee Particular' }).click();
//   await page.getByRole('main').getByText('Particular Created').click();
// });






// test('test Fees Collection', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Fees' }).first().click();
//   await page.getByRole('link', { name: 'Fees Collection' }).click();
//   await page.getByTestId('select-category').click();
//   await page.getByLabel('tution fee', { exact: true }).click();
//   await page.getByTestId('select-period').click();
//   await page.getByLabel('YEARLY', { exact: true }).click();
//   await page.locator('label').filter({ hasText: 'Select All' }).click();
//   await page.getByTestId('input-collection-name').click();
//   await page.getByTestId('input-collection-name').fill('tution fee collection');
//   await page.locator('#startDate-1').fill('2024-06-01');
//   await page.locator('#endDate-1').fill('2025-05-01');
//   await page.getByRole('button', { name: 'Create Fee Collection' }).click();
//   await page.getByRole('main').getByText('Created Successfully!').click();
// });


///////
 //////
 ///
