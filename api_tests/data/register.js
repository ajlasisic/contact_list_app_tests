import { generateRandomEmail, generateRandomPassword } from "../../utils.js";

export const validRegistrationData = {
  email: generateRandomEmail(),
  password: generateRandomPassword(),
  firstName: "Ajla",
  lastName: "Test",
};
export const invalidRegistrationData = {
  email: "test_email",
  password: 123,
};