import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
       md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm{" "}
            <p className="text-6xl sm:text-8xl font-bold max-w-2xl text-cyan-400">
              Jan-Niklas Reinhardt
            </p>{" "}
            a Front End Developer
          </h2>

          <div className="flex flex-wrap">
            <Link
              to="Projects"
              smooth
              duration={500}
              className="group text-white text-xl w-fit px-12 py-5 mt-8 mr-4 flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="ml-4 group-hover:rotate-90 duration-500">
                <FaArrowRight />
              </span>
            </Link>

            <Link
              to="Contact"
              smooth
              duration={500}
              className="group text-white text-xl w-fit px-10 py-5 mt-4 sm:mt-8 md:mt-8 lg:mt-8 flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer"
            >
              Contact Me!
              <span className="ml-4 group-hover:rotate-90 duration-500">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
