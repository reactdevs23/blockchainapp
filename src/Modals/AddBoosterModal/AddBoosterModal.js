import React from "react";
import classes from "./AddBoosterModal.module.css";
import { Button, Modal, Text } from "../../components/common";

import { coin, lightToken, token } from "../../images";
import { useTheme } from "../../ThemeContext/ThemeContext";

const AddBoosterModal = ({ isActive, onClose, setSuccessFullyAdded }) => {
  const { isDarkTheme } = useTheme();
  return (
    <Modal isActive={isActive} onClose={onClose} className={classes.wrapper}>
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

      <div className={classes.details}>
        <div className={classes.profitLevelCost}>
          <div className={classes.profitAndLevel}>
            <div className={classes.profitWrapper}>
              <Text base500 sm textCenter>
                Profit per hour
              </Text>{" "}
              <div className={classes.profitContainer}>
                <img src={coin} alt="#" className={classes.coin} />{" "}
                <Text base500 sm font600>
                  100+
                </Text>
              </div>{" "}
            </div>
            <div className={classes.levelRequired}>
              <Text base500 sm textCenter>
                Level required
              </Text>
              <Text base0 base font600 textCenter>
                Bronze
              </Text>
            </div>
          </div>
        </div>
        <div className={classes.costContainer}>
          <Text base500>Cost</Text>
          <div className={classes.costValue}>
            {" "}
            <img src={coin} alt="#" className={classes.coin} />{" "}
            <Text base0 sm font600 xl2>
              1000
            </Text>
          </div>
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <Button base950 onClick={onClose}>
          Cancel
        </Button>
        <Button
          wFull
          onClick={() => {
            onClose();
            setSuccessFullyAdded(true);
          }}
        >
          Add Booster
        </Button>
      </div>
    </Modal>
  );
};

export default AddBoosterModal;
