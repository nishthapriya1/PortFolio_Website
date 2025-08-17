import React from "react";
import photo from '../../assets/photo.jpg';
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
         I’m a pre-final year Electronics and Communication Engineering student with a strong interest in software development and emerging technologies. My technical skills include full stack web development, machine learning (using Python and NumPy), and data structures and algorithms, with programming proficiency in Java and C++. I’m passionate about building practical solutions and continuously expanding my technical knowledge. As a motivated and quick learner, I’m actively seeking opportunities to contribute to real-world projects and grow in a dynamic tech environment.
        </p>
      </div>
      <div>
        <img className="w-64 h-64 object-cover rounded-lg" src={photo} alt="" />
      </div>
    </div>
  );
};

export default Home;
