import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const projectsArray = [
    {
        title: "My Portfolio",
        description: "",
        url: "https://nipho-mathibela.onrender.com/",
        img: "https://github.com/NiphoMathibela/my-portfolio/blob/master/portfolio/src/assets/Portfolio.png?raw=true"
    },
    {
      title: "Lomaway Website",
        description: "Comapny website for a constructtio comapany",
        url: "https://lomaway.onrender.com/",
        img: "https://github.com/NiphoMathibela/my-portfolio/blob/master/portfolio/src/assets/Lomaway.png?raw=true"
    }
]

  return (
    <>
      <h2 className="font-bold text-3xl text-center mt-16">My Recent Work</h2>
      <div className="m-auto w-8/12 mt-6 mb-6 flex flex-wrap justify-center">
        {projectsArray.map(project => <ProjectCard title= {project.title} img= {project.img} url= {project.url}/>)}
      </div>
    </>
  );
};

export default Projects;
