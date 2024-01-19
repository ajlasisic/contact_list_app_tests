import axios from "axios";
import { API_URL_USERS } from "../../globals.js";
import * as AuthAPI from "../../tasks/api/authTasks.js"

export async function login(email, password) {
  let token = null;
  let id_login = null;
  let email_user = null;
  let response = await axios.post(`${API_URL_USERS}/login`, {
    email: email,
    password: password,
  });
  let data = response.data;
  id_login = data.user._id
  email_user = data.user.email
  token = data.token;
  return {token, id_login, email_user};
}
export async function register(firstName, lastName, email, password) {
  let token = null;
  let id_register = null;
  let email_user = null;
  let response = await axios.post(`${API_URL_USERS}`, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  let data = response.data;
  id_register = data.user._id
  email_user = data.user.email
  token = data.token;
  return {token, id_register, email_user};
}

export async function cleanUp(email, password) {
  let {token} = await login(email, password)
  await AuthAPI.deleteUser(token)
}