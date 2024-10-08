import { test, expect } from '@playwright/test';
// test for student addmission     
test.describe('test for student addmission ', () => {


 

  test('test for student addmission', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
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
    // await page.locator("[name='batches']").selectOption('NOnCHmqIv50R,Class-4th-A-2024');
    await page.getByRole('button', { name: 'Submit' }).click();
  });

  

  

test('test for view all student by class ', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
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
  await page.getByRole('link', { name: 'View profile' }).first().click();
  await expect(page.getByText('class :class-4th')).toBeVisible();
});



test('test for view student by contact number', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Students' }).first().click();
  await page.getByRole('link', { name: 'View All Student' }).click();
  await page.getByPlaceholder('fullname or admission no. or').click();
  await page.getByPlaceholder('fullname or admission no. or').fill('1231231231');
  // await expect(page.getByText('Test1')).toBeVisible();
});


test('test for view student by name', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Students' }).first().click();
  await page.getByRole('link', { name: 'View All Student' }).click();
  await page.getByPlaceholder('fullname or admission no. or').click();
  await page.getByPlaceholder('fullname or admission no. or').fill('test1');
    await page.waitForLoadState('networkidle');
  // await expect(page.getByText('Test1')).toBeVisible();
});


test('test for view student by addmission number', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Students' }).first().click();
  await page.getByRole('link', { name: 'View All Student' }).click();
  await page.getByPlaceholder('fullname or admission no. or').click();
  await page.getByPlaceholder('fullname or admission no. or').fill('01');
  // await expect(page.getByText('Test1')).toBeVisible();
});

test('test for printing pdf of view all student', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.getByText('Students', { exact: true }).click();
  await page.getByRole('link', { name: 'View All Student' }).click();
  await page.getByPlaceholder('fullname or admission no. or').click();
  await page.getByPlaceholder('fullname or admission no. or').fill('01');
  // await expect(page.getByText('Test1')).toBeVisible();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'PDF' }).click();
  const download = await downloadPromise;
});


test('test for viewing fee history for a student ', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your Email').press('Enter');
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.locator('.mt-4 > div > .grid > div').first().click();
  await page.getByRole('link', { name: 'View All Student' }).click();
  await page.getByText('My Class*Class Listclass-').click();
  await page.getByLabel('class-4th', { exact: true }).getByText('class-4th').click();
  await page.getByText('Section*Section Listclass-4th').click();
  await page.getByLabel('class-4th-A-2024', { exact: true }).getByText('class-4th-A-2024').click();
    await expect(page.getByText('Test1')).toBeVisible();
  await page.getByRole('link', { name: 'View profile' }).first().click();
  await page.getByRole('button', { name: 'View Receipt' }).click();
  await page.getByRole('heading', { name: 'Transaction History' }).click();
});




