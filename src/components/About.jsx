import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-20 leading-9">
          I am a self-taught front end developer, who started learning front end
          development in the past months. In my free time I started learning
          about front end development and fell in love. Since then I took
          multiple courses and learned every day so that I can fulfill my dream
          to become a fulltime front end developer.
        </p>
        <br />

        <p className="text-xl leading-9 mt-2">
          I have a passion for football and gaming. When I'm not learning or
          working on my projects, I'm usually doing one of the two activities
          mentioned.
        </p>
      </div>
    </div>
  );
};

export default About;
