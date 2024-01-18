import axios from "axios";
import { API_URL_USERS } from "../../globals.js";
import { verifyToEqual } from "../../utils.js";

export async function registerUser({email, password, firstName, lastName, statusCode=201, responseData}) {
  let response = await axios.post(`${API_URL_USERS}`, {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  verifyToEqual(response.status, statusCode); 
  if(responseData) {
    expect(response.data).toContain(responseData)
  }
}

export async function loginUser({email, password, statusCode = 200, responseData}) {
  let response = await axios.post(`${API_URL_USERS}/login`, {
    email: email,
    password: password,
  });
  verifyToEqual(response.status, statusCode);
  if(responseData) {
    expect(response.data).toContain(responseData)
  }
}
export async function logoutUser({token, statusCode = 200, responseData}) {
  let response = await axios.post(`${API_URL_USERS}/logout`,  {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  verifyToEqual(response.status, statusCode);
  if(responseData) {
    expect(response.data).toContain(responseData)
  }
}
export async function deleteUser({token, statusCode = 200, responseData}) {
  let response = await axios.delete(`${API_URL_USERS}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  verifyToEqual(response.status, statusCode);
  if(responseData) {
    expect(response.data).toContain(responseData)
  }
}


