import React from "react";

const ProjectCard= ({title, description, technologies, link})=>{
return(
    <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <p><strong>Technologies:</strong> {technologies}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
</div>
)}

export default ProjectCard;