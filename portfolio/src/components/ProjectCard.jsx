import React from "react";

const ProjectCard = (props) => {
  let url = props.url
  return (
    <div className="w-full sm:w-[42%] h-96 rounded-xl m-4 drop-shadow-4xl bg-black pointer-events-auto overflow-scroll" onClick= {() => window.open(url, "_blank")}>
      <h3 className="font-bold text-lg text-center mb-6 text-green">{props.title}</h3>
      <img src= {props.img} alt= "Preview image of my Portfolio" className= "w-11/12 block mx-auto object-fit rounded-md"/>
      <div className="m-1 text-white text-sm mx-auto p-5">
        <p>{props.description}</p>
        <p className=" font-semibold text-base my-3 text-green">Technologies Used</p>
        <p>{props.tech}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
