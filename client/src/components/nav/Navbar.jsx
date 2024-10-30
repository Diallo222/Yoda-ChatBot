import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RetroButton } from "../retro";
import SideBarTools from "./SideBarTools";

const Navbar = () => {
  const navigate = useNavigate();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const navToDashboard = () => {
    navigate("/dashboard");
  };
  const navToLogin = () => {
    navigate("/login");
  };
  return (
    <motion.nav
      className={`fixed top-0 ${
        isSidebarOpen ? "w-5/6" : "w-full"
      } px-16 py-4 flex flex-row items-center justify-between`}
    >
      <div className="flex flex-row items-center gap-2">
        {!isSidebarOpen && <SideBarTools />}
        <h2
          onClick={navToDashboard}
          className="text-3xl text-black font-silkScreen cursor-pointer"
        >
          Yoda AI
        </h2>
      </div>

      <RetroButton label={"Login"} onpress={navToLogin} />
    </motion.nav>
  );
};

export default Navbar;
