import RegisterPage from "../pageObjects/RegisterPage.js";
import { invalidLoginData, validLoginData } from "../data/login.js";
import { invalidSignUpData, registerUser } from "../data/register.js";
import LoginPage from "../pageObjects/LoginPage.js";
import * as AuthTasks from "../../tasks/ui/authTasks.js";
import { errorMessages } from "../data/errors.js";
import { signUpAndLogout } from "../../states/ui/uiStates.js";

describe("Regression test", () => {
  beforeEach(function () {
    browser.url("/");
  });
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
    let test_email = registerUser.email;
    let test_password = registerUser.password;
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
});
