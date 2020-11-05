import React from "react";
import Button from "../Components/Common/Button";
import Header from "../Components/Common/Header";

//http://swapi.co/
function WelcomeScreen() {
    
  return (
    <div>
      <Header headerTitle="Patient Ward Automation System" />

      <div style={styles.buttonContainer}>
        <Button label="Sign up" to="SignupScreen" />
        <Button label="Login" to="/LoginScreen" />
      </div>
    </div>
  );
}

const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
};

export default WelcomeScreen;