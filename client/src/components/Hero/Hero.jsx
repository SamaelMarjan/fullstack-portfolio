import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container hero-container'>
            <div className='section'>
                <div style={{fontSize: '70px', fontWeight: 'bold'}}>Samael <span style={{color: 'red'}}>Marjan</span></div>
                <div style={{color: '#2cb103e0', fontSize:'30px', fontWeight: 'bold'}}>Aspiring Full-Stack Developer</div>
                <div className='mt-3' style={{color: 'olive', fontSize:'20px'}}>HTML, CSS, Javascript, ReactJS, MongoDB, ExpressJS, NodeJS</div>
            </div>
        </div>
    </div>
  )
}

export default Hero