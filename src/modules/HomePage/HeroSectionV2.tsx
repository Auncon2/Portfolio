import BoxReveal from "@/components/magicui/box-reveal";
import ShimmerButton from "@/components/magicui/shimmer-button";

import Image from "next/image";
import React from "react";
import NavbarV2 from "../Nav/NavbarV2";

const HeroSectionV2 = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-black to-red-950 text-white w-full h-[800px] overflow-hidden relative">
      <NavbarV2 />
      <div className="flex items-center justify-evenly h-full">
        <div className="uppercase">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="grid text-4xl md:text-9xl font-bold leading-tight">
              <p>Hi, I am Auncon</p>
              <span className="text-yellow-500">Software Developer</span>
            </div>
          </BoxReveal>
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
        <div className="bg-[url('/bg/bg1.jpg')] bg-cover bg-center w-[1000px] h-full"></div>
      </div>
    </div>
  );
};

export default HeroSectionV2;
