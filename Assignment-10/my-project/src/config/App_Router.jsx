import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../pages/layout';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';

const App_Router = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout/>}>
            <Route path="" element={<Home />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />

           
          </Route>
        )
      );
  return (
    <RouterProvider router={router}/>
  )
}

export default App_Router