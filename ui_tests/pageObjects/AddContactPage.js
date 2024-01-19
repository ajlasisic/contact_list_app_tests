import { $ } from "@wdio/globals";
import Page from "./Page.js";

class AddContactPage extends Page {
  get inputFirstName() {
    return $("#firstName");
  }
  get inputLastName() {
    return $("#lastName");
  }
  get inputDOB() {
    return $("#birthdate");
  }
  get inputEmail() {
    return $("#email");
  }
  get inputPhone() {
    return $("#phone");
  }
  get inputStreet1() {
    return $("#street1");
  }
  get inputStreet2() {
    return $("#street2");
  }
  get inputCity() {
    return $("#city");
  }
  get inputState() {
    return $("#stateProvince");
  }
  get inputPostalCode() {
    return $("#postalCode");
  }
  get inputCountry() {
    return $("#country");
  }
  get submitButton() {
    return $("#submit");
  }
  get cancelButton() {
    return $("#cancel");
  }

  async addContact({
    firstName,
    lastName,
    dateOfBirth,
    email,
    phone,
    street1,
    street2,
    city,
    state,
    postalCode,
    country
  }) {
    if (firstName) {
      await this.inputFirstName.setValue(firstName);
    }
    if (lastName) {
      await this.inputLastName.setValue(lastName);
    }
    if (dateOfBirth) {
      await this.inputDOB.setValue(dateOfBirth);
    }
    if (email) {
      await this.inputEmail.setValue(email);
    }
    if (phone) {
      await this.inputPhone.setValue(phone);
    }
    if (street1) {
      await this.inputStreet1.setValue(street1);
    }
    if (street2) {
      await this.inputStreet2.setValue(street2);
    }
    if (city) {
      await this.inputCity.setValue(city);
    }
    if (state) {
      await this.inputState.setValue(state);
    }
    if (postalCode) {
      await this.inputPostalCode.setValue(postalCode);
    }
    if (country) {
      await this.inputCountry.setValue(country);
    }
    await this.submitButton.click();
  }
}
export default new AddContactPage();
