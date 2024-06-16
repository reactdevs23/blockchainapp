import React, { useState } from "react";
import classes from "./Referral.module.css";

import Tabs from "../../components/common/Tabs/Tabs";
import ReferelProgram from "./ReferelProgram/ReferelProgram";
import ReferList from "./ReferList/ReferList";
const Referral = () => {
  const tabs = ["Referral Program", "My Refer List"];
  const [selectedTab, setSelectedTab] = useState("Referral Program");
  return (
    <div className={classes.wrapper}>
      {selectedTab === "Referral Program" && <ReferelProgram />}
      {selectedTab === "My Refer List" && <ReferList />}
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

export default Referral;
