import BoxReveal from "@/components/magicui/box-reveal";
import ShimmerButton from "@/components/magicui/shimmer-button";

import Image from "next/image";
import React from "react";
import NavbarV2 from "../Nav/NavbarV2";
import { useTheme } from "next-themes";
import LetterPullup from "@/components/magicui/letter-pullup";
import BlurIn from "@/components/magicui/blur-in";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const HeroSectionV2 = () => {
  const { theme, setTheme } = useTheme();
  console.log("theme", theme);
  return (
    <div className="bg-transparent dark:bg-gradient-to-br from-gray-800 via-black to-red-950 text-white w-full h-[800px] overflow-hidden relative">
      <NavbarV2 />
      <div className="flex items-center justify-around gap-12 h-full px-[150px]">
        <div className="uppercase ">
          <LetterPullup words="Hi, I am Auncon" />
          <BlurIn
            word="Software Developer"
            className="text-yellow-500 grid text-4xl md:text-9xl font-bold leading-tight mt-6"
          />

          {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="grid text-4xl md:text-9xl font-bold leading-tight">
              <p className={theme === "light" ?"text-black" :""}>Hi, I am Auncon</p>
             
              <span className="text-yellow-500">Software Developer</span>
            </div>
          </BoxReveal> */}
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              UI library for
              <span className="text-[#5046e6]">Design Engineers</span>
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-[1.5rem]">
              <p>
                -&gt; 20+ free and open-source animated components built with
                <span className="font-semibold text-[#5046e6]"> React</span>,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Typescript
                </span>
                ,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Tailwind CSS
                </span>
                , and
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Framer Motion
                </span>
                . <br />
                -&gt; 100% open-source, and customizable. <br />
              </p>
            </div>
          </BoxReveal>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              View Portfolio
            </span>
          </ShimmerButton>
        </div>
        <NeonGradientCard className=" w-[750px] h-[600px] items-center justify-center text-center ">
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
