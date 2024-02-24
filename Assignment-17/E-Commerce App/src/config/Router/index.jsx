import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signup from '../../pages/signup'
import Login from '../../pages/login'
import Home from '../../pages/home'
import ProductDetail from '../../pages/productDetail'
import Layout from '../../pages/layout'
import Private from '../private'
import Public from '../public'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Private />}>
        <Route path="" element={<Home />} />
        <Route path="productdetail/:id" element={<ProductDetail />} />
      </Route>
      <Route path='' element={<Public/>}>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      </Route>

    </Route>
  )
)

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router