import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaPhone } from "react-icons/fa";

const SocialMediaLinks = () => {
  const icons = [
    { component: <IoLogoLinkedin color="blue" size={35} />,text:<a className="text-black dark:text-white" href="mailto:shazzadauncon@gmail.com">shazzadauncon@gmail.com</a> },
    { component: <FaPhone color="green" size={30} />,text:<a className="text-black dark:text-white" href="tel:01786244417">+880 1786244417</a> },
    { component: <HiOutlineMail color="blue" size={35} />,text:<a className="text-black dark:text-white" href="mailto:shazzadauncon@gmail.com">shazzadauncon@gmail.com</a> },
    { component: <FaGithub className="text-black dark:text-white" size={30} />,text:<a className="text-black dark:text-white" href="https://github.com/Auncon2?tab=repositories">Github</a> },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {icons.map((icon, index) => (
        <div className="flex items-center gap-3" key={index}>
          {icon.component} {icon.text}
        </div>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
