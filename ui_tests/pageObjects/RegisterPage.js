import { $ } from "@wdio/globals";
import Page from "./Page.js";

class RegisterPage extends Page {
  get inputFirstName() {
    return $("#firstName");
  }
  get inputLastName() {
    return $("#lastName");
  }
  get inputEmail() {
    return $("#email");
  }
  get inputPassword() {
    return $("#password");
  }
  get submitButton() {
    return $("#submit");
  }

  async register({firstName, lastName, email, password}) {
    if (firstName) {
    await this.inputFirstName.setValue(firstName);
    }
    if (lastName) {
    await this.inputLastName.setValue(lastName);
    }
    if (email) {
    await this.inputEmail.setValue(email);
    }
    if (password) {
    await this.inputPassword.setValue(password);
    }
    await this.submitButton.click();
  }
}

export default new RegisterPage();
