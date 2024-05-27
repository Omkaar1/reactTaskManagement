import React from "react";
import Navbar from "./Navbar";
import Forms from "../pages/Forms";
import List from "../pages/List";
import { useState } from "react";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (newSubmission) => {
    setSubmissions([...submissions, newSubmission]);
  };
  return (
    <div className={`${sidebarToggle ? "" : " ml-64 "} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Forms onFormSubmit={handleFormSubmit} />
      <List submissions={submissions} />
    </div>
  );
};

export default Dashboard;
