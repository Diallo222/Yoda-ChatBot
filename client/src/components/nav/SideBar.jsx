import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SideBarTools from "./SideBarTools";
import { ChatList } from "../chats";
import { chatsData, images } from "../../constant";
import { getAllUserChats } from "../../store/chats/chatsSlice";

const SideBar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const { data, loading, error } = useSelector(
    (state) => state.chats,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (user._id) {
      dispatch(getAllUserChats({ userId: user._id }));
    }
  }, [user]);

  console.log(data);

  return (
    <>
      {isSidebarOpen && (
        <motion.div
          className="w-[16%] bg-stone-900 h-full overflow-y-auto"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          exit={{ x: -100 }}
        >
          <SideBarTools />
          <div className="flex flex-col gap-2 my-6 px-6">
            <motion.button className="flex flex-row gap-2 justify-start items-center text-stone-300 bg-transparent hover:border-stone-600 hover:bg-stone-600 p-1 rounded-md ">
              <img
                src={images.sittingYoda}
                className="w-8 h-8 object-cover rounded-full border-2 border-stone-400"
              />
              <span className="text-left text-md font-silkScreen">
                Create a new chat
              </span>
            </motion.button>
            <motion.button className="flex flex-row gap-2 justify-start items-center text-stone-300 bg-transparent hover:border-stone-600 hover:bg-stone-600 p-1 rounded-md ">
              <img
                src={images.yoda}
                className="w-8 h-8 object-cover rounded-full border-2 border-stone-400"
              />
              <span className="text-left text-md font-silkScreen">
                Explore Yoda AI
              </span>
            </motion.button>
            <motion.button className="flex flex-row gap-2 justify-start items-center text-stone-300 bg-transparent hover:border-stone-600 hover:bg-stone-600 p-1 rounded-md ">
              <img
                src={images.yoda}
                className="w-8 h-8 object-cover rounded-full border-2 border-stone-400"
              />
              <span className="text-left text-md font-silkScreen">Contact</span>
            </motion.button>
          </div>
          <ChatList data={data} />
        </motion.div>
      )}
    </>
  );
};

export default SideBar;
