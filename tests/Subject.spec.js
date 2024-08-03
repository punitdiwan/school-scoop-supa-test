import { test, expect } from '@playwright/test';


test.describe('test for managing subjects ', () => {

 

test('test for creating subject', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Manage Major Subject' }).click();
  await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,class-4th');
  await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,class-4th-A-2024');
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




test('test for deleting major subjects', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Manage Major Subject' }).click();
  await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,class-4th');
  await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,class-4th-A-2024');
  await page.getByText('english1').click();
  await page.locator('tr').filter({ hasText: 'english1015EditDelete' }).getByRole('button').nth(1).click();
  await page.locator('[id="\\:r1v\\:"] > footer > button:nth-child(2)').click();
  await page.getByText('hindi1').click();
  await page.getByRole('button', { name: 'Delete' }).nth(3).click();
  await page.getByText('Yes').nth(4).click();
  await page.getByText('maths1').click();
  await page.getByRole('button', { name: 'Delete' }).nth(3).click();
  await page.getByText('Yes').nth(3).click();
  await expect(page.getByText('english1')).not.toBeVisible();
  await expect(page.getByText('hindi1')).not.toBeVisible();
  await expect(page.getByText('maths1')).not.toBeVisible();

});


test('test  adding group to subjects', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Manage Elective Subject' }).click();
  await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,class-4th');
  await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,class-4th-A-2024');
  await page.getByRole('button', { name: '+ Add Group' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('extra');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Open extra Click To Subjects' }).click();
  await page.getByLabel('extra').click();
  await page.getByRole('button', { name: 'Open extra Click To Subjects' }).click();
});


test('test for creating Elective Subject', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Manage Elective Subject' }).click();
  await page.getByTestId('select-class').selectOption('P63FiTHZYVl7,class-6th');
  await page.getByTestId('select-batch').selectOption('EWYvDK0YxC8Z,class-6th-A-2024');
  await page.getByRole('button', { name: '+ Add Group' }).click();
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('elective sub');
  await page.getByRole('button', { name: 'Add' }).click();
});




test('test for Assign elective Subject To Students', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Subject' }).first().click();
  await page.getByRole('link', { name: 'Assign Elective Subject' }).click();
  await page.getByTestId('select-class').selectOption('P63FiTHZYVl7,class-6th');
  await page.getByTestId('select-batch').selectOption('EWYvDK0YxC8Z,class-6th-A-2024');
  await page.getByTestId('select-group').selectOption('class-6th-A-2024-electivesub,elective sub');
  await page.getByTestId('select-elective-sub').selectOption('MthEC9A862ej,bio');
  await page.locator('tr').filter({ hasText: 'test3test3' }).locator('svg').click();
  await page.getByRole('button', { name: 'Assign', exact: true }).click();
  await page.getByTestId('select-elective-sub').selectOption('39MbkgrM25w8,phy');
  await page.locator('tr').filter({ hasText: 'test44' }).getByRole('rowheader').locator('span').click();
  await page.getByRole('button', { name: 'Assign', exact: true }).click();
});


});