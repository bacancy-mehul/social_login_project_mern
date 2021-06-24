import * as api from "../api";
import { LOGIN_SUCCESS, LOGOUT } from "./types";

export const googleSignIn = (token) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.googleLogin(token);
    const response = data.response;
    let payload = response.accessToken;
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (error) {
    console.log(error);
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
