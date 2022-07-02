import React from "react";
import todoApp from "../assets/portfolio/to-do-app.jpg";
import googleClone from "../assets/portfolio/google-clone.jpg";
import netflixClone from "../assets/portfolio/netflix-clone.jpg";
import bmiCalc from "../assets/portfolio/bmi-calc.jpg";
import jsClock from "../assets/portfolio/js-clock.jpg";
import myPortfolio from "../assets/portfolio/portfolio.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: netflixClone,
      title: "Netflix-Clone",
      srcUrlD: "https://netflix-clone-jn.web.app/",
      srcUrlG: "https://github.com/Jayzumen/netflix-clone",
      description: "A Netflix-Clone build with React, TailwindCss and Firebase",
    },
    {
      id: 2,
      src: todoApp,
      title: "To-Do-App",
      srcUrlD: "https://to-do-app-jn.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/to-do-app",
      description: "This is a To-Do-App build with Javascript.",
    },

    {
      id: 3,
      src: myPortfolio,
      title: "My Portfolio",
      srcUrlD: "https://jn-reinhardt.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/react-portfolio",
      description: "This is my Portfolio build with React and Tailwind",
    },
    {
      id: 4,
      src: jsClock,
      title: "Javascript Clock",
      srcUrlD: "https://js-clock-jn.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/js-clock",
      description: "This is an Clock build with Javascript and CSS",
    },
    {
      id: 5,
      src: googleClone,
      title: "Google Clone",
      srcUrlD: "https://google-clone-jn.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/google-clone",
      description: "This is a Google-Clone build with HTML, CSS and JS",
    },
    {
      id: 6,
      src: bmiCalc,
      title: "BMI-Calculator",
      srcUrlD: "https://bmi-calc-jn.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/bmi-calc-js",
      description: "This is an BMI-Calculator build with HTML, CSS and JS",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center justify-center">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-lg">Check out my work below</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12 sm:p-0">
          {projects.map(({ id, src, title, srcUrlD, srcUrlG, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={"Screenshot" + title}
                title={title}
                className="rounded-md duration-300 hover:scale-105"
              />
              <p className="text-xl mx-auto my-3 text-center border-b-2 border-gray-500">
                {description}
              </p>
              <div className="flex items-center justify-center">
                <a href={srcUrlD} target="_blank" rel="noreferrer">
                  <button className=" text-lg px-8 py-1 m-5 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={srcUrlG} target="_blank" rel="noreferrer">
                  <button className=" text-lg px-8 py-1 m-5 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
