import React from "react";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-72 bg-white">
      <div className="customContainer h-full flex justify-between items-center ">
        <div className="w-2/4">
          <img className="w-28 h-8" src="/images/logo.png" alt=""></img>
          <p className="text-gray-700 text-base font-normal leading-8">
            © Copyright 2021.{" "}
          </p>
        </div>

        <div className="w-1/4 flex justify-evenly items-center">
          <div
            style={{
              background: "rgb(59, 89, 152)",
            }}
            className="w-10 h-10 rounded-full text-2xl leading-6 text-white  flex justify-center items-center cursor-pointer"
          >
            <FaFacebook />
          </div>
          <div
            style={{
              background: "rgb(29, 161, 242)",
            }}
            className="w-10 h-10 rounded-full text-2xl leading-6 text-white  flex justify-center items-center cursor-pointer"
          >
            <FaTwitter />
          </div>
          <div
            style={{
              background: "rgb(0, 119, 181)",
            }}
            className="w-10 h-10 rounded-full text-2xl leading-6 text-white  flex justify-center items-center cursor-pointer"
          >
            <FaLinkedin />
          </div>
          <div
            style={{
              background: "rgb(202, 49, 116)",
            }}
            className="w-10 h-10 rounded-full text-2xl leading-6 text-white  flex justify-center items-center cursor-pointer"
          >
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
