import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import WelcomePage from "../pages/WelcomePage";

export const pathnames: { [key: string]: string } = {
  auth: "/auth",
  welcome: "/welcome",
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
    path: "/",
    Component: WelcomePage,
  },
]);

export default routeConfig;
