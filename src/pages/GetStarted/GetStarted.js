import React from "react";
import classes from "./GetStarted.module.css";
import { Button, Heading, Text } from "../../components/common";
import { lightScreen, screen } from "../../images";

import { useTheme } from "../../ThemeContext/ThemeContext";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgContainer}>
        <img
          src={isDarkTheme ? screen : lightScreen}
          alt="#"
          className={classes.screen}
        />
      </div>

      <div className={classes.infoContainer}>
        <Heading font600 xl2 base0 textCenter>
          Let’s Start <span className={classes.highlight}>Tapping</span> For{" "}
          <span className={classes.highlight}>Earning</span>
        </Heading>
        <Text base base400 textCenter>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Text>

        <Button
          onClick={() => {
            navigate("/tap-coin");
          }}
          className={classes.button}
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
