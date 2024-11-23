import React from 'react'

import { FaRegFilePdf } from "react-icons/fa6";


function Navbar() {
   

    return (
        <header className="bg-gradient-to-t from-[#2E0854] to-[#1D0030]">
        <nav className="flex flex-wrap justify-between items-center px-4 py-2 ">
          <h2 className="font-Poppins font-bold text-lg md:text-xl text-[#FFD700] ">
            Aman's Portfolio
          </h2>
          <div className="mt-4 md:mt-0">
            <a
              href="./assets/AmanSeikh_Resume2024.pdf"
              download="AmanSeikh_Resume.pdf"
            >
              <button className="flex items-center font-afacad font-semibold  hover:shadow-[0_0_5px] shadow-lg hover:cursor-pointer rounded-md hover:border-[#00FFFF] border-[#A08BDE] bg-clip-border border-2 hover:bg-gradient-to-r hover:from-[#1A1A2E] hover:via-[#6A0572] hover:to-[#FF00FF] hover:border-2 px-6 py-3 bg-gradient-to-r from-[#7B1FA2] to-[#4A0072] hover:text-[#00FFFF] text-[#F2F2F2] transition">
                Resume <FaRegFilePdf className="ml-2" />
              </button>
            </a>
          </div>
        </nav>
      </header>
      
    )
}

export default Navbar
