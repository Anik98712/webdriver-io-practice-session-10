

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get inputUsername() {
        return $('#email');
    }

    get inputPassword() {
        return $('#passwd');
    }

    get btnSubmit() {
        return $('#SubmitLogin');
    }
    get logOut()
    {
        return $('.logout');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async click_login()
    {
       await super.click_on_login();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async logout()
    {
        await this.logOut.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open("index.php");
    }
}

module.exports = new LoginPage();
