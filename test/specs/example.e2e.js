const { login } = require('../pageobjects/login.page');
const loginPage = require('../pageobjects/login.page');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Practice Session', () => {
    it('should have valid title', async () => {
        await LoginPage.open();
        expect(browser).toHaveTitle("My Store");
        await browser.pause(2000)
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
    it("click on login menu and assert login page opened",async()=>
    {
        await LoginPage.click_login();
        await browser.pause(2000);
    });
    it("Login on the page",async()=>
    {
       const accountInformation = {
            email: "jaxilat499@dkb3.com",
            password: "ASDFGHQWERTY"
        } ;
        await LoginPage.login(accountInformation.email, accountInformation.password);
        expect(browser).toHaveTitle("My account - My Store");
        await browser.pause(2000)
    });
    it("Logout from the page",async()=>
    {
        await LoginPage.logout();
    })
});

// email:jaxilat499@dkb3.com
// pass:ASDFGHQWERTY

