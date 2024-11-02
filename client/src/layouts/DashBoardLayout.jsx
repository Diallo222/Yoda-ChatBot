import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { shallowEqual, useSelector } from "react-redux";
import { SideBar, SideBarTools } from "../components/nav";

const DashBoardLayout = () => {
  const { isOpen } = useSelector((state) => state.sidebar, shallowEqual);
  return (
    <div className="flex flex-row w-screen h-screen">
      <SideBar />
      <motion.div className={isOpen ? "w-5/6" : "w-full"}>
        <Outlet />
      </motion.div>
    </div>
  );
};

export default DashBoardLayout;
