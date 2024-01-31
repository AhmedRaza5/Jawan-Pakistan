import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../../pages/home';
import Private from '../private';
import Public from '../public';
import Login from '../../pages/login';


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={<Private />}>
          <Route path="" element={<Home />} />
        </Route>
  
        <Route path="" element={<Public />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
    )
  );
const ReactRouterConfig = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default ReactRouterConfig