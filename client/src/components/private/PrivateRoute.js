import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import Login from '../../pages/Admin/Login'

const PrivateRoute = () => {
    const [auth] = useAuth()
    const [ok, setOk] = useState(false)

    useEffect(() => {
        const authCheck = async() => {
            const {data} = await axios.get('http://localhost:5000/auth/admin', {
                headers: {
                    Authorization: auth?.token
                }
            })
            if(data.ok){
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if(auth?.token) authCheck()
    }, [auth?.token])

  return ok ? <Outlet /> : <Login />
}

export default PrivateRoute