import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Welcome from './screens/Welcome/Welcome';
import Home from './screens/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />
    },
    {
        path: "/home",
        element: <Home />
    }

])
