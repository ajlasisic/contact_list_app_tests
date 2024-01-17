import LoginPage from "../pageObjects/LoginPage.js";
import ContactListPage from "../pageObjects/ContactListPage.js";
import { registerUser } from "../data/register.js";
import * as AuthTasks from "../../tasks/ui/authTasks.js";
import * as ContactsTasks from "../../tasks/ui/contactsTasks.js";
import { newContactData } from "../data/contacts.js";

describe("Smoke test", () => {
  beforeEach(function () {
    browser.url("/");
  });
  let test_email = registerUser.email;
  let test_password = registerUser.password;
  it("Sign up a new user and logout", async () => {
    await AuthTasks.registerUser({
      firstName: registerUser.firstName,
      lastName: registerUser.lastName,
      email: test_email,
      password: test_password,
    });
    await ContactListPage.verifyAuth();
    await AuthTasks.logoutUser();
    await LoginPage.verifyLogout();
  });
  it("Login with newly created user's credentials and add new contact", async () => {
    await AuthTasks.loginUser({
      email: test_email,
      password: test_password,
    });
    await ContactListPage.verifyAuth();
    await ContactsTasks.addNewContact({
      firstName: newContactData.firstName,
      lastName: newContactData.lastName,
      email: test_email
    });
    await ContactListPage.verifyAddNewContact(test_email)
  });
});
