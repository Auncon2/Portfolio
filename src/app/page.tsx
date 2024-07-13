"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import ShimmerButton from "@/components/magicui/shimmer-button";
import HeroSection from "@/modules/HomePage/HeroSection";
import NavBar from "@/modules/Nav/NavBar";
import { Registration } from "@/modules/Registration/Registration";
import { Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <HeroSection />
      <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Magic UI<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            UI library for{" "}
            <span className="text-[#5046e6]">Design Engineers</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p>
              -&gt; 20+ free and open-source animated components built with
              <span className="font-semibold text-[#5046e6]"> React</span>,
              <span className="font-semibold text-[#5046e6]"> Typescript</span>,
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

        {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
        </BoxReveal> */}
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Shimmer Button
          </span>
        </ShimmerButton>
      </div>
    </main>
  );
}
