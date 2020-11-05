import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SignupScreen from "./Screens/SignupScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import { highlightGrey, mainGrey, white } from "./Colors";
import AddDeviceScreen from "./Screens/AddDeviceScreen";
import DeviceScreen from "./Screens/DeviceScreen";
import testAPI from "./Screens/testAPI";

export default function Routes() {
  return (
    <Router>
      <div style={styles.outerContainer}>
        <div style={styles.innerContainer}>
          <Switch>
            <Route path="/WelcomeScreen" component={WelcomeScreen} />

            <Route path="/SignupScreen" component={SignupScreen} />
            <Route path="/LoginScreen" component={LoginScreen} />
            <Route path="/HomeScreen" component={HomeScreen} />
            <Route path="/AddDeviceScreen" component={AddDeviceScreen} />
            <Route path="/DeviceScreen" component={DeviceScreen} />
            <Route path="/testAPI" component={testAPI} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    minHeight: 550,
  },
  innerContainer: {
    backgroundColor: white,
    // minWidth: 450,
    // margin: 10,
  },
};
