import React, { useState, useRef } from "react";
import { MdSend, MdStop, MdLink } from "react-icons/md";
import { Uploader } from "../upload";
import { IKImage } from "imagekitio-react";
import { geminiModel } from "../../config";
import ChatBox from "./ChatBox";

const PromptInput = ({ position }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState({
    isLoading: false,
    error: false,
    dbData: {
      filePath: "",
      url: "",
    },
  });

  const handleSubmit = () => {
    if (inputValue.trim() === "") return;
    setIsSubmitting(true);
    add(inputValue);
  };

  const handleStop = () => {
    setIsSubmitting(false);
  };

  const add = async (prompt) => {
    const result = await geminiModel.generateContent(prompt);
    setAnswer(result.response.text());
    setIsSubmitting(false);
    setInputValue("");
  };
  return (
    <>
      {image.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={image.dbData?.filePath}
          className="w-36 h-36 rounded-md object-cover"
        />
      )}
      <ChatBox assistantMessage={answer} />
      <div
        className={`flex flex-row ${position} items-center gap-3 w-3/4 md:w-1/2 border-stone-700 bg-stone-700 p-2 rounded-full`}
      >
        <Uploader setImg={setImage} />
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
    </>
  );
};

export default PromptInput;
