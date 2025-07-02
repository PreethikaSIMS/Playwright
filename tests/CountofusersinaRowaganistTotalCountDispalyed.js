const {test, expect } = require("@playwright/test");

test('locators',async ({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.click("//button[text()=' Login ']");
    await page.waitForSelector('//span[text()="Admin"]');
    await page.click('//span[text()="Admin"]');
    await page.waitForSelector("//div[@class='oxd-table-body']//child::div[@class='oxd-table-row oxd-table-row--with-border']//child::div[2]");
    const usernames =  await page.$$("//div[@class='oxd-table-body']//child::div[@class='oxd-table-row oxd-table-row--with-border']//child::div[2]");
    
    const totalNumberDisplayed = await page.locator("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] span[class='oxd-text oxd-text--span']");
    const totalNumberOnScreen = await totalNumberDisplayed.textContent();
    const totalNumberOnScreenCount = totalNumberOnScreen.replace(/[^\d]/g, "");
    const totalNumberOnScreenCount1= parseInt(totalNumberOnScreenCount);
    console.log("Total Count of users Displayed on the screen : "+totalNumberOnScreenCount1);
    const totalNumberinGrid = usernames.length
    console.log("The Total Count of UserNames fetched are : "+ totalNumberinGrid);
    for (const names of usernames)
    {
        const allnames = await names.textContent();
      //  console.log(allnames); 
    }
    if(totalNumberinGrid===totalNumberOnScreenCount1)
    {
        console.log("The Total Count of usernames are Matched");
    }
    else
    {
        console.log("The Total Count of usernames are not Matched");
    }
})