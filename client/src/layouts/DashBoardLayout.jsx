import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { SideBar, SideBarTools } from "../components/nav";

const DashBoardLayout = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className="flex flex-row w-screen h-screen">
      <SideBar />
      <motion.div className={isSidebarOpen ? "w-5/6" : "w-full"}>
        <Outlet />
      </motion.div>
    </div>
  );
};

export default DashBoardLayout;
