import React from "react";
import Header from "../Components/Common/Header";
import SignupForm from "../Components/SignupForm";

export default function SignupScreen() {
  return (
    <div>
      <Header headerTitle="Sign up" backIcon to="/WelcomeScreen" />
      <SignupForm />
    </div>
  );
}
