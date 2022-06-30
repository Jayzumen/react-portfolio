import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 w-full text-white text-center">
      <ul className="flex justify-center">
        <li>
          <a
            href="https://www.linkedin.com/in/jan-niklas-reinhardt/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={40}
              className="m-4 hover:scale-110 duration-500"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Jayzumen"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={40} className="m-4 hover:scale-110 duration-500" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
