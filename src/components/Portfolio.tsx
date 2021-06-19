import React from "react";
import ProjectCard from "./ProjectCard";

import coffeeGuysImg from '../images/coffee-guys.png';
import chungKingImg from '../images/IMG_8633.jpg';
import a from '../images/3d-alphabet-A.png';
import chatImg from '../images/chat.png';
import hangmanImg from '../images/hangman.png';

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
    image: chatImg ,
    title: 'Chat',
    description: 'Online websocket chat',
    url:'https://coffee-guys.herokuapp.com/'
  },
  {
    id: 4,
    image: chungKingImg,
    title: 'Chung King express',
    description: 'Movie',
    url:'https://coffee-guys.herokuapp.com/'
  },
]

const Portfolio = () => {


  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio_heading">
        <h1>My Portfolio</h1>
        <p>Here are some of my works Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea possimus, ullam quo illum vitae rem voluptas, amet, vel sequi reprehenderit</p>
      </div>
      <div className="project-cards">
        {
          myWorks.map((proj) => {
            return <ProjectCard projectImg={proj.image} title={proj.title} description={proj.description} url={proj.url} key={proj.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Portfolio;