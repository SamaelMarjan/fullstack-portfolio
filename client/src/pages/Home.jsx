import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero/Hero'
import Skills from '../components/Skills/Skills'
//import Project from './Project/Project'
//import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import Contact from '../components/Contact/Contact'
import axios from 'axios'
//import project from '../data'
import toast, {Toaster} from 'react-hot-toast'


const Home = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    //get all data
    const getData = async() => {
        try {
            const {data} = await axios.get('http://localhost:5000/project/get')
            //console.log(data);
            setData(data.projects)
            setLoading(false)
        } catch (error) {
            console.log(error);
            toast.error('Something wrong')
        }
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className=''>
        <Hero />
        <Skills />
        <div className='container'>
            <div className='mb-5' style={{fontSize: '30px', fontWeight: 'bold'}}>Projects</div>
            {
                loading ? (
                    <div className='text-center'>...loading</div>
                ) : (
                    <div className='d-flex flex-wrap mb-5' style={{gap: '3rem'}}>
                {
                    data.slice(0, 4).map((data) => (
                        
                        <div className='card project-card' key={data.id}>
                            <div className='project-card-body'>
                                <img className='project-image' src={data.image} alt={data.name} />
                                <div>{data.name}</div>
                            </div>
                            <div className='project-card-button'>
                                <a className='btn border-color text-light' href={data.github} target='_blank' rel="noreferrer" >Github</a>
                                <a className='btn border-color text-light' href={data.live} target='_blank' rel="noreferrer" >Live</a>
                                <button className='btn border-color text-light' onClick={() => {navigate(`/project/${data._id}`)}}>View</button>
                            </div>
                        </div>
                    ))
                }
            </div>
                )
            }
            <div className='d-flex justify-content-end mb-5' style={{}}>
                <button className='btn border-color text-light' onClick={() => {navigate('/project'); window.scrollTo(0,0)}}>Show all</button>
            </div>
        </div>
        <Contact />
    </div>
  )
}

export default Home