import React from 'react'
import './admin.css'

const Login = () => {
  return (
    <div className='login'>
        <div className='container login-form'>
            <div className='login-form-input'>
                <input className='contact-class p-2' />
                <input className='contact-class p-2' />
            </div>
            <div className='login-btn'>
                <button className='btn submit login-btn-btn'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login