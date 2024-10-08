import { test, expect } from '@playwright/test';
// test for class and section    
test.describe('test for creating class and section and deleting it ', () => {

  //Login Into the System
  test.beforeEach(async ({page}) => {
  })

  test('test for class creation', async ({ page }) => {
    
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Class And Section' }).first().click();
    await page.getByRole('link', { name: 'Create Class And Section' }).click();
    await page.locator('input[name="class-5thChecked"]').check();
    await page.locator('div').filter({ hasText: /^class-5thABCD$/ }).getByRole('checkbox').nth(1).check();
    await page.getByTestId('start-date').fill('2024-06-01');
    await page.locator("[name='academic_year']").selectOption('AY-2024-2025');
    await page.locator("[name='medium']").selectOption('English');
      
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class');
    await expect(page.getByText('class-5th')).toBeVisible();

  });


  test('test for editing class', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByPlaceholder('Enter your password').press('Enter');
    await page.getByRole('link', { name: 'Class And Section' }).first().click();
    await page.getByRole('link', { name: 'Manage Class' }).click();
    await page.getByLabel('class-5th').getByRole('link', { name: 'Edit' }).click();
    await page.locator('input[name="code"]').click();
    await page.locator('input[name="code"]').fill('001');
    await page.getByRole('button', { name: 'Save Details' }).click();
  });



  test('test for deleting a section (4-b)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('link', { name: 'Class And Section' }).first().click();
    await page.getByRole('link', { name: 'Manage Class' }).click();
    await page.getByText('class-5th').click();
    await page.getByLabel('class-5th').getByRole('link', { name: 'View Section' }).click();
    await page.waitForTimeout(3000);
    await page.getByTestId('MoreHorizIcon').click();

    await page.waitForTimeout(3000);
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => { });
    });
    await page.getByTestId('DeleteIcon').click();
    await page.waitForTimeout(1000);
    await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class')
    await expect(page.getByText('View Section (0)')).toBeVisible();
  });



test('test for deleting a class', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Class And Section' }).first().click();
  await page.getByRole('link', { name: 'Manage Class' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByLabel('class-5th').getByText('Delete').click();
  await page.getByRole('main').getByText('Class Deleted Successfully!').click();
  await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class');
  await expect(page.getByText('class-5th')).not.toBeVisible();
});

});

test.describe.serial('test for class and section ', () => {

  test('test for assign class teacher', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Class And Section' }).first().click();
    await page.getByRole('link', { name: 'Classs Teacher' }).click();
    await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,class-4th');
    await page.getByTestId('select-section').selectOption('NOnCHmqIv50R,class-4th-A-2024');
    await page.getByTestId('select-department').selectOption('uucRte0y8tUI');
    await page.getByText('test4').click();
  });


test('test for assign class teacher2', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Class And Section' }).first().click();
  await page.getByRole('link', { name: 'Classs Teacher' }).click();
  await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,class-4th');
  await page.getByTestId('select-section').selectOption('NOnCHmqIv50R,class-4th-A-2024');
  await page.getByTestId('select-department').selectOption('uucRte0y8tUI');
  await page.getByLabel('test5').getByText('Assign Class Teacher').click();
});

});
