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
  return (
    <div className="bg-slate-100 dark:bg-gradient-to-br from-gray-800 via-black to-purple-950 text-white w-full h-[800px] overflow-hidden relative">
      <NavbarV2 />
      <div className="flex items-center justify-around gap-12 h-full px-[150px]">
        <div className="-mb-7">
          <LetterPullup className="uppercase" words="Hi, I am Auncon" />
          <div className="flex justify-start mt-16 mb-11 uppercase">
            <div>
              <WordPullUp
                className="text-4xl font-bold tracking-[-0.02em] text-purple-600  md:text-9xl md:leading-[5rem] -ml-7"
                words="Software"
              />
              <WordPullUp
                className="text-4xl font-bold tracking-[-0.02em] text-purple-600  md:text-9xl md:leading-[5rem] mt-11"
                words="Developer"
              />
            </div>
          </div>

          <SocialMediaLinks />
        
          <div className="flex items-center justify-start mt-6">
          <RainbowButton >Download resume</RainbowButton>
            {/* <div className="z-10 ">
              <AnimatedGradientText>
                <Button className="flex items-center gap-2 px-6 py-7 text-lg font-semibold transition-transform duration-300 ease-in-out transform bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] text-transparent bg-clip-text hover:scale-105 hover:bg-opacity-90">
                 
                  <FaFilePdf color="red" />
                  <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
                  <span
                    className={cn(
                      "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent uppercase"
                    )}
                  >
                    Download resume
                  </span>
             
                </Button>
              </AnimatedGradientText>
            </div> */}
          </div>
        </div>
        <NeonGradientCard className="w-[750px] h-[600px] items-center justify-center text-center ">
          {/* <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Neon Gradient Card
          </span> */}
          <span></span>
        </NeonGradientCard>

        {/* <div className="bg-[url('/bg/bg1.jpg')] bg-cover bg-center w-[900px] h-[650px] mr-7"></div> */}
      </div>
    </div>
  );
};

export default HeroSectionV2;
