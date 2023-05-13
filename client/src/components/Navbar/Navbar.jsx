import React from 'react'
import './navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const Navbar = () => {
    const navigate = useNavigate()
    const [auth, setAuth] = useAuth()
    const handleLogout = () => {
        setAuth({...auth, user: null, token: ''})
        localStorage.removeItem('auth')
        navigate('/login')
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand text-light" to={'/'}>samael</Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            !auth?.user ? (
                                <>
                                    <li className="nav-item color">
                                        <NavLink className="nav-link text-light" activeclassname="active" to={'/'}>Home</NavLink>
                                    </li>
                                    <li className="nav-item color">
                                        <NavLink className="nav-link text-light" activeclassname="active" to={'/about'}>About</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link text-light" activeclassname="active" to={'/project'}>Projects</NavLink>
                                    </li>
                                    <li className="nav-item color">
                                        <NavLink className="nav-link text-light" activeclassname="active" to={'/contact'}>Contact</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                    <NavLink className="nav-link text-light" activeclassname="active" onClick={handleLogout} to={'/'}>Logout</NavLink>
                                    </li>
                                </>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar