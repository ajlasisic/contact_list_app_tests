import axios from "axios";
import { API_URL_USERS } from "../../globals.js";

export async function login(email, password) {
  let token = null;
  let id_register = null;
  let email_user = null
  let response = await axios.post(`${API_URL_USERS}/login`, {
    email: email,
    password: password,
  });
  let data = response.data;
  id_register = data.user._id
  email_user = data.user.email
  token = data.token;
  return {token, id_register, email_user};
}
export async function deleteUser(token) {
  let response = await axios.delete(`${API_URL_USERS}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  expect(response.status).toEqual(200)
}