import React from "react";
import AboutImg from "../../assets/laptop.jpg"
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 I build intuitive, responsive user interfaces using HTML, CSS, and JavaScript (often with frameworks like React ). I focus on crafting seamless user experiences—designing layouts, interactive components, and polished displays that users engage with directly in their browsers
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
                  
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  On the server side, I handle business logic, databases, APIs, authentication, and server infrastructure. I ensure that web applications efficiently process requests, store and retrieve data securely, and deliver robust functionality behind the scenes 
                </p>
              </span>
            </div>
              <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Entry-Level ML Engineer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I build classical machine learning models with Python and scikit-learn, focusing on linear regression for predicting continuous outcomes and logistic regression for binary or multiclass classification. I follow a clean end‑to‑end pipeline—data loading, train/test splitting, .fit()/.predict() routines.
                  </p>
              </span>
            
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
