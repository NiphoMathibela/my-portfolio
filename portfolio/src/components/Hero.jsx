import React from "react";
import Title from "./Title"
import DecorCard from './DecorCard'
import FrontEndCard from './FrontEndCard'

const Hero = () => {
  return (
    <div className="p-8 flex space-between h-screen">
      <Title className="" />
      <DecorCard />
      <FrontEndCard />
    </div>
  );
};

export default Hero;
