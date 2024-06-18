import React, { useState, useEffect } from "react";
import classes from "./TapBot.module.css";
import { balanceIcon, coin, shinyCoin, shinyCoinGif } from "../../../images";
import { Text } from "../../../components/common";
import ProgressBar from "../../../components/common/ProgressBar/ProgressBar";
import { Counter } from "../../../hooks";

const TapBot = ({ spinCoin, setSpinCoin, setBalance }) => {
  const restAmount = 10000;
  const [amount, setAmount] = useState(restAmount);
  const [flyTexts, setFlyTexts] = useState([]);

  useEffect(() => {
    if (spinCoin) {
      const timer = setTimeout(() => {
        setSpinCoin(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [spinCoin]);

  useEffect(() => {
    if (flyTexts.length > 0) {
      const timer = setTimeout(() => {
        setFlyTexts((prev) => prev.slice(1));
      }, 1000); // Duration of each fly animation

      return () => clearTimeout(timer);
    }
  }, [flyTexts]);

  const handleClick = () => {
    setSpinCoin(true);
    setBalance((prev) => prev + 1);
    setAmount((prev) => prev - 1);
    setFlyTexts((prev) => [...prev, "+1"]);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.infoContainer}>
        <div className={classes.steps}>
          <div className={classes.step}>
            <Text textCenter sm base400>
              Coins per tap
            </Text>
            <div className={classes.valueContainer}>
              <img src={coin} alt="#" className={classes.icon} />
              <Text base0>1000</Text>
            </div>
          </div>
          <div className={classes.step}>
            <Text textCenter sm base400>
              Next level
            </Text>
            <Text base0 textCenter>
              50000
            </Text>
          </div>
          <div className={classes.step}>
            <Text textCenter sm base400>
              Profits Per hour
            </Text>
            <div className={classes.valueContainer}>
              <img src={coin} alt="#" className={classes.icon} />
              <Text base0>1000</Text>
            </div>
          </div>
        </div>

        <div className={classes.levelContainer}>
          <Text base0 semiBold>
            Novice
          </Text>
          <ProgressBar progress={10} />
          <div className={classes.level}>
            <Text primaryContent>Level</Text>
            <Text primaryContent font600>
              1/10
            </Text>
          </div>
        </div>
      </div>
      <div className={classes.coinContainer}>
        <button className={classes.layer1} onClick={handleClick}>
          <div className={classes.layer2}>
            <div className={classes.layer3}>
              <img
                src={spinCoin ? shinyCoinGif : shinyCoin}
                alt="#"
                className={classes.img}
              />
            </div>
          </div>{" "}
          {flyTexts.map((text, index) => (
            <div key={index} className={classes.flyText}>
              <Text xl base0>
                {text}
              </Text>
              <Text base base0>
                {text}
              </Text>
            </div>
          ))}
        </button>
      </div>

      <div className={classes.balanceContainer}>
        <img src={balanceIcon} alt="#" className={classes.balanceIcon} />
        <Text base0 base>
          {<Counter start={restAmount} end={amount} durationTime={20} />} /{" "}
          {restAmount.toLocaleString()}
        </Text>
      </div>
    </div>
  );
};

export default TapBot;
