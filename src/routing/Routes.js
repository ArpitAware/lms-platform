import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import ViewCardInfo from "../components/ViewCardInfo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "course/:id", Component: ViewCardInfo },
    ],
  },
]);

export default router;