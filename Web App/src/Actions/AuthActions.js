import firebase from "firebase";
import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCEES,
  LOGIN_USER_FAILED,
  LOGIN_USER,
} from "./ActionTypes";

export const emailChange = (email) => {
  return {
    type: EMAIL_CHANGE,
    payload: email,
  };
};

export const passwordChange = (password) => {
  return {
    type: PASSWORD_CHANGE,
    payload: password,
  };
};

export const loginUser = (email, password, navigation) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginSucess(dispatch, user))
      .catch((err) => loginFailed(dispatch, err));
  };
};
const loginSucess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCEES, payload: user });
};

const loginFailed = (dispatch, err) => {
  dispatch({
    type: LOGIN_USER_FAILED,
    payload: "Something went , Try again!",
  });
};

// export const dataFetch = () => {
//   return (dispatch) => {
//     firebase
//       .database()
//       .ref("/rfo")
//       .once("value", (snapshot) => {
//         //   console.log(snapshot.val());
//         dispatch({ type: "good", payload: snapshot.val() });
//       })
//       .then(() => console.log("good"))
//       .catch((err) => console.log(err));
//   };
// };
