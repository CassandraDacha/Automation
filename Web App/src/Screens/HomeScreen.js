import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchDevices} from "../Actions/DeviceActions";
import Header from "../Components/Common/Header";
import { GiGreenhouse } from "react-icons/gi";
import { BsPlusSquareFill } from "react-icons/bs";
import Device from "../Components/Device";
import { mainColor } from "../Colors";
import { Link } from "react-router-dom";



 const HomeScreen = ({data, deviceState, fetchDevices}) => {

  useEffect(() => {
    fetchDevices()
  }, [])
    //console.log(data)

    const renderDevices = () =>{
      let list = data.map((element) =>
      
      <Device key={element["identifier"]} device={element}/>
  )
      
      return list
    }

  return (
    <div>
      <Header headerTitle="My Ward" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={styles.totalDevicesContainer}>
          <GiGreenhouse style={styles.icon} />
          <div style={styles.miniDiv}>
            <p style={styles.text}>
              <u>All Devices</u>
              <br />
              <em>{Object.keys(data).length} Devices</em>
            </p>
          </div>
        </div>

        <div style={styles.devicesContainer}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <h2 style={{ color: mainColor }}>Devices</h2>
          <Link to="AddDeviceScreen">
          <BsPlusSquareFill style={styles.addDevice} />
          </Link>
          </div>
            {renderDevices()}
        </div>
        <p>{deviceState}</p>
      </div>
    </div>
  );
}

const styles = {
  totalDevicesContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    justifySelf: "center",
    padding: 5,
    backgroundColor: mainColor,
    width: "80%",
    borderRadius: 10,
    margin: 20,
  },
  miniDiv: {
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    borderLeftColor: "white",
    paddingLeft: 30,
  },
  icon: {
    fontSize: 70,
    color: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  devicesContainer: {
    width: "80%",
    margin: 20,
  },
  addDevice: {
    fontSize: 40,
    textAlign: "center",
    color: mainColor,
  },
};

const mapstateToProps = (state) => {
  const { data, } = state.Devices;
  return {
    data,
  };
};

export default connect(mapstateToProps, {fetchDevices})(HomeScreen);