import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Error from './pages/Error'
import Project from './pages/Project/Project'
//import ShowProject from './pages/Project/ShowProject'
import Singlepage from './pages/Singlepage/Singlepage'
import Login from './pages/Admin/Login'
import Dashbord from './pages/Admin/Dashbord'
import Create from './pages/Admin/Create'
import Edit from './pages/Admin/Edit'

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/project/:id' element={<Singlepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashbord' element={<Dashbord />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route exact path='*' element={<Error />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App