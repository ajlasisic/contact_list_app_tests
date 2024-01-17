import { $ } from "@wdio/globals";
import Page from "./Page.js";

class LoginPage extends Page {
  get signUpButton() {
    return $("#signup");
  }
  get emailInput() {
    return $("#email");
  }
  get passwordInput() {
    return $("#password");
  }
  get loginButton() {
    return $("#submit");
  }

  async login({email, password}) {
    if (email) {
      await this.emailInput.setValue(email);
    }
    if (password) {
      await this.passwordInput.setValue(password);
    }
    await this.loginButton.click();
  }

  async verifyLogout() {
    await this.waitForDisplayed(this.signUpButton);
    await expect(await browser.getUrl()).toEqual(
      "https://thinking-tester-contact-list.herokuapp.com/"
    );
  }
}
export default new LoginPage();
