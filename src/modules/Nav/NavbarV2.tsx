"use client"
import ThemeSwitch from "@/components/common/ThemeSwitch";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { useTheme } from "next-themes";

import Link from "next/link";



const NavbarV2 = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-between p-4 px-14 bg-transparent fixed top-0 left-0 w-full backdrop-blur-xl z-50">
      <Link
        href={"/"}
        className="text-black dark:text-white text-left text-xl font-extrabold"
      >
        Portfolio
      </Link>
      <div className="flex items-center justify-center gap-11">
        {" "}
        <Link
          href={"/education"}
          className="text-black dark:text-white text-left text-lg font-extrabold hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          Education
        </Link>
        <Link
          href={"/"}
          className="text-black dark:text-white text-left text-lg font-extrabold hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          Experience
        </Link>
        <Link
          href={"/"}
          className="text-black dark:text-white text-left text-lg font-extrabold hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          Projects
        </Link>
      </div>

      {/* <ModeToggle /> */}
   <ThemeSwitch/>
    </div>
  );
};

export default NavbarV2;
