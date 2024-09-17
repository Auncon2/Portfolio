import ShimmerButton from "@/components/magicui/shimmer-button";

import React from "react";
import NavbarV2 from "../Nav/NavbarV2";
import { useTheme } from "next-themes";
import LetterPullup from "@/components/magicui/letter-pullup";
import BlurIn from "@/components/magicui/blur-in";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import GradualSpacing from "@/components/magicui/gradual-spacing";

const HeroSectionV2 = () => {
  const { theme, setTheme } = useTheme();
  console.log("theme", theme);
  return (
    <div className="bg-transparent dark:bg-gradient-to-br from-gray-800 via-black to-purple-950 text-white w-full h-[800px] overflow-hidden relative">
      <NavbarV2 />
      <div className="flex items-center justify-around gap-12 h-full px-[150px]">
        <div className="uppercase ">
          <LetterPullup words="Hi, I am Auncon" />
          <div className="flex justify-start">
            <div>
              <GradualSpacing
                className="font-display text-start text-4xl font-bold mt-11 -ml-4 tracking-[-0.1em] text-purple-600  md:text-9xl md:leading-[5rem]"
                text="Software"
              />
              <GradualSpacing
                className="font-display text-left text-4xl font-bold tracking-[-0.1em] text-purple-700  md:text-9xl"
                text="Developer"
              />
            </div>
          </div>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              View Portfolio
            </span>
          </ShimmerButton>
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
