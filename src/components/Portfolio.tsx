import React from "react";
import ProjectCard from "./ProjectCard";
import Heading from './Heading';

import {
  homebuddy,
  coffeeGuysImg,
  hangmanImg,
  indiepub
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
    image: coffeeGuysImg,
    title: 'CoffeeGuys',
    description: 'Online coffee shop',
    url:'https://coffee-guys.herokuapp.com/',
  },
  {
    id: 3,
    image: indiepub,
    title: 'Indiepub',
    description: 'Innovative text-to-audiobook converter',
    url:'https://indiepub.ai/',
    className: 'indiepub',
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
              return <ProjectCard projectImg={proj.image} title={proj.title} description={proj.description} url={proj.url} className={proj.className || ""}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio;