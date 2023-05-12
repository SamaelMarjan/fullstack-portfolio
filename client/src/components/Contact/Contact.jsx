import React from 'react'
import './contact.css'
import Input from '../Input'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-display'>
                <div className='contact-form'>
                    <div className='text-center contact-heading'>Get in touch</div>
                    <div className='contact-field'>
                        <Input className='contact-class p-2 text-light' type='text' placeholder='Name' name='name'  />
                        <Input className='contact-class p-2 text-light' type='email' placeholder='Name' name='name'  />
                        <Input className='contact-class p-2 text-light' type='text' placeholder='Name' name='name'  />
                        <Input className='contact-class p-2 text-light' type='text' placeholder='Name' name='name'  />
                        <button className='btn submit'>Submit</button>
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