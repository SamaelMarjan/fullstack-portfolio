import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section className='skills mb-5'>
      <div className='skills-color'>
        <div className='skills-section'>
          <img src='images/html.png' alt='html' style={{width: '70px'}} />
          <img src='images/css.png' alt='css' style={{width: '70px'}} />
          <img src='images/bootstrap.png' alt='bootstrap' style={{width: '70px'}} />
          <img src='images/tailwind.png' alt='tailwind' style={{width: '70px'}} />
          <img src='images/javascript.png' alt='javascript' style={{width: '70px'}} />
          <img src='images/mongodb.png' alt='mongodb' style={{width: '200px'}} />
          <img src='images/express.png' alt='express' style={{width: '200px'}} />
          <img src='images/react.png' alt='react' style={{width: '70px'}} />
          <img src='images/nodejs.png' alt='nodejs' style={{width: '150px'}} />
        </div>
      </div>
    </section>
  )
}

export default Skills