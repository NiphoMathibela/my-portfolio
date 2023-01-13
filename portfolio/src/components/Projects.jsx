import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <h2 className="font-bold text-3xl text-center mt-16">My Recent Work</h2>
      <div className="m-auto w-8/12 mt-6 mb-6 flex flex-wrap justify-center">
        <ProjectCard title="A Project" />
        <ProjectCard title="A Project" />
        <ProjectCard title="A Project" />
        <ProjectCard title="A Project" />
      </div>
    </>
  );
};

export default Projects;
