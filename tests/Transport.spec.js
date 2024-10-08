import { test, expect } from '@playwright/test';
// test for transportation     
test.describe('test for transportation ', () => {

  test('test for creating a route ', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Transport' }).first().click();
    await page.getByRole('link', { name: 'Route', exact: true }).click();
    await page.getByTestId('input-destination').click();
    await page.getByTestId('input-destination').fill('new market');
    await page.getByTestId('input-stopcovered').click();
    await page.getByTestId('input-stopcovered').fill('5');
    await page.getByTestId('input-cost').click();
    await page.getByTestId('input-cost').fill('500');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('new market')).toBeVisible();
  });




  test('test for editing a route ', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.locator('.group > div > .inline-flex').first().click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Transport' }).first().click();
    await page.getByRole('link', { name: 'Route', exact: true }).click();
    await page.getByRole('rowheader', { name: 'new market' }).click();
    await page.getByText('new market').click();
    await page.getByLabel('new market').getByRole('button', { name: 'Edit' }).click();
    await page.getByRole('button', { name: 'Update' }).click();
  });


  
  test('test for deleting a route ', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Transport' }).first().click();
    await page.getByRole('link', { name: 'Route', exact: true }).click();
    await page.getByText('new market').click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page.getByLabel('new market').getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('main').getByText('Successfully Delete Route').click();
      await expect(page.getByText('new market')).not.toBeVisible();
  });



test('test for creating Transport Fees Collection ', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Transport' }).first().click();
  await page.getByRole('link', { name: 'Transport Fees Collection' }).click();
  await page.getByTestId('select-collection').click();
  await page.getByLabel('HALF YEARLY', { exact: true }).getByText('HALF YEARLY').click();
  await page.locator('label').filter({ hasText: 'Select All' }).locator('svg').click();
  await page.getByLabel('1').getByTestId('input-collection-name').click();
  await page.getByLabel('1').getByTestId('input-collection-name').fill('first-collection');
  await page.locator('#startDate-1').fill('2024-01-01');
  await page.locator('#endDate-1').fill('2024-06-29');
  await page.getByLabel('2', { exact: true }).getByTestId('input-collection-name').click();
  await page.getByLabel('2', { exact: true }).getByTestId('input-collection-name').fill('second-collection');
  await page.locator('#startDate-2').fill('2024-07-01');
  await page.locator('#endDate-2').fill('2024-12-31');
  await page.getByRole('button', { name: 'Create Fee Collection' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: /^Collection Created Successfully$/ }).nth(2).click();
});



test('test for transport fee payment ', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Transport' }).first().click();
  await page.getByRole('link', { name: 'Transport Fees', exact: true }).click();
  await page.locator('form div').filter({ hasText: 'Select a Class class-4th-A-' }).nth(1).click();
  await page.getByLabel('class-4th-A-2024', { exact: true }).click();
  await page.getByText('test', { exact: true }).click();
  await page.getByRole('link', { name: 'Pay Fees' }).click();
  await page.getByLabel('Select a Collection').selectOption('first');
  //await page.locator('div').filter({ hasText: /^Select a CollectionfirstSelect a Collection$/ }).first().click();
  //await page.getByLabel('first', { exact: true }).click();

  //await page.locator('div').filter({ hasText: /^Select Payment ModeCashUPIOnlineDDChequeSelect Payment Mode$/ }).first().click();
  await page.getByLabel('Select Payment Mode').first().selectOption('Cash');
  // await page.getByLabel('Cash', { exact: true }).click();
  //await page.getByLabel('Enter Amount').click();
  await page.getByLabel('Enter Amount').fill('10');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Pay Fees' }).click();
});





