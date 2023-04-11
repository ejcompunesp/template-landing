import { ChakraProvider } from "@chakra-ui/react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import Root from "./routes/root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
