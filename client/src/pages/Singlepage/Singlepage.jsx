import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import project from '../../data'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'


const Singlepage = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState('')

  //get single
  useEffect(() => {
    const singleData = async() => {
      try {
        const {data} = await axios.get(`http://localhost:5000/project/get/${id}`)
        console.log(data);
        setValue(data.project)
        setLoading(false)
      } catch (error) {
        console.log(error);
        toast.error('Somethig wrong')
      }
    }
    singleData()
  }, [id])

  return (
    <div>
      {
        loading ? (
          <div className='container d-flex justify-content-center align-items-center' style={{width: '100%', height: '79.5vh'}}>...loading</div>
        ) : (
          <div>
            <Toaster />
            <div className='container mt-5 mb-5'>
            <div className='btn submit' onClick={() => {navigate(-1)}}>Back</div>
              <div className='mb-3'>{value.name}</div>
              <div className='mb-3'>
                <a className='btn submit' href={value.github} target='_blank' rel="noreferrer">Github</a>
                <a className='btn submit' href={value.live} target='_blank' rel="noreferrer">Live</a>
              </div>
              <div>
                <img src={value.image} alt={value.name} />
                <div>{value.description}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Singlepage