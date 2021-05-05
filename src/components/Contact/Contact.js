import React from 'react'
import './Contact.css'
import { IconContext } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'


const Contact = () => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
      height: '90vh'
    }}
    >
      <IconContext.Provider value={{color: '#efefef'}}>
      
      <div className="contact-page">
        <h1 className="contact-header">Get In Touch</h1>
          <p className="contact-info">
            <a href="mailto:maryann.navarrete@gmail.com" target="_blank" rel="noreferrer"><AiOutlineMail size={60}/></a>
            <a href="mailto:maryann.navarrete@gmail.com" target="_blank" rel="noreferrer"><FaLinkedinIn size={60} /></a>
          
          </p>
      </div>
      </IconContext.Provider>
  </div>
  )
}

export default Contact
