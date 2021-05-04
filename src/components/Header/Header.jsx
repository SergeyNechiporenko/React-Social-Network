import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="../public/logo-social.png" />
    </header>
  );
};

export default Header;