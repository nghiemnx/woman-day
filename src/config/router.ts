import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";
import AboutUs from "../pages/AboutUs"; // import the AboutUs page

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
    Component: WelcomePage,
  },
]);

export default routeConfig;
