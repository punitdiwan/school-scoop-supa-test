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
    // await page.goto('https://testschool.launchmysite.in/class_and_section/manage-class/view-section/Pg1M57neFKBx')
    // await expect(page.getByText('B-2024')).toBeVisible();
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


test.describe.serial('test for academic year creation and deletion ', () => {

    test('test for academic year creation', async ({ page }) => {
      await page.goto('https://testschool.launchmysite.in/');
      await page.getByPlaceholder('Enter your Email').click();
      await page.getByPlaceholder('Enter your Email').fill('test@example.com');
      await page.getByPlaceholder('Enter your password').click();
      await page.getByPlaceholder('Enter your password').fill('test@123');
      await page.getByRole('button', { name: 'Sign In' }).click();
      await page.locator('div:nth-child(8)').click();
      await page.getByTestId('start-year').fill('2027');
      await page.getByTestId('end-year').fill('2028');
      await page.getByRole('button', { name: 'Create' }).click();
      await expect(page.getByText('Academic Year Created Successfully!')).toBeVisible();
      });
  
  
      test('test for deleting academic year ', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.locator('div:nth-child(8)').click();
        await page.getByText('AY-2027-2028').click();
        await page.getByLabel('AY-2027-2028').getByText('Delete').click();
        await expect(page.getByText('AY-2027-2028')).not.toBeVisible();
      
      });  
      
});
  

  
test('test for student batch shifting', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Class And Section').click();
  await page.getByRole('link', { name: 'Student\'s Batch Shifting' }).click();
  await page.getByLabel('Select a Class', { exact: true }).click();
  await page.getByLabel('Nursery', { exact: true }).click();
  await page.getByLabel('Select a Section', { exact: true }).click();
  await page.getByLabel('A_2019_2020', { exact: true }).click();
  await page.locator('.grow').click();
  await page.getByRole('option', { name: 'akshay' }).click();
  await page.getByLabel('Select a Batch', { exact: true }).click();
  await page.getByLabel('Select a Batch', { exact: true }).click();
  await page.getByLabel('KG1_A_2023', { exact: true }).click();
  await page.getByRole('button', { name: 'Transfer' }).click();
});







test.describe.serial('test for class and section ', () => {

  test('test for assign class teacher', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.getByRole('link', { name: 'Classs Teacher' }).click();
    await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
    await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
    await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
    await page.getByLabel('test3').getByText('Assign Class Teacher').click();
    await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
  });


  test('test for assign class teacher2', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
    await page.getByRole('link', { name: 'Classs Teacher' }).click();
    await page.locator('div').filter({ hasText: /^Select Classkg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,class-1st');
    await page.locator('div').filter({ hasText: /^Selectclass-1st-A-2024class-1st-B-2024class-1st-C-2024class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,class-1st-A-2024');
    await page.getByRole('combobox').nth(2).selectOption('rUCfBpXTlyxU');
    await page.getByLabel('test5').getByText('Assign Class Teacher').click();
    await expect(page.getByText('Successfully assignd teacher')).toBeVisible()
  });

});