import React, { useState } from 'react'
import { Input } from '../../components/input';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const navigate = useNavigate();
    const [data, setData] = useState({});

  const change_handle = (value, id) => {

    setData({ ...data, [id]: value });
  };


  const submit_handle = (e) => {
    e.preventDefault();

   

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        navigate('/login');
        
       
    })
    .catch((error) => {
     
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage', errorMessage)
       alert(errorMessage);
        
      });
  };
  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center px-3">
      <form
        onSubmit={submit_handle}
        className="bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5"
      >
        <div className="text-primary_color col-span-2 text-center text-3xl font-bold">
          <h1>SIGNUP</h1>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input
            id="first_name"
            type="text"
            required={true}
            onchange={change_handle}
            placeholder="First Name"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input
            id="last_name"
            type="text"
            required={true}
            onchange={change_handle}
            placeholder="Last Name"
          />
        </div>

        <div className="col-span-2">
          <Input
            id="username"
            type="text"
            required={true}
            onchange={change_handle}
            placeholder="Username"
          />
        </div>
        <div className="col-span-2">
          <Input
            id="phone_number"
            type="number"
            required={true}
            onchange={change_handle}
            placeholder="Phone Number"
          />
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
          <button type="submit">Signup</button>
        </div>

        <div className="col-span-2 space-x-1 text-center">
          <span>Already have account </span>
          <Link to="/login" className="underline text-primary_color">
            Login now
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signup