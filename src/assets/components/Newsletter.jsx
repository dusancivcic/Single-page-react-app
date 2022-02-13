
import '../../App.css';
import validator from 'validator'
import React, { useState } from "react";

function Newsletter() {

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  return (
    <section id='contact' className='newsletter-section'>
        <div className='newsletter-container'>
            <div className='newsletter-text'>
                <h3>Subscribe to our Newsletter!</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='newsletter-button'>
                <input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)} placeholder='Enter your email address'/>
         <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
                <button>Subscribe</button>
            </div>
        </div>
    </section>
  );
}

export default Newsletter;
