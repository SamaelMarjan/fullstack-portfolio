import React, { useEffect, useState } from 'react'
import './project.css'
//import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
//import project from '../../data'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'


const Project = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  //get all data
  const getData = async() => {
    try {
        const {data} = await axios.get('https://samael-marjan.onrender.com/project/get', {
          headers: {
            "Content-Type" : "application/json"
          }
        })
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
    <div>
      {
        loading ? (
          <div className='container d-flex justify-content-center align-items-center' style={{width: '100%', height: '79.5vh'}}>...loading</div>
        ) : (
          <div className='project mt-5 mb-5'>
            <Toaster />
            <div className='container d-flex flex-wrap' style={{gap: '3rem'}}>
              {
                data.map((project) => (
                  <div key={project._id} className='card project-card'>
                    <div className='project-card-body'>
                      <img className='project-image' src={`https://samael-marjan.onrender.com/project/${project.image}`} alt={project.name} />
                      <div>{project.name}</div>
                    </div>
                    <div className='project-card-button'>
                      {/* <Button button='View' className='btn border-color text-light' onClick={() => } /> */}
                      <a className='btn border-color text-light' href={project.github} target='_blank' rel="noreferrer" >Github</a>
                      <a className='btn border-color text-light' href={project.live} target='_blank' rel="noreferrer">Live</a>
                      <button className='btn border-color text-light' onClick={() => {navigate(`/project/${project._id}`)}}>View</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          )
        }
    </div>
  )
}

export default Project