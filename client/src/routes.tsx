import { createBrowserRouter } from "react-router";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Friends from "./pages/Friends";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "profile", element: <Profile /> },
      { path: "messages", element: <Messages /> },
      { path: "friends", element: <Friends /> },
    ],
  },
]);
