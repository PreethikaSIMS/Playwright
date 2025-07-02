const {test,expect} = require('@playwright/test')

test('demoBlaze', async({page})=>
{
   await page.goto("https://demoblaze.com/");
 await page.waitForSelector("//h4[@class='card-title']//a")
  const allnames= await page.$$("//h4[@class='card-title']//a");
  for(const mobileNames of allnames)
  {
      const names = await mobileNames.textContent();
      console.log(names);

  }
})