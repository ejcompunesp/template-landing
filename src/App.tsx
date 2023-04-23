import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "@fontsource/open-sans";
import "@fontsource/oxygen";
import "@fontsource/fira-sans";
import "@fontsource/hanuman"

import Root from "./routes/root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

// extend theme
const fonts ={
  body: "Tahoma, Open Sans, Fira Sans, hanuman",
  heading: 'sans-serif, Courier New, monospace, serif',
}

const theme = extendTheme({fonts});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
