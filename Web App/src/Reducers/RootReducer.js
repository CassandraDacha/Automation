import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import DevicesReducer from "./DevicesReducer"
import AutomateReducer from "./AutomateReducer"
// import SignupReducer from "./SignupReducer";

export default combineReducers({
  Auth: AuthReducer,
  Devices: DevicesReducer,
  Auto: AutomateReducer
  //Signup: SignupReducer,
});
