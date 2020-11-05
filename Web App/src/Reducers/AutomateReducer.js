import { AUTOMATE_PRESS, FROM_CHANGE, TO_CHANGE } from "../Actions/ActionTypes";
    
    const INITIAL_STATE = {
      from: "",
      to: ""
    };
    
    export default function AutomateReducer(state = INITIAL_STATE, action) {
     // console.log(action.type)
      switch (action.type) {
        case FROM_CHANGE:
            return {...state, from: action.payload}
        case TO_CHANGE:
            return {...state, to: action.payload}
        case AUTOMATE_PRESS:
            return {...state}
  
        default:
          return state;
      }
    }
  
  
    