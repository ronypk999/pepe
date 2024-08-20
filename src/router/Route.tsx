import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home";
import ContextProvider from "../provider/ContextProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <Layout></Layout>
      </ContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
