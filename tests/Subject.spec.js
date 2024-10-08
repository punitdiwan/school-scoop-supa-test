import { test, expect } from '@playwright/test';


test.describe('test for managing subjects ', () => {

 

test('test for creating subject (4b)', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Manage Major Subject' }).click();
  await page.getByTestId('select-class').selectOption('class-4th');
  await page.getByTestId('select-batch').selectOption('class-4th-B-2024');
  await page.getByRole('button', { name: '+ ADD SUBJECT' }).click();
  await page.getByPlaceholder('Enter Subject Name').click();
  await page.getByPlaceholder('Enter Subject Name').fill('english1');
  await page.getByPlaceholder('Enter Subject Code').click();
  await page.getByPlaceholder('Enter Subject Code').fill('01');
  await page.getByPlaceholder('Enter Days Per Week').click();
  await page.getByPlaceholder('Enter Days Per Week').fill('05');
  await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('english1').nth(0)).toBeVisible();
  await page.getByRole('button', { name: '+ ADD SUBJECT' }).click();
  await page.getByPlaceholder('Enter Subject Name').click();
  await page.getByPlaceholder('Enter Subject Name').fill('hindi1');
  await page.getByPlaceholder('Enter Subject Code').click();
  await page.getByPlaceholder('Enter Subject Code').fill('02');
  await page.getByPlaceholder('Enter Days Per Week').click();
  await page.getByPlaceholder('Enter Days Per Week').fill('05');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('hindi1').nth(0)).toBeVisible();
  await page.getByRole('button', { name: '+ ADD SUBJECT' }).click();
  await page.getByPlaceholder('Enter Subject Name').click();
  await page.getByPlaceholder('Enter Subject Name').fill('maths1');
  await page.getByPlaceholder('Enter Subject Code').click();
  await page.getByPlaceholder('Enter Subject Code').fill('03');
  await page.getByPlaceholder('Enter Days Per Week').click();
  await page.getByPlaceholder('Enter Days Per Week').fill('05');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('maths1').nth(0)).toBeVisible();
});




test('test for deleting major subjects(4b)', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Manage Major Subject' }).click();
  await page.getByTestId('select-class').selectOption('class-4th');
  await page.getByTestId('select-batch').selectOption('class-4th-B-2024');
  await page.getByRole('button', { name: 'Delete' }).first().click();
  await page.getByText('Yes').nth(2).click();
  await page.getByRole('button', { name: 'Delete' }).first().click();
  await page.getByText('Yes').nth(1).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.getByText('english1')).not.toBeVisible();
  await expect(page.getByText('hindi1')).not.toBeVisible();
  await expect(page.getByText('maths1')).not.toBeVisible();

});

test('test Copy Subjects From Another', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Manage Major Subject' }).click();
  await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,class-4th');
  await page.getByTestId('select-batch').selectOption('UcezhWa0Fdub,class-4th-B-2024');
  await page.getByRole('button', { name: 'Copy Subjects From Another' }).click();
  await page.getByText('Academic Year *Select').click();
  await page.locator('div').filter({ hasText: /^Select Academic YearAY-2024-2025$/ }).getByRole('combobox').selectOption('u3PWWbgXjkF8');
  await page.locator('select[name="from_section"]').selectOption('NOnCHmqIv50R');
  await page.getByLabel('You can select multiple sections', { exact: true }).click();
  await page.getByLabel('class-4th-B-2024', { exact: true }).click();
  await page.getByText('Section *You can select').click();
  await page.getByRole('button', { name: 'Copy' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: /^Subjects Copied Successfully!!!$/ }).nth(2).click();
});



test('test  adding group to subjects', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Manage Elective Subject' }).click();
  await page.getByTestId('select-class').selectOption('class-6th');
  await page.getByTestId('select-batch').selectOption('class-6th-A-2024');
  await page.getByRole('button', { name: '+ Add Group' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('extra1');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Open extra Click To Subjects' }).click();
  await page.getByLabel('extra1').click();
  await page.getByRole('button', { name: 'Open extra Click To Subjects' }).click();
});


test('test for creating Elective Subject', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Manage Elective Subject' }).click();
  await page.getByTestId('select-class').selectOption('class-6th');
  await page.getByTestId('select-batch').selectOption('class-6th-A-2024');
  await page.getByRole('button', { name: '+ Add Group' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('elective sub');
  await page.getByRole('button', { name: 'Add' }).click();
});

});


test.describe.serial('test for managing subjects ', () => {

test('test for Assign elective Subject To Students', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Assign Elective Subject' }).click();
  await page.getByTestId('select-class').selectOption('aaDijvZ4hCIq,class-6th');
  await page.getByTestId('select-batch').selectOption('qJCZuHbQqlrp,class-6th-A-2024');
  await page.getByTestId('select-group').selectOption('class-6th-A-2024-extra,extra');
  await page.getByTestId('select-elective-sub').selectOption('hdubL2JOqd5O,bio');
  await page.locator('tr').filter({ hasText: 'test33' }).getByTestId('select-student').click();
  await page.getByRole('button', { name: 'Assign', exact: true }).click();
  await page.getByTestId('select-elective-sub').selectOption('EnDtRyq5JxDd,phy');
  await page.locator('tr').filter({ hasText: 'test33' }).getByTestId('select-student').locator('span').click();
  await page.getByRole('button', { name: 'Assign', exact: true }).click();
});

test('test for unAssign Elective Subject', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Assign Elective Subject' }).click();
  await page.getByTestId('select-class').selectOption('aaDijvZ4hCIq,class-6th');
  await page.getByTestId('select-batch').selectOption('qJCZuHbQqlrp,class-6th-A-2024');
  await page.getByTestId('select-group').selectOption('class-6th-A-2024-extra,extra');
  await page.getByTestId('select-elective-sub').selectOption('hdubL2JOqd5O,bio');
  await page.getByLabel('Assign Student collection table', { exact: true }).getByTestId('select-student').locator('span').click();
  await page.getByRole('button', { name: 'Un-Assign' }).click();
  await page.getByTestId('select-elective-sub').selectOption('EnDtRyq5JxDd,phy');
  await page.getByLabel('Assign Student collection table', { exact: true }).getByTestId('select-student').click();
  await page.getByRole('button', { name: 'Un-Assign' }).click();
});


});