const {test,expect} = require('@playwright/test')

test('Home Page', async ({page})=>  
    //(Page) is a ficture which has all commands and write. async will retun the Promise
    {
      await page.goto('https://demoblaze.com/'); 
       // accessing methods from Page ficture then we have to use await. a
       // await keyword waits for the Promise.
   const title = await page.title();
       console.log("Page Title is "+ title) 
     await expect(page).toHaveTitle("STORE"); //use expect function for validation.
     await page.close();
})