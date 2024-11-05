import React from "react";
import { motion } from "framer-motion";

const PromptBox = ({ prompt }) => {
  return (
    <motion.div className="bg-stone-700 p-2 text-white rounded-md mb-2 w-full">
      {prompt}
    </motion.div>
  );
};

export default PromptBox;
