import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../pages/layout";
import Home from "../pages/home";
import SignUp from "../pages/signup";
import Login from "../pages/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login/> } />
      <Route path="signup" element={<SignUp/>} />
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};