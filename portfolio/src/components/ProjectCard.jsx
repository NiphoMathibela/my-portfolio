import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="w-72 h-72 rounded-xl bg-black">
      <h3 className= "font-bold text-3xl text-center mb-6">{props.title}</h3>
    </div>
  );
};

export default ProjectCard;
