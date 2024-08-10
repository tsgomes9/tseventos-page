import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
