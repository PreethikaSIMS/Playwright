const {test, expect } = require("@playwright/test");

test('locators',async ({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.click("//button[text()=' Login ']");
     await page.click('.oxd-userdropdown-tab');
    const logoutOption = await page.locator('//a[text()="Logout"]')
    await expect(logoutOption).toBeVisible();
    console.log("Yes Logout Option is visible")
    if(expect(logoutOption).toBeVisible())
    {
          logoutOption.click();
    }
    const loginPage=await page.locator('//h5[text()="Login"]')
    await expect(loginPage).toBeVisible();
     console.log("Yes...Login Option is visible")
    })