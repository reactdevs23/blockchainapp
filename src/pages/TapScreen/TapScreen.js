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
  return (
    <div className={classes.mainWrapper}>
      {/* <Header heading={selectedTab} /> */}
      <div className={classes.wrapper}>
        <BalanceContainer balance={12345} />

        {selectedTab === "Tap Bot" && <TapBot />}
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
