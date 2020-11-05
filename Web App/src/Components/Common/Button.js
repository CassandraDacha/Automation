import React from "react";
import { Link } from "react-router-dom";
import { mainColor, white } from "../../Colors";

export default function Button({ label, to, onPress }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }} onClick={onPress}>
      <div style={styles.buttonStyle}><p style={styles.labelStyle}>{label}</p></div>
    </Link>
  );
}

const styles = {
  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mainColor,
    fontSize: 20,
    width: 470,
    height: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  labelStyle: {
    fontSize: 20,
    fontFamily: "monospace",
    color: white
  },
};
