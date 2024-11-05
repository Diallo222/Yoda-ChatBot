import React from "react";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
const ChatBox = ({ assistantMessage }) => {
  return (
    <>
      {assistantMessage && (
        <motion.div className="bg-stone-800 p-2 text-white rounded-md mb-2 w-full">
          <Markdown remarkPlugins={[remarkGfm]}>{assistantMessage}</Markdown>
        </motion.div>
      )}
    </>
  );
};

export default ChatBox;
