import React, { useState } from 'react'
import './contact.css'
//import Input from '../Input'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'


const Contact = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setInput({...input, [name] : value})
    }

    const handleClick = async(e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post('http://localhost:5000/message/sendmessage', input)
            //console.log(data);
            toast.success(data.message)
            setInput(data.messages)
        } catch (error) {
            console.log(error);
            toast.error('Something wrong')
        }
    }

    return (
        <div className='contact'>
            <Toaster />
            <div className='contact-display'>
                <div className='contact-form'>
                    <div className='text-center contact-heading'>Get in touch</div>
                    <div className='contact-field'>
                        <input className='contact-class p-2 text-light' type='text' placeholder='Name' name='name' value={input.name} onChange={handleChange} />
                        <input className='contact-class p-2 text-light' type='email' placeholder='Email' name='email' value={input.email} onChange={handleChange} />
                        <textarea className='contact-class p-2 text-light' type='text' placeholder='Message' name='message' value={input.message} onChange={handleChange} />
                        <button className='btn border-color text-light' style={{backgroundColor: '#141414'}} onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
            {/* <div className='contact-image'>
                <img src='images/contact.jpg' alt='contact' />
            </div> */}
        </div>
    )
}

export default Contact