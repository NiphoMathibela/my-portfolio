import React from "react";

const ProjectCard = (props) => {
  let url = props.url
  return (
    <div className="w-44 h-44 rounded-xl m-4 drop-shadow-4xl bg-black pointer-events-auto" onClick= {() => window.open(url, "_blank")}>
      <h3 className="font-bold text-xl text-center mb-6 text-white">{props.title}</h3>
      <img src= {props.img} alt= "Preview image of my Portfolio" className= "w-11/12 block mx-auto object-fit"/>
    </div>
  );
};

export default ProjectCard;
