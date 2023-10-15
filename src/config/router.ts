import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import WelcomePage from "../pages/WelcomePage";
import AboutUs from "../pages/AboutUs"; // import the AboutUs page
import Celebrate from "../pages/Celebrate";

export const pathnames: { [key: string]: string } = {
  auth: "/auth",
  welcome: "/welcome",
  aboutUs: "/about-us", // add the path for the AboutUs page
};

const routeConfig = createBrowserRouter([
  {
    path: pathnames.auth,
    Component: AuthPage,
  },
  {
    path: pathnames.welcome,
    Component: WelcomePage,
  },
  {
    path: pathnames.aboutUs,
    Component: AboutUs,
  },
  {
    path: "/",
    Component: Celebrate,
  },
]);

export default routeConfig;
