import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { emailChange, passwordChange, loginUser } from "../Actions/AuthActions";
import Input from "./Common/Input";
import Button from "./Common/Button";

const LoginForm = ({
  email,
  password,
  error,
  isLoading,
  isLoggedIn,
  emailChange,
  passwordChange,
  loginUser,
}) => {
  const renderError = (error) => {
    return error ? (
      <p style={styles.error}>Something went wrong, Try again!</p>
    ) : null;
  };

  const renderButton = () => {
    return isLoading ? (
      //<Spinner animation="border" />
      <p>Loading..</p>
    ) : (
      <Button
        label="Login"
        to="/LoginScreen"
        onPress={() => loginUser(email, password)}
      />
    );
  };
  return (
    <form style={styles.container}>
      {renderError(error)}
      <Input
        type="email"
        label="Email"
        placeholder="John Doe"
        value={email}
        dispatchAction={(event) => emailChange(event.target.value)}
      />
      <Input
        type="password"
        label="Password"
        placeholder="**********"
        value={password}
        dispatchAction={(event) => passwordChange(event.target.value)}
      />
      {renderButton()}
      {isLoggedIn && <Redirect to="/HomeScreen" />}
    </form>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  error: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
};

const mapstateToProps = (state) => {
  const { email, password, error, isLoading, isLoggedIn } = state.Auth;
  return {
    email,
    password,
    error,
    isLoading,
    isLoggedIn,
  };
};

export default connect(mapstateToProps, {
  emailChange,
  passwordChange,
  loginUser,
})(LoginForm);
