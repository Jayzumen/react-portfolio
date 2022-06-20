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
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            I'm{" "}
            <p className="text-5xl sm:text-7xl font-bold max-w-2xl text-cyan-400">
              Jan-Niklas Reinhardt
            </p>{" "}
            a Front End Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-lg">
            I am a self-taught frontend developer, who started learning frontend
            development in the past few months. I started studying "Data
            Science" in 2020 and this got me into programming.In my freetime I
            started learning about frontend development and fell in love. Since
            then I took multiple courses and learned every day so that I can
            fullfill my dream to become a fulltime frontend developer.
          </p>

          <div>
            <Link
              to="Projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="ml-2 group-hover:rotate-90 duration-300">
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
