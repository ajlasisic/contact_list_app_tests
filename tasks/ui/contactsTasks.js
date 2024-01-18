import AddContactPage from "../../ui_tests/pageObjects/AddContactPage.js";
import ContactDetailsPage from "../../ui_tests/pageObjects/ContactDetailsPage.js";
import ContactListPage from "../../ui_tests/pageObjects/ContactListPage.js";

export const addNewContact = async ({
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
  country,
}) => {
  await ContactListPage.clickElement(ContactListPage.addNewContactButton)
  await AddContactPage.addContact({
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
    country,
  });
};
export const editContactData = async ({
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
  country,
}) => {
  await ContactDetailsPage.waitForDisplayed(ContactDetailsPage.editContactButton)
  await ContactDetailsPage.clickElement(ContactDetailsPage.editContactButton)
  await ContactDetailsPage.editContact({
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
  })
}
export const deleteContact = async (contactData) => {
  await ContactDetailsPage.deleteContact()
  await expect(await contactData).not.toExist()
}
