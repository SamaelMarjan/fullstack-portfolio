import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'

const Create = () => {
    const navigate = useNavigate()

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

    //create
    const handleClick = async(e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post('http://localhost:5000/project/create', input, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            })
            console.log(data);
            toast.success(data.message)
            navigate('/dashbord')
        } catch (error) {
            console.log(error);
            toast.error('Something wrong')
        }
    }

  return (
    <div className='create'>
        <Toaster />
        <div className='container mt-5 mb-5'>
            <div className='create-section'>
                <div className='create-section-btn'>
                    <button className='btn submit' onClick={() => {navigate(-1)}}>Back</button>
                </div>
                <div className='create-section-input'>
                    <form >
                        <input className='contact-class p-2' placeholder='Name' type='text' name='name' value={input.name} onChange={handleChange} />
                        <input className='contact-class p-2' placeholder='Image' type='file' name='image' accept='images/' onChange={handleChange} />
                        <input className='contact-class p-2' placeholder='Description' type='text' name='description' value={input.description} onChange={handleChange} />
                        <input className='contact-class p-2' placeholder='Github' type='text' name='github' value={input.github} onChange={handleChange} />
                        <input className='contact-class p-2' placeholder='Live' type='text' name='live' value={input.live} onChange={handleChange} />
                    </form>
                    <button className='btn submit' onClick={handleClick}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create