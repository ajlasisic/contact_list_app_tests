import ContactListPage from "../../ui_tests/pageObjects/ContactListPage.js";
import LoginPage from "../../ui_tests/pageObjects/LoginPage.js";
import RegisterPage from "../../ui_tests/pageObjects/RegisterPage.js";

export const loginUser = async ({email, password}) => {
    await LoginPage.login({email, password});
  };
export const registerUser = async ({firstName, lastName, email, password}) => {
    await LoginPage.clickElement(LoginPage.signUpButton)
    await RegisterPage.register({firstName, lastName, email, password})
  };
export const logoutUser = async () => {
  await ContactListPage.clickElement(ContactListPage.logoutButton);
  await LoginPage.verifyLogout();
  };
