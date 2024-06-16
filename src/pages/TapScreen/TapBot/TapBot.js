import React from "react";
import classes from "./TapBot.module.css";
import { balanceIcon, coin } from "../../../images";
import { Text } from "../../../components/common";
import ProgressBar from "../../../components/common/ProgressBar/ProgressBar";
import Counter from "./../../../components/common/Counter/Counter";

const TapBot = () => {
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
              <Text base0>
                {" "}
                <Counter start={0} end={1000} durationTime={20} />
              </Text>
            </div>
          </div>
          <div className={classes.step}>
            <Text textCenter sm base400>
              Next level
            </Text>
            <Text base0 textCenter>
              <Counter start={0} end={50000} durationTime={20} />
            </Text>
          </div>
          <div className={classes.step}>
            <Text textCenter sm base400>
              Profits Per hour
            </Text>
            <div className={classes.valueContainer}>
              <img src={coin} alt="#" className={classes.icon} />
              <Text base0>
                <Counter start={0} end={1000} durationTime={20} />
              </Text>
            </div>
          </div>
        </div>

        <div className={classes.levelContainer}>
          <Text base0 semiBold>
            Novince
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
        <button className={classes.layer1}>
          <div className={classes.layer2}>
            <div className={classes.layer3}>
              <img
                src={
                  "https://em-content.zobj.net/source/apple/391/rocket_1f680.png"
                }
                alt="#"
                className={classes.img}
              />
            </div>
          </div>
        </button>

        <div className={classes.balanceContainer}>
          <img src={balanceIcon} alt="#" className={classes.balanceIcon} />
          <Text base0 base>
            0/
            <Counter start={0} end={10000} durationTime={20} />
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TapBot;
