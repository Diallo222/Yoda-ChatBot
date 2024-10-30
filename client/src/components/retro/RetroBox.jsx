import React from "react";
import { motion } from "framer-motion";

const RetroBox = ({ children }) => {
  return (
    <motion.div className="overflow-hidden rounded-none focus:border-none  py-[1px] bg-stone-300 px-2 text-[16px] font-silkscreen  text-black transition-colors border-black border-2 translate-x-[-2px] translate-y-[-2px] shadow-[4px_4px_0px_#000]">
      {children}
    </motion.div>
  );
};

export default RetroBox;
