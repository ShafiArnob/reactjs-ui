import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import UserPage from "@/pages/UserPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <UserPage />,
  },
]);

export default routes;
