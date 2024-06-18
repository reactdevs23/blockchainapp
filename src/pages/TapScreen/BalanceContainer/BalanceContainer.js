import React from "react";
import classes from "./BalanceContainer.module.css";
import { shinyCoin, shinyCoinGif } from "../../../images";
import { Text } from "../../../components/common";
import { Counter } from "../../../hooks";

const BalanceContainer = ({ balance, spinCoin }) => {
  return (
    <div className={classes.balanceContainer}>
      <img
        src={spinCoin ? shinyCoinGif : shinyCoin}
        alt="#"
        className={classes.coin}
      />
      <Text xl4 semiBold base0 className={classes.balance}>
        {/* {balance.toLocaleString()} */}
        <Counter start={balance} end={balance} durationTime={20} />
      </Text>
    </div>
  );
};

export default BalanceContainer;
