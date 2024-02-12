import React from "react";

const ProjectCard = (props) => {
  let url = props.url
  return (
    <div className="w-full sm:w-[42%] h-[405px] rounded-xl m-4 drop-shadow-4xl bg-black pointer-events-auto py-2 " onClick= {() => window.open(url, "_blank")}>
      <h3 className="font-bold text-lg text-center mb-6 text-green">{props.title}</h3>
      <img src= {props.img} alt= "Preview image of my Portfolio" className= "w-11/12 block mx-auto object-fit rounded-md max-h-[140px]"/>
      <div className="m-1 text-white text-sm mx-auto p-5">
        <p className=" h-20 my-2 overflow-y-auto ">{props.description}</p>
        <p className=" font-semibold text-base my-2 text-green">Technologies Used</p>
        <p>{props.tech}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
