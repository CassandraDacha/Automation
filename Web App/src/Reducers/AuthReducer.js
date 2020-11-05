import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER,
  LOGIN_USER_SUCCEES,
  LOGIN_USER_FAILED,
} from "../Actions/ActionTypes";

const INITIAL_STATE = {
  user: {},
  email: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
};

export default function AuthRedeucer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, isLoading: true, error: "" };
    case LOGIN_USER_SUCCEES:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: "",
        password: "",
        username: "",
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isLoggedIn: false,
        password: "",
      };
    default:
      return state;
  }
}
