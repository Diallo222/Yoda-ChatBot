import React from "react";
import ChatItem from "./ChatItem";

const ChatList = ({ chatsPeriod, chatList }) => {
  return (
    <div className="flex flex-col px-6 py-4 gap-2">
      <p className="text-md font-silkScreen text-stone-300 mb-2">
        {chatsPeriod}
      </p>
      {chatList.map((chat) => (
        <ChatItem key={chat.id} id={chat.id} userMessage={chat.userMessage} />
      ))}
    </div>
  );
};

export default ChatList;
