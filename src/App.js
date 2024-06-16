import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Airdrop from "./pages/Airdrop/Airdrop";

import Referral from "./pages/Referral/Referral";
import MainLayout from "./Layout/MainLayout";
import classes from "./App.module.css";
import TapScreen from "./pages/TapScreen/TapScreen";
import { useTheme } from "./ThemeContext/ThemeContext";
import StartingScreen from "./pages/StartingScreen/StartingScreen";
import GetStarted from "./pages/GetStarted/GetStarted";
import Milestones from "./pages/Milestones/Milestones";
import Statistics from "./pages/Statistics/Statistics";

const App = () => {
  const { isDarkTheme } = useTheme();

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/get-started");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={isDarkTheme ? "dark" : "light"}>
      <h1 className={classes.heading}>Please open in mobile</h1>

      <div className={classes.mainWrapper}>
        <Routes>
          {" "}
          <Route path="/" element={<StartingScreen />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/tap-coin" element={<TapScreen />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/statistics" element={<Statistics />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
