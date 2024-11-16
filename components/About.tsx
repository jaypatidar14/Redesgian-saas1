"use client";
import React from "react";
import Footer from "./Footer";
import Story from "./Story";
// import Main from "./Main";
import Main from "./Main";
import TeamGrid from "./TeamExperts";
import WhatWeDo from "./WhatWeDo";
import StepsAnimation from "./HowItWorks";
// import Navbar from "./Navbar";
const About: React.FC = () => {
  return (
    <div className="bg-white  dark:bg-gray-900 text-gray-800 dark:text-gray-200 ">
      
      {/* <Navbar/> */}
      <div className="pt-24 bg-black"><Main /></div>
      
      <Story />
      <WhatWeDo />
      <TeamGrid />
      <StepsAnimation />
      <Footer />
    </div>
  );
};

export default About;
