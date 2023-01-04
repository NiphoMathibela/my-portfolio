import React from "react";
import Title from "./Title"
import DecorCard from './DecorCard'
import FrontEndCard from './FrontEndCard'

const Hero = () => {
  return (
    <div className="h-full p-8 mb-10 md:flex md:justify-between">
      <Title className="" />
      <DecorCard />
      <FrontEndCard />
    </div>
  );
};

export default Hero;
