import { test, expect } from '@playwright/test';

test.describe('test for manage exam ', () => {

  test('test for manage grade', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Manage Grade' }).click();
    await page.getByRole('button', { name: 'Add Grading Group' }).click();
    await page.locator('div').filter({ hasText: 'Name *' }).nth(4).click();
    await page.getByLabel('Name *').fill('testgrade');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.goto('https://testschool.launchmysite.in/manage_exam/manage_grade');
    const element = await expect(page.getByText('Add Grading Group')).toBeVisible();
  });


  test('test for creating exam group', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(6)').first().click();
  await page.getByRole('link', { name: 'Manage Exam Group' }).click();
  await page.locator('div').filter({ hasText: /^Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
  await page.getByLabel('Class-4th-A-').check();
  await page.getByPlaceholder('ex: QUARTERLY').click();
  await page.getByPlaceholder('ex: QUARTERLY').press('CapsLock');
  await page.getByPlaceholder('ex: QUARTERLY').fill('F');
  await page.getByPlaceholder('ex: QUARTERLY').press('CapsLock');
  await page.getByPlaceholder('ex: QUARTERLY').fill('Final');
  await page.locator('div').filter({ hasText: /^Exam Type \* SelectMarksGradeGrade and Marks$/ }).getByRole('combobox').selectOption('Marks');
  await page.getByRole('button', { name: 'Add Group' }).click();
  });




  // test('test for creating exam(time and max-min marks)', async ({ page }) => {
  //   await page.goto('https://testschool.launchmysite.in/');
  //   await page.getByPlaceholder('Enter your Email').click();
  //   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  //   await page.getByPlaceholder('Enter your password').click();
  //   await page.getByPlaceholder('Enter your password').fill('test@1233');
  //   await page.getByRole('button', { name: 'Sign In' }).click();
  //   await page.locator('button').click();
  //   await page.getByPlaceholder('Enter your password').click();
  //   await page.getByPlaceholder('Enter your password').fill('test@123');
  //   await page.getByRole('button', { name: 'Sign In' }).click();
  //   await page.locator('div:nth-child(6)').first().click();
  //   await page.getByRole('link', { name: 'Manage Exam Group' }).click();
  //   await page.getByRole('button', { name: 'Final' }).click();
  //   await page.locator('div').filter({ hasText: /^Date$/ }).locator('div').nth(2).click();
  //   await page.locator('[id="react-aria1132712081-\\:rn\\:"]').fill('2024-01-01');
  //   await page.locator('div').filter({ hasText: /^All Maximum Marks$/ }).locator('div').nth(3).click();
  //   await page.locator('[id="react-aria1132712081-\\:rs\\:"]').fill('99');
  //   await page.locator('div').filter({ hasText: /^All Minimum Marks$/ }).locator('div').nth(2).click();
  //   await page.locator('[id="react-aria1132712081-\\:r11\\:"]').fill('33');
  //   await page.locator('div').filter({ hasText: /^All Start Time$/ }).locator('div').nth(3).click();
  //   await page.locator('[id="react-aria1132712081-\\:r16\\:"]').fill('10:00');
  //   await page.locator('div').filter({ hasText: /^All End Time$/ }).locator('div').nth(2).click();
  //   await page.locator('[id="react-aria1132712081-\\:r1b\\:"]').fill('12:00');
  //   await page.getByRole('button', { name: 'Submit' }).click();
  // });





  test('test for assigning student marks', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Manage Exam' }).first().click();
    await page.getByRole('link', { name: 'Assign Marks' }).click();
    await page.locator('div').filter({ hasText: /^Class \* Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('QGSXaI3UxRPL,Final');
    await page.getByRole('button', { name: 'Assign' }).first().click();
    await page.getByTestId('add-marks').click();
    await page.getByTestId('add-marks').fill('80');
    await page.getByRole('button', { name: 'Submit Marks' }).click();
    await page.locator('div').filter({ hasText: /^Class \* Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('QGSXaI3UxRPL,Final');
    await page.getByRole('button', { name: 'Assign' }).nth(1).click();
    await page.getByTestId('add-marks').click();
    await page.getByTestId('add-marks').fill('80');
    await page.getByRole('button', { name: 'Submit Marks' }).click();
    await page.locator('div').filter({ hasText: /^Class \* Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('QGSXaI3UxRPL,Final');
    await page.getByRole('button', { name: 'Assign' }).nth(2).click();
    await page.getByTestId('add-marks').click();
    await page.getByTestId('add-marks').fill('80');
    await page.getByRole('button', { name: 'Submit Marks' }).click();
  });

  



  test('test for editing student marks', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Manage Exam' }).first().click();
    await page.getByRole('link', { name: 'Assign Marks' }).click();
    await page.locator('div').filter({ hasText: /^Class \* Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('QGSXaI3UxRPL,Final');
    await page.getByRole('button', { name: 'Edit' }).first().click();
    await page.getByTestId('edit-marks').click();
    await page.getByTestId('edit-marks').fill('85');
    await page.getByRole('button', { name: 'Submit Marks' }).click();
    await page.locator('div').filter({ hasText: /^Class \* Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('QGSXaI3UxRPL,Final');
    await page.getByRole('button', { name: 'Edit' }).nth(1).click();
    await page.getByTestId('edit-marks').click();
    await page.getByTestId('edit-marks').fill('85');
    await page.getByRole('button', { name: 'Submit Marks' }).click();
    await page.locator('div').filter({ hasText: /^Class \* Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('QGSXaI3UxRPL,Final');
    await page.getByRole('button', { name: 'Edit' }).nth(2).click();
    await page.getByTestId('edit-marks').click();
    await page.getByTestId('edit-marks').fill('85');
    await page.getByRole('button', { name: 'Submit Marks' }).click();
  });



  test('test for Exam Report Before Publish Result', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Exam Report Before Publish' }).click();
    await page.locator('div').filter({ hasText: /^Select Classclass-4thclass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,class-4th');
    await page.locator('div').filter({ hasText: /^Selectclass-4th-A-2024class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,class-4th-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('QGSXaI3UxRPL-undefined');
    await expect(page.getByText('test')).toBeVisible();
  });


  test('test for printing marksheet for school', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.locator('.group > div > .inline-flex').first().click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.locator('div:nth-child(6)').first().click();
  await page.getByRole('link', { name: 'Exam Report For School' }).click();
  await page.locator('div').filter({ hasText: /^Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
  await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024,');
  await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('QGSXaI3UxRPL-Final');
  await page.locator('div').filter({ hasText: /^Student \* SelectTest$/ }).getByRole('combobox').selectOption('AwFawVj3nW0X-Test');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page1 = await page1Promise;
  });



  
  test('test for Assign Weightage Percent', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Assign Weightage' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.getByLabel('Final').locator('div').nth(3).click();
    await page.getByTestId('assign-marks').fill('100');
    await page.getByRole('button', { name: 'Submit' }).click();
  });
  
  
  
  test('test for Publish Weightage Report', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Publish Weightage Report' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.getByRole('button', { name: 'Publish Report' }).click();
  });
  
  
  
  
  test('test for View Student weightage Report', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'View Weightage Report' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024,');
    await page.locator('div').filter({ hasText: /^Student \* SelectTest$/ }).getByRole('combobox').selectOption('AwFawVj3nW0X-Test');
    await page.getByText('100').click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  



    test('test for generating admit cards', async ({ page }) => {
      await page.goto('https://testschool.launchmysite.in/');
      await page.getByPlaceholder('Enter your Email').click();
      await page.getByPlaceholder('Enter your Email').fill('test@example.com');
      await page.getByPlaceholder('Enter your password').click();
      await page.getByPlaceholder('Enter your password').fill('test@123');
      await page.getByRole('button', { name: 'Sign In' }).click();
      await page.locator('div:nth-child(6)').first().click();
      await page.getByRole('link', { name: 'Generate Admit Card' }).click();
      await page.locator('div').filter({ hasText: /^Select ClassClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ,Class-4th');
      await page.locator('div').filter({ hasText: /^SelectClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
      await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('QGSXaI3UxRPL-Final');
      await page.locator('label').filter({ hasText: 'All Student' }).locator('span').first().click();
      await page.getByRole('button', { name: 'View Report' }).click();
  });
  


});