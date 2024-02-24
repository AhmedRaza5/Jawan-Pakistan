import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signup from '../../pages/signup'
import Login from '../../pages/login'
import Home from '../../pages/home'



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="" element={<Home />} />
        </Route>
    )
)

const Router = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router