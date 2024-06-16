import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";

import classes from "./MainLayout.module.css";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <div className={classes.wrapper}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
