import React from "react";
import todoApp from "../assets/portfolio/to-do-app.jpg";
import netflixClone from "../assets/portfolio/netflix-clone.jpg";
import weatherApp from "../assets/portfolio/weather-app.jpg";
import jsClock from "../assets/portfolio/js-clock.jpg";
import noteTakerApp from "../assets/portfolio/note-taker.jpg";
import pokedex from "../assets/portfolio/pokedex.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: netflixClone,
      title: "Netflix-Clone",
      srcUrlD: "https://jn-n-clone.netlify.app",
      srcUrlG: "https://github.com/Jayzumen/next-netflix-clone",
      description:
        "A Netflix-Clone build with Nextjs, Tailwind CSS and Firebase",
    },
    {
      id: 2,
      src: noteTakerApp,
      title: "NoteTaker",
      srcUrlD: "https://note-taker-jn.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/NoteTaker",
      description:
        "This is a NoteTaker App build with React and TypeScript",
    },
    {
      id: 3,
      src: todoApp,
      title: "To-Do-App",
      srcUrlD: "https://to-do-app-jn.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/to-do-app",
      description: "This is a To-Do-App build with Javascript.",
    },
    {
      id: 4,
      src: weatherApp,
      title: "Weather-App",
      srcUrlD: "https://jn-weather-app.netlify.app",
      srcUrlG: "https://github.com/Jayzumen/react-weather",
      description:
        "This is an Weather App build with React and Tailwind CSS",
    },
    {
      id: 5,
      src: jsClock,
      title: "Javascript Clock",
      srcUrlD: "https://js-clock-jn.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/js-clock",
      description: "This is an Clock build with Javascript and CSS",
    },
    {
      id: 6,
      src: pokedex,
      title: "Pokédex App",
      srcUrlD: "https://pokedex-jn.netlify.app/",
      srcUrlG: "https://github.com/Jayzumen/next-pokemon",
      description: "This is a Pokédex build with Nextjs and Tailwind",
    },
  ];

  return (
    <div
      name='Projects'
      className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
      <div className='mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4'>
        <div className='justify-center pb-8 text-center'>
          <p className='inline border-b-4 border-gray-500 text-6xl font-bold'>
            Projects
          </p>
          <p className='py-6 text-lg'>Check out my work below</p>
        </div>
        <div className='grid gap-6 px-12 sm:grid-cols-2 sm:p-0 md:grid-cols-3 lg:grid-cols-3'>
          {projects.map(
            ({ id, src, title, srcUrlD, srcUrlG, description }) => (
              <div
                key={id}
                className='overflow-hidden rounded-lg shadow-md shadow-gray-600'>
                <img
                  src={src}
                  alt={"Screenshot" + title}
                  title={title}
                  className='rounded-md duration-300 hover:scale-105'
                />
                <p className='mx-auto my-3 border-b-2 border-gray-500 text-center text-xl'>
                  {description}
                </p>
                <div className='flex items-center justify-center'>
                  <a href={srcUrlD} target='_blank' rel='noreferrer'>
                    <button className=' m-5 px-8 py-1 text-lg duration-200 hover:scale-105'>
                      Demo
                    </button>
                  </a>
                  <a href={srcUrlG} target='_blank' rel='noreferrer'>
                    <button className=' m-5 px-8 py-1 text-lg duration-200 hover:scale-105'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
