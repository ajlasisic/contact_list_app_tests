import ContactListPage from "../pageObjects/ContactListPage.js";
import { registerUser } from "../data/register.js";
import * as AuthTasks from "../../tasks/ui/authTasks.js";
import * as ContactsTasks from "../../tasks/ui/contactsTasks.js";
import { newContactData } from "../data/contacts.js";
import { signUpAndLogout } from "../../states/ui/uiStates.js";
import { cleanUp } from "../../states/api/apiStates.js";

describe("Smoke test", () => {
  beforeEach(function () {
    browser.url("/");
  });
  let test_email = registerUser.email;
  let test_password = registerUser.password;
  it("Sign up a new user and logout", async () => {
    await signUpAndLogout(test_email, test_password)
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
    await ContactListPage.verifyContactEmail(test_email)
    await cleanUp(test_email, test_password)
  });
});
