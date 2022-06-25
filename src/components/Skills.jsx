import React from "react";
import githubImg from "../assets/github.png";
import cssImg from "../assets/css.png";
import htmlImg from "../assets/html.png";
import javascriptImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: htmlImg,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssImg,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: javascriptImg,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: tailwindImg,
      title: "Tailwind",
      style: "shadow-cyan-700",
    },
    {
      id: 6,
      src: githubImg,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <p className="text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-lg">These are the skills i've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
