import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./Accueil.jsx";
import Description2 from "./Description2.jsx";
import Amerique from "./amerique.jsx";
import Afrique from "./Afrique.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Accueil /> <Description2 />
          </>
        ),
      },
      {
        path: "/amerique",
        element: (
          <>
            <Amerique />
          </>
        ),
      },
      {
        path: "/europe",
      },
      {
        path: "/afrique",
        element:(
          <>
          <Afrique/>
          </>
        )
      },
      {
        path: "/asie",
      },
      {
        path: "/apropos",
      },
      {
        path: "/contact",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
