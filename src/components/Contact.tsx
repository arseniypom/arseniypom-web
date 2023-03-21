import React from 'react';
import emailjs from 'emailjs-com';
import ReactMapGL, {Marker} from 'react-map-gl';

import markerImg from '../images/location-pin.png';
import Heading from './Heading';

function Contact() {

  const [viewport, setViewport] = React.useState({
    latitude: 44.78,
    longitude: 20.45,
    width: '100%',
    height: '100%',
    zoom: 3.5
  })

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
    <section className="section contact-section" id="contact">
      <div className="contact">
        <form className="contact_form" onSubmit={sendEmail}>
          <Heading text="Contact Me"/>
          <div className="contact_form_group">
            <input className="contact_form_input contact_form_input-name" type="text" name="name" placeholder="Your name *" required/>
            <input className="contact_form_input contact_form_input-email" type="email" name="email" placeholder="Your email *" required/>
          </div>
          <input className="contact_form_input contact_form_input-subject" type="text" name="subject" placeholder="Subject (optional)" />
          <textarea className="contact_form_input contact_form_input-message" name="message" placeholder="Message *" required/>
          <div className="contact_form_send-block">
            <p className="text-muted">Or email me directly at <a className="accent-link" href="mailto:arseniy.pomazkov@gmail.com">arseniy.pomazkov@gmail.com</a></p>
            <a className="accent-link small-screen" href="mailto:arseniy.pomazkov@gmail.com">arseniy.pomazkov@gmail.com</a>
            <button className="animated-button" type="submit" value="Send">Send</button>
          </div>
        </form>
        <div className="contact_map">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={'pk.eyJ1IjoiYXJzZW5peXBvbSIsImEiOiJja2wzdmNvZDEwOGRqMm5uMWdyMW51cHEyIn0.ELG3WRYugmrl5w7lqtTCcA'}
            mapStyle="mapbox://styles/arseniypom/ckqi48mpz074417nxee4dyidl"
            onViewportChange={viewport => {
              setViewport(viewport)
            }}
          >
            <Marker
              latitude={44.787197}
              longitude={20.457273}>
                <img className="contact_map_img" src={markerImg} alt="marker" />
            </Marker>
          </ReactMapGL>
        </div>
      </div>
    </section>
  )
}

export default Contact;
