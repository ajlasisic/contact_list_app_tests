import { generateRandomEmail, generateRandomPassword } from "../../utils.js";

export const registerUser = {
  email: generateRandomEmail(),
  password: generateRandomPassword(),
  firstName: "New User",
  lastName: "Test",
};

export const invalidSignUpData = {
  email: "ajla",
  password: 123,
};


