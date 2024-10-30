import React from "react";
import { motion } from "framer-motion";

const QuestionBox = ({ userMessage }) => {
  return (
    <motion.div className="bg-stone-700 p-2 rounded-md mb-2 w-full">
      <strong>You:</strong> {userMessage}
    </motion.div>
  );
};

export default QuestionBox;
