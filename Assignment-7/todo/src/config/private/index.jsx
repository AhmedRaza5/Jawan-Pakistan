import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Private = () => {
    const login = localStorage.getItem("login");
  return login ? <Outlet/> : <Navigate to='/login'/>
}

export default Private