import * as AuthTasks from "../../tasks/ui/authTasks.js"
import { registerUser } from "../../ui_tests/data/register.js";
import ContactListPage from "../../ui_tests/pageObjects/ContactListPage.js";
import LoginPage from "../../ui_tests/pageObjects/LoginPage.js";

export async function signUpAndLogout(email, password) {
    await AuthTasks.registerUser({
        firstName: registerUser.firstName,
        lastName: registerUser.lastName,
        email ,
        password ,
      });
      await ContactListPage.verifyAuth();
      await AuthTasks.logoutUser();
      await LoginPage.verifyLogout();
}