test('test for print a student detail ', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your Email').press('Enter');
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.locator('.mt-4 > div > .grid > div').first().click();
  await page.getByRole('link', { name: 'View All Student' }).click();
  await page.getByText('My Class*Class Listclass-').click();
  await page.getByLabel('class-4th', { exact: true }).getByText('class-4th').click();
  await page.getByText('Section*Section Listclass-4th').click();
  await page.getByLabel('class-4th-A-2024', { exact: true }).getByText('class-4th-A-2024').click();
    await expect(page.getByText('Test1')).toBeVisible();
  await page.getByRole('link', { name: 'View profile' }).first().click();
    await page.getByRole('button', { name: 'Print' }).click();
});


  // test('test for viewing siblings', async ({ page }) => {
  //   await page.goto('https://testschool.launchmysite.in/');
  //   await page.getByPlaceholder('Enter your Email').click();s
  //   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  //   await page.getByPlaceholder('Enter your password').click();
  //   await page.getByPlaceholder('Enter your password').fill('test@123');
  //   await page.getByRole('button', { name: 'Sign In' }).click();
  //   await page.getByRole('link', { name: 'Students' }).first().click();
  //   await page.getByRole('link', { name: 'View All Siblings' }).click();
  //   await expect(page.getByText('Testfather')).toBeVisible();
  // });



  test('test for printing Character Certificate', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Character Certificate' }).click();
    await page.getByTestId('select-class').getByRole('combobox').selectOption('1NPSHbFN5Zfn');
    await page.getByTestId('select-batch').getByRole('combobox').selectOption('NOnCHmqIv50R');
    await page.getByTestId('select-student').getByRole('combobox').selectOption('MAcgiyka7GR1');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Print' }).click();
    const page1 = await page1Promise;
  });
  
  
  
  
  test('test for id card (wine)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,Class-4th');
    await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,Class-4th-A-2024');
    await page.getByTestId('select-student').click();
    await page.getByLabel('All Students', { exact: true }).click();
    await page.getByTestId('select-idcard').click();
    await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Wine');
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Print' }).click();
    const download = await downloadPromise;
  });



  test('test for id card (Indigo)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,Class-4th');
    await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,Class-4th-A-2024');
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
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,Class-4th');
    await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,Class-4th-A-2024');
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
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,Class-4th');
    await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,Class-4th-A-2024');
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
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Student Identity Card' }).click();
    await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,Class-4th');
    await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,Class-4th-A-2024');
    await page.getByTestId('select-student').click();
    await page.getByLabel('All Students', { exact: true }).click();
    await page.getByTestId('select-idcard').click();
    await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Wine');
    await page.getByRole('button', { name: 'Submit Report' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Print' }).click();
    const download = await downloadPromise;
  });
  
  test('test for student id card (all)', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Students' }).first().click();
  await page.getByRole('link', { name: 'Student Identity Card' }).click();
  await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,Class-4th');
  await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,Class-4th-A-2024');
  await page.getByTestId('select-student').click();
  await page.getByLabel('All Students', { exact: true }).getByText('All Students').click();
  await page.getByTestId('select-idcard').click();
  await page.getByTestId('select-idcard').click();
  await page.getByLabel('ColourWineIndigoGrassySkynewtemp').selectOption('Wine');
  await page.getByRole('button', { name: 'Submit Report' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Print' }).click();
  const download = await downloadPromise;
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
  const downloadPromise2 = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Print' }).click();
  const download2 = await downloadPromise2;
});
  



  test('test for generating student roll number', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('.mt-4 > div > .grid > div').first().click();
  await page.getByRole('link', { name: 'Generete Student Roll Number' }).click();
  await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,Class-4th');
  await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,Class-4th-A-2024,');
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
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(3) > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'Attendance Register' }).click();
    await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,class-4th');
    await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,class-4th-A-2024,');
    await page.getByRole('button', { name: 'View Students' }).click();
    await expect(page.getByText('test1')).toBeVisible();
    await page.getByLabel('Select Month:').selectOption('5');
    await page.getByText('Select Year:').click();
    await page.getByRole('button', { name: 'View Students' }).click();
    await expect(page.getByRole('cell', { name: 'test1' })).toBeVisible();
  });
  
  
  
  
  
  
test('test for Attendance Report', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(3) > div > .grid > div').first().click();
  await page.getByRole('link', { name: 'Attendance Report' }).click();
  await page.getByTestId('select-class').selectOption('1NPSHbFN5Zfn,class-4th');
  await page.getByTestId('select-batch').selectOption('NOnCHmqIv50R,01-06-2024');
  await expect(page.getByText('test1')).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print' }).click();
  const page1 = await page1Promise;
});




  test('test for View All Student', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('.mt-4 > div > .grid > div').first().click();
    await page.getByRole('link', { name: 'View All Student' }).click();
    await page.getByLabel('Select a Class').click();
    await page.getByLabel('Select a Section').click();  
  });


});

test.describe.serial('test for student addmission ', () => { 

  test('test for creating student category', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your Email').press('Enter');
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Create Student Category' }).click();
    await page.getByTestId('input-category-name').click();
    await page.getByTestId('input-category-name').fill('common1');
    await page.getByTestId('input-category-description').click();
    await page.getByTestId('input-category-description').fill('common description');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Created successfully')).toBeVisible();
    await expect(page.getByText('common', { exact: true })).toBeVisible();
  });


  test('test for deleting student category', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Students' }).first().click();
    await page.getByRole('link', { name: 'Create Student Category' }).click();
    await page.getByText('common1').click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page.getByLabel('common1').getByText('Delete').click();
    await expect(page.getByText('Deleted Successfully!')).toBeVisible();
    await expect(page.getByText('common1')).not.toBeVisible();
  });
  

});



