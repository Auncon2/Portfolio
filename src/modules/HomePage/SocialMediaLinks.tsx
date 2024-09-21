import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaPhone } from "react-icons/fa";

const SocialMediaLinks = () => {
  const icons = [
    { component: <IoLogoLinkedin color="blue" size={35} /> },
    { component: <FaPhone color="green" size={30} /> },
    { component: <HiOutlineMail color="blue" size={35} /> },
    { component: <FaGithub color="black" size={30} /> },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {icons.map((icon, index) => (
     
        <div key={index}>{icon.component}</div>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
