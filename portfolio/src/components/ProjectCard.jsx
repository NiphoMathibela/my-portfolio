import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { IoLink } from "react-icons/io5";

const ProjectCard = (props) => {
  let url = props.url
  return (
    <div className="w-full sm:w-[42%] h-[460px] rounded-xl m-4 drop-shadow-4xl bg-black pointer-events-auto py-2 " onClick= {() => window.open(url, "_blank")}>
      <h3 className="font-bold text-lg text-center mb-6 text-green">{props.title}</h3>
      <img src= {props.img} alt= "Preview image of my Portfolio" className= "w-11/12 block mx-auto object-fit rounded-md max-h-[140px]"/>
      <div className="m-1 text-white text-sm mx-auto p-5">
        <p className=" h-20 my-2 overflow-y-auto ">{props.description}</p>
        <p className=" font-semibold text-base my-2 text-green">Technologies Used</p>
        <p>{props.tech}</p>
        <p className="font-semibold text-base my-2 text-green">Links</p>
        <div className="flex flex-row">
        <div className="mr-6"><IoLogoGithub size={30}/></div>
        <div><IoLink size={32}/></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
