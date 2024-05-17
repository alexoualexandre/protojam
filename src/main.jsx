import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./Accueil.jsx";
import Description2 from "./Description2.jsx";
<<<<<<< HEAD
=======
import Amerique from "./amerique.jsx";
import Afrique from "./Afrique.jsx";
import Asie from "./Asie.jsx";
import Europe from "./Europe.jsx";
import Apropos from "./Apropos.jsx";
>>>>>>> 97cea93847551f1220e394a39d03b9c9f061c5b2

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
<<<<<<< HEAD

=======
>>>>>>> 97cea93847551f1220e394a39d03b9c9f061c5b2
        element: (
          <>
            <Accueil /> <Description2 />
          </>
        ),
      },
      {
<<<<<<< HEAD
        path: "/salope",
      },
      {
        path: "/Article",
=======
        path: "/amerique",
        element: (
          <>
            <Amerique />
          </>
        ),
      },
      {
        path: "/europe",
        element :(
          <>
          <Europe/>
          </>
        )
      },
      {
        path: "/afrique",
        element: (
          <>
            <Afrique />
          </>
        ),
      },
      {
        path: "/asie",
        element: (
          <>
            <Asie/>
          </>
        ),
      },
      {
        path: "/apropos",
        element:(
          <>
          <Apropos/>
          </>
        )
      },
      {
        path: "/contact",
>>>>>>> 97cea93847551f1220e394a39d03b9c9f061c5b2
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
