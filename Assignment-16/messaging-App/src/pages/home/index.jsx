import React from 'react'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../config/firebaseConfig'
import { set_user_auth } from '../../store/slice/userData'
import { useNavigate } from 'react-router-dom'
import { Messages } from '../../components/messages'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();


    const logout = () =>{
      signOut(auth).then((res)=>{
          dispatch(set_user_auth(false))
          navigate('/login')
          
      })
  
    }
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
      <div className='flex justify-between p-4 bg-black text-white mb-4'>
      <h1 className='text-2xl'>TODO</h1>
      <button onClick={logout}>Logout</button>
    </div>
    <Messages/>
    </div>
  )
}

export default Home