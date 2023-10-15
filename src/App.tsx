import "./App.css";
import "@fontsource/quicksand";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import routeConfig from "./config/router";
import theme from "./config/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GoogleOAuthProvider clientId="797942620653-seq35gb5q5oq0f237sad0jnpumgducq9.apps.googleusercontent.com">
        <RouterProvider router={routeConfig} />
      </GoogleOAuthProvider>
      ;
    </ChakraProvider>
  );
}

export default App;
