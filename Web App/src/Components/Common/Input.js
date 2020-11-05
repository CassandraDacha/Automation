import React from "react";
import { mainColor, mainhighlight } from "../../Colors";

export default function Input({
  type,
  value,
  label,
  placeholder,
  dispatchAction,
}) {
  return (
    <div style={styles.container}>
      <h3 style={styles.labelStyle}>{label}:</h3>
      <input
        style={styles.inputBox}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={dispatchAction}
      />
    </div>
  );
}

const styles = {
  container: {
    marginTop: 10,
  },
  inputBox: {
    padding: 5,
    borderRadius: 5,
    borderColor: mainColor,
    height: 25,
    width: 450,
  },
  labelStyle: {
 
    color: mainhighlight,
  },
};
