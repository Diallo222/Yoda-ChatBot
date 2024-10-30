import React, { useState, useRef } from "react";
import { MdSend, MdStop, MdLink } from "react-icons/md";

const QuestionInput = ({ position }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    if (inputValue.trim() === "") return;
    setIsSubmitting(true);
    console.log("Submitting question:", inputValue);
  };

  const handleStop = () => {
    setIsSubmitting(false);
    console.log("Stopped response");
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`flex flex-row ${position} items-center gap-3 w-3/4 md:w-1/2 border-stone-700 bg-stone-700 p-2 rounded-full`}
    >
      <button
        onClick={triggerFileInput}
        className="text-white bg-stone-500 p-2 rounded-full flex items-center justify-center"
        style={{ width: "40px", height: "40px" }}
      >
        <MdLink size={20} />
      </button>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />

      <input
        type="text"
        placeholder="Type in your question you must!"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow border-2 placeholder:text-slate-300 text-white bg-stone-700 border-none focus:border-none focus:ring-0 p-2 rounded-md"
      />

      <button
        onClick={isSubmitting ? handleStop : handleSubmit}
        className="text-white bg-stone-500 p-2 rounded-full flex items-center justify-center"
        style={{ width: "40px", height: "40px" }}
      >
        {isSubmitting ? <MdStop size={20} /> : <MdSend size={20} />}
      </button>
    </div>
  );
};

export default QuestionInput;
