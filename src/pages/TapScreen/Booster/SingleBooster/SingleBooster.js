import React from "react";
import classes from "./SingleBooster.module.css";
import Counter from "../../../../components/common/Counter/Counter";
import { Text } from "../../../../components/common";
import { coin, coinLogo, lightPlaceholder } from "../../../../images";
import { useTheme } from "../../../../ThemeContext/ThemeContext";

const SingleBooster = ({
  onClick,
  img,
  title,
  profitPerHour,
  level,
  balance,
}) => {
  const { isDarkTheme } = useTheme();
  return (
    <div className={classes.item} onClick={onClick}>
      <div className={classes.imgAndTitle}>
        <img
          src={isDarkTheme ? img : lightPlaceholder}
          alt="#"
          className={classes.img}
        />

        <Text base0 semiBold>
          {title}
        </Text>
      </div>
      <div className={classes.profitWrapper}>
        <Text base400 sm>
          Profit per hour
        </Text>{" "}
        <div className={classes.profitContainer}>
          <img src={coin} alt="#" className={classes.coin} />
          <Text base100 sm font600>
            <Counter start={0} end={profitPerHour} durationTime={20} />+
          </Text>
        </div>
      </div>

      <div className={classes.levelAndBalance}>
        <Text base400 semiBold className={classes.level}>
          lvl {level}
        </Text>
        <div className={classes.balanceWrapper}>
          <img src={coinLogo} alt="#" className={classes.coin} />
          <Text base400 sm font600>
            {balance}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SingleBooster;
