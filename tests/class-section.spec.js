import { test, expect } from '@playwright/test';
// test for class and section    
test.describe.serial('test for creating class and section and deleting it ', () => {

  
  test('test for class creation', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.getByRole('link', { name: 'Create Class And Section' }).click();
    await page.locator('input[name="class-4thChecked"]').check();
    await page.locator('div').filter({ hasText: /^class-4thABCD$/ }).getByRole('checkbox').nth(1).check();
    await page.locator('div').filter({ hasText: /^class-4thABCD$/ }).getByRole('checkbox').nth(2).check();
    await page.getByTestId('start-date').fill('2024-05-01');
    await page.getByLabel('Select Academic Year').click();
    await page.getByLabel('AY-2025-2026', { exact: true }).press('ArrowDown');
    await page.getByLabel('AY-2024-2025', { exact: true }).press('Enter');
    await page.getByLabel('Select Medium').click();
    await page.locator('select[name="medium"]').selectOption({ label: 'English' });
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class');
    await expect(page.getByText('class-4th')).toBeVisible();
  
  });

  


  test('test for creating class section(4th-B)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.getByRole('link', { name: 'Manage Class' }).click();
    await page.getByText('class-4th').click();
    await page.getByRole('link', { name: 'View Section (0)' }).click();
    await page.getByRole('button', { name: 'Add New Section' }).click();
    await page.getByPlaceholder('Enter section name').click();
    await page.getByPlaceholder('Enter section name').press('CapsLock');
    await page.getByPlaceholder('Enter section name').fill('B');
    await page.getByPlaceholder('Enter section name').press('CapsLock');
    await page.getByPlaceholder('Enter start date').fill('2024-01-01');
    await page.getByText('EndDate').click();
    await page.getByPlaceholder('Enter end date').fill('2025-01-01');
    await page.getByLabel('Select Academic Year').click();
    await page.getByLabel('AY-2025-2026', { exact: true }).press('ArrowDown');
    await page.getByLabel('AY-2024-2025', { exact: true }).press('Enter');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class/view-section/Pg1M57neFKBx')
    await expect(page.getByText('B-2024')).toBeVisible();
  });
  
  
  
  
  
 
test('test for deleting a section (4-b)', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
  await page.getByRole('link', { name: 'Manage Class' }).click();
  await page.getByText('class-4th').click();
  await page.getByLabel('class-4th').getByRole('link', { name: 'View Section (1)' }).click();
  await page.getByRole('cell', { name: 'B-' }).click();
  await page.getByRole('row', { name: 'Row Actions B-2024 01-01-2024' }).getByLabel('Row Actions').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class/view-section/Pg1M57neFKBx')
  await expect(page.getByText('B-2024')).not.toBeVisible();
});
  
  test('test for editing class', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.getByRole('link', { name: 'Manage Class' }).click();
    await page.getByText('class-4th').click();
    await page.getByLabel('class-4th').getByRole('link', { name: 'Edit' }).click();
    await page.locator('input[name="code"]').click();
    await page.locator('input[name="code"]').fill('001');
    await page.getByRole('button', { name: 'Save Details' }).click();
  });
  
  
  
  
  
  test('test for deleting a class ', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.getByRole('link', { name: 'Manage Class' }).click();
    await page.getByRole('rowheader', { name: 'class-4th' }).click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page.getByLabel('class-4th').getByText('Delete').click();
    await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class');
    await expect(page.getByText('class-4th')).not.toBeVisible();
  });
  
  
  });

