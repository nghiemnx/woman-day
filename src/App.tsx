import { RouterProvider } from "react-router-dom";
import routeConfig from "./config/router";

function App() {
  return <RouterProvider router={routeConfig} />;
}

export default App;
