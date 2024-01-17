import { generateRandomEmail } from "../../utils.js";

export const newContactData = {
    firstName: "User",
    lastName: "Testing",
    dateOfBirth: '2000/07/07',
    email: generateRandomEmail(),
    phone: 123456,
    street1: "Street 1",
    street2: "Street 2",
    city: "Sarajevo",
    state: "Test",
    postalCode: "71000",
    country: "BiH"
  };