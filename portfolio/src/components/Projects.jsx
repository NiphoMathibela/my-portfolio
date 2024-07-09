import React from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => {

  const projectsArray = [
    {
      title: "My Portfolio",
      description: "A personal website that showcases my skills and experience as a full-stack developer. The website should serve as an online portfolio, attracting potential clients and employers while demonstrating my proficiency in front-end and back-end development.",
      tech: "React, TailwindCSS, NodeJS",
      url: "https://nipho-mathibela.onrender.com/",
      git: "https://github.com/NiphoMathibela/my-portfolio.git",
      img: "https://github.com/NiphoMathibela/my-portfolio/blob/master/portfolio/src/assets/Portfolio.png?raw=true"
    },
    {
      title: "Lomaway Website",
      description: " This project aims to create a user-friendly and informative website for a construction company. The website should effectively attract potential clients, showcase the company's capabilities, and establish trust in its expertise.",
      tech: "HTML, CSS, JavaScript",
      url: "https://lomaway.onrender.com/",
      git: "https://github.com/NiphoMathibela/Lomaway.git",
      img: "https://github.com/NiphoMathibela/my-portfolio/blob/master/portfolio/src/assets/Lomaway.png?raw=true"
    },
    {
      title: "UpWheel",
      description: "Work in progress...Upwheel is a powerful, open-source car buying and selling platform built for passionate car enthusiasts. Ditch the impersonal classifieds and join a community where buying and selling is fueled by a shared love for the open road.",
      tech: "React, TailwindCSS, ASP.NET, C#, RestfulAPI",
      url: "https://upwheel.onrender.com/",
      git: "https://github.com/NiphoMathibela/CarBuyingApi",
      img: "https://github.com/NiphoMathibela/my-portfolio/blob/master/portfolio/src/assets/UpWheel%20Screenshot.png?raw=true"
    },
    {
      title: "Khumalo Krafts",
      description: "A thriving digital hub fostering collaboration and innovation for a future of sustainable agriculture powered by renewable energy.",
      url: "https://st10460431.azurewebsites.net/",
      git: "https://github.com/NiphoMathibela/KhumaloCrafts_WebApp.git",
      img: ""
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
