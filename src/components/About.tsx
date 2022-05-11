import React from 'react';
import Heading from './Heading';
import myImg from '../images/about.png';

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about">
        <div className="about_text">
          <Heading text="About Me" />
          <p>Hello! My name is Arseniy Pomazkov and I am a web developer currently based in Istanbul, Turkey. I specialize in building front-end (and occasionally back-end) for different services and applications.</p>
          <p>Currently working as a frontend engineer at <a className="accent-link" href="https://amai.io/" target="_blank" rel="noreferrer">AMAI</a> – an innovative provider of ultra realistic text-to-speech voice engines – I am focused on building <span style={{color:"#4EA8DE"}}>helpful</span>, <span style={{color:"#5E60CE"}}>good-looking</span> and <span style={{color:"#6930C3"}}>customer-centred</span> SaaS products.</p>
        </div>
        <div className="about_img">
          <img src={myImg} alt="me" />
        </div>
      </div>
    </section>
  )
}

export default About;
