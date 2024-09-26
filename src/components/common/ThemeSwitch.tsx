import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { MoonIcon } from "./SunAndMoonIcon";
import { LuSunMedium } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
  return ( 
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
   
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <LuSunMedium  color="black" onClick={() => setTheme("light")}/>
        ) : (
          <FiMoon color="black"   onClick={() => setTheme("dark")}/>
        )
      }
    ></Switch>
  );
};

export default ThemeSwitch;
