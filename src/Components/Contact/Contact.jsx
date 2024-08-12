import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <section className='contact'>
        <form>

            <h2>Contact Form</h2>

            <div className='input-box'>
                <label>Full Name</label>
                <input type="text" className="field"  placeholder='Enter your name' required/>



            </div>
            <div className='input-box'>
                <label>Email</label>
                <input type="email" className="field"  placeholder='Enter your email address' required/>



            </div>
            <div className='input-box'>
                <label>Your Message</label>
                <textarea className="field message"  placeholder='Enter your message' required></textarea>


            </div>
            <button type='submit'>Submit</button>
        </form>

    </section>
  )
}
export default Contact