test('test for Unassign Transport', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Transport' }).first().click();
  await page.getByRole('link', { name: 'Unassign Transport' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('text=class-4th', { exact: true });
  await page.getByLabel('Select Current Course').first().selectOption('class-4th');
  await page.waitForResponse(response => response.status() === 200);
  await page.waitForLoadState('networkidle');
  // await page.waitForSelector('text=class-4th-A-2024', { exact: true });
  await page.getByLabel('Select Current Batch').first().selectOption('class-4th-A-2024');
  await page.waitForResponse(response => response.status() === 200);
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('text=first', { exact: true });
  await page.getByLabel('Select Collection').first().selectOption('first');
  await page.getByRole('button', { name: 'View Student List' }).click();
});




test('test for View All Collection ', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Transport' }).first().click();
  await page.getByRole('link', { name: 'View All Collection' }).click();
  await page.getByText('Select Section :Sectionclass-4th-A-2024').click();
  await page.getByLabel('class-4th-A-2024', { exact: true }).click();
  await expect(page.getByText('6/30/2024', {exact:true})).toBeVisible();
});



// test('test for viewing Class Batch Wise Report ', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Transport' }).first().click();
//   await page.getByRole('link', { name: 'Class Batch Wise Report' }).click();
//   await page.getByLabel('Select Current Course').first().selectOption('class-4th');
//   await page.waitForResponse(res => res.status() === 200) 
//   // await page.locator('div').filter({ hasText: /^Select Current Courseclass-4thclass-6thSelect Current Course$/ }).first().click();
//   // await page.getByLabel('class-4th', { exact: true }).click();

//   // await page.locator('div').filter({ hasText: /^Select Current Batchclass-4th-A-2024class-4th-B-2024Select Current Batch$/ }).first().click();
//   // await page.getByLabel('class-4th-A-2024', { exact: true }).click();
//   await page.getByLabel('Select Current Batch').first().selectOption('class-4th-A-2024');
//   await page.waitForResponse(res => res.status() === 200) 
//   // await page.locator('div').filter({ hasText: /^Select CollectionfirstSelect CollectionSelect Collection$/ }).first().click();
//   // await page.getByLabel('first', { exact: true }).click();
//   await page.getByLabel('Select Collection').first().selectOption('first');
//   await page.waitForResponse(res => res.status() === 200) 
//   await page.getByRole('button', { name: 'View Student List' }).click();
// });


test('test  for deleting a transport fee collection', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Transport' }).first().click();
  await page.getByRole('link', { name: 'View All Collection' }).click();
  await page.getByText('Select Section :Sectionclass-').click();
  await page.getByLabel('class-4th-A-2024', { exact: true }).click();
  await page.getByText('first-collection').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByLabel('2', { exact: true }).getByRole('button', { name: 'Delete' }).click();
  await page.getByLabel('3').getByText('second-collection').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByLabel('3', { exact: true }).getByRole('button', { name: 'Delete' }).click();
});

});

test('test for Route Wise Report', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.locator('.group > div > .inline-flex').first().click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.getByRole('link', { name: 'Transport' }).first().click();
  await page.getByRole('link', { name: 'Route Wise Report' }).click();
  await page.getByText('Route*Select').click();
  await page.locator('div').filter({ hasText: /^Select RoutelalghatiSelect Route$/ }).first().click();
  await page.getByLabel('lalghati', { exact: true }).click();
  await expect(page.getByText('test')).toBeVisible();
});


test.describe.serial('test for transportation ', () => {

 
test('test for Registration of Vehicle ', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Transport' }).first().click();
  await page.getByRole('link', { name: 'Vehicle' }).click();
  await page.getByLabel('Vehicle No').click();
  await page.getByLabel('Vehicle No').fill('mp01mp2024');
  await page.getByLabel('No of Seats').click();
  await page.getByLabel('No of Seats').fill('200');
  await page.locator('div').filter({ hasText: /^RoutelalghatiRoute$/ }).first().click();
  await page.getByLabel('lalghati', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('mp01mp2024')).toBeVisible();
});


test('test for deleting Registration of Vehicle ', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('testschool@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Transport' }).first().click();
  await page.getByRole('link', { name: 'Vehicle' }).click();
  await page.getByText('mp01mp2024').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByLabel('mp01mp2024').getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByText('mp01mp2024')).not.toBeVisible();
});

});
