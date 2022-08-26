import React from "react";

interface ProjectCardProps {
  projectImg: string;
  title: string;
  description: string;
  url: string;
  className: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({projectImg, title, description, url, className}) => {
  return (
      <a href={url} target="_blank" rel="noreferrer" className={`project-cards_item`}>
        <img src={projectImg} alt="project" className={`project-cards_item_img ${className}`} />
        <div className="project-cards_item_description">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </a>
  )
}

export default ProjectCard;