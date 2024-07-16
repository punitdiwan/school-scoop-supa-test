import { test, expect } from '@playwright/test';



test('test for attendence', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(3) > div > .grid > div').first().click();
  await page.getByRole('link', { name: 'Attendance Register' }).click();
  await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2nd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,nursery');
  await page.locator('div').filter({ hasText: /^Selectnursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,nursery-A-2024,hJxfNUfo6mPH');
  await page.getByLabel('Select Month:').selectOption('5');
  await page.getByRole('link', { name: 'Attendance' }).click();
  await page.getByRole('link', { name: 'Attendance Report' }).click();
  await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2nd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,nursery');
  await page.locator('div').filter({ hasText: /^Selectnursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,01-06-2024');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page1 = await page1Promise;
});






test('test for Archive Student', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(3) > div > .grid > div:nth-child(5)').click();
  await page.getByRole('link', { name: 'Archive Student', exact: true }).click();
  await page.getByLabel('Select a Class').click();
//   await page.getByLabel('nursery', { exact: true }).click();
  await page.getByLabel('Select a Section').click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).click();
//   await page.locator('[id="react-aria2302761256-\\:rv\\:-SBnDoxRfjYXO-actions"] #c1-13').check();
  await page.getByRole('button', { name: 'Archive Selected' }).click();
//   await page.locator('div').filter({ hasText: 'Successfully Archived Student' }).nth(3).click();
});







test('test for generate tc', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(3) > div > .grid > div:nth-child(5)').click();
  await page.getByRole('link', { name: 'Generate TC' }).click();
  await page.getByLabel('Select a Class').click();
//   await page.getByLabel('nursery', { exact: true }).click();
  await page.getByLabel('Select a Section').click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).click();
  await page.getByLabel('Select Reason for Leaving', { exact: true }).click();
  await page.getByLabel('Parent Request', { exact: true }).click();
  await page.getByPlaceholder('Enter TC Serial no. ').click();
  await page.getByPlaceholder('Enter TC Serial no. ').fill('01');
//   await page.locator('#c1-13').check();
//   await page.getByRole('button', { name: 'Generate TC' }).click();
//   await page.locator('div').filter({ hasText: 'Successfully Generated TC' }).nth(3).click();
});


test('test for creating events', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(3) > div > .grid > div:nth-child(3)').click();
  await page.locator('.h-full > .relative > .inline-flex').first().click();
  await page.getByPlaceholder('Enter Title').fill('independence day');
  await page.locator('div:nth-child(2) > .group > div > .relative > .inline-flex').first().click();
//   await page.locator('[id="react-aria6409183874-\\:rk\\:"]').fill('2024-08-15');
//   await page.locator('[id="react-aria6409183874-\\:ru\\:"]').fill('2024-08-15');
  await page.getByPlaceholder('Enter your description').click();
  await page.getByPlaceholder('Enter your description').fill('independence day');
  await page.locator('label').filter({ hasText: 'This event is Holiday' }).locator('svg').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});




// test('test for Unarchive Student', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(3) > div > .grid > div:nth-child(5)').click();
//   await page.getByRole('link', { name: 'UnArchive Student' }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('nursery', { exact: true }).click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).click();
//   await page.locator('[id="react-aria9000309080-\\:rv\\:-SBnDoxRfjYXO-actions"] #c1-13').check();
//   await page.getByRole('button', { name: 'UnArchive Selected' }).click();
// });





// import { test, expect } from '@playwright/test';

// test('test for tc download', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(3) > div > .grid > div:nth-child(5)').click();
//   await page.getByRole('link', { name: 'Download TC' }).click();
//   await page.getByLabel('Select Academic Year').click();
//   await page.getByLabel('AY-2024-2025', { exact: true }).click();
//   await page.getByLabel('Select a Class').click();
//   await page.getByLabel('nursery', { exact: true }).click();
//   await page.getByLabel('Select a Section').click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// });