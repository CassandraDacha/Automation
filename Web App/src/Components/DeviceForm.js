import React from "react";
import {connect} from "react-redux";
import Input from "./Common/Input";
import Button from "./Common/Button";
import {deviceNameChange, deviceIdChange, deviceTypeChange, postDevice} from "../Actions/DeviceActions"
import { GiSafetyPin } from "react-icons/gi";

function DeviceForm({pins,data, deviceName, deviceId, deviceType, deviceIdChange, deviceNameChange, deviceTypeChange, postDevice}) {
  function getPin() {
    const pin = pins[0]
    pins.shift()
    return pin
  }
  return (
 

  
    <form style={styles.container}>
      <Input 
        type="text" 
        label="Device Name" 
        placeholder="eg. Switch" 
        value={deviceName} 
        dispatchAction={(event) => deviceNameChange(event.target.value)}
        />
      <Input 
        type="text" 
        label="Device Identifier" 
        placeholder="1" 
        value={deviceId}  
        dispatchAction={(event) => deviceIdChange(event.target.value)}
        />

       <Input 
        type="text" 
        label="Power" 
        placeholder="e.g 3.3" 
        value={deviceType} 
        dispatchAction={(event) => deviceTypeChange(event.target.value)}
        />


      <Button label="Add device" to="/HomeScreen" onPress={() => postDevice({"name": deviceName, "identifier": deviceId, "power": deviceType, "state": "OFF", "time": 0.0, "pin": getPin()})}/>
    </form>
 
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const mapstateToProps = (state) => {
    const { pins, data, deviceName, deviceId, deviceType } = state.Devices;
    return {
      pins,
      data,
      deviceName,
      deviceId,
      deviceType
    };
  };
  
  export default connect(mapstateToProps, {
    deviceNameChange,
    deviceIdChange,
    deviceTypeChange,
    postDevice
  })(DeviceForm);