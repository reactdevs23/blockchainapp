import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

import { Modal, Text } from "../../components/common";
import classes from "./DeleteBoosterSuccessfulModal.module.css";
const DeleteBoosterSuccessfulModal = ({ isActive, onClose }) => {
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      className={classes.modal}
      small
    >
      <div className={classes.wrapper}>
        <RiDeleteBinLine className={classes.icon} />
        <Text bold primaryContent className={classes.info}>
          GameFi Tokens{" "}
          <span className={classes.text}>
            have been successfully removed to your tap bot!
          </span>
        </Text>
      </div>
    </Modal>
  );
};

export default DeleteBoosterSuccessfulModal;
