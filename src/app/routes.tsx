import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { QuemSomos } from "./pages/QuemSomos";
import { Participantes } from "./pages/Participantes";
import { Projetos } from "./pages/Projetos";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "quem-somos", Component: QuemSomos },
      { path: "participantes", Component: Participantes },
      { path: "projetos", Component: Projetos },
    ],
  },
]);
