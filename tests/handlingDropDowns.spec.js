const { test, expect } = require('@playwright/test')

test('handling Dropdowns', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns/');
    await page.locator('#fruits').selectOption({ value: '3' })
    await page.locator('#fruits').selectOption({ index: 2})
    await page.locator('#fruits').selectOption({selectText: 'Pine Apple'})
    const options = await page.locator('#fruits option');
    await expect(options).toHaveCount(6);
    const drpdownOptions = await page.$$('#fruits option');
    for(let alldrpdwnOptions of drpdownOptions)
    {
     let value= await alldrpdwnOptions.textContent();
     if(value.includes('Pine Apple'))
     {
        console.log("hello..!i'm there in list")
     }
    }
})