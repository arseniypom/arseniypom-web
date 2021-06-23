import React from 'react';
import emailjs from 'emailjs-com';

import mapImg from '../images/map.png';
import Heading from './Heading';

function Contact() {

  function sendEmail(e:any) {
    e.preventDefault();

    emailjs.sendForm('service_p6ughr8', 'template_roj97wq', e.target, 'user_8oe03TomfnFWb5cONkpYK')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact">
        <form className="contact_form" onSubmit={sendEmail}>
          <Heading text="Contact Me"/>
          <div className="contact_form_group">
            <input className="contact_form_input contact_form_input-name" type="text" name="name" placeholder="Your name *" required/>
            <input className="contact_form_input contact_form_input-email" type="email" name="email" placeholder="Your email *" required/>
          </div>
          <input className="contact_form_input contact_form_input-subject" type="text" name="subject" placeholder="Subject (optional)" />
          <textarea className="contact_form_input contact_form_input-message" name="message" placeholder="Message" required/>
          <button className="animated-button contact_form_send" type="submit" value="Send">Send
          </button>
        </form>
        <div className="contact_map">
          <img src={mapImg} alt="map" />
        </div>
      </div>
    </section>
  )
}

export default Contact;
