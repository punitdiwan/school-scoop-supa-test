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
