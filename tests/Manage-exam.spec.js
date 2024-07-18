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
    await page.getByText('EmailPasswordSign InDon’t').click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Manage Exam Group' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.getByLabel('Nursery-A-').check();
    await page.getByPlaceholder('ex: QUARTERLY').click();
    await page.getByPlaceholder('ex: QUARTERLY').fill('half-yearly');
    await page.locator('div').filter({ hasText: /^Exam Type \* SelectMarksGradeGrade and Marks$/ }).getByRole('combobox').selectOption('Marks');
    await page.getByRole('button', { name: 'Add Group' }).click();
    await page.goto('https://testschool.launchmysite.in/manage_exam/manage_exam_group');
    const element = await expect(page.getByText('half-yearly')).toBeVisible();
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

  test('test for editing assign marks', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Assign Marks' }).click();
    await page.locator('div').filter({ hasText: /^Class \* Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,Class-1st');
    await page.locator('div').filter({ hasText: /^SelectClass-1st-A-2024Class-1st-B-2024Class-1st-C-2024Class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,Class-1st-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('ZapTyc60mQMC,Final');
    await page.getByRole('button', { name: 'Edit' }).first().click();
    await page.getByRole('gridcell', { name: '80' }).locator('div').nth(2).click();
  //   await page.locator('[id="react-aria4631255684-\\:rq\\:"]').fill('80');
    await page.getByRole('gridcell', { name: '70' }).locator('div').nth(2).click();
  //   await page.locator('[id="react-aria4631255684-\\:r15\\:"]').fill('70');
    await page.getByRole('button', { name: 'Submit Marks' }).click();
    await page.locator('div:nth-child(2) > div > .go2072408551');
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
    await page.goto('https://testschool.launchmysite.in/manage_exam/exam_report_publish_result');
    await page.getByText('Manage Exam /').click();
    await page.getByRole('link', { name: 'Publish Result', exact: true }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('RD3e0LYI1lBP,Nursery');
    await page.locator('div').filter({ hasText: /^SelectNursery-A-2024$/ }).getByRole('combobox').selectOption('a6B10jzAviVR,Nursery-A-2024');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('j0g3rP1EzIK3-undefined');
    await page.getByRole('button', { name: 'Un Publish Result' }).click();
    await page.goto('https://testschool.launchmysite.in/manage_exam/publish_report');   

  });



  test('test for printing marksheet for school', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your Email').press('Enter');
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Exam Report For School' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,Class-1st');
    await page.locator('div').filter({ hasText: /^SelectClass-1st-A-2024Class-1st-B-2024Class-1st-C-2024Class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,Class-1st-A-2024,');
    await page.locator('div').filter({ hasText: /^Group \* SelectFinal$/ }).getByRole('combobox').selectOption('ZapTyc60mQMC-Final');
    await page.locator('div').filter({ hasText: /^Student \* SelectTest7$/ }).getByRole('combobox').selectOption('73KuMgNdwjPF-Test7');
    const page1Promise = page.waitForEvent('popup');
    const element = await expect(page.getByText('Template Name')).toBeVisible();
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });



  

  test('test to Assign Weightage', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'Assign Weightage' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,Class-1st');
    await page.locator('div').filter({ hasText: /^SelectClass-1st-A-2024Class-1st-B-2024Class-1st-C-2024Class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,Class-1st-A-2024');
    const element = await expect(page.getByText('Final')).toBeVisible();
    await page.getByLabel('Final').locator('div').nth(2).click();
  //   await page.locator('[id="react-aria5640697573-\\:rh\\:"]').fill('100');
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
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,Class-1st');
    await page.locator('div').filter({ hasText: /^SelectClass-1st-A-2024Class-1st-B-2024Class-1st-C-2024Class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,Class-1st-A-2024');
    await page.getByRole('button', { name: 'Publish Report' }).click();
  });





  test('test for View Weightage Report', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('link', { name: 'View Weightage Report' }).click();
    await page.locator('div').filter({ hasText: /^Select ClassNurseryKg1Class-1stClass-2ndClass-3rd$/ }).getByRole('combobox').selectOption('J3oaGAN0A1C6,Class-1st');
    await page.locator('div').filter({ hasText: /^SelectClass-1st-A-2024Class-1st-B-2024Class-1st-C-2024Class-1st-D-2024$/ }).getByRole('combobox').selectOption('U9r6SauQFP91,Class-1st-A-2024,');
    await page.locator('div').filter({ hasText: /^Student \* SelectTest7$/ }).getByRole('combobox').selectOption('73KuMgNdwjPF-Test7');
    const page1Promise = page.waitForEvent('popup');
    const element = await expect(page.getByText('Total Final Percentage')).toBeVisible(); 
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