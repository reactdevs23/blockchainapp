import React, { useState } from "react";

import { FiPlus } from "react-icons/fi";

import classes from "./CustomTokenModal.module.css";
import { Modal, Text } from "../../components/common";
import Input from "../../components/common/Input/Input";
import clsx from "clsx";

const CustomTokenModal = ({
  heading,
  items,
  selectedItem,
  setSelectedItem,
  onBack,
  isActive,
  onClose,
  setShowImportTokenModal,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = items.filter((item) =>
    item.tokenAddress.includes(searchValue)
  );

  return (
    <Modal
      heading={heading}
      isActive={isActive}
      onClose={onClose}
      backButton
      onBack={onBack}
    >
      <div className={classes.inputContainer}>
        <Input
          value={searchValue}
          setValue={setSearchValue}
          noIcon
          placeholder="0x000"
        />{" "}
        {searchValue ? (
          <Text textCenter base500>
            {filteredItems.length} result found
          </Text>
        ) : (
          <Text base500 textCenter>
            Please enter valid token address
          </Text>
        )}
      </div>

      <div className={clsx(classes.items)}>
        {filteredItems.map((item, i) => (
          <div
            onClick={() => {
              setSelectedItem(item);
              onClose();
            }}
            className={clsx(classes.item)}
            key={i}
          >
            <img src={item.logo} alt="#" className={classes.logo} />
            <div className={classes.nameContainer}>
              <Text base300 lg>
                {item.name}
              </Text>
              <Text base500 sm>
                {item.fullName}
              </Text>
            </div>
            <button
              className={classes.iconContainer}
              onClick={() => setShowImportTokenModal(true)}
            >
              <FiPlus className={classes.plusIcon} />
            </button>
          </div>
        ))}
      </div>

      <Text base primaryDefault textCenter className={classes.text}>
        Custom tokens are stored locally in your phone.
      </Text>
    </Modal>
  );
};

export default CustomTokenModal;
