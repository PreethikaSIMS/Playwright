const {test,expect} = require('@playwright/test')

test('CheckboxesRadioButtonsandInput',async({page})=>
{
    await page.goto('https://demo.nopcommerce.com/register');
    const firstName = await page.locator('#FirstName')
    await expect (firstName).toBeEmpty();
    await expect (firstName).toBeEnabled();
    await expect (firstName).toBeEditable();
    await expect (firstName).toBeVisible();
    await firstName.fill('Preethiksharon205@yopmail.com');

// CheckBoxes.

    await page.locator('#gender-male');
    await page.locator('#gender-male').check();
     await expect(await page.locator('#gender-male').isChecked()).toBeTruthy();
    await page.waitForTimeout(5000);
})