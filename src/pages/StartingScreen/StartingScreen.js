import React from "react";
import classes from "./StartingScreen.module.css";
import { Heading } from "../../components/common";
import { logo } from "../../images";
import { useTheme } from "../../ThemeContext/ThemeContext";
import clsx from "clsx";
const StartingScreen = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div className={classes.wrapper}>
      <img src={logo} alt="#" className={classes.logo} />
      {/* <img src={pattern} alt="#" className={classes.pattern} /> */}
      <Heading
        xl2
        textCenter
        semiBold
        base0
        className={clsx(
          isDarkTheme && classes.darkThemeHeading,
          classes.heading
        )}
      >
        App name
      </Heading>
    </div>
  );
};

export default StartingScreen;
