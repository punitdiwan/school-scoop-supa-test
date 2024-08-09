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
//   // await page.locator("[name='academic_year']").selectOption('AY-2024-2025');
//   await page.getByTestId('academic-year').click();
//   await page.locator("[name='academic_year']").selectOption('AY-2024-2025');


//   await page.getByTestId('select-medium').click();
//   await page.getByLabel('English', { exact: true }).click();    
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(2000);
//   await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class');
//   await expect(page.getByText('class-5th')).toBeVisible();

// });


test('test for class creation', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://testschool.launchmysite.in/');

  // Login
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigate to Create Class And Section page
  await page.getByRole('link', { name: 'Class And Section' }).first().click();
  await page.getByRole('link', { name: 'Create Class And Section' }).click();

  // Select class and section
  await page.locator('input[name="class-5thChecked"]').check();
  await page.locator('div').filter({ hasText: /^class-5thABCD$/ }).getByRole('checkbox').nth(1).check();

  // Set start date
  await page.getByTestId('start-date').fill('2024-06-01');

  // Open and select the academic year
  await page.getByTestId('academic-year').click();
  // Ensure the dropdown is visible
  await page.waitForSelector('select[name="academic_year"]', { state: 'visible' });
  // Wait for options to load
  await page.waitForTimeout(1000); // Adjust if needed

  // Select the option by value or text
  await page.locator('select[name="academic_year"]').selectOption({ value: 'u3PWWbgXjkF8' });
  // or
  // await page.locator('select[name="academic_year"]').selectOption({ label: 'AY-2024-2025' });

  // Select medium
  await page.getByTestId('select-medium').click();
  await page.getByLabel('English', { exact: true }).click();

  // Save the form
  await page.getByRole('button', { name: 'Save' }).click();
  
  // Wait and verify class creation
  await page.waitForTimeout(2000); // Adjust if needed
  await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class');
  await expect(page.getByText('class-5th')).toBeVisible();
});





