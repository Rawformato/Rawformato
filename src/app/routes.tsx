import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";

const Home = lazy(() => import("./pages/Home"));
const AutomotiveSports = lazy(() => import("./pages/AutomotiveSports"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const RealtorsBuilders = lazy(() => import("./pages/RealtorsBuilders"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
