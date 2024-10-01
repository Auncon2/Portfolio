import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-[130px] min-h-[350px]">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg/earcth1080p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative max-w-full mx-auto px-[200px] z-10">
    
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold uppercase">Shazzad Auncon</h2>
            <p>
              Looking for a dynamic and progressive software firm
              <br /> where I can use my technical skills & creativity to perform{" "}
              <br />
              challenging jobs and want to learn new things.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Auncon2?tab=repositories"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.78.6-3.37-1.37-3.37-1.37-.45-1.12-1.1-1.42-1.1-1.42-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.82.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.12-4.56-5a3.91 3.91 0 0 1 1.05-2.73 3.63 3.63 0 0 1 .1-2.68s.84-.27 2.75 1.03a9.45 9.45 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.19.86.23 1.78.1 2.68A3.91 3.91 0 0 1 18.1 12c0 3.89-2.34 4.74-4.57 4.99.36.32.68.95.68 1.91v2.84c0 .28.16.59.67.49C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shazzad-auncon-a2a385266/"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-2v-8h2v8zm-1-9.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm11 9.2h-2v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-2v-8h2v1.1c.59-.68 1.45-1.1 2.5-1.1 1.93 0 3.5 1.57 3.5 3.5v4.5z"
                />
              </svg>
            </a>
            {/* Phone Icon */}
            <a
              href="tel:+8801786244417"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.488 15.76c-1.135 0-2.236-.18-3.268-.531a1.997 1.997 0 0 0-2.047.463l-2.08 2.081a15.327 15.327 0 0 1-7.235-7.236l2.081-2.08c.525-.526.703-1.295.463-2.048a10.494 10.494 0 0 1-.532-3.268A2.005 2.005 0 0 0 5.877 2H3.512A2.005 2.005 0 0 0 1.512 4.013c0 9.694 7.823 17.518 17.518 17.518a2.005 2.005 0 0 0 2.013-2.013v-2.365a2.005 2.005 0 0 0-2.013-2.012z" />
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right text-gray-400">
            <p>
              Email:{" "}
              <a
                href="mailto:shazzadauncon@gmail.com"
                className="hover:underline"
              >
                shazzadauncon@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+8801786244417" className="hover:underline">
                +880 1786244417
              </a>
            </p>

            <p>
              © {new Date().getFullYear()} Shazzad Auncon. All Rights Reserved.
            </p>
          </div>
        </div>
     
      </div>
    </footer>
  );
};

export default Footer;
