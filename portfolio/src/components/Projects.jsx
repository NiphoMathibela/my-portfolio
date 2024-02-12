import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const projectsArray = [
    {
      title: "My Portfolio",
      description: "A personal website that showcases my skills and experience as a full-stack developer. The website should serve as an online portfolio, attracting potential clients and employers while demonstrating my proficiency in front-end and back-end development.",
      tech: "React, TailwindCSS, NodeJS",
      url: "https://nipho-mathibela.onrender.com/",
      img: "https://github.com/NiphoMathibela/my-portfolio/blob/master/portfolio/src/assets/Portfolio.png?raw=true"
    },
    {
      title: "Lomaway Website",
      description: " This project aims to create a user-friendly and informative website for a construction company. The website should effectively attract potential clients, showcase the company's capabilities, and establish trust in its expertise.",
      tech: "HTML, CSS, JavaScript",
      url: "https://lomaway.onrender.com/",
      img: "https://github.com/NiphoMathibela/my-portfolio/blob/master/portfolio/src/assets/Lomaway.png?raw=true"
    }
  ]

  return (
    <>
      <h2 className="font-bold text-3xl text-center mt-16">My Recent Work</h2>
      <div className="m-auto w-[80%] sm:w-9/12 mt-6 mb-6 flex flex-wrap justify-center">
        {projectsArray.map(project => <ProjectCard title={project.title} img={project.img} url={project.url} description={project.description} tech={project.tech} />)}
      </div>
    </>
  );
};

export default Projects;
