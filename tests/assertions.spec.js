const {test,expect}=require('@playwright/test');
const { DiffieHellmanGroup } = require('crypto');
const { execPath } = require('process');

test('assertions', async({page})=>
{
await page.goto('https://demo.nopcommerce.com/register')
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
await expect(page).toHaveTitle('nopCommerce demo store. Register');
const logo = await page.locator('.header-logo');
await expect(logo).toBeVisible();
const searchstore = await page.locator('#small-searchterms');
await expect(searchstore).toBeEnabled();
const radiobtn=await page.locator('#gender-male')
radiobtn.click();
await expect(radiobtn).toBeChecked();
const checkBox=await page.locator('//input[@value="true"]')
await expect(checkBox).toBeChecked();
await expect.soft((radiobtn)).toHaveText('Male');
await expect(page.locator('.page-title')).toHaveText('Register');
await expect(page.locator('#Email')).toHaveValue('Preethikasharon203@gmail.com');   
})