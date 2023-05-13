import React, { useState } from 'react'
import './admin.css'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'
import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useAuth()
  const [login, setLogin] = useState({
    email:'',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setLogin({...login, [name] : value})
  }

  const handleClick = async(e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post('https://samael-marjan.onrender.com/auth/login', login)
      console.log(data);
      toast.success(data.message)
      setAuth({...auth, user: data.user, token: data.token})
      localStorage.setItem('auth', JSON.stringify(data))
      navigate('/dashbord')
    } catch (error) {
      console.log(error);
      toast.error('Something wrong')
    }
  }

  return (
    <div className='login'>
      <Toaster />
        <div className='container login-form'>
            <div className='login-form-input'>
                <input className='contact-class p-2' type='email' placeholder='email' name='email' value={login.email} onChange={handleChange} />
                <input className='contact-class p-2' type='password' placeholder='password' name='password' value={login.password} onChange={handleChange} />
            </div>
            <div className='login-btn'>
                <button className='btn submit login-btn-btn' onClick={handleClick}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login