import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiNumpy,SiPandas } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl"> */}
            <FaHtml5 color="#E34F26" size={50} />
          {/* </span> */}
            <RiTailwindCssFill size={50} />
            <FaReact color="#61DAFB" size={50} />
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
          <SiNumpy size={50} />
          <SiPandas color="white" size={50}/>

        </div>
        <div>
          <div className="flex flex-wrap gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center w-96">
            <span className="text-white">
              <h2 className="text-2xl leading-tight">Programming Languages</h2>
                <p className="text-xl leading-tight font-thin">
                 C++, Java, Javascript, Python, C
              </p>
            </span>
          </div>
           <div className="flex flex-wrap gap-10 bg-slate-950 bg-opacity-45 mt-4 roundy6ed-lg p-4 items-center w-96">
            <span className="text-white">
              <h2 className="text-2xl leading-tight">Web Development</h2>
                <p className="text-xl leading-tight font-thin">
                 Html, CSS, Javascript, React.js, Redux toolKit, MongoDB , Node.js, Express.js, JWT Token, Cookies, Redis
              </p>
            </span>
          </div>
          <div className="flex flex-wrap gap-10 bg-slate-950 bg-opacity-45 mt-4 roundy6ed-lg p-4 items-center w-96">
            <span className="text-white">
              <h2 className="text-2xl leading-tight">Machine Learning</h2>
                <p className="text-xl leading-tight font-thin">
                Python, NumPy, Pandas, Scikit-learn, Supervised Machine Learning
              </p>
            </span>
          </div>
           <div className="flex flex-wrap gap-10 bg-slate-950 bg-opacity-45 mt-4 roundy6ed-lg p-4 items-center w-96">
            <span className="text-white">
              <h2 className="text-2xl leading-tight">Computer Fundamentals</h2>
                <p className="text-xl leading-tight font-thin">
                 Data Structures and Algorithms, Object-Oriented Programming
              </p>
            </span>
          </div>
           <div className="flex flex-wrap gap-10 bg-slate-950 bg-opacity-45 mt-4 roundy6ed-lg p-4 items-center w-96">
            <span className="text-white">
              <h2 className="text-2xl leading-tight"> Interpersonal</h2>
                <p className="text-xl leading-tight font-thin">
                Leadership, Teamwork, Event Management, Poetry
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
