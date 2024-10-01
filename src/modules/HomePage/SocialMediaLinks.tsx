// import React from "react";
// import { IoLogoLinkedin } from "react-icons/io";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaGithub, FaPhone } from "react-icons/fa";

// const SocialMediaLinks = () => {
//   const icons = [
//     { component: <IoLogoLinkedin color="blue" size={35} />,text:<a className="text-black dark:text-white" href="mailto:shazzadauncon@gmail.com">shazzadauncon@gmail.com</a> },
//     { component: <FaPhone color="green" size={30} />,text:<a className="text-black dark:text-white" href="tel:01786244417">+880 1786244417</a> },
//     { component: <HiOutlineMail color="blue" size={35} />,text:<a className="text-black dark:text-white" href="mailto:shazzadauncon@gmail.com">shazzadauncon@gmail.com</a> },
//     { component: <FaGithub className="text-black dark:text-white" size={30} />,text:<a className="text-black dark:text-white" href="https://github.com/Auncon2?tab=repositories">Github</a> },
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {icons.map((icon, index) => (
//         <div className="flex items-center gap-3" key={index}>
//           {icon.component} {icon.text}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SocialMediaLinks;
import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const SocialMediaLinks = () => {
  // Animation variants
  const variants = {
    hidden: (direction: any) => {
      switch (direction) {
        case "left":
          return { opacity: 0, x: -50 };
        case "right":
          return { opacity: 0, x: 50 };
        case "up":
          return { opacity: 0, y: 50 };
        default:
          return { opacity: 0 };
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Social media icons and text
  const icons = [
    {
      component: (
        <a
          href="https://www.linkedin.com/in/shazzad-auncon-a2a385266/"
          target="_blank"
        >
         
          <IoLogoLinkedin color="blue" size={35} className="hover:scale-105 transition-transform duration-300 ease-in-out"/>
        </a>
      ),
      componentv2: (
        <a
          href="https://www.linkedin.com/in/shazzad-auncon-a2a385266/"
          target="_blank"
        >
          {" "}
          <Image
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
            src={"/bg/linkedin.png"}
            alt="linkedin"
            width={40}
            height={40}
          />{" "}
        </a>
      ),
      text: (
        <a
          className="text-black dark:text-white hover:scale-105 transition-transform duration-300 ease-in-out"
          href="https://www.linkedin.com/in/shazzad-auncon-a2a385266/"
          target="_blank"
        >
          LinkedIn
        </a>
      ),
      direction: "left", // Animates from left to right
    },
    {
      component: <FaPhone color="green" size={30} />,
      componentv2: (
        <a href="tel:+8801786244417">
          {" "}
          <Image
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
            src={"/bg/phone-call.png"}
            alt="phone"
            width={40}
            height={40}
          />{" "}
        </a>
      ),
      text: (
        <a className="text-black dark:text-white hover:scale-105 transition-transform duration-300 ease-in-out" href="tel:01786244417">
          +880 1786244417
        </a>
      ),
      direction: "right", // Animates from bottom to top
    },
    {
      component: (
        <a
          className="hover:cursor-pointer "
          href="mailto:shazzadauncon@gmail.com"
        >
          {" "}
          <HiOutlineMail color="blue" size={35} />{" "}
        </a>
      ),
      componentv2: (
        <a
          className="hover:cursor-pointer"
          href="mailto:shazzadauncon@gmail.com"
          target="_blank"
        >
          {" "}
          <Image
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
            src={"/bg/gmail.png"}
            alt="gmail.png"
            width={40}
            height={40}
          />{" "}
        </a>
      ),
      text: (
        <a
          className="text-black dark:text-white hover:scale-105 transition-transform duration-300 ease-in-out"
          href="mailto:shazzadauncon@gmail.com"
        >
          shazzadauncon@gmail.com
        </a>
      ),
      direction: "up", // Animates from right to left
    },
    {
      component: (
        <a
          className="hover:cursor-pointer"
          href="https://github.com/Auncon2?tab=repositories"
          target="_blank"
        >
          {" "}
          <FaGithub className="text-black dark:text-white" size={30} />{" "}
        </a>
      ),
      componentv2: (
        <a
          className="hover:cursor-pointer"
          href="https://github.com/Auncon2?tab=repositories"
          target="_blank"
        >
          {" "}
          <Image
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
            src={"/bg/github.png"}
            alt="github.png"
            width={40}
            height={40}
          />{" "}
        </a>
      ),
      text: (
        <a
          className="text-black dark:text-white hover:scale-105 transition-transform duration-300 ease-in-out"
          href="https://github.com/Auncon2?tab=repositories"
          target="_blank"
        >
          GitHub
        </a>
      ),
      direction: "up", // Animates from bottom to top
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {icons.map((icon, index) => (
        <motion.div
          className="flex items-center gap-3"
          key={index}
          custom={icon.direction}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {icon.componentv2} {icon.text}
        </motion.div>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
