import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RetroButton } from "../retro";
import SideBarTools from "./SideBarTools";
import { logOut } from "../../store/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch();
  const navToDashboard = () => {
    navigate("/dashboard");
  };
  const navToLogin = () => {
    navigate("/login");
  };
  const Logout = () => {
    dispatch(logOut());
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
      {user ? (
        <div className="flex flex-row items-center gap-2">
          <p className="text-black font-silkScreen text-lg">{user.username}</p>
          <RetroButton label={"Logout"} onpress={Logout} />
        </div>
      ) : (
        <RetroButton label={"Login"} onpress={navToLogin} />
      )}
    </motion.nav>
  );
};

export default Navbar;
