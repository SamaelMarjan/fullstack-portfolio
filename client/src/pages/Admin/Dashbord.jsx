import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import data from '../../data'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'

const Dashbord = () => {
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

    //delete
    const deleteProject = async(id) => {
        try {
            const {data} = await axios.delete(`http://localhost:5000/project/delete/${id}`)
            console.log(data);
            toast.success(data.message)
            getData()
        } catch (error) {
            console.log(error);
            toast.error('Something wrong')
        }
    }

  return (
    <div>
        {loading ? (
            <div className='container d-flex justify-content-center align-items-center' style={{width: '100%', height: '79.5vh'}}>...loading</div>
        ) : (
            <div className='dashbord'>
                <Toaster />
                <div className='container mt-5 mb-5'>
                    <div className='dashbord-section'>
                        <div className='dashbord-section-btn'>
                            <button className='btn submit' onClick={() => {navigate('/create')}}>Add</button>
                        </div>
                        <div className='d-flex flex-wrap mt-5' style={{gap: '3rem'}}>
                            {
                                data.map((project) => (
                                    <div key={project._id} className='card project-card'>
                                    <div className='project-card-body'>
                                        <img className='project-image' src={project.image} alt={project.name} />
                                        <div>{project.name}</div>
                                    </div>
                                    <div className='project-card-button'>
                                        {/* <Button button='View' className='btn border-color text-light' onClick={() => } /> */}
                                        <button className='btn border-color text-light' onClick={() => {navigate(`/project/${project._id}`)}}>View</button>
                                        <button className='btn border-color text-light' onClick={() => {navigate(`/edit/${project._id}`)}}>Edit</button>
                                        <button className='btn border-color text-light' onClick={() => {deleteProject(project._id)}}>Delete</button>
                                    </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Dashbord