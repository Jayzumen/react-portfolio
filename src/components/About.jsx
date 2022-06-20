import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a self-taught frontend developer, who started learning frontend
          development in the past few months. I started studying "Data Science"
          in 2020 and this got me into programming.In my freetime I started
          learning about frontend development and fell in love. Since then I
          took multiple courses and learned every day so that I can fullfill my
          dream to become a fulltime frontend developer.
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque enim
          excepturi eius, quos quisquam voluptatibus itaque aperiam qui sequi ea
          odio. Quod voluptatum odit aspernatur, consequatur harum culpa non a.
        </p>
      </div>
    </div>
  );
};

export default About;
