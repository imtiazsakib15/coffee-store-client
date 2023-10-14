import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
