import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Public = () => {
    const login = localStorage.getItem("login");
    return !login ? <Outlet/> : <Navigate to='/'/>
}

export default Public