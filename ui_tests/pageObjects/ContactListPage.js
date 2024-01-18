import { $ } from "@wdio/globals";
import Page from "./Page.js";

class ContactListPage extends Page {
  get logoutButton() {
    return $("#logout");
  }
  get addNewContactButton() {
    return $("#add-contact");
  }
  get contactsTable() {
    return $('#myTable')
  }
  get emailTableCell() {
    return $('#myTable > tr  > td:nth-child(4)')
  }
  get firstNameTableCell() {
    return $('#myTable > tr  > td:nth-child(2)')
  }

  async verifyAuth() {
    await this.waitForDisplayed(this.logoutButton);
    await expect(await browser.getUrl()).toEqual(
      "https://thinking-tester-contact-list.herokuapp.com/contactList"
    );
  }
  async verifyAddNewContact(email) {
    await this.waitForDisplayed(this.contactsTable);
    await expect(await this.emailTableCell.getText()).toEqual(email);
  }

}
export default new ContactListPage();
