import { test, expect } from '@playwright/test';
// test for transportation     
test.describe('test for transportation ', () => {

    test('test for creating fee category', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByRole('link', { name: 'Manage Fees' }).first().click();
        await page.getByRole('link', { name: 'Fees Category' }).click();
        await page.getByPlaceholder('Enter Category Name').click();
        await page.getByPlaceholder('Enter Category Name').fill('second');
        await page.getByPlaceholder('Enter Category Description').click();
        await page.getByPlaceholder('Enter Category Description').fill('second description');
        await page.locator('label').filter({ hasText: 'Select All' }).locator('svg').click();
        // await page.getByRole('button', { name: 'Create Category' }).click();
    });


    test('test for creating discount', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByText('Manage Fees').click();
        await page.getByRole('link', { name: 'Discount' }).click();
        await page.getByRole('button', { name: 'Category Name' }).click();
        await page.locator('select[name="feesCategory"]').selectOption('first');
        await page.locator('div').filter({ hasText: /^Discount NameDiscount name$/ }).locator('div').nth(2).click();
        await page.getByLabel('Discount name').fill('first discount');
        await page.locator('div').filter({ hasText: /^Discount descriptionDiscount description$/ }).locator('div').nth(2).click();
        await page.getByLabel('Discount description').fill('discount discription');
        await page.getByLabel('Discount', { exact: true }).click();
        await page.getByText('Select Discount typeDiscountBatch WiseStudent Category WiseStudent WiseDiscount').click();
        await page.getByText('Select Discount typeDiscountBatch WiseStudent Category WiseStudent WiseDiscount').click();
        await page.getByLabel('Batch Wise', { exact: true }).click();
        await page.locator('label').filter({ hasText: 'Percentage' }).locator('span').nth(1).click();
        await page.getByLabel('Enter value').click();
        await page.getByLabel('Enter value').fill('20');
        await page.locator('label').filter({ hasText: /^Batch wise$/ }).locator('span').first().click();
        await page.getByText('Select...').click();
        await page.getByRole('option', { name: 'class-4th-A-' }).click();
        await page.getByRole('button', { name: 'Create Discount' }).click();
        await expect(page.getByText('Created Successfully!').first()).toBeVisible();
    });
      
    test('test for creating one time fees', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByRole('link', { name: 'Manage Fees' }).first().click();
        await page.getByRole('link', { name: 'Course One Time Fees' }).click();
        await page.getByPlaceholder('Enter a One Time Fee Name ').click();
        await page.getByPlaceholder('Enter a One Time Fee Name ').fill('one time fee');
        await page.getByText('class-4th-B-').click();
        await page.getByPlaceholder('Enter a One Time Fee Description ').click();
        await page.getByPlaceholder('Enter a One Time Fee Description ').fill('one time fee description');
        await page.getByPlaceholder('Enter a Amount ').click();
        await page.getByPlaceholder('Enter a Amount ').fill('8000');
        await page.getByText('Create One Time FeesOne Time').click();
        await page.locator('label').filter({ hasText: 'Is Refundable' }).locator('svg').click();
        await page.getByRole('button', { name: 'Create One Time Fees' }).click();
        await expect(page.getByText('OneTime fees Created')).toBeVisible();
    }); 
    
    test('test for transaction category', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByRole('link', { name: 'Manage Fees' }).first().click();
        await page.getByRole('link', { name: 'Transactions Category' }).click();
        await page.getByText('Fees', { exact: true }).click();
    });
    
      
    test('test for Manage Fee Collection By Particulars/Discounts', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByRole('link', { name: 'Manage Fees' }).first().click();
        await page.getByRole('link', { name: 'Manage Fee Collection' }).click();
        await page.getByText('Select BatchBatchclass-4th-A-').click();
        await page.getByLabel('class-4th-A-2024', { exact: true }).click();
        await expect(page.getByText('first fee').first()).toBeVisible();
    });  


    test('test for student wise fee report', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByRole('link', { name: 'Manage Fees' }).first().click();
        await page.getByRole('link', { name: 'Reports' }).click();
        await page.getByRole('link', { name: 'Studentwise Fees Report' }).click();
        await page.getByRole('button', { name: 'Select Class' }).click();
        await page.getByLabel('class-4th', { exact: true }).click();
        await page.locator('#myBatch').click();
        // await page.getByLabel('class-4th-A-2024', { exact: true }).click();
    });
      


    test('test for Collection wise fee report', async ({ page }) => {
        await page.goto('https://testschool.launchmysite.in/');
        await page.getByPlaceholder('Enter your Email').click();
        await page.getByPlaceholder('Enter your Email').fill('test@example.com');
        await page.getByPlaceholder('Enter your password').click();
        await page.getByPlaceholder('Enter your password').fill('test@123');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByRole('link', { name: 'Manage Fees' }).first().click();
        await page.getByRole('link', { name: 'Reports' }).click();
        await page.getByRole('link', { name: 'Collection Wise Fee Report' }).click();
        await page.locator('div').filter({ hasText: /^Select Classclass-4thSelect Class$/ }).first().click();
        await page.getByLabel('class-4th', { exact: true }).click();
        await page.locator('div').filter({ hasText: /^Select Sectionclass-4th-A-2024class-4th-B-2024Select Section$/ }).first().click();
        await page.getByLabel('class-4th-A-2024', { exact: true }).click();
        await page.locator('.rounded-sm > div:nth-child(3) > div:nth-child(2)').click();
        await page.getByLabel('first feecollection', { exact: true }).first().click();
        await page.getByRole('button', { name: 'ViewStudentList' }).click();
        await page.getByText('test', { exact: true }).click();
    });


    test('test for Discounts Report', async ({ page }) => {
    await page.goto('https://testschool.launchmysite.in/');
    await page.getByPlaceholder('Enter your Email').click();
    await page.getByPlaceholder('Enter your Email').fill('test@example.com');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('test@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Manage Fees' }).first().click();
    await page.getByRole('link', { name: 'Reports' }).click();
    await page.getByRole('link', { name: 'Discounts Report' }).click();
    await page.getByRole('rowheader', { name: 'class-4th-A-' }).click();
    await page.getByText('Total Collections :').click();
    });
  
        




    


});