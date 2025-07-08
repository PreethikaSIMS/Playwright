const { test, expect } = require('@playwright/test')

test('Dialogs of the Webpage', async ({ page }) => {
    page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');

    page.on('dialog', async dialog => {
    
        expect(dialog.defaultValue()).toContain('change me');
        const prompt = await dialog.type();
        console.log(prompt)
        expect(prompt).toContain(prompt);
        await dialog.accept('Hello');
    })
       await page.click('#promptexample');
       await expect(page.locator('#promptreturn')).toHaveText('Hello');


    })
 
   /*page.on('dialog', async dialog =>{
    await expect(dialog.message()).toContain('I am a confirm alert');
    const typeofalret = await dialog.type();
    console.log(typeofalret);
    await expect(typeofalret).toContain('comfirm');
    await dialog.accept();
   })
   await page.click('#confirmexample'); */



  /* page.on('dialog', async dialog => {
        await expect(dialog.message()).toContain('I am an alert box!');
        await expect(dialog.type()).toContain('alert')
        await dialog.accept();
    })
    {
         await page.click('#alertexamples')
    }*/