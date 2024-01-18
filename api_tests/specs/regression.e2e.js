import axios from "axios";
import * as AuthAPI from "../../tasks/api/authTasks.js";
import { invalidRegistrationData, validRegistrationData } from "../data/register.js";
import { invalidLoginData, validLoginData } from "../data/login.js";

describe("Auth API", () => {
  let interceptor;
  beforeEach(() => {
    interceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error.response && error.response.status === 401) {
          return Promise.resolve({ status: 401 });
        } else if (error.response && error.response.status === 400) {
          return Promise.resolve({
            status: 400,
            data: ["Email address is already in use", " "],
          });
        } else if (error.response && error.response.status === 500) {
          return Promise.resolve({
            status: 500,
          });
        }
        return Promise.reject(error);
      }
    );
  });
  afterEach(() => {
    axios.interceptors.response.eject(interceptor);
  });
  it("Registration with invalid email", async () => {
    await AuthAPI.registerUser({
      email: invalidRegistrationData.email,
      password: validRegistrationData.password,
      firstName: validRegistrationData.firstName,
      lastName: validRegistrationData.lastName,
      statusCode: 400,
    });
  });

  it("Registration without email", async () => {
    await AuthAPI.registerUser({
      password: validRegistrationData.password,
      firstName: validRegistrationData.firstName,
      lastName: validRegistrationData.lastName,
      statusCode: 400,
      responseData: "Email address is already in use",
    });
  });

  it("Login with invalid email", async () => {
    await AuthAPI.loginUser({
      email: invalidLoginData.email,
      password: validLoginData.password,
      statusCode: 401,
    });
  });

  it("Login with invalid password", async () => {
    await AuthAPI.loginUser({
      email: validLoginData.email,
      password: invalidLoginData.password,
      statusCode: 401,
    });
  });
});
