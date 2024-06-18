import React from "react";
import classes from "./BalanceContainer.module.css";
import { shinyCoinGif } from "../../../images";
import { Text } from "../../../components/common";
import Counter from "../../../components/common/Counter/Counter";

const BalanceContainer = ({ balance }) => {
  return (
    <div className={classes.balanceContainer}>
      <img src={shinyCoinGif} alt="#" className={classes.coin} />
      <Text xl4 semiBold base0 className={classes.balance}>
        <Counter start={0} end={balance} durationTime={20} />
      </Text>
    </div>
  );
};

export default BalanceContainer;
