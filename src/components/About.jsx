import React from "react";

const About = () => {
  return (
    <div
      name='About'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-6xl font-bold inline border-b-4 border-gray-500'>
            About Me
          </p>
        </div>
        <p className='text-xl mt-20 leading-9'>
          Hey, I'm Jan-Niklas. I had the first contact with
          programming when I started to study "Data Science". This in
          turn wasn't much fun for me, but when I discovered frontend
          development, I was immediately hooked. Since then, I have
          used every day to improve my skills as a web developer. I
          currently work mostly with React and JavaScript but am
          always open to learn more technologies.
        </p>
        <br />

        <p className='text-xl leading-9 mt-2'>
          I have a passion for football and gaming. When I'm not
          learning or working on my projects, I'm usually doing one of
          the two activities mentioned.
        </p>
      </div>
    </div>
  );
};

export default About;
