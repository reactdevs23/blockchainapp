import React from "react";
import classes from "./DeleteBoosterModal.module.css";
import { Button, Modal, Text } from "../../components/common";

import { coin, lightToken, token } from "../../images";
import { useTheme } from "../../ThemeContext/ThemeContext";

const DeleteBoosterModal = ({ isActive, onClose, setSuccessFullyDeleted }) => {
  const { isDarkTheme } = useTheme();
  return (
    <Modal isActive={isActive} onClose={onClose} className={classes.modal}>
      <div className={classes.header}>
        <img
          src={isDarkTheme ? token : lightToken}
          alt="#"
          className={classes.img}
        />
        <div className={classes.infoContainer}>
          <Text xl base0 font600>
            GameFi Tokens
          </Text>
          <Text base base500>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Text>
        </div>
      </div>

      <div className={classes.profitAndEarned}>
        <div className={classes.profitWrapper}>
          <Text base500 sm textCenter>
            Profit per hour
          </Text>{" "}
          <div className={classes.profitContainer}>
            <img src={coin} alt="#" className={classes.coin} />{" "}
            <Text base100 sm font600>
              100+
            </Text>
          </div>{" "}
        </div>
        <div className={classes.totalEarned}>
          <Text base500 sm textCenter>
            Total Earned
          </Text>
          <div className={classes.earnedContainer}>
            <img src={coin} alt="#" className={classes.coin} />{" "}
            <Text base100 sm font600>
              50000
            </Text>
          </div>{" "}
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <Button base950 onClick={onClose}>
          Cancel
        </Button>
        <Button
          className={classes.button}
          wFull
          onClick={() => {
            onClose();
            setSuccessFullyDeleted(true);
          }}
        >
          Remove Booster
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteBoosterModal;
