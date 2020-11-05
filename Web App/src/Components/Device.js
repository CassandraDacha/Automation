import React from "react";
import {connect} from 'react-redux'
import { FaTrash } from "react-icons/fa";
import { highlightGrey, mainColor, mainhighlight, switchGreen, white } from "../Colors";
import {deleteDevice} from "../Actions/DeviceActions"
import Switch from "./Switch";
import { Link } from "react-router-dom";
import Button from "./Common/Button";
import DeviceScreen from "../Screens/DeviceScreen";
import Input from "./Common/Input";

function Device({device, deleteDevice, data}) {
  let on, off;
 // console.log(device[""])
  switch (device["state"]) {
    case "ON":
      on = switchGreen
      off = highlightGrey
      break;
    case "OFF":
      on = highlightGrey
      off = switchGreen
      break;
  }
  function getEnergy(){
    return device["time"] * device["power"]
  }
  function renderAutomate(){
    return (<DeviceScreen/>)
  }
  return (
    <div style={styles.container}>
      <div style={styles.deviceContainer}>
        <p style={styles.label}>{device["name"]}</p>
      <Switch id={device["identifier"]} state={device["state"]} on={on} off={off}/>

      </div>
      

      <p style={styles.label}>TotalTime: {device["time"].toFixed(2)}s</p>
      <p style={styles.label}>EnergyUsed: {getEnergy().toFixed(2)}J</p>

      <div style={styles.deviceContainer}>

       

      <Link to="DeviceScreen">
        <p style={styles.automateDiv}>Automate</p>
      </Link>
 
      <FaTrash style={styles.icon} onClick={() => deleteDevice(data ,device["identifier"])} />
      </div>

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: mainColor,
    borderRadius: 5,
  //height: 100,
  //  marginRight: 20,
     marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,

  },
  deviceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
   },

  label: {
    fontFamily: "monospace",
    fontSize: 20,
    textDecoration: "None",
    color: white,
    //width: "50%",
   // backgroundColor: "black"
 
  },
  icon:{
    fontFamily: "monospace",
    fontSize: 20,
    color: white,
    marginLeft: 10,
    justifySelf: "end"

  },
  automateDiv: {
    fontFamily: "monospace",
    fontSize: 20,
    textDecoration: "None",
    color: white,
  //  borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: mainhighlight,
    padding: 10
  
  }
}
const mapstateToProps = (state) => {
  const {data} = state.Devices;
  return {
    data,
  };
};

export default connect(mapstateToProps, { deleteDevice})(Device)