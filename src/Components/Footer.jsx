import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";



const Footer = () => {
    return (
      <footer className="bg-gradient-to-b from-[#2E0854] to-[#1D0030] font-afacad text-[#FFD700]  p-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Aman. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/novemberisdead"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-[#00FFFF]"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aman-seikh-34b952188/?trk=opento_sprofile_details"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-[#00FFFF]"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
            href="mailto:amanseikh108@gmail.com"
            className="text-[#FFD700] hover:text-[#00FFFF]"
          >
            <i className="fas fa-envelope text-2xl"></i>
          </a>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
  