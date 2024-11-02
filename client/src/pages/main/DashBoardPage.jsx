import React from "react";
import { style } from "../../styles/style";
import { Navbar } from "../../components/nav";
import { YodaAscii } from "../../components/yoda";
import { PromptInput } from "../../components/chats";
import { RetroButton } from "../../components/retro";

const DashBoardPage = () => {
  return (
    <div
      className={`flex flex-col mx-auto h-full w-full justify-center items-center gap-6`}
    >
      <Navbar />

      <PromptInput />
      {/* <div className="w-full flex flex-row items-center justify-center gap-3">
        <RetroButton label={"Create an Image"} />
        <RetroButton label={"Summarize a Text"} />
        <RetroButton label={"Analyze an Image"} />
      </div> */}
    </div>
  );
};

export default DashBoardPage;
