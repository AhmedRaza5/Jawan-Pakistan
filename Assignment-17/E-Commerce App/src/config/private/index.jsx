import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebaseConfig'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { set_user_auth, userData } from '../../store/slice/user_data_slice'

const Private = () => {
    const dispatch = useDispatch()
  const navigate = useNavigate();
    const check_user = () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
           
            dispatch(set_user_auth(true))
            dispatch(userData(user))
           
          } else {
            dispatch(set_user_auth(false))
            navigate('/login')
           
          }
        });
      }
    
      check_user()
  return (
   <Outlet/>
  )
    
  
}

export default Private