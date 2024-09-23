import { ModeToggle } from "@/components/ui/ModeToggle";

import Link from "next/link";
import { DockDemo } from "./DockDemo";

const NavbarV2 = () => {
  return (
    <div className="flex justify-between p-4 bg-transparent absolute top-0 left-0 w-full backdrop-blur-xl">
      <Link
        href={"/"}
        className="text-black dark:text-white text-left text-xl font-extrabold"
      >
        Portfolio
      </Link>
      <div className="flex items-center justify-center gap-4">
        {" "}
        <Link
          href={"/"}
          className="text-black dark:text-white text-left text-xl font-extrabold"
        >
          Education
        </Link>
        <Link
          href={"/"}
          className="text-black dark:text-white text-left text-xl font-extrabold"
        >
          Experience
        </Link>
        <Link
          href={"/"}
          className="text-black dark:text-white text-left text-xl font-extrabold"
        >
          Projects
        </Link>
      </div>
     {/* <DockDemo/> */}
      <ModeToggle />
    </div>
  );
};

export default NavbarV2;
