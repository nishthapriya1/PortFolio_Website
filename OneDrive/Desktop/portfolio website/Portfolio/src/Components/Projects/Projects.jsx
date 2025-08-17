import React from "react";
import ProjectCard from "./ProjectCard";



const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <div>
        <ProjectCard
          title="E-Commerce and Inventory Stock Management System"
            main="Smart Stockers is a unified e-commerce storefront and inventory stock management system designed for real‑time tracking, automatic reorder alerts. It ensures accurate stock levels across platforms and prevents overselling by automating stock updates and purchase orders"
            sourceCode="https://github.com/nishthapriya1/Smartstocker1"
        />
           
        </div>
        <div>
        
        <ProjectCard
            title="Code Reviewer"
            Image="../../assets/code_reviewer"
          main="A responsive web app leveraging React for the front-end interface and Node.js with Express for backend services, integrating Gemini 2.0 Flash for advanced AI-driven code analysis.
Code snippets are elegantly formatted and highlighted using Prism.js in combination with Rehype, providing clear inline feedback with line numbering and syntax coloration.
The design emphasizes accessibility and adaptability, ensuring seamless functionality across all device sizes for an optimal developer experience."
            Demo="https://code-reviewer-frontend1-mct9.onrender.com/"
            sourceCode="https://github.com/nishthapriya1/CODE_REVIEWER"
  
          />
     
          </div>
        <div>
        <ProjectCard
          title="PortFolio Website"
          main="Built my portfolio using React for a component-driven structure and seamless page navigation, combined with Tailwind CSS for fast, utility-first styling and responsive design. This stack enables clean, maintainable code and visually consistent layouts across devices"
          sourceCode="https://github.com/nishthapriya1/PortFolio_Website"

          />

        </div>
        <div>
        <ProjectCard
          title="Rock Vs Mine prediction"
          main="I developed a binary classifier using Python and scikit-learn to distinguish between underwater mines and rocks from the UCI Sonar dataset. The dataset includes 60 sonar frequency features across 208 samples, labeled as R (rock) or M (mine) 
. I implemented a logistic regression model following a standard pipeline—data loading, feature scaling, train/test splitting, and evaluation using accuracy and classification report—achieving around 91% accuracy"
          sourceCode="https://github.com/nishthapriya1/Rock-vs-Mine-"
       
          />
     
          </div>
      </div>
    </div>
  );
};

export default Projects;
