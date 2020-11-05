import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineMore } from "react-icons/ai";
import { mainColor, mainhighlight, white } from "../../Colors";

function Header({ headerTitle, backIcon, rightIcon, to }) {
  return (
    <header style={styles.container}>
      <Link to={to || "/"} style={{ color: "black" }}>
        {backIcon && <AiOutlineArrowLeft style={styles.text} />}
      </Link>
      <p style={styles.text}>{headerTitle}</p>

      <Link to={to || "/"} style={{ color: "black" }}>
        {rightIcon && <AiOutlineMore style={styles.text} />}
      </Link>
    </header>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: mainColor,
    padding: 5,
    minWidth: 500,
    height: 50,
  },

  text: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: white
  },
};

export default Header;
