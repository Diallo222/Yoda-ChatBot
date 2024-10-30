import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChatPage, DashBoardPage, HomePage } from "./pages/main";
import { DashBoardLayout, MainLayout } from "./layouts";
import { LoginPage, RegisterPage } from "./pages/auth";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          element: <DashBoardLayout />,
          children: [
            {
              path: "/dashboard",
              element: <DashBoardPage />,
            },
            {
              path: "/dashboard/chats/:id",
              element: <ChatPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
