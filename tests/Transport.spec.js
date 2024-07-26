import { test, expect } from '@playwright/test';
// test for transportation     
test.describe('test for transportation ', () => {

  test('test for creating a route', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div:nth-child(7)').first().click();
    await page.getByRole('link', { name: 'Route', exact: true }).click();
    await page.getByLabel('Enter a Destination').click();
    await page.getByLabel('Enter a Destination').fill('new market');
    await page.locator('div').filter({ hasText: /^Stop Covered\*Enter Stop Covered$/ }).locator('div').nth(4).click();
    await page.getByLabel('Enter Stop Covered').fill('5');
    await page.locator('div').filter({ hasText: /^Cost \* Enter a cost$/ }).locator('div').nth(4).click();
    await page.getByLabel('Enter a cost').fill('500');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('new market')).toBeVisible();
  });



test('test for assigning vehicle', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('link', { name: 'Vehicle' }).click();
  await page.locator('div').filter({ hasText: /^Vehicle No\*Vehicle No$/ }).locator('div').nth(4).click();
  await page.getByLabel('Vehicle No').fill('mp05hk5210');
  await page.locator('div').filter({ hasText: /^No of Seats \* No of Seats$/ }).locator('div').nth(4).click();
  await page.getByLabel('No of Seats').fill('50');
  // await page.getByLabel('Route', { exact: true }).click();
  // await page.getByLabel('lalghati', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});


test('test for Route Wise Report', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('link', { name: 'Route Wise Report' }).click();
//   await page.getByLabel('Select Route', { exact: true }).click();
//   await page.locator('[id="react-aria9435319578-\\:rg\\:-option-yqPvUjmR8jOx"]').click();
});



test('test for deleting a route', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.locator('.group > div > .inline-flex').first().click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.locator('.mb-6 > div > .group > div > .inline-flex').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('link', { name: 'Route', exact: true }).click();
  // page.once('dialog', dialog => {
  //   console.log(`Dialog message: ${dialog.message()}`);
  //   dialog.dismiss().catch(() => {});
  // });
// //   await page.getByRole('button', { name: 'Delete' }).click();
//   await page.getByRole('main').locator('div').filter({ hasText: /^Successfully Delete Route$/ });
});

test('test for Registration of Vehicle', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('link', { name: 'Vehicle' }).click();
  await page.locator('div').filter({ hasText: /^Vehicle No\*Vehicle No$/ }).locator('div').nth(4).click();
  await page.getByText('Vehicle No', { exact: true }).click();
  await page.getByLabel('Vehicle No').fill('mp06kk2020');
  await page.locator('div').filter({ hasText: /^No of Seats \* No of Seats$/ }).locator('div').nth(4).click();
  await page.getByLabel('No of Seats').fill('100');
  await page.getByLabel('Route', { exact: true }).click();
  await page.getByLabel('lalghati').nth(2).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: /^Successfully Added Route$/ });
});



test('test for creating Transport Fees Collection', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('link', { name: 'Transport Fees Collection' }).click();
  await page.getByLabel('Select Period of Collection').click();
  await page.getByLabel('HALF YEARLY', { exact: true }).click();
  await page.locator('label').filter({ hasText: 'Select All' }).locator('span').first().click();
  await page.locator('.h-full > .relative > .inline-flex').first().click();
  await page.getByLabel('1', { exact: true }).getByPlaceholder('Enter Fee Collection Name').fill('first');
  await page.locator('td:nth-child(3) > .group > div > .relative').first().click();
  await page.locator('#startDate-1').fill('2024-01-01');
  await page.locator('td:nth-child(4) > .group > div > .relative').first().click();
  await page.locator('#endDate-1').fill('2024-06-30');
  await page.getByLabel('2', { exact: true }).getByPlaceholder('Enter Fee Collection Name').click();
  await page.getByLabel('2', { exact: true }).getByPlaceholder('Enter Fee Collection Name').fill('second');
  await page.locator('#startDate-2').fill('2024-07-01');
  await page.locator('#endDate-2').fill('2024-12-31');
  await page.getByRole('button', { name: 'Create Fee Collection' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: /^Collection Created Successfully$/ });
});

test('test for View All Collection', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('link', { name: 'View All Collection' }).click();
  await page.getByLabel('Select a Section').click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).click();
//   await page.getByLabel('2', { exact: true }).getByRole('button', { name: 'Edit' }).click();
//   await page.getByRole('button', { name: 'Update' }).click();
});




test('test for deleting Collection', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.getByPlaceholder('Enter your Email').click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('link', { name: 'View All Collection' }).click();
  await page.getByLabel('Select a Section').click();
//   await page.getByLabel('nursery-A-2024', { exact: true }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
//   await page.getByLabel('2', { exact: true }).getByRole('button', { name: 'Delete' }).click();
});



test('test for editing and deleting a route', async ({ page }) => {
  await page.goto('https://testschool.launchmysite.in/');
  await page.locator('.group > div > .inline-flex').first().click();
  await page.getByPlaceholder('Enter your Email').fill('test@example.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('link', { name: 'Route', exact: true }).click();
  await page.getByRole('rowheader', { name: 'new market' }).click();
  await page.getByText('new market').click();
  await page.getByLabel('new market').getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByLabel('new market').getByRole('button', { name: 'Delete' }).click();
await expect(page.getByText('new market')).not.toBeVisible();
});



// test('test for deleting registered Vehicle', async ({ page }) => {
//   await page.goto('https://testschool.launchmysite.in/');
//   await page.getByPlaceholder('Enter your Email').click();
//   await page.getByPlaceholder('Enter your Email').fill('test@example.com');
//   await page.getByPlaceholder('Enter your password').click();
//   await page.getByPlaceholder('Enter your password').fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div:nth-child(7)').first().click();
//   await page.getByRole('link', { name: 'Vehicle' }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.accept().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Delete' }).click();
// });




});