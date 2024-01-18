import { invalidSignUpData } from "./register.js";

export const errorMessages = {
  invalidEmailOrPassword: "Incorrect username or password",
  existingEmail: "Email address is already in use",
  weakPassword:
    "User validation failed: password: Path `password` (`" +
    invalidSignUpData.password +
    "`) is shorter than the minimum allowed length (7).",
  invalidEmailFormat: "User validation failed: email: Email is invalid",
  noDataEntered:
    "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required.",
  noFirstAndLastNameAuth:
    "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.",
  noFirstAndLastNameContact:
    "Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.",
  noLoginAddContact: "undefined",
  noDataEditContact:
    "Validation failed: lastName: Path `lastName` is required., firstName: Path `firstName` is required.",
};
