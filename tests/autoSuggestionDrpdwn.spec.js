const { expect, test } = require('@playwright/test')

test('autosuggestion Drpdown', async ({ page }) => {

    await page.goto('https://www.redbus.in/');
    await page.locator('div[role="button"].srcDestWrapper___da1fcf').click();
    await page.locator('#srcDest').fill("Warangal");
    await page.pause(2000);
    const drp = await page.$$("//div[@class='listHeader___db864f']/parent::div")
    for (let alloptions of drp) {
        let contents = await alloptions.textContent();
        console.log(contents);
        if (contents.includes('Warangal Tour')) {
            await alloptions.click();
        }      
    }
    await page.keyboard.press("Escape")
         const selectedValue = await page.locator("//div[@class='labelCityWrapper___e889bf']/child::div[text()='Warangal Tour']");
        await expect(selectedValue).toBeVisible();
        console.log("Yes..!! I am Selected");
})