import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';
import { Input } from '../../components/input';
import { set_user_auth } from '../../store/slice/user_data_slice';

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

  }
  
  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center px-3">
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
    </div>
  )
}

export default Login