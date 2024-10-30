import React from "react";
import { useNavigate } from "react-router-dom";
import { style } from "../../styles/style";
import { YodaAscii } from "../../components/yoda";
import { RetroButton } from "../../components/retro";

const HomePage = () => {
  const navigate = useNavigate();
  const navToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div
      className={`${style.container} min-h-screen justify-center items-center gap-10`}
    >
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-6">
        <h1 className="text-black font-silkScreen text-center">Welcome to</h1>
        <h1 className="text-black font-silkScreen font-bold text-center">
          Yoda AI
        </h1>
        <p className="text-md md:text-xl text-center text-black ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          similique !!
        </p>
        <RetroButton onpress={navToDashboard} label={"Get Started"} />
      </div>
      <YodaAscii showDialog />
    </div>
  );
};

export default HomePage;
