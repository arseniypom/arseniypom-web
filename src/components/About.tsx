import React from 'react';
import Heading from './Heading';
import myImg from '../images/about.png';

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about">
        <div className="about_text">
          <Heading text="About Me" />
          <p>Hello! My name is Arseniy Pomazkov and I am a web developer based in Moscow, Russia. I specialize in building front-end (and occasionally back-end) for different on-line services and applications.</p>
          <p>Currently working as an engineer at <a className="accent-link" href="https://www.vtb.com/o-banke/" target="_blank" rel="noreferrer">VTB</a> – a global provider of financial service – I am focused on building helpful, good-looking and customer-centred products.</p>
        </div>
        <div className="about_img">
          <img src={myImg} alt="me" />
        </div>
      </div>
    </section>
  )
}

export default About;
