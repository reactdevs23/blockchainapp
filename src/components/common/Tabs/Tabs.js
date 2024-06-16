import React from "react";
import classes from "./Tabs.module.css";
import clsx from "clsx";
import { useTheme } from "../../../ThemeContext/ThemeContext";

const Tabs = ({ tabs, selectedTab, setSelectedTab, type2, type3 }) => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={clsx(
        classes.tabs,
        type2 && classes.type2,
        type3 && classes.type3,
        !isDarkTheme && classes.lightTheme
      )}
      style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}
    >
      {tabs.map((tab, i) => (
        <button
          onClick={() => setSelectedTab(tab)}
          className={clsx(
            classes.tab,
            tab.toLowerCase() === selectedTab.toLowerCase() && classes.activeTab
          )}
          key={i}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
