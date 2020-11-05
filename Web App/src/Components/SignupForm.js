import React from "react";
import Input from "./Common/Input";
import Button from "./Common/Button";
import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <form style={styles.container}>
      <Input type="text" label="Name" placeholder="John Doe" />
      <Input type="text" label="UserId" placeholder="ABCXYZ001" />
      <Input type="email" label="Email" placeholder="John Doe" />
      <Input type="password" label="Password" placeholder="**********" />

      <Button label="Submit" to="/HomeScreen" />
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
