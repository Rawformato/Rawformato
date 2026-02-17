import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import AutomotiveSports from "./pages/AutomotiveSports";
import Restaurants from "./pages/Restaurants";
import RealtorsBuilders from "./pages/RealtorsBuilders";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "automotive-sports", Component: AutomotiveSports },
      { path: "restaurants", Component: Restaurants },
      { path: "realtors-builders", Component: RealtorsBuilders },
      { path: "*", Component: NotFound },
    ],
  },
]);
