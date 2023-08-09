import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='form-holder'>
        <h1>Contact Page</h1>
        <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />
        <input id="message" placeholder="Write your message here" type="text" />
        <button className='submit-btn'>Submit</button>      
    </div>
  )
}

export default Contact
