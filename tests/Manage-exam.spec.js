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
        await page.locator('.group-\\[\\.is-splitted\\]\\:px-4').first().click();
        await page.locator('[id="\\:rk\\:"]').click();
        await page.locator('.px-2 > div:nth-child(2)').click();
        await page.locator('[id="\\:ri\\:"]').click();
        await page.locator('.group-\\[\\.is-splitted\\]\\:px-4').first().click();
        await page.locator('[id="\\:ri\\:"]').click();
  });


  test('test for creating exam group', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByText('EmailPasswordSign InDon’t').click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Manage Exam Group' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.getByLabel('Nursery-A-').check();
    await page.getByPlaceholder('ex: QUARTERLY').click();
    await page.getByPlaceholder('ex: QUARTERLY').fill('half-yearly');
    await page.locator('div').filter({ hasText: /^Exam Type \* SelectMarksGradeGrade and Marks$/ }).getByRole('combobox').selectOption('Marks');
    await page.getByRole('button', { name: 'Add Group' }).click();
    await page.getByRole('main').locator('div').filter({ hasText: /^Successfully Added Group\(s\)$/ });
  });




  test('test assinging student marks', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Assign Marks' }).click();
    await page.locator('div').filter({ hasText: /^Class \* Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3,Final');
    await page.getByText('english').click();
    await page.getByRole('button', { name: 'Assign' }).first().click();
    await page.locator('.h-full > .relative').first().click();
    // await page.locator('[id="react-aria6510488863-\\:rn\\:"]').fill('80');
    await page.locator('tr:nth-child(2) > td:nth-child(4) > .group > div > .relative').click();
    // await page.locator('[id="react-aria6510488863-\\:r12\\:"]').fill('70');
    await page.locator('tr:nth-child(3) > td:nth-child(4) > .group > div > .relative > .inline-flex').click();
    // await page.locator('[id="react-aria6510488863-\\:r1d\\:"]').fill('60');
    await page.getByRole('button', { name: 'Submit Marks' }).click();
  });




  test('test for Exam Report Before Publish and publish result', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Exam Report Before Publish' }).click();
    await page.locator('div').filter({ hasText: /^Select Classnurserykg1class-1stclass-2ndclass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,nursery');
    await page.locator('div').filter({ hasText: /^Selectnursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,nursery-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3-undefined');
    await page.getByText('Manage Exam /').click();
    await page.getByRole('link', { name: 'Publish Result', exact: true }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3-undefined');
    await page.getByRole('button', { name: 'Un Publish Result' }).click();
    await page.getByText('Publish ResultUn Publish');
  });




  // test('test for printing marksheet for school', async ({ page }) => {
  //   await page.goto('https://testschool.launchmysite.in/');
  //   await page.getByPlaceholder('Enter your Email').click();
  //   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  //   await page.getByPlaceholder('Enter your password').click();
  //   await page.getByPlaceholder('Enter your password').fill('test@123');
  //   await page.getByRole('button', { name: 'Sign In' }).click();
  //   await page.locator('div:nth-child(6)').first().click();
  //   await page.getByRole('link', { name: 'Exam Report For School' }).click();
  //   await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
  //   await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024,');
  //   await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3-Final');
  //   await page.locator('div').filter({ hasText: /^Student \* SelectRishuTest4Test6$/ }).getByRole('combobox').selectOption('EK66476lqMPO-Rishu');
  //   const page1Promise = page.waitForEvent('popup');
  //   await page.getByRole('button', { name: 'Print' }).click();
  //   const page1 = await page1Promise;
  // });


    

  test('test for Publish Weightage Report and View Weightage Report', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Assign Weightage' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByLabel('Final').locator('div').nth(2).click();
    // await page.locator('[id="react-aria1950005730-\\:rh\\:"]').fill('100');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('link', { name: 'Manage Exam' }).click();
    await page.getByRole('link', { name: 'Publish Weightage Report' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.getByRole('button', { name: 'Publish Report' }).click();
    await page.getByRole('link', { name: 'Manage Exam' }).click();
    await page.getByRole('link', { name: 'View Weightage Report' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024,');
    await page.locator('div').filter({ hasText: /^Student \* SelectRishuTest4Test6$/ }).getByRole('combobox').selectOption('EK66476lqMPO-Rishu');
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
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3-Final');
    await page.locator('label').filter({ hasText: 'All Student' }).locator('svg').click();
    await page.getByRole('button', { name: 'View Report' }).click();
  });
  











});