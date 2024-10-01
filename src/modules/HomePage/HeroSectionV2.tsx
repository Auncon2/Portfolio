import React from "react";
import NavbarV2 from "../Nav/NavbarV2";
import { useTheme } from "next-themes";
import LetterPullup from "@/components/magicui/letter-pullup";

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

import WordPullUp from "@/components/magicui/word-pull-up";
import SocialMediaLinks from "./SocialMediaLinks";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

import { cn } from "@/lib/utils";
import { FaFilePdf } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { RainbowButton } from "@/components/magicui/rainbow-button";
const HeroSectionV2 = () => {
  const { theme, setTheme } = useTheme();
  console.log("theme", theme);
  const handleDownload = () => {
    // This will trigger the download of the PDF
    const link = document.createElement('a');
    link.href = '/bg/Abu_Shazzad_Auncon.pdf'; // Path to your PDF file in the public folder
    link.download = 'Abu_Shazzad_Auncon.pdf'; // The filename after downloading
    link.click();
  };
  return (
  // <div className="bg-transparent text-white w-full h-[800px] overflow-hidden relative">
 <div className=" dark:bg-gradient-to-br from-gray-700 via-black to-purple-950 text-white w-full h-[800px] overflow-hidden relative">

    <NavbarV2 />
      <div className="flex items-center justify-around gap-12 h-full px-[320px]">
        <div className="-mb-7">
          <LetterPullup
            className="uppercase md:text-7xl font-sans"
            words="Hi, I am Auncon" 
          />
          <div className="flex justify-start mt-7 mb-11 uppercase">
            <div>
              <WordPullUp
                className="text-4xl font-bold tracking-[-0.02em] text-purple-600  md:text-9xl md:leading-[5rem] -ml-7 font-sans"
                words="Software"
              />
              <WordPullUp
                className="text-4xl font-bold tracking-[-0.02em] text-purple-600  md:text-[145px] md:leading-[5rem] mt-11 -ml-2 font-sans"
                words="Engineer"
              />
            </div>
          </div>

          <SocialMediaLinks />

          <div className="flex items-center justify-start gap-5 mt-6">
            
            <RainbowButton  onClick={handleDownload}>Download resume</RainbowButton>
            <div className="z-10 ">
              <AnimatedGradientText >
                <Button className="flex items-center gap-2 w-[303px] px-11 py-7 text-lg font-semibold transition-transform duration-300 ease-in-out transform bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] text-transparent bg-clip-text hover:scale-105 hover:bg-opacity-90" onClick={handleDownload}>
                
              
                  <span
                    className={cn(
                      "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent uppercase"
                    )}
                  >
                   Hire Me
                  </span>
                </Button>
              </AnimatedGradientText>
            </div>
          </div>
        </div>
        <NeonGradientCard className="w-[490px] h-[600px] items-center justify-center text-center ">
        
          <div className="bg-[url('/bg/bg4.jpg')] bg-cover bg-center bg-no-repeat w-full h-full rounded-2xl"></div>
        </NeonGradientCard>
{/* 
        <div className="bg-[url('/bg/bg4-removebg-preview.png')] bg-cover bg-center w-[600px] h-full -mb-[100px]"></div> */}
      </div>
    </div>
  );
};

export default HeroSectionV2;
