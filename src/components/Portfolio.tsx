import React from "react";
import ProjectCard from "./ProjectCard";
import Heading from './Heading';

import {
  homebuddy,
  indiepub,
  vtbApi
} from '../images/projects-screenshots';

const myWorks = [
  {
    id: 1,
    image: homebuddy,
    title: 'Homebuddy',
    description: "Home Improvement Helper",
    url:'https://www.homebuddy.com/',
    className: 'hb',
  },
  {
    id: 2,
    image: vtbApi,
    title: 'VTB API',
    description: "FinTech: API Portal for bank services",
    url:'https://developers.vtb.ru/',
    className: 'vtb',
  },
  {
    id: 3,
    image: indiepub,
    title: 'Indiepub',
    description: 'Innovative text-to-audiobook converter',
    url:'https://indiepub.ai/',
    className: 'indiepub',
  },
]

const Portfolio = () => {

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="portfolio">
        <div className="portfolio_heading">
          <Heading text="My Portfolio" />
          <p>Here is a small gallery of my recent projects.</p>
          <p>Interested to know more about my work? <a className="accent-link" href="#contact">Contact me!</a></p>
        </div>
        <div className="project-cards">
          {
            myWorks.map((proj) => {
              return <ProjectCard key={proj.title} projectImg={proj.image} title={proj.title} description={proj.description} url={proj.url} className={proj.className || ""}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio;