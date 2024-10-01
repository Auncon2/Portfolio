import { BorderBeam } from "@/components/magicui/border-beam";
import React from "react";
import { DockDemo } from "../Nav/DockDemo";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-stretch gap-11 py-6 bg-transparent ">
      <div className="relative flex h-[500px] w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl dark:shadow-[#9333e9]/50">
        <div className="relative bg-[url('/bg/IMG_2419.JPG')]  bg-cover bg-center w-full h-full"></div>
        <BorderBeam size={350} duration={12} delay={9} />
      </div>
      <div className="flex flex-col gap-6 w-[800px]">
        <h1 className="uppercase text-6xl font-bold">About Me</h1>
        <p >
          I am a 26-year-old B.Sc. graduate from United International
          University, specializing in Software Engineering. With a solid
          background in front-end development and a keen eye for detail, I have
          honed my skills in TypeScript, JavaScript, React.js, Next.js, and other modern web
          technologies. I am passionate about creating seamless user experiences
          and building scalable, maintainable applications.
        </p>
        <p >
          I am seeking a role in a dynamic and forward-thinking software firm
          where I can leverage my technical skills and creativity to tackle
          challenging projects. I am committed to continuous learning and
          professional growth, always staying up-to-date with the latest
          industry trends and best practices. I thrive in collaborative
          environments and am eager to contribute to innovative solutions that
          make a positive impact.
        </p>
        <div className="flex justify-start"> <DockDemo/></div>
       
      </div>
    </div>
  );
};

export default AboutMe;
