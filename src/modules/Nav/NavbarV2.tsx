import { ModeToggle } from "@/components/ui/ModeToggle";
import Link from "next/link";

const NavbarV2 = () => {
  return (
    <div className="flex justify-between p-4 bg-transparent absolute top-0 left-0 w-full">
      <Link href={"/"} className="text-left text-xl font-extrabold">
        Portfolio
      </Link>
      <ModeToggle />
    </div>
  );
};

export default NavbarV2;
