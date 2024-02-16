
import React from 'react';
import './style/Projects.css';

const projectData = [
    { id: 1, name: "Festivie", description: "All in one festival app", imageUrl: "../images/Festivie.png" },
    { id: 2, name: "Snake Fight", description: "Snake Fight 2 players", imageUrl: "../images/SnakeFight.png" },
    { id: 3, name: "Digiprof", description: "A virtual prof who is always there", imageUrl: "path/to/image3.jpg" },
    { id: 4, name: "LessonSphere", description: "Student managing and communication tool for teachers", imageUrl: "path/to/image4.jpg" },
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

