import React from "react";
import classes from "./TopBar.module.css";
import { TbSettings } from "react-icons/tb";
import { FaSun, FaMoon } from "react-icons/fa";
import { logo, walletImg } from "../../images";
import { Text } from "../common";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext/ThemeContext";
import clsx from "clsx";

const TopBar = () => {
  const address = "0x420b595d8b648971b3bfcf46e66544c384860536";

  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
      <div
        className={clsx(classes.wrapper, !isDarkTheme && classes.lightTheme)}
      >
        <Link to="/">
          <img src={walletImg} className={classes.wallet} alt="#" />
        </Link>
        <div className={classes.addressContainer}>
          <img src={logo} alt="#" className={classes.addressImg} />
          <Text sm base0 className={classes.address}>
            {address.slice(0, 4)}...
          </Text>
        </div>
        <TbSettings className={classes.setting} />
        {isDarkTheme ? (
          <FaSun className={classes.sun} onClick={toggleTheme} />
        ) : (
          <FaMoon className={classes.moon} color="#000" onClick={toggleTheme} />
        )}
      </div>
    </>
  );
};

export default TopBar;
