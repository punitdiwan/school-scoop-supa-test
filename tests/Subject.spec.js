import { test, expect } from '@playwright/test';


test.describe('test for managing subjects ', () => {

  test('test for creating major subjects', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(3) > div > .grid > div:nth-child(2)').click();
    await page.getByRole('link', { name: 'Manage Major Subject' }).click();
    await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
    await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
    await page.getByRole('button', { name: '+ ADD SUBJECT' }).click();
    await page.getByPlaceholder('Enter Subject Name').click();
    await page.getByPlaceholder('Enter Subject Name').fill('maths1');
    await page.getByPlaceholder('Enter Subject Code').click();
    await page.getByPlaceholder('Enter Subject Code').fill('03');
    await page.getByPlaceholder('Enter Days Per Week').click();
    await page.getByPlaceholder('Enter Days Per Week').fill('05');
    await page.getByRole('button', { name: 'Submit' }).click();
       await page.goto('https://testschool.launchmysite.in/manage_subject/major_subject');
       await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
       await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
       await expect(page.getByText('english')).toBeVisible();
  });





test('test for creating elective subject', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.locator('.group > div > .inline-flex').first().click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(3) > div > .grid > div:nth-child(2)').click();
    await page.getByRole('link', { name: 'Manage Elective Subject' }).click();
    await page.locator('div').filter({ hasText: /^Select Class nursery kg1 class-1st class-2nd class-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
    await page.getByRole('combobox').nth(1).selectOption('U9r6SauQFP91,class-1st-A-2024');
    await page.getByRole('button', { name: '+ Add Group' }).click();
    await page.locator('div').filter({ hasText: 'Name *' }).nth(4).click();
    await page.getByLabel('Name *').fill('test');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('button', { name: 'Open test Click To Subjects' }).click();
    await page.getByRole('link', { name: 'Manage Subject' }).click();
    await page.getByRole('link', { name: 'Assign Elective Subject' }).click();
    await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
    await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* Selecttest$/ }).getByRole('combobox').selectOption('class-1st-A-2024-test,test');
    await page.getByRole('button', { name: 'Assign', exact: true }).click();
    await page.getByRole('link', { name: 'Manage Subject' }).click();
    await page.getByRole('link', { name: 'Manage Elective Subject' }).click();
    await page.locator('div').filter({ hasText: /^Select Class nursery kg1 class-1st class-2nd class-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
    await page.getByRole('combobox').nth(1).selectOption('U9r6SauQFP91,class-1st-A-2024');
    await page.getByLabel('test').click();
    await page.getByRole('button', { name: 'Open test Click To Subjects' }).click();
    await page.getByRole('button', { name: 'Open test Click To Subjects' }).click();
    await page.getByRole('button', { name: 'Open test Click To Subjects' }).click({
      clickCount: 3
    });
    await page.getByRole('button', { name: 'Open test Click To Subjects' }).click();
    await page.getByRole('button', { name: 'Open test Click To Subjects' }).click();
    await page.getByRole('button', { name: 'Open test Click To Subjects' }).click();
  });
  
  
  
  test('test for Assign Elective Subject', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(3) > div > .grid > div:nth-child(2)').click();
    await page.getByRole('link', { name: 'Assign Elective Subject' }).click();
    await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
    await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* Selecttest$/ }).getByRole('combobox').selectOption('class-1st-A-2024-test,test');
    await page.locator('div').filter({ hasText: /^Elective Subject \* Selectcricketchess$/ }).getByRole('combobox').selectOption('zRfVlzwMiosr,cricket');
    await page.locator('tr').filter({ hasText: 'test707' }).locator('svg').click();
    await page.getByRole('button', { name: 'Assign', exact: true }).click();
    await page.getByRole('main').locator('div').filter({ hasText: /^Successfully Added Score$/ });
    await page.locator('div').filter({ hasText: /^Elective Subject \* Selectcricketchess$/ }).getByRole('combobox').selectOption('3Vhd4OPLspuN,chess');
  //   await page.locator('[id="react-aria573176154-\\:rf\\:-KDFKnxJjbnci-\\$\\.0"] span').click();
    await page.getByRole('button', { name: 'Assign', exact: true }).click();
    await page.getByRole('main').locator('div').filter({ hasText: /^Successfully Added Score$/ });
  });



});