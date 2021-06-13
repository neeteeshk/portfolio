import React from 'react';
import emailjs from 'emailjs';
export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'My Default Template',e.target, 'user_MPbxnscf65WGMpKdHqjTE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" id="input_contact" />
      <label>Email</label>
      <input type="email" name="email" id="input_contact" />
      <label>Contact Number</label>
      <input type="tel" name="phone" id="input_contact"/>
      <label>Company</label>
      <input type="text" name="company" id="input_contact"/>
      <label>Message</label>
      <textarea name="message" id="message" rows = "10" cols="50"/>
      <div className="contact-form">
         <input type="submit" value="Send" id="btn_send"/>
      </div>
    </form>
  );
}