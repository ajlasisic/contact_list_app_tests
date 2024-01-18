import RegisterPage from "../pageObjects/RegisterPage.js";
import { invalidLoginData, validLoginData } from "../data/login.js";
import { invalidSignUpData, registerUser } from "../data/register.js";
import LoginPage from "../pageObjects/LoginPage.js";
import * as AuthTasks from "../../tasks/ui/authTasks.js";
import * as ContactsTasks from "../../tasks/ui/contactsTasks.js";
import { errorMessages } from "../data/errors.js";
import { signUpAndLogout } from "../../states/ui/uiStates.js";
import { newContactData } from "../data/contacts.js";
import ContactListPage from "../pageObjects/ContactListPage.js";
import ContactDetailsPage from "../pageObjects/ContactDetailsPage.js";
import { cleanUp } from "../../states/api/apiStates.js";

describe("Regression test", () => {
  beforeEach(function () {
    browser.url("/");
  });
  let test_email = registerUser.email;
  let test_password = registerUser.password;
  it("Login with incorrect email", async () => {
    await AuthTasks.loginUser({
      email: invalidLoginData.email,
      password: validLoginData.password,
    });
    await LoginPage.verifyErrorMsgText(
      LoginPage.errorMessage,
      errorMessages.invalidEmailOrPassword
    );
  });
  it("Login with incorrect password", async () => {
    await AuthTasks.loginUser({
      email: validLoginData.email,
      password: invalidLoginData.password,
    });
    await LoginPage.verifyErrorMsgText(
      LoginPage.errorMessage,
      errorMessages.invalidEmailOrPassword
    );
  });
  it("Sign up with existing email", async () => {
    await signUpAndLogout(test_email, test_password);
    await AuthTasks.registerUser({
      firstName: registerUser.firstName,
      lastName: registerUser.lastName,
      email: test_email,
      password: test_password,
    });

    await RegisterPage.verifyErrorMsgText(
      RegisterPage.errorMessage,
      errorMessages.existingEmail
    );
  });
  it("Sign up with weak password", async () => {
    await AuthTasks.registerUser({
      firstName: registerUser.firstName,
      lastName: registerUser.lastName,
      email: registerUser.email,
      password: invalidSignUpData.password,
    });
    await RegisterPage.verifyErrorMsgText(
      RegisterPage.errorMessage,
      errorMessages.weakPassword
    );
  });
  it("Sign up with invalid email format", async () => {
    await AuthTasks.registerUser({
      firstName: registerUser.firstName,
      lastName: registerUser.lastName,
      email: invalidSignUpData.email,
      password: registerUser.password,
    });
    await RegisterPage.verifyErrorMsgText(
      RegisterPage.errorMessage,
      errorMessages.invalidEmailFormat
    );
  });
  it("Sign up without any data", async () => {
    await AuthTasks.registerUser({});
    await RegisterPage.verifyErrorMsgText(
      RegisterPage.errorMessage,
      errorMessages.noDataEntered
    );
  });
  it("Sign up without firstName and lastName fields", async () => {
    await AuthTasks.registerUser({
      email: registerUser.email,
      password: registerUser.password,
    });
    await RegisterPage.verifyErrorMsgText(
      RegisterPage.errorMessage,
      errorMessages.noFirstAndLastNameAuth
    );
  });
  it("Add contact without firstName and lastName fields", async () => {
    await AuthTasks.loginUser({ email: test_email, password: test_password });
    await ContactsTasks.addNewContact({});
    await RegisterPage.verifyErrorMsgText(
      RegisterPage.errorMessage,
      errorMessages.noFirstAndLastNameContact
    );
    await AuthTasks.logoutUser();
  });
  it("Add contact without login", async () => {
    await browser.url("/contactList");
    await ContactsTasks.addNewContact({});
    await RegisterPage.verifyErrorMsgText(
      RegisterPage.errorMessage,
      errorMessages.noLoginAddContact
    );
  });
  it("Edit contact - delete required fields", async () => {
    await AuthTasks.loginUser({ email: test_email, password: test_password });
    await ContactsTasks.addNewContact({
      firstName: newContactData.firstName,
      lastName: newContactData.lastName
    });
    await ContactListPage.clickElement(ContactListPage.firstNameTableCell)
    await ContactsTasks.editContactData({
      firstName: " ",
      lastName: " "
    })
    await RegisterPage.verifyErrorMsgText(
      RegisterPage.errorMessage,
      errorMessages.noDataEditContact
    );
  });
  it("Edit contact", async () => {
    await AuthTasks.loginUser({ email: test_email, password: test_password });
    await ContactListPage.clickElement(ContactListPage.firstNameTableCell)
    await ContactsTasks.editContactData({
      email: test_email
    })
    await ContactDetailsPage.clickElement(ContactDetailsPage.returnToContactListButton)
    await ContactListPage.verifyContactEmail(test_email)
  });
  it("Delete contact", async () => {
    await AuthTasks.loginUser({ email: test_email, password: test_password });
    let contact = (await ContactListPage.firstNameTableCell).getText()
    await ContactListPage.clickElement(ContactListPage.firstNameTableCell)
    await ContactsTasks.deleteContact(await contact)
  });
  afterAll(async function () {
    await cleanUp(test_email, test_password)
  })
});
