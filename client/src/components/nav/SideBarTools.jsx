import React from "react";
import { motion } from "framer-motion";
import { RiEditBoxFill, RiSideBarLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/sideBarSlice";

const SideBarTools = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleSidebar());
  };
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      className={`flex flex-row justify-between items-center ${
        isSidebarOpen
          ? "text-stone-200 sticky top-0 p-6 bg-stone-900"
          : "text-black"
      } text-3xl`}
    >
      <RiSideBarLine className="cursor-pointer" onClick={handleClick} />
      <RiEditBoxFill />
    </motion.div>
  );
};

export default SideBarTools;
