"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email:'',
    password:''
  });
  const router = useRouter();
  const handleChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.id]:e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(userLogin.email == 'cybersoft' && userLogin.password == '123'){
      router.push('/profile');
    }else{
      alert('Sai mật khẩu');
      router.push('/login');
    }
  }
  return (
    <div className='container'>
      <form className='w-50 mx-auto' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
          <p>Email</p>
          <input className='form-control' id='email' name='email' onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <p>Password</p>
          <input className='form-control' id='password' name='password' onChange={handleChange}/>
        </div>
        <div className='form-group mt-2'>
          <button className='btn btn-dark' type='submit'>Login</button>
        </div>
      </form>
    
    </div>
  )
}

export default Login