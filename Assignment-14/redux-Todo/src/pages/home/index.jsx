import React from 'react'
import Todo from '../../components/todo'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebaseConfig'
import { set_user_auth } from '../../store/slice/userData'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const check_user = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          dispatch(set_user_auth(true))
        
        } else {
          dispatch(set_user_auth(false))
          navigate('/login');
        }
      });
    }
  
    check_user()
  return (
    <div>
        <Todo/>
    </div>
  )
}

export default Home