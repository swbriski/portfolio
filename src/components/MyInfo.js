import React, { useRef } from 'react'
import ResumePDF from '../assets/myresume.pdf'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    // prevents the page from reloading when you hit “Send”
    e.preventDefault();
  
    emailjs.sendForm('service_yjnmhow', 'template_hxvu6la', form.current, 'CNkJIybaMJ5EUy6YO')
      .then((result) => {
          alert("Your email has been sent.")
      }, (error) => {
          alert("An error is preventing your email from being sent.")
      })
  }

  return (
    <>
    <div>
      <h1>There are a few ways you can engage with me.</h1>

      <br />

      <p>You can connect or send me a message on <a href="https://www.linkedin.com/in/swbriski/" target="_blank"><span className="navigationLink">LinkedIn</span></a>.</p>
      <p>You can access my code on <a href="https://github.com/swbriski/" target="_blank"><span className="navigationLink">GitHub</span></a>.</p>
      <p>You can check out my <a href="https://www.codewars.com/users/swbriski" target="_blank"><span className="navigationLink">CodeWars</span></a>.</p>
      <p>You can view my <a href={ResumePDF} target="_blank"><span className="navigationLink">résumé</span></a>.</p>

      <br />

      <p>Or you can even send me an email!</p>

      <br />

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label><br />
        <input type="text" name="user_name" className="emailInput" /><br />
        <label>Email</label><br />
        <input type="email" name="user_email" className="emailInput" /><br />
        <label>Message</label><br />
        <textarea name="message" className="emailMessage" /><br />
        <input type="submit" value="Send" />
      </form>
    </div>
    </>
  )
}

export default Contact