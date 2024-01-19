import { cleanUp, login } from "../../states/api/apiStates.js";
import * as AuthAPI from "../../tasks/api/authTasks.js";
import * as ContactsAPI from "../../tasks/api/contactsTasks.js";
import { validRegistrationData } from "../data/register.js";

describe("API smoke test", () => {
  let test_email = validRegistrationData.email;
  let test_password = validRegistrationData.password;
  it("Sign up, login, add contact and logout", async () => {
    // this test contains multiple api calls combined
    await AuthAPI.registerUser({
      firstName: validRegistrationData.firstName,
      lastName: validRegistrationData.lastName,
      email: test_email,
      password: test_password,
    });
    let { token } = await login(test_email, test_password);
    let { id } = await ContactsAPI.addContact({
      firstName: validRegistrationData.firstName,
      lastName: validRegistrationData.lastName,
      email: test_email,
      responseData: test_email,
      token
    })
    await ContactsAPI.getContact({token, contactId: id})
    await AuthAPI.logoutUser({ token });
  });
});
