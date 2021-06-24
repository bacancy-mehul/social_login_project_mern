import { LOGIN_SUCCESS, LOGOUT } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  loading: false,
};

const authReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return { ...state, token: localStorage.getItem("token"), loading: false };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
