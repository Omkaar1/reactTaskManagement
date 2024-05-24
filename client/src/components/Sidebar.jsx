import React from "react";
import { FaHome } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaPoll } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
const Sidebar = ({ sidebarToggle }) => {
  return (
    // <div className="w-6/12 border-2 border-indigo-600">sidebar</div>
    <div
      className={`${
        sidebarToggle == false ? " block " : " hidden "
      } w-64 bg-gray-800 fixed h-full px-4 py-2`}
    >
      <div>
        <h1 className="text-xl text-white font-bold py-3">Demo Dashboard</h1>
        <hr />
      </div>
      <ul className="text-white font-bold mt-2">
        <li className="flex gap-2 rounded-md items-center p-3 hover:shadow hover:bg-blue-500">
          <FaHome />
          <a href="">Home</a>
        </li>
        <li className="flex gap-2 rounded-md items-center p-3 hover:shadow hover:bg-blue-500">
          <FaList />
          <a href="">List</a>
        </li>
        <li className="flex gap-2 rounded-md items-center p-3 hover:shadow hover:bg-blue-500">
          <FaPen />
          <a href="">Form</a>
        </li>
        <li className="flex gap-2 rounded-md items-center p-3 hover:shadow hover:bg-blue-500">
          <FaPoll />
          <a href="">Report</a>
        </li>

        <li className="flex gap-2 rounded-md items-center p-3 hover:shadow hover:bg-blue-500">
          <FiLogOut />
          <a href="">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
