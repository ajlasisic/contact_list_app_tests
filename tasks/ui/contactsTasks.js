import AddContactPage from "../../ui_tests/pageObjects/AddContactPage.js";
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
