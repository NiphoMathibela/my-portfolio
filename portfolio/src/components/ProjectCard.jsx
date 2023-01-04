import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="w-40 h-40 rounded-xl bg-black m-4">
      <h3 className= "font-bold text-xl text-center mb-6 text-white">{props.title}</h3>
    </div>
  );
};

export default ProjectCard;
