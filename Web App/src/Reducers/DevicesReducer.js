import {
  DELETE_DEVICE,
  DEVICE_ID_CHANGE,
  DEVICE_NAME_CHANGE,
  DEVICE_TYPE_CHANGE,
  FETCH_DEVICES, POST_DEVICES, CHANGE_STATE
  } from "../Actions/ActionTypes";
import { highlightGrey, switchGreen } from "../Colors";
  
  const INITIAL_STATE = {
    pins: [23, 24, 25],
   data: [],
   deviceName: '',
   deviceId: '',
   deviceType: ''
  };
  
  export default function DevicesReducer(state = INITIAL_STATE, action) {
   // console.log(action.type)
    switch (action.type) {
      case DEVICE_NAME_CHANGE:
        return {...state, deviceName: action.payload}
      case DEVICE_ID_CHANGE:
        return {...state, deviceId: action.payload}
      case DEVICE_TYPE_CHANGE:
        return {...state, deviceType: action.payload}
      case CHANGE_STATE:
      // console.log(action.payload)
        return {...state, data: action.payload}
      case FETCH_DEVICES:
        console.log(action.payload)
        return { ...state, data: action.payload}
      case POST_DEVICES:
        //console.log(action.payload)
        return { ...state, data: [...state.data, action.payload]}
      case DELETE_DEVICE:
        return { ...state, data: action.payload}

      default:
        return state;
    }
  }


  