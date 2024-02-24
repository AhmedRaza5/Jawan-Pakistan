import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebaseConfig'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { set_user_auth } from '../../store/slice/user_data_slice'

const Public = () => {
    const dispatch = useDispatch()
  const navigate = useNavigate();
    const check_user = () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            dispatch(set_user_auth(true))
            navigate('/')
          } else {
            dispatch(set_user_auth(false))
          
          }
        });
      }
    
      check_user()
  return (
  <Outlet/> 
    
  )
}

export default Public