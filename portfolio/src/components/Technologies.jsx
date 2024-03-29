import React from "react";

const Technologies = () => {
  return (
    <div className="m-auto w-8/12 mt-16">
        <h2 className= "font-bold text-3xl text-center mb-6">Technologies I Use</h2>
        <div className="flex flex-wrap justify-center">
            <div className= "bg-black w-20 h-20 text-white rounded-lg m-2 grow md:w-40 md:h-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <p className= "text-center font-bold text-2xl align-middle mt-6 md:text-4xl md:mt-14">PHP</p>
            </div>

            <div className= "bg-yellow w-20 h-20 text-black rounded-lg m-2 grow md:w-40 md:h-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <p className= "text-center font-bold text-4xl align-middle mt-6 md:text-4xl md:mt-14">JS</p>
            </div>

            <div className= "bg-black w-20 h-20 text-white rounded-lg m-2 grow md:w-40 md:h-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <p className= "text-center font-bold text-2xl align-middle mt-6 md:text-4xl md:mt-14">HTML</p>
            </div>

            <div className= "bg-gray w-20 h-20 text-black rounded-lg m-2 grow md:w-40 md:h-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <p className= "text-center font-bold text-2xl align-middle mt-6 md:text-4xl md:mt-14">SQL</p>
            </div>

            <div className= "bg-green w-20 h-20 text-black rounded-lg m-2 grow md:w-40 md:h-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <p className= "text-center font-bold text-2xl align-middle mt-6 md:text-4xl md:mt-14">CSS</p>
            </div>

            <div className= "bg-black w-20 h-20 text-white rounded-lg m-2 grow md:w-40 md:h-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <p className= "text-center font-bold text-2xl align-middle mt-6 md:text-4xl md:mt-14">REACT</p>
            </div>

            <div className= "bg-black w-20 h-20 text-white rounded-lg m-2 grow md:w-40 md:h-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <p className= "text-center font-bold text-2xl align-middle mt-6 md:text-4xl md:mt-14">C#</p>
            </div>
        </div>
    </div>
  );
};

export default Technologies;
