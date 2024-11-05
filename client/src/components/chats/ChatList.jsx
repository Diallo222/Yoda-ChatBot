import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import ChatItem from "./ChatItem";
import { format } from "date-fns";
import { BarLoader } from "../loaders";

const ChatList = () => {
  const { data, loading, error } = useSelector(
    (state) => state.chats,
    shallowEqual
  );
  if (loading) {
    <BarLoader />;
  } else if (!data.length) {
    return <p className="text-center text-stone-400">No chats available.</p>;
  }

  return (
    <>
      {data.map((chatList) => (
        <div
          className="flex flex-col px-6 py-2 gap-2 border-b border-stone-700"
          key={chatList._id}
        >
          {/* <p className="text-sm text-stone-500">
            {format(new Date(chatList.createdAt), "PPPpp")}{" "}
          </p> */}
          <ChatItem
            id={chatList._id}
            userMessage={chatList.title || chatList?.chat?.title}
          />
        </div>
      ))}
    </>
  );
};

export default ChatList;
