import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGooglePopup } from '../../config/firebaseConfig';
import { Input } from '../../components/input';
import { set_user_auth, userData } from '../../store/slice/user_data_slice';

const Login = () => {
  const [data, setData] = useState({});


  const user_data = useSelector((a)=>a.user_data)


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const change_handle = (value, id) => {

    setData({ ...data, [id]: value });
  };

  const submit_handle = async (e) => {
    e.preventDefault();
    try{
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
        dispatch(set_user_auth(true))
        navigate('/')
        // console.log(userCredential,'creden')
    }
    catch(error){
        const errorMessage = error.message;
        console.log(errorMessage)
        dispatch(set_user_auth(false))
        alert(errorMessage)

    }
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''

  };
  // Sign up with google 
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
 
     
      navigate('/')
    } catch (error) {
      console.log(error)
    }
}
  
  return (
    <div className="bg-bg_color h-[80vh] grid place-items-center px-3">
     
      <form
        onSubmit={submit_handle}
        className="bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5"
      >
        <div className="text-primary_color col-span-2 text-center text-3xl font-bold">
          <h1>LOGIN</h1>
        </div>
        <div className="col-span-2">
          <Input
            id="email"
            type="email"
            required={true}
            onchange={change_handle}
            placeholder="Email Address"
          />
        </div>
        <div className="col-span-2">
          <Input
            id="password"
            required={true}
            onchange={change_handle}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="col-span-2">
          <button type="submit">Login</button>
        </div>
         
         
        <div className="col-span-2 space-x-1 text-center">
          <span>Don't have account </span>
          <Link to="/signup" className="underline text-primary_color">
            Signup now
          </Link>
        </div>
      </form>
      <div>
         <button onClick={logGoogleUser}  className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>

         </div>
         </div>
        
  )
}

export default Login