import React from "react";

const Technologies = () => {
  return (
    <div className="m-auto w-8/12 mt-16">
        <h2 className= "font-bold text-3xl text-center mb-6">Technologies I Use</h2>
        <div className="flex flex-wrap justify-center">
            <div className= "bg-black w-40 h-40 text-white rounded-lg m-2">
                <p className= "text-center font-bold text-4xl mt-14">PHP</p>
            </div>

            <div className= "bg-yellow w-40 h-40 text-black rounded-lg m-2 shrink">
                <p className= "text-center font-bold text-4xl mt-14">JS</p>
            </div>

            <div className= "bg-black w-40 h-40 text-white rounded-lg m-2 shrink">
                <p className= "text-center font-bold text-4xl mt-14">HTML</p>
            </div>

            <div className= "bg-gray w-40 h-40 text-black rounded-lg m-2 shrink">
                <p className= "text-center font-bold text-4xl mt-14">SQL</p>
            </div>

            <div className= "bg-green w-40 h-40 text-black rounded-lg m-2 shrink">
                <p className= "text-center font-bold text-4xl mt-14">CSS</p>
            </div>

            <div className= "bg-black w-40 h-40 text-white rounded-lg m-2 shrink">
                <p className= "text-center font-bold text-4xl mt-14">REACT</p>
            </div>
        </div>
    </div>
  );
};

export default Technologies;
