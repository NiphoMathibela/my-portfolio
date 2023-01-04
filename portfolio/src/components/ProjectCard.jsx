import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="max-w-[32%] h-44 rounded-xl bg-black">
      <h3 className= "font-bold text-xl text-center mb-6 text-white">{props.title}</h3>
    </div>
  );
};

export default ProjectCard;
