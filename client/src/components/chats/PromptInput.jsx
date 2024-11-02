import React, { useState, useRef, useEffect } from "react";
import { MdSend, MdStop } from "react-icons/md";
import { Uploader } from "../upload";
import { IKImage } from "imagekitio-react";
import { geminiModel } from "../../config";
import ChatBox from "./ChatBox";
import PromptBox from "./PromptBox";
import { YodaAscii } from "../yoda";

const PromptInput = ({ position }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [conversations, setConversations] = useState([]);
  const [image, setImage] = useState({
    isLoading: false,
    error: false,
    dbData: {},
    aiData: {},
  });
  const chatContainerRef = useRef(null);
  const chat = geminiModel.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  const handleSubmit = async () => {
    if (inputValue.trim() === "") return;
    setIsSubmitting(true);

    const newConversation = { prompt: inputValue, answer: "" };
    setConversations([...conversations, newConversation]);
    setInputValue("");

    const result = await chat.sendMessageStream(
      Object.entries(image.aiData).length
        ? [image.aiData, inputValue]
        : inputValue
    );

    let accumulatedText = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      accumulatedText += chunkText;

      setConversations((prevConversations) =>
        prevConversations.map((conv, index) =>
          index === prevConversations.length - 1
            ? { ...conv, answer: accumulatedText }
            : conv
        )
      );
    }

    setIsSubmitting(false);
    setImage({ isLoading: false, error: false, dbData: {}, aiData: {} });
  };

  const handleStop = () => {
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [conversations]);

  return (
    <div className="flex flex-col items-center w-full gap-6">
      <div
        ref={chatContainerRef}
        className="flex flex-col gap-4 w-3/4 md:w-1/2  max-h-[80vh]  overflow-y-auto"
      >
        <YodaAscii />
        <h1 className={`text-black font-silkScreen text-3xl text-center`}>
          Ask questions you shall !
        </h1>
        {conversations.map((conversation, index) => (
          <div key={index} className="flex flex-col gap-2">
            <PromptBox prompt={conversation.prompt} />
            <ChatBox assistantMessage={conversation.answer} />
          </div>
        ))}
      </div>

      {image.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={image.dbData?.filePath}
          className="w-36 h-36 rounded-md object-cover"
        />
      )}

      <div
        className={`flex flex-row ${position} items-center gap-3 w-3/4 md:w-1/2 border-stone-700 bg-stone-700 p-2 rounded-full fixed bottom-4`}
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
    </div>
  );
};

export default PromptInput;
