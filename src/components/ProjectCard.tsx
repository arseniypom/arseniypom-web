import React from "react";

interface ProjectCardProps {
  projectImg: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({projectImg, title, description}) => {
  return (
    <div className="project-cards_item">
      <img src={projectImg} alt="project" className="project-cards_item_img" />
      <div className="project-cards_item_description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;