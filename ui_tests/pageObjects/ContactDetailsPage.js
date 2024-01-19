import { $ } from "@wdio/globals";
import Page from "./Page.js";
import ContactListPage from "./ContactListPage.js";

class ContactDetailsPage extends Page {
  get editContactButton() {
    return $("#edit-contact");
  }
  get deleteContactButton() {
    return $("#delete");
  }
  get returnToContactListButton() {
    return $("#return");
  }
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
  async editContact({
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
    await this.waitForDisplayed(this.submitButton)
    if (firstName) {
      await this.clickElement(this.inputFirstName)
      await this.inputFirstName.setValue(firstName);
    }
    if (lastName) {
      await this.clickElement(this.inputLastName)
      await this.inputLastName.setValue(lastName);
    }
    if (dateOfBirth) {
      await this.clickElement(this.inputDOB)
      await this.inputDOB.setValue(dateOfBirth);
    }
    if (email) {
      await this.clickElement(this.inputEmail)
      await this.inputEmail.setValue(email);
    }
    if (phone) {
      await this.clickElement(this.inputPhone)
      await this.inputPhone.setValue(phone);
    }
    if (street1) {
      await this.clickElement(this.inputStreet1)
      await this.inputStreet1.setValue(street1);
    }
    if (street2) {
      await this.clickElement(this.inputStreet2)
      await this.inputStreet2.setValue(street2);
    }
    if (city) {
      await this.clickElement(this.inputCity)
      await this.inputCity.setValue(city);
    }
    if (state) {
      await this.clickElement(this.inputState)
      await this.inputState.setValue(state);
    }
    if (postalCode) {
      await this.clickElement(this.inputPostalCode)
      await this.inputPostalCode.setValue(postalCode);
    }
    if (country) {
      await this.clickElement(this.inputCountry)
      await this.inputCountry.setValue(country);
    }
    await this.submitButton.click();
  }
  async deleteContact() {
    await this.waitForDisplayed(this.deleteContactButton)
    await this.clickElement(this.deleteContactButton)
    await browser.acceptAlert()
    await this.waitForDisplayed(ContactListPage.addNewContactButton)
  }
}
export default new ContactDetailsPage();
