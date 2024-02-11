import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import User from "@/pages/User";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <User />,
  },
]);

export default routes;
