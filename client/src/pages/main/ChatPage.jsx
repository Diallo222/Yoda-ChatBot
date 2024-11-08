import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { chatsData } from "../../constant";
import { Navbar } from "../../components/nav";
import { ChatBox, PromptBox, PromptInput } from "../../components/chats";
import { getSingleChatById } from "../../store/chats/chatsSlice";

const ChatPage = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const { singleChat } = useSelector((state) => state.chats, shallowEqual);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  useEffect(() => {
    dispatch(getSingleChatById({ userId: user._id, chatId: id }));
  }, []);

  const chatDetails = findChatById(id);

  if (!chatDetails) {
    return <div>Chat not found</div>;
  }

  return (
    <div
      className={`flex flex-col mx-auto h-full w-full justify-center items-center gap-6`}
    >
      <Navbar />
      <h2 className="text-2xl text-zinc-950 font-silkScreen mb-4">
        Chat Details
      </h2>
      <div className="flex flex-col gap-2 w-2/3 md:w-1/2 ">
        {chatDetails.chatList.map((chat, index) => (
          <div key={index} className="flex flex-col w-full ">
            <PromptBox prompt={chat.userMessage} />
            <ChatBox assistantMessage={chat.assistantMessage} />
          </div>
        ))}
      </div>
      <PromptInput position={"sticky bottom-10"} />
    </div>
  );
};

const findChatById = (id) => {
  for (const period of chatsData) {
    const chat = period.chatList.find((chat) => chat.id === parseInt(id));
    if (chat) {
      return { chatsPeriod: period.chatsPeriod, chatList: [chat] };
    }
  }
  return null;
};

export default ChatPage;
