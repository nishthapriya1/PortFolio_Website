import React from "react";
const ProjectCard = ({ title, main ,sourceCode,Demo}) => {
  return (
    <div className="p-3 h-full md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-auto px-4 py-2">
          {Demo && (
          <a href={Demo} target="_blank" rel="noopener noreferrer">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-full">
              Demo Link
            </button>
          </a>
        )}
        <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-full">
                  Source Code
                </button>
        </a>
        
                </div>
    </div>
  );
};

export default ProjectCard;
