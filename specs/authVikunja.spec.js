import chai from 'chai';
import {run, stop} from '../lib/browser';
const assert = chai.assert;
const expect = chai.expect;

describe ('Авторизация', () => {
    let page;
    
    beforeEach( async () => {
        page = await run('https://www.saucedemo.com/');
    });
    afterEach(async() => {
        await stop();
    });

    it ('Авторизоваться стандартным  пользователем', async () => {
        await page.click('#user-name');
        await page.fill('#user-name', 'standard_user');
        await page.click('#password');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.locator('text=Products');        
        const welcomeText = await page.textContent('text=Products');
        assert.strictEqual(welcomeText, 'Products', 'Имя пользователя не равно demo');
    });
    it.only ('Разлогиниться стандартным  пользователем', async () => {
        
        await page.click('#user-name');
        await page.fill('#user-name', 'standard_user');
        await page.click('#password');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.click('#react-burger-menu-btn')
        await page.click('#logout_sidebar_link');
        const locator = await page.locator("#login-button");
        await expect(locator).toHaveAttribute('value','Login')
    
    });
    //  it ('Авторизоваться стандартным  пользователем', async () => {
    //         await page.click('#user-name');
    //         await page.fill('#user-name', 'standard_user');
    //         await page.click('#password');
    //         await page.fill('#password', 'secret_sauce');
    //         await page.click('#login-button');
    //         await page.click('.product_sort_container')
    //         const select = element.selectOption('[value="za"]')
    //         await page.click(select)
    //         const welcomeText = await page.textContent('text=Products');
    //         assert.strictEqual(welcomeText, 'Products', 'Имя пользователя не равно demo' );
    //     });
    //   
});
