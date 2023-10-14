import "./App.css";
import "@fontsource/quicksand";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import routeConfig from "./config/router";
import theme from "./config/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={routeConfig} />
    </ChakraProvider>
  );
}

export default App;
