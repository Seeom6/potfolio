import {} from './contact.css'
import React, { useRef  } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_etl0168', 'template_ct5yeab', form.current, 'f7eq1uANvoLBxo-4H')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };
  

  return (
    <div className='contact'>
        <div className='contact-container'  >
            <i className='bx bx-envelope'></i>
            <div className='contact-text'>
                <h2> contact <span> me </span> </h2>
                <p>    Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Error 
                libero quo iure, non quisquam aliquam ad sint 
                incidunt repellendus vero voluptate eligendi 
                accusamus praesentium odio</p>
              <div className='icons'>
                <a href='https://github.com/Seeom6'><i className='bx bxl-github'></i></a>
                <a href='https://www.facebook.com/profile.php?id=100028299171525'><i className='bx bxl-facebook-circle'></i></a>
                <a href='https://www.instagram.com/semo6.9/'><i className='bx bxl-instagram' ></i></a>
                <a href="tel:07726451773"><i className='bx bx-phone-call' ></i></a>
              </div>
            </div>
            <div className='contact-info'>
              <form className='form-info' ref={form}  onSubmit={sendEmail}>
                  <div className='contact-box'>
                    <input type='text' name='name'   required autoComplete='off' />
                    <span> name </span>
                  </div>
                  <div className='contact-box'>
                    <input type='email' name='email'  required autoComplete='off' />
                    <span> email </span>
                  </div>
                  <div className='contact-box'>
                    <input type='text-area' name='message'  autoComplete='off' required />
                    <span> message </span>
                  </div>
                  <button type='submit'   className='btn'> send </button>
              </form>
            </div>
        </div>  
    </div>
  )
}
   
export default Contact


