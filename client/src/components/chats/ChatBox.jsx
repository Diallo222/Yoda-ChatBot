import React from "react";
import { motion } from "framer-motion";

const ChatBox = ({ assistantMessage }) => {
  return (
    <motion.div className="bg-stone-800 p-2 rounded-md mb-2 w-full">
      <strong>Yoda:</strong> {assistantMessage}
    </motion.div>
  );
};

export default ChatBox;
