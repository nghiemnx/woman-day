import "./App.css";
import "@fontsource/quicksand";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import routeConfig from "./config/router";
import theme from "./config/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AUTH_DOMAIN } from "./helper";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GoogleOAuthProvider clientId={AUTH_DOMAIN}>
        <RouterProvider router={routeConfig} />
      </GoogleOAuthProvider>
      ;
    </ChakraProvider>
  );
}

export default App;
