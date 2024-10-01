import React from "react";
import HeroSectionV2 from "./HeroSectionV2";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-11 bg-transparent">
      <HeroSectionV2 />
      <AboutMe />
      <MySkills/>
      <Footer/>
    </div>
  );
};

export default HomePage;
