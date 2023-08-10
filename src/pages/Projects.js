
import React from 'react';
import './style/Projects.css';  // Importing a CSS file for styling

const projectData = [
    { id: 1, name: "Project 1", description: "Description for Project 1", imageUrl: "path/to/image1.jpg" },
    { id: 2, name: "Project 2", description: "Description for Project 2", imageUrl: "path/to/image2.jpg" },
    { id: 3, name: "Project 3", description: "Description for Project 3", imageUrl: "path/to/image3.jpg" },
    { id: 4, name: "Project 4", description: "Description for Project 4", imageUrl: "path/to/image4.jpg" },
    { id: 5, name: "Project 5", description: "Description for Project 5", imageUrl: "path/to/image5.jpg" },
    { id: 6, name: "Project 6", description: "Description for Project 6", imageUrl: "path/to/image6.jpg" },
];
    
function Projects() {
    return (
        <div className="projects-container">
            {projectData.map((project) => (
                <div key={project.id} className="project-item">
                    <img src={project.imageUrl} alt={project.name} className="project-image" />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;

