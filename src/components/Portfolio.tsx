import React from "react";
import ProjectCard from "./ProjectCard";
import Heading from './Heading';

import {
  linkerImg,
  coffeeGuysImg,
  hangmanImg,
  waterDeliveryImg
} from '../images/projects-screenshots';

const myWorks = [
  {
    id: 1,
    image: linkerImg,
    title: 'LINKER',
    description: "Service to track links' statistics",
    url:'http://linker-stats.ru/'
  },
  {
    id: 2,
    image: coffeeGuysImg,
    title: 'Coffee Guys',
    description: 'Online coffee shop',
    url:'https://coffee-guys.herokuapp.com/'
  },
  {
    id: 3,
    image: waterDeliveryImg,
    title: 'Water Delivery',
    description: 'Water delivery shop & service',
    url:'http://water-deli.ru:81/'
  },
  {
    id: 4,
    image: hangmanImg,
    title: 'Hangman',
    description: 'The hangman game',
    url:'https://powerful-cove-31149.herokuapp.com/'
  }
]

const Portfolio = () => {

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="portfolio">
        <div className="portfolio_heading">
          <Heading text="My Portfolio" />
          <p>Here is a small gallery of my recent projects. Some of them were done entirely by me, others all together with developers who love coding as much as I do. Interested to know more about my work? <a className="accent-link" href="#contact">Contact me!</a></p>
        </div>
        <div className="project-cards">
          {
            myWorks.map((proj) => {
              return <ProjectCard projectImg={proj.image} title={proj.title} description={proj.description} url={proj.url} key={proj.id}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio;