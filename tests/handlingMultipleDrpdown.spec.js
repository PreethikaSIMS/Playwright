const { test, expect } = require('@playwright/test');
const { execPath } = require('process');

test('handling multiple dropdowns', async ({ page }) => {
    const nomessage = "hello";
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.click("//button[text()=' Login ']");
    await page.click('.oxd-userdropdown-tab');
    const Drpdwn = await page.locator('//header//ul/child::li/child::a');

    //1. asset to find the count of options in bootstrap drpdown

    //console.log(await Drpdwn.count());
    await expect(Drpdwn).toHaveCount(4);

    //2. find the options using array

    const Drpdwn1 = await page.$$('//header//ul/child::li/child::a');
    const lengthdrp = Drpdwn1.length
    console.log(lengthdrp)


    //3.select multiple options from the dropdown

    const Drpdwn2 = await page.$$('//header//ul/child::li/child::a');
    for (let options of Drpdwn2) {
        const value = await options.textContent();
        if (value.includes('About')) {
            await options.click();
            const modal = await page.locator("//h6[text()='About']")
            await expect(modal).toBeVisible();
            console.log("modal is visible");
        }

    }

})