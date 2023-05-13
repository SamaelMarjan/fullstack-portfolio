import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'


const Edit = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [input, setInput] = useState({
        name: '',
        image: '',
        description: '',
        github: '',
        live: ''
    })

    const handleChange = (e) => {
        const {name, value, type, files} = e.target
        const inputValue = type === 'file' ? files[0] : value
        setInput({...input, [name] : inputValue})
    }

    useEffect(() => {
        const editProject = async() => {
            try {
                const {data} = await axios.get(`https://samael-marjan.onrender.com/project/get/${id}`)
                console.log(data);
                setInput(data.project)
            } catch (error) {
                console.log(error);
                toast.error('Something wrong')
            }
        }
        editProject()
    }, [id])

    //update
    const updateProject = async() => {
        try {
            const {data} = await axios.put(`https://samael-marjan.onrender.com/project/update/${id}`, input, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            })
            console.log(data.project);
            toast.success(data.message)
            setInput(data.project)
            navigate('/dashbord')
        } catch (error) {
            console.log(error);
            toast.error('Something wrong')
        }
    }

    //const [value, setValue] = useState('')

  return (
    <div className='edit'>
        <Toaster />
        <div className='container mt-5 mb-5'>
            <div className='edit-section'>
                <div className='edit-section-btn'>
                    <button className='btn border-color text-light' onClick={() => {navigate(-1)}}>Back</button>
                </div>
                <div className='edit-section-input'>
                    <input className='contact-class p-2' placeholder='Name' type='text' name='name' value={input.name} onChange={handleChange} />
                    <input className='contact-class p-2' placeholder='Image' type='file' name='image' accept='images/' onChange={handleChange} />
                    <textarea className='contact-class p-2' placeholder='Description' type='text' name='description' value={input.description} onChange={handleChange}  />
                    <input className='contact-class p-2' placeholder='Github' type='text' name='github' value={input.github} onChange={handleChange}  />
                    <input className='contact-class p-2' placeholder='Live' type='text' name='live' value={input.live} onChange={handleChange}  />
                    <button className='btn border-color text-light' onClick={updateProject}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit