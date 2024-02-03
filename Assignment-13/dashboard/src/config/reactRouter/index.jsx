import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Dashboard } from '../../pages/dashboard'
import Layout from '../../components/layout'
import { OrderList } from '../../pages/orderList'
import { Calender } from '../../pages/calender'
import { Chat } from '../../pages/chat'
import { Customer } from '../../pages/customer'
import { Analytics } from '../../pages/analytics'
import { FoodDetail } from '../../pages/foodDetail'
import { Wallet } from '../../pages/wallet'
import { Foods } from '../../pages/foods'
import { OrderDetail } from '../../pages/orderDetail'
import { Reviews } from '../../pages/reviews'
import { CustomerDetail } from '../../pages/customerDetail'



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route path=''>
            <Route path='' element={<Dashboard/>}/>
            <Route path='orderlist' element={<OrderList/>}/>
            <Route path='orderdetail' element={<OrderDetail/>}/>
            <Route path='customer' element={<Customer/>}/>
            <Route path='analytics' element={<Analytics/>}/>
            <Route path='reviews' element={<Reviews/>}/>
            <Route path='foods' element={<Foods/>}/>
            <Route path='fooddetail' element={<FoodDetail/>}/>
            <Route path='customerdetail' element={<CustomerDetail/>}/>
            <Route path='calender' element={<Calender/>}/>
            <Route path='chat' element={<Chat/>}/>
            <Route path='wallet' element={<Wallet/>}/>
            </Route>
        </Route>
    
    )
)
const ReactRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default ReactRouter