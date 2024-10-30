import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ChatItem = ({ id, userMessage }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/dashboard/chats/${id}`);
  };

  return (
    <motion.button
      onClick={handleClick}
      className="text-stone-300 bg-transparent hover:border-stone-600 hover:bg-stone-600 p-1 rounded-md truncate"
    >
      {userMessage}
    </motion.button>
  );
};

export default ChatItem;
