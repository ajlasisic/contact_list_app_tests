import { cleanUp, login } from "../../states/api/apiStates.js";
import * as AuthAPI from "../../tasks/api/authTasks.js";
import { validRegistrationData } from "../data/register.js";

describe("API smoke test", () => {
  let test_email = validRegistrationData.email;
  let test_password = validRegistrationData.password;
  it("Sign up, login and logout user", async () => {
    await AuthAPI.registerUser({
      firstName: validRegistrationData.firstName,
      lastName: validRegistrationData.lastName,
      email: test_email,
      password: test_password,
    });
    let { token } = await login(test_email, test_password);
    await AuthAPI.logoutUser({ token });
    await cleanUp(test_email, test_password)
  });
});
