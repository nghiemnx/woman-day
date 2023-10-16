import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";
import AboutUs from "../pages/AboutUs"; // import the AboutUs page
import Celebrate from "../pages/Celebrate";

export enum Pathname {
  home = "/home",
  welcome = "/welcome",
  aboutUs = "/about-us", // add the path for the AboutUs page
}

const routeConfig = createBrowserRouter([
  {
    path: Pathname.home,
    Component: AuthPage,
  },
  {
    path: Pathname.welcome,
    Component: WelcomePage,
  },
  {
    path: Pathname.aboutUs,
    Component: AboutUs,
  },
  {
    path: "/",
    Component: Celebrate,
  },
]);

export default routeConfig;
