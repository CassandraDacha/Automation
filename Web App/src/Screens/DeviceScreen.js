import React from 'react'
import Header from '../Components/Common/Header'
import { connect } from "react-redux";
import {fromChange, toChange, automatePress} from '../Actions/AutomateActions'
import Input from '../Components/Common/Input';
import Button from '../Components/Common/Button';

function DeviceScreen({from, to, fromChange, toChange, automatePress}) {
   // console.log(device)
    return(
        <div style={styles.container}>
            <Header headerTitle="Device" backIcon to="/HomeScreen"/>
            <Input 
              type="text" 
              label="From" 
              placeholder="eg. 12:30" 
              value={from} 
              dispatchAction={(event) => fromChange(event.target.value)}
              />
            <Input 
            type="text" 
            label="To" 
            placeholder="eg. 18:00" 
            value={to} 
            dispatchAction={(event) => toChange(event.target.value)}
            />
            <Button label="Automate" to="HomeScreen" onPress={()=>automatePress({"from": from, "to": to})}/>
            <Button label="Cancel" to="HomeScreen" />
        </div>
    )
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
const mapstateToProps = (state) => {
    const {from, to} = state.Auto;
    return {
      from,
      to
    };
  };
  
  export default connect(mapstateToProps, {fromChange, toChange, automatePress})(DeviceScreen)