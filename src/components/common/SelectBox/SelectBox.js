import React from "react";
import { Text } from "../../common";
import classes from "./SelectBox.module.css";
import { FaAngleDown } from "react-icons/fa";
import clsx from "clsx";
import { handleKeyDown } from "../../../hooks";

const SelectBox = ({
  label,
  onClick,
  selectedItem,
  type2,
  amount,
  setAmount,
  balance,
  usdBalance,
  growth,
}) => {
  return (
    <>
      {type2 ? (
        <div className={clsx(classes.wrapper, classes.type2)}>
          <Text sm>{label}</Text>
          <div className={classes.selectContainer}>
            <input
              type="number"
              onKeyDown={handleKeyDown}
              inputMode="numeric"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              className={classes.input}
            />
            {selectedItem.name ? (
              <div className={classes.token} onClick={onClick}>
                <div className={clsx(classes.selectedItem)}>
                  <img
                    src={selectedItem.logo}
                    alt="#"
                    className={classes.logo}
                  />
                  <Text base300 base>
                    {selectedItem.name}
                  </Text>
                </div>
                <FaAngleDown className={classes.arrow} />
              </div>
            ) : (
              <div className={classes.selectBox} onClick={onClick}>
                <Text
                  semiBold
                  base
                  primaryDefault
                  className={classes.selectTokenText}
                >
                  Select Token
                </Text>
                <FaAngleDown className={classes.arrow} />
              </div>
            )}
          </div>
          <div className={classes.balanceContainer}>
            {balance > 0 && (
              <Text className={classes.usdBalance}>
                ≈ {usdBalance}{" "}
                {growth && (
                  <span
                    className={clsx(
                      classes.growth,
                      growth > 0 && classes.positive,
                      growth < 0 && classes.negative
                    )}
                  >
                    (
                    {growth > 0
                      ? `+${growth}%`
                      : growth < 0
                      ? `-${growth}%`
                      : growth}
                    )
                  </span>
                )}
              </Text>
            )}
            <Text className={classes.balanceLabel}>
              Balance: <span className={classes.balance}>{balance}</span>{" "}
            </Text>
          </div>
        </div>
      ) : (
        <div className={classes.wrapper} onClick={onClick}>
          <Text sm>{label}</Text>
          <div className={classes.selectContainer}>
            {selectedItem.name ? (
              <div className={clsx(classes.selectedItem)}>
                <img src={selectedItem.logo} alt="#" className={classes.logo} />
                <Text base300 base>
                  {selectedItem.name}
                </Text>
              </div>
            ) : (
              <Text base base600>
                Select
              </Text>
            )}
            <FaAngleDown className={classes.arrow} />
          </div>
        </div>
      )}
    </>
  );
};

export default SelectBox;
