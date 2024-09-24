import { BorderBeam } from "@/components/magicui/border-beam";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-stretch gap-11 py-6 bg-transparent ">
      <div className="relative flex h-[500px] w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
  
        <div className="relative bg-[url('/bg/IMG_2419.JPG')]  bg-cover bg-center w-full h-full"></div>
        <BorderBeam size={350} duration={12} delay={9} />
      </div>
      <div className="flex flex-col gap-6"><h1 className="uppercase text-6xl font-bold">About Me</h1><p className="w-[500px]">Looking for a dynamic and progressive software firm where I can use my
technical skills & creativity to perform challenging jobs and want to learn
new things.</p></div>
    </div>
  );
};

export default AboutMe;
