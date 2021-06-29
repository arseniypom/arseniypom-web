import React from "react";
import ProjectCard from "./ProjectCard";
import Heading from './Heading';

import {
  chatImg,
  coffeeGuysImg,
  hangmanImg,
  chungKingImg,
  todolistImg
} from '../images/projects-screenshots';

const myWorks = [
  {
    id: 1,
    image: coffeeGuysImg,
    title: 'Coffee Guys',
    description: 'Online coffee shop',
    url:'https://coffee-guys.herokuapp.com/'
  },
  {
    id: 2,
    image: hangmanImg,
    title: 'Hangman',
    description: 'The hangman game',
    url:'https://powerful-cove-31149.herokuapp.com/'
  },
  {
    id: 3,
    image: chatImg,
    title: 'Chat',
    description: 'Online websocket chat',
    url:'https://coffee-guys.herokuapp.com/'
  },
  {
    id: 4,
    image: todolistImg,
    title: 'To Do',
    description: 'A to-do list with basic functionality',
    url:'https://still-cliffs-08651.herokuapp.com/'
  }
]

const Portfolio = () => {


  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio">
        <div className="portfolio_heading">
          <Heading text="My Portfolio" />
          <p>Here is small gallery of my recent projects. Some of them were done entirely by me, others all together with passionate developers like me. Interested to know more about my work? <a className="accent-link" href="#contact">Contact me!</a></p>
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