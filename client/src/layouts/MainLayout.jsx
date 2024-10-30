import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/nav";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen bg-stone-300 ">
      {/* <Navbar /> */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
