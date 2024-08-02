import { test, expect } from '@playwright/test';
// test for student addmission     
test.describe('test for student addmission ', () => {


 

  test('test for student addmission', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Admissions' }).click();
    await page.getByPlaceholder('Enter Admission No').click();
    await page.getByPlaceholder('Enter Admission No').fill('02');
    await page.getByPlaceholder('Enter your Full name').click();
    await page.getByPlaceholder('Enter your Full name').fill('test2');
    await page.getByTestId('date-birth').fill('2002-02-02');
    await page.locator("[name='student_category_id']").selectOption('common');
    await page.locator("[name='caste_name']").selectOption('General');
    await page.locator("[name='classs']").selectOption('class-4th');
    await page.getByTestId('Section').click();
    // await page.locator("[name='batches']").selectOption('4P1Fblfev3yF, class-4th-A-2024');
    await page.getByRole('button', { name: 'Submit' }).click();
  });

  

  

test('test for view all student ', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your Email').press('Enter');
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.locator('.mt-4 > div > .grid > div').first().click();
  await page.getByRole('link', { name: 'View All Student' }).click();
  await page.getByText('My Class*Class Listclass-').click();
  await page.getByLabel('class-4th', { exact: true }).getByText('class-4th').click();
  await page.getByText('Section*Section Listclass-4th').click();
  await page.getByLabel('class-4th-A-2024', { exact: true }).getByText('class-4th-A-2024').click();
    await expect(page.getByText('Test')).toBeVisible();
  await page.getByRole('link', { name: 'View profile' }).click();
  await expect(page.getByText('class :class-4th')).toBeVisible();
});




 
  test('test for creating student category', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.locator('.mb-6 > div > .group > div > .inline-flex').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Create Student Category' }).click();
    await page.getByPlaceholder('Enter category name').click();
    await page.getByPlaceholder('Enter category name').fill('test1');
    await page.locator('div').filter({ hasText: /^Description \*Max 40 characters$/ }).locator('div').nth(2).click();
    await page.getByPlaceholder('Enter description').fill('testdes');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Created successfully')).toBeVisible();
    await page.goto('https://testschool.launchmysite.in/students/create_student_category');
    await expect(page.getByText('test1').nth(0)).toBeVisible();
  });




  test('test for viewing siblings', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'View All Siblings' }).click();
    await expect(page.getByText('Testfather')).toBeVisible();
  });



  test('test for printing Character Certificate', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Character Certificate' }).click();
    await page.locator('div').filter({ hasText: /^Select OptionClass-4thClass-6th$/ }).getByRole('combobox').selectOption('vpcYXc5qHJwJ');
    await page.locator('div').filter({ hasText: /^Select OptionClass-4th-A-2024Class-4th-B-2024$/ }).getByRole('combobox').selectOption('4P1Fblfev3yF');
    await page.locator('div').filter({ hasText: /^Select OptionTest$/ }).getByRole('combobox').selectOption('AwFawVj3nW0X');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  
  
  
  
  test('test for id card (wine)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.getByTestId('select-student').click();
    await page.getByLabel('All Students', { exact: true }).getByText('All Students').click();
    await page.getByTestId('select-idcard').click();
    await page.getByTestId('select-idcard').click();
    await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Wine');
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });



  test('test for id card (Indigo)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.getByTestId('select-student').click();
    await page.getByLabel('All Students', { exact: true }).getByText('All Students').click();
    await page.getByTestId('select-idcard').click();
    await page.getByTestId('select-idcard').click();
    await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Indigo');
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  
  
  
  
  test('test for id card (Grassy)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.getByTestId('select-student').click();
    await page.getByLabel('All Students', { exact: true }).getByText('All Students').click();
    await page.getByTestId('select-idcard').click();
    await page.getByTestId('select-idcard').click();
    await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Grassy');
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  
  
  
  
  test('test for id card (Sky)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.getByTestId('select-student').click();
    await page.getByLabel('All Students', { exact: true }).getByText('All Students').click();
    await page.getByTestId('select-idcard').click();
    await page.getByTestId('select-idcard').click();
    await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Sky');
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  
  
  
  
  
  test('test for id card (newtemp)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,Class-4th');
    await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
    await page.getByTestId('select-student').click();
    await page.getByLabel('All Students', { exact: true }).getByText('All Students').click();
    await page.getByTestId('select-idcard').click();
    await page.getByTestId('select-idcard').click();
    await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('newtemp');
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  
  test('test for student id card (all)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Students' }).first().click();
  await page.getByRole('link', { name: 'Student Identity Card' }).click();
  await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,Class-4th');
  await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,Class-4th-A-2024');
  await page.getByTestId('select-student').click();
  await page.getByLabel('All Students', { exact: true }).getByText('All Students').click();
  await page.getByTestId('select-idcard').click();
  await page.getByTestId('select-idcard').click();
  await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Wine');
await page.getByRole('button', { name: 'Submit Report' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page1 = await page1Promise;
  await page.getByTestId('select-idcard').click();
  await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Indigo');
  await page.getByRole('button', { name: 'Submit Report' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page2 = await page2Promise;
  await page.getByTestId('select-idcard').click();
  await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Grassy');
  await page.getByRole('button', { name: 'Submit Report' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page3 = await page3Promise;
  await page.getByTestId('select-idcard').click();
  await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Sky');
  await page.getByRole('button', { name: 'Submit Report' }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page4 = await page4Promise;
  await page.getByTestId('select-idcard').click();
  await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('newtemp');
  await page.getByRole('button', { name: 'Submit Report' }).click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page5 = await page5Promise;
});
  



  test('test for generating student roll number', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('.mt-4 > div > .grid > div').first().click();
  await page.getByRole('link', { name: 'Generete Student Roll Number' }).click();
  await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,Class-4th');
  await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,Class-4th-A-2024,');
  await page.getByPlaceholder('Enter Prifix').click();
  await page.getByPlaceholder('Enter Prifix').press('CapsLock');
  await page.getByPlaceholder('Enter Prifix').fill('R');
  await page.getByPlaceholder('Enter Prifix').press('CapsLock');
  await page.getByPlaceholder('Enter Start Roll No.').click();
  await page.getByPlaceholder('Enter Start Roll No.').fill('01');
  await page.getByRole('button', { name: 'Generate' }).click();
  await expect(page.getByText('R1')).toBeVisible();
  });


  test('test for Attendance Register', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.locator('.group > div > .inline-flex').first().click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(3) > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Attendance Register' }).click();
    await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,class-4th');
    await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,class-4th-A-2024,OhgdO6SybcWn');
    await page.getByRole('button', { name: 'View Students' }).click();
    await expect(page.getByText('test')).toBeVisible();
    await page.getByLabel('Select Month:').selectOption('5');
    await page.getByText('Select Year:').click();
    await page.getByRole('button', { name: 'View Students' }).click();
    await expect(page.getByRole('cell', { name: 'test' })).toBeVisible();
  });
  
  
  
  
  
  
test('test for Attendance Report', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(3) > div > .grid > div').first().click();
  await page.getByRole('link', { name: 'Attendance Report' }).click();
  await page.getByTestId('select-class').selectOption('vpcYXc5qHJwJ,class-4th');
  await page.getByTestId('select-batch').selectOption('4P1Fblfev3yF,01-01-2024');
  await expect(page.getByText('test')).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page1 = await page1Promise;
});




  test('test for View All Student', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'View All Student' }).click();
    await page.getByLabel('Select a Class').click();
    await page.getByLabel('Select a Section').click();  
  });




  test('test for deleting student category', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Create Student Category' }).click();
    await page.getByText('test1').click();
    await page.getByLabel('test1').getByRole('gridcell', { name: 'Edit Delete' }).click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page.getByLabel('test1').getByText('Delete').click();
    await expect(page.getByText('Deleted Successfully!')).toBeVisible();
    await expect(page.getByText('test1')).not.toBeVisible();
  });
  

 


});

