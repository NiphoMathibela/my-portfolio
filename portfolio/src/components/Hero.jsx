import React from "react";
import Title from "./Title"
import DecorCard from './DecorCard'
import FrontEndCard from './FrontEndCard'

const Hero = () => {
  return (
    <div className="p-8 md:flex justify-between h-screen">
      <Title className="" />
      <DecorCard />
      <FrontEndCard />
    </div>
  );
};

export default Hero;
