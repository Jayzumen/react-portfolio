import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import pizzaShop from "../assets/portfolio/pizza-shop.jpg";
import myPortfolio from "../assets/portfolio/portfolio.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
      srcUrlD: "https://jn-reinhardt.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/The-Simon-Game",
      description: "This project is build with react and tailwind.",
    },
    {
      id: 2,
      src: installNode,
      srcUrlD: "https://jn-reinhardt.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/The-Simon-Game",
      description: "This is a project build with react and tailwind",
    },
    {
      id: 3,
      src: navbar,
      srcUrlD: "https://jn-reinhardt.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/The-Simon-Game",
      description: "This is a project build with react and tailwind",
    },
    {
      id: 4,
      src: reactParallax,
      srcUrlD: "https://jn-reinhardt.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/The-Simon-Game",
      description: "This is a project build with react and tailwind",
    },
    {
      id: 5,
      src: pizzaShop,
      srcUrlD: "https://neapolitan-pizza-shop.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/pizza-shop-html-email",
      description: "This project is a HTML-Email",
    },
    {
      id: 6,
      src: myPortfolio,
      srcUrlD: "https://jn-reinhardt.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/react-portfolio",
      description: "This is my portfolio build with react and tailwind",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:p-0">
          {projects.map(({ id, src, srcUrlD, srcUrlG, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <p className="text-xl mx-auto my-3 text-center border-b-2 border-gray-500">
                {description}
              </p>
              <div className="flex items-center justify-center">
                <a href={srcUrlD} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-2 m-5 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={srcUrlG} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-2 m-5 duration-200 hover:scale-105">
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
