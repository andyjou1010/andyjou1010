import Projects from './pages/Projectst';
import Demo from './pages/Demo';
import AboutMe from './pages/AboutMe';

const projectData = [
    { id: 1, name: "Project 1", description: "Description for Project 1", imageUrl: "path/to/image1.jpg" },
    { id: 2, name: "Project 2", description: "Description for Project 2", imageUrl: "path/to/image2.jpg" },
    { id: 3, name: "Project 3", description: "Description for Project 3", imageUrl: "path/to/image3.jpg" },
    { id: 4, name: "Project 4", description: "Description for Project 4", imageUrl: "path/to/image4.jpg" },
    { id: 5, name: "Project 5", description: "Description for Project 5", imageUrl: "path/to/image5.jpg" },
    { id: 6, name: "Project 6", description: "Description for Project 6", imageUrl: "path/to/image6.jpg" },
];

const routes = [
    { path: "/", name: "Home" }, 
    { path: "/projects", name: "Projects", component: <Projects /> },
    { path: "/demo", name: "Demo", component: <Demo /> },
    { path: "/about-me", name: "About Me", component: <AboutMe /> },
];

export default {
    projectData,
    routes
};
