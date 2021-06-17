import React from "react";
import ProjectCard from "./ProjectCard";

import coffeeGuysImg from '../images/coffee-guys.png';
import chungKingImg from '../images/IMG_8633.jpg';
import a from '../images/3d-alphabet-A.png';
import chatImg from '../images/chat.png';

const myWorks = [
  {
    id: 1,
    image: coffeeGuysImg,
    title: 'Coffee Guys',
    description: 'Online coffee shop'
  },
  {
    id: 2,
    image: chungKingImg,
    title: 'Chung King express',
    description: 'Movie'
  },
  {
    id: 3,
    image: chatImg ,
    title: 'Chat',
    description: 'Online websocket chat'
  },
  {
    id: 4,
    image: coffeeGuysImg,
    title: 'Coffee Guys',
    description: 'Online coffee shop'
  }
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
            return <ProjectCard projectImg={proj.image} title={proj.title} description={proj.description} key={proj.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Portfolio;