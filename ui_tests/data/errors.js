import { invalidSignUpData } from "./register.js";

export const errorMessages = {
  invalidEmailOrPassword: "Incorrect username or password",
  existingEmail: "Email address is already in use",
  weakPassword:
    "User validation failed: password: Path `password` (`" +
    invalidSignUpData.password +
    "`) is shorter than the minimum allowed length (7).",
  invalidEmailFormat: "User validation failed: email: Email is invalid",
};
