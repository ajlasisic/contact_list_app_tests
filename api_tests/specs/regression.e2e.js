import axios from "axios";
import * as AuthAPI from "../../tasks/api/authTasks.js";
import { invalidRegistrationData, validRegistrationData } from "../data/register.js";
import { invalidLoginData, validLoginData } from "../data/login.js";
import { register } from "../../states/api/apiStates.js";

describe("Auth API", () => {
  let interceptor;
  beforeEach(() => {
    interceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error.response && error.response.status === 401) {
          return Promise.resolve({ status: 401, data: "Please authenticate."});
        } else if (error.response && error.response.status === 400) {
          return Promise.resolve({
            status: 400,
            data: [
              "Email address is already in use",
              "User validation failed: password",
              "Email is invalid",
            ],
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
      responseData: "Email is invalid",
    });
  });
  it("Registration with invalid password", async () => {
    await AuthAPI.registerUser({
      email: validRegistrationData.email,
      password: invalidRegistrationData.password,
      firstName: validRegistrationData.firstName,
      lastName: validRegistrationData.lastName,
      statusCode: 400,
      responseData: "User validation failed: password",
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
  it("Registration with invalid email format", async () => {
    await AuthAPI.registerUser({
      email: invalidRegistrationData.email,
      password: validRegistrationData.password,
      firstName: validRegistrationData.firstName,
      lastName: validRegistrationData.lastName,
      statusCode: 400,
      responseData: "Email is invalid",
    });
  });
  it("Registration with existing email", async () => {
    let test_email = validRegistrationData.email;
    let test_password = validRegistrationData.password;
    let { token } = await register(
      validRegistrationData.firstName,
      validRegistrationData.lastName,
      test_email,
      test_password
    );
    await AuthAPI.registerUser({
      email: test_email,
      password: test_password,
      firstName: validRegistrationData.firstName,
      lastName: validRegistrationData.lastName,
      statusCode: 400,
      responseData: "Email address is already in use",
    });
    await AuthAPI.deleteUser({token})
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
  it("Logout without token", async () => {
    await AuthAPI.logoutUser({
      statusCode: 401,
      responseData: "Please authenticate."
    });
  });
  it("Logout with invalid token", async () => {
    await AuthAPI.logoutUser({
      token: invalidLoginData.token,
      statusCode: 401,
      responseData: "Please authenticate."
    });
  });
  it("Delete user without token", async () => {
    await AuthAPI.deleteUser({
      statusCode: 401,
      responseData: "Please authenticate."
    });
  });
  it("Delete user with invalid token", async () => {
    await AuthAPI.deleteUser({
      token: invalidLoginData.token,
      statusCode: 401,
      responseData: "Please authenticate."
    });
  });
});
