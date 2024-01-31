import React, { useState } from 'react'
import { credential } from '../../components/utills/credentials';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';

const Login = () => {
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
  
    const onChangeHandle = (value,id) => {
      // const { value, id } = e.target;
  
      setUserData({ ...userData, [id]: value });
      
    };
  
    const submitHandle = (e) => {
      e.preventDefault();
      const { username, password } = userData;
      if (
        username === credential.username &&
        password === credential.password
      ) {
        
        localStorage.setItem("login", true);
        navigate("/");
      } else {
        alert("Wrong credentials!");
        document.getElementById('username').value= ''
        document.getElementById('password').value= ''
      }   
    };

  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandle}>
                  <div>
                      <label htmlFor="usename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      {/* <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Username" required="" onChange={onChangeHandle}/> */}
                      <Input type='text' placeholder='Enter Username admin' onchange={onChangeHandle} id='username' required={true}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      {/* <input type="password" name="password" id="password" placeholder="Enter Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={onChangeHandle}/> */}
                      <Input type='password' placeholder='Enter Password admin' onchange={onChangeHandle} id='password' required={true}/>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login