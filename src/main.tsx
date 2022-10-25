import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

/** ROUTES */
import Root from './routes/root';
import Dashboard from './routes/dashboard';
import ErrorPage from './routes/error-page';
import Onboarding from './routes/onboarding';
import Archive from './routes/archive';
import Settings from './routes/settings';
import Category from './routes/category';

/** STYLE */
import './index.css';

/** MATERIAL SYMBOLS */
import 'material-symbols';

/** CHAKRA */
import { extendTheme } from "@chakra-ui/react";
import chakraCustomTheme from "./chakra/index";

const theme = extendTheme({
  ...chakraCustomTheme.styles,
  components: chakraCustomTheme.components,
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <Dashboard/>
      },
      {
        path: "archive",
        element: <Archive/>
      },
      {
        path: "settings",
        element: <Settings/>
      },
      {
        path: "category",
        element: <Category/>
      },
    ]
  },
  {
    path: "/onboarding",
    element: <Onboarding/>,
    errorElement: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
