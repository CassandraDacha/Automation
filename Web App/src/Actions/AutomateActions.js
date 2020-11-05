import { FROM_CHANGE, TO_CHANGE, AUTOMATE_PRESS } from "./ActionTypes";

export const fromChange = (from) => {
    //console.log(from)
  return {
    type: FROM_CHANGE,
    payload: from,
  };
};

export const toChange = (to) => {
  return {
    type: TO_CHANGE,
    payload: to,
  };
}; 

export const automatePress = (obj) => {
    console.log(1, obj)
    return {
      type: AUTOMATE_PRESS,
      payload: obj,
    };
  }; 






