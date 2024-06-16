import React from "react";
import { FiPlusCircle } from "react-icons/fi";

import { Modal, Text } from "../../components/common";
import classes from "./AddBoosterSuccessfulModal.module.css";
const AddBoosterSuccessfulModal = ({ isActive, onClose }) => {
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      className={classes.modal}
      small
    >
      <div className={classes.wrapper}>
        <FiPlusCircle className={classes.icon} />
        <Text bold primaryContent className={classes.info}>
          GameFi Tokens{" "}
          <span className={classes.text}>
            have been successfully added to your tap bot!
          </span>
        </Text>
      </div>
    </Modal>
  );
};

export default AddBoosterSuccessfulModal;
