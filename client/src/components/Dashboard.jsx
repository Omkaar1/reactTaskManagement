import React from "react";
import Navbar from "./Navbar";
import Forms from "../pages/Forms";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64 "} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Forms/>
    </div>
  );
};

export default Dashboard;
