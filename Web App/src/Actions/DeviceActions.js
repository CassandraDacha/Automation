import axios from 'axios'
import {
  DELETE_DEVICE,
 FETCH_DEVICES, POST_DEVICES,
 DEVICE_ID_CHANGE, DEVICE_NAME_CHANGE, CHANGE_STATE, DEVICE_TYPE_CHANGE
} from "./ActionTypes";

const BaseURL = "https://cors-anywhere.herokuapp.com/https://wardapi-app.herokuapp.com"

export const deviceNameChange = (name) => {
  return {
    type: DEVICE_NAME_CHANGE,
    payload: name,
  };
};

export const deviceIdChange = (id) => {
  return {
    type: DEVICE_ID_CHANGE,
    payload: id,
  };
}; 

export const deviceTypeChange = (deviceType) => {
  return {
    type: DEVICE_TYPE_CHANGE,
    payload: deviceType,
  };
}; 
export const changeState = (data, deviceId, state) => {
   // console.log(deviceId, state)
   return (dispatch) => {
     axios.patch(BaseURL+"/devices/"+deviceId, {"state": state})
      .then(() => onChangeStateSuccess(data, deviceId, state, dispatch) )
       .catch(err => console.log(err))
   }
 };
 function onChangeStateSuccess(data, deviceId, state, dispatch) {
   for (let i=0; i < data.length; i++) {
     if(data[i]["identifier"] === deviceId){
      data[i]["state"] = state
     // console.log(data[i]["state"])
      }
   
   }
  //console.log(data)
  dispatch({
    type: CHANGE_STATE, 
    payload: [...data]
  })
}

export const fetchDevices = () => {
  return (dispatch) => {
    axios.get(BaseURL+"/devices")
     .then(res => dispatch({type: FETCH_DEVICES, payload: res.data}))
      .catch(err => console.log(err))
  }
};

export const postDevice = (device) => {
 // console.log(device)
  return (dispatch) => {
    axios.post(BaseURL+"/devices", device)
      .then(() => dispatch({type: POST_DEVICES, payload: device} ))
      .catch(err => console.log(err))
  }
}

export const deleteDevice = (data, deviceId) => {
 // console.log(BaseURL+"/devices/"+deviceId)
  return (dispatch) => {
    axios.delete(BaseURL+"/devices/"+deviceId)
    .then(() => onDeleteSuccess(data, deviceId, dispatch))
      .catch(err => console.log(err))
  }
}

function onDeleteSuccess(data, deviceId, dispatch) {
  let list = data.filter((device) => device["identifier"] !== deviceId )
    dispatch({
      type: DELETE_DEVICE, 
      payload: list
    })
}





