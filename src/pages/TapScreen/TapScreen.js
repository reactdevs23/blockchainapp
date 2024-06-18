import React, { useState } from "react";
import classes from "./TapScreen.module.css";

import TapBot from "./TapBot/TapBot";

import Tabs from "../../components/common/Tabs/Tabs";

import Boosters from "./Booster/Booster";
import BalanceContainer from "./BalanceContainer/BalanceContainer";
import MyBooster from "./MyBooster/MyBooster";
const TapScreen = () => {
  const tabs = ["Tap Bot", "Booster", "My Booster"];
  const [selectedTab, setSelectedTab] = useState("Tap Bot");
  const [spinCoin, setSpinCoin] = useState(false);
  const [balance, setBalance] = useState(12345);
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.wrapper}>
        <BalanceContainer balance={balance} spinCoin={spinCoin} />

        {selectedTab === "Tap Bot" && (
          <TapBot
            spinCoin={spinCoin}
            setSpinCoin={setSpinCoin}
            setBalance={setBalance}
          />
        )}
        {selectedTab === "Booster" && <Boosters />}
        {selectedTab === "My Booster" && <MyBooster />}
      </div>
      <div className={classes.box}>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          type2
        />
      </div>
    </div>
  );
};

export default TapScreen;
