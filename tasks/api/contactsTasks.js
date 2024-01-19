import axios from "axios";
import { API_URL_CONTACTS } from "../../globals.js";
import { verifyToEqual } from "../../utils.js";

export async function addContact({
  firstName,
  lastName,
  dateOfBirth,
  email,
  phone,
  street1,
  street2,
  city,
  state,
  postalCode,
  country,
  token,
  statusCode = 201,
  responseData,
}) {
  let id = null;
  let response = await axios.post(`${API_URL_CONTACTS}`, {
    firstName,
    lastName,
    dateOfBirth,
    email,
    phone,
    street1,
    street2,
    city,
    state,
    postalCode,
    country,
  }, {
    headers: {
        Authorization: `Bearer ${token}`
    }
  });
  verifyToEqual(response.status, statusCode);
  if (responseData) {
    expect(response.data.email).toContain(responseData);
  }
  id = response.data._id
  return {id}
}
export async function getContact({contactId, token, statusCode = 200}) {
  let response = await axios.get(`${API_URL_CONTACTS}/${contactId}`, 
    {
      headers: {
          Authorization: `Bearer ${token}`
      }
})
verifyToEqual(response.status, statusCode);
}