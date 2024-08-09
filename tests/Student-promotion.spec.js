import { test, expect } from '@playwright/test';
// test for student promotion     
test.describe('test for student promotion ', () => {



// test('test for graduating a student', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.locator('.group > div > .inline-flex').first().click();
//     await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.getByRole('link', { name: 'Promotion' }).first().click();
//     await page.getByRole('link', { name: 'Student\'s Batch Promotion' }).click();
//     await page.getByText('Select From Classclass-4thclass-6thSelect From ClassSelect From ClassSelect').click();
//     await page.getByLabel('Select From Class', { exact: true }).click();
//     await page.getByLabel('class-6th', { exact: true }).click();
//     await page.locator('select[name="from_batches"]').click();
//     await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-').click();
//     await page.locator('tr').filter({ hasText: 'class-6thclass-6th-A-202405Test5NoNo' }).locator('div').first().click();
//     await page.locator('tr').filter({ hasText: 'class-6thclass-6th-A-202405Test5NoNo' }).locator('#c1-13').check();
//     await page.getByRole('button', { name: 'Graduate' }).click();
//     await page.locator('div').filter({ hasText: 'Successfully Graduate Student' }).nth(3).click();
//   });
  
  
//   test('test for archive a student', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.getByRole('link', { name: 'Promotion' }).first().click();
//     await page.getByRole('link', { name: 'Archive Student', exact: true }).click();
//     await page.getByLabel('Select a Class').click();
//     await page.getByLabel('class-6th', { exact: true }).click();
//     await page.getByLabel('Select a Section').click();
//     await page.getByLabel('class-6th-A-2024', { exact: true }).click();
//     await page.locator('tr').filter({ hasText: 'class-6th-A-2024test440No' }).locator('#c1-13').check();
//     await page.getByRole('button', { name: 'Archive Selected' }).click();
//     await page.getByText('Successfully Archived Student').click();
//   });
  
  
  
  
//   test('test for UnArchive Student', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.getByRole('link', { name: 'Promotion' }).first().click();
//     await page.getByRole('link', { name: 'UnArchive Student' }).click();
//     await page.getByLabel('Select a Class').click();
//     await page.getByLabel('class-6th', { exact: true }).getByText('class-6th').click();
//     await page.getByLabel('Select a Section').click();
//     await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-').click();
//     await page.locator('tr').filter({ hasText: 'class-6th-A-2024test440No' }).locator('#c1-13').check();
//     await page.getByRole('button', { name: 'UnArchive Selected' }).click();
//     await page.getByText('Successfully UnArchivded').click();
//   });
  
  
  
  
//   test('test for Generate TC', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.getByRole('link', { name: 'Promotion' }).first().click();
//     await page.getByRole('link', { name: 'Generate TC' }).click();
//     await page.getByLabel('Select a Class').click();
//     await page.getByLabel('class-6th', { exact: true }).click();
//     await page.getByLabel('Select a Section').click();
//     await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-').click();
//     await page.getByLabel('Select Reason for Leaving', { exact: true }).click();
//     await page.getByLabel('Graduation', { exact: true }).click();
//     await page.getByLabel('Select batch from which you').getByText('class-6th-A-').click();
//     await page.getByLabel('Copy to clipboard').click();
//     await page.getByLabel('Verify batch*').click();
//     await page.getByLabel('Verify batch*').fill('class-6th-A-2024');
//     await page.getByLabel('Example table with dynamic').locator('svg').click();
//     await page.getByPlaceholder('Enter TC Serial no. ').click();
//     await page.getByPlaceholder('Enter TC Serial no. ').fill('1');
//     await page.getByRole('button', { name: 'Generate TC' }).click();
//     await page.getByText('Successfully Generated TC').click();
//   });
  
  
  
  


// test('test for Download TC', async ({ page }) => {
//     await page.goto('https://testschool.launchmysite.in/');
//     await page.getByPlaceholder('Enter your Email').click();
//     await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//     await page.getByPlaceholder('Enter your password').click();
//     await page.getByPlaceholder('Enter your password').fill('test@123');
//     await page.getByPlaceholder('Enter your password').press('Enter');
  
//     await page.waitForLoadState('networkidle')
  
//     await page.getByRole('link', { name: 'Promotion' }).first().click();
  
//     await page.waitForLoadState('networkidle')
  
//     await page.getByRole('link', { name: 'Download TC' }).click();
  
//     await page.waitForLoadState('networkidle')
  
//     await page.getByTestId('select-academic-year').click();
//     await page.getByLabel('AY-2024-2025', { exact: true }).click();
//     await page.getByTestId('select-class').click();
//     await page.getByLabel('class-6th', { exact: true }).click();
//     await page.getByTestId('select-batch').click();
//     await page.getByLabel('class-6th-A-2024', { exact: true }).click();
//     await page.getByText('Test6').click();
  
//     const page1Promise = page.waitForEvent('popup');
//     await page.getByRole('button', { name: 'Print' }).click();
//     const page1 = await page1Promise;
//     });


/////////-/-//=/=/=/=/=/=/-//--/=-/=-/=-/=-/=-/=-
/////////-/-//=/=/=/=/=/=/-//--/=-/=-/=-/=-/=-/=-
/////////-/-//=/=/=/=/=/=/-//--/=-/=-/=-/=-/=-/=-
/////////-/-//=/=/=/=/=/=/-//--/=-/=-/=-/=-/=-/=-
/////////-/-//=/=/=/=/=/=/-//--/=-/=-/=-/=-/=-/=-

// test('test Archive Student', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await expect(page.getByPlaceholder('Enter your Email')).toBeVisible();
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'Archive Student', exact: true }).click();
//   await page.getByTestId('select-class').click();
//   await page.getByLabel('class-6th', { exact: true }).getByText('class-6th').click();
//   await page.getByTestId('select-batch').click();
//   await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-').click();
//   await page.getByText('test5').click();
//   await page.locator('[id="react-aria6559099022-\\:rv\\:-GDhvc5WqAolZ-actions"] #c1-13').check();
//   await page.getByRole('button', { name: 'Archive Selected' }).click();
//   await page.getByText('Successfully Archived Student').click();
// });


// test('test UnArchive Student', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await expect(page.getByPlaceholder('Enter your Email')).toBeVisible();
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Promotion' }).first().click();
//   await page.getByRole('link', { name: 'UnArchive Student' }).click();
//   await page.getByTestId('select-class').click();
//   await page.getByLabel('class-6th', { exact: true }).getByText('class-6th').click();
//   await page.getByTestId('select-batch').click();
//   await page.getByLabel('class-6th-A-2024', { exact: true }).getByText('class-6th-A-').click();
//   await page.getByText('class-6th-A-').nth(3).click();
//   await page.getByText('test5').click();
//   await page.locator('[id="react-aria114771452-\\:rv\\:-GDhvc5WqAolZ-actions"] #c1-13').check();
//   await page.getByRole('button', { name: 'UnArchive Selected' }).click();
//   await page.getByText('Successfully UnArchivded').click();
// });



});