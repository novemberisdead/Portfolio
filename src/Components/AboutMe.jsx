import React from 'react'
import { motion } from 'framer-motion';
import CurtainReveal from './FramerMotion/CurtainReveal';
import { FaHtml5,FaCss3Alt,FaJsSquare,FaNodeJs,FaReact,FaGitAlt, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux,TbBrandReactNative,} from "react-icons/tb";
import { SiAppwrite } from "react-icons/si";
import { BiLogoTypescript,BiLogoNetlify } from "react-icons/bi";
import { useInView } from 'react-intersection-observer';

function AboutMe() {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5,   
      });

    return (
        
        <section className='min-h-screen bg-gradient-to-r from-[#3B3B58] via-[#7D3C98] to-[#9400D3]'>
             <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 ">
            <h2 className=' font-afacad text-3xl text-center text-[#00FFFF] font-bold pb-4'>About Me</h2>
         
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-6'>
           
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ duration: 0.6 }}
             className='bg-gradient-to-b from-[#2E0854] to-[#1D0030] text-[#E6E6FA] shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow duration-300 hover:border-2 border-2 border-[#00FFFF] hover:border-[#4B0082]'>
            <p className='min-h-full font-afacad text-xl'>My name is <strong>Aman Seikh.</strong>I am a passionate web and mobile app developer with a strong foundation in modern technologies. Proficient in HTML, CSS, JavaScript, React, and Redux, I excel at creating reusable React components and crafting intuitive UI designs for mobile applications using React Native and Tailwind CSS.</p>
                </motion.div>  
                <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ duration: 0.6 }}
             className='bg-gradient-to-b from-[#2E0854] to-[#1D0030] text-[#E6E6FA] shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow duration-300 hover:border-2 border-2 border-[#00FFFF] hover:border-[#4B0082]'>
            <p className='min-w-full font-afacad text-xl  '>My TypeScript experience ensures robust and maintainable code.I am proficient with Appwrite for backend functionality, and have foundational Git skills, including commits, branching, and repository management. Additionally, I have deployed websites using Vercel and Netlify for seamless application delivery.</p>
            </motion.div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ duration: 0.6 }}
             className='bg-gradient-to-b from-[#2E0854] to-[#1D0030] text-[#E6E6FA] shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow duration-300 border-[#00FFFF] border-2 hover:border-[#4B0082] '>
            <p className=' min-h-full font-afacad text-xl'>I'm passionate about reading novels,playing video games, and watching football, which fuels my creativity. I am dedicated to creating seamless user experiences and stay updated with industry trends to refine my skills, turning innovative ideas into functional, user-friendly applications.</p>
            </motion.div>
            </div>
            </div>
            <h2 className='text-center font-afacad font-bold text-3xl text-[#00FFFF]'>Skills & Tech Stacks</h2>
           
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mx-auto p-12'>
            <CurtainReveal 
            className="rounded-2xl w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1C1C28] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 flex flex-col justify-center items-center text-center"
            duration={0.5}
            >
            <FaHtml5 className="w-10 h-10" color="#E34F26" />
            <h6 className="font-afacad font-bold text-[#00FFFF]">HTML</h6>
            </CurtainReveal>
            <CurtainReveal
                className="rounded-2xl w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1C1C28] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 flex flex-col justify-center items-center text-center"
                duration={0.5}
                >
                <FaCss3Alt className="w-10 h-10" color="#1572B6" />
                <h6 className="font-afacad font-bold text-[#00FFFF]">CSS</h6>
                </CurtainReveal>

            
                <CurtainReveal
                className="rounded-2xl w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1C1C28] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 flex flex-col justify-center items-center text-center"
                duration={0.5}
                >
                <FaJsSquare className="w-10 h-10 mb-2 " color="#F7DF1E" />
                <h6 className="font-afacad font-bold text-[#00FFFF] text-sm sm:text-base">JavaScript</h6>
                </CurtainReveal>


                <CurtainReveal
                    className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1D1E2C] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 rounded-2xl flex flex-col justify-center items-center text-center"
                    >
                    <FaReact className="w-10 h-10 mb-2" color="#61DAFB" />
                    <h6 className="font-afacad font-bold text-[#00FFFF] text-sm sm:text-base">React</h6>
                </CurtainReveal>

                <CurtainReveal
                    className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1D1E2C] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 rounded-2xl flex flex-col justify-center items-center text-center"
                    >
                    <RiTailwindCssFill className="w-10 h-10 mb-2" color="#38B2AC" />
                    <h6 className="font-afacad font-bold text-[#00FFFF] text-sm sm:text-base">Tailwind</h6>
                    </CurtainReveal>

                    <CurtainReveal
                        className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1D1E2C] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 rounded-2xl flex flex-col justify-center items-center text-center"
                        >
                        <BiLogoTypescript className="w-10 h-10 mb-2" color="#007ACC" />
                        <h6 className="font-afacad font-bold text-[#00FFFF] text-sm sm:text-base">Typescript</h6>
                        </CurtainReveal>

                        <CurtainReveal
                            className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1D1E2C] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 rounded-2xl flex flex-col justify-center items-center text-center"
                            >
                            <FaNodeJs className="w-10 h-10 mb-2" color="#339933" />
                            <h6 className="font-afacad font-bold text-[#00FFFF] text-sm sm:text-base">Node JS</h6>
                            </CurtainReveal>

                            <CurtainReveal
                            className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1D1E2C] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 rounded-2xl flex flex-col justify-center items-center text-center"
                            >
                            <TbBrandReactNative className="w-16 h-10 mb-2" color="#61DAFB" />
                            <h6 className="font-afacad font-bold text-[#00FFFF] text-sm sm:text-base text-center">
                                React<br />Native
                            </h6>
                            </CurtainReveal>

                            <CurtainReveal
                            className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1D1E2C] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 rounded-2xl flex flex-col justify-center items-center text-center"
                            >
                            <TbBrandRedux className="w-10 h-10 mb-2" color="#764ABC" />
                            <h6 className="font-afacad font-bold text-[#00FFFF] text-sm sm:text-base text-center">
                                Redux
                            </h6>
                            </CurtainReveal>

                            <CurtainReveal
                                className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1D1E2C] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 rounded-2xl flex flex-col justify-center items-center text-center"
                                >
                                <SiAppwrite className="w-10 h-10 mb-2" color="#F02E65" />
                                <h6 className="font-afacad font-bold text-[#00FFFF] text-sm sm:text-base text-center">
                                    Appwrite
                                </h6>
                                </CurtainReveal>

                                <CurtainReveal
                                className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1D1E2C] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 rounded-2xl flex flex-col justify-center items-center text-center"
                                >
                                <FaGitAlt className="w-10 h-10 mb-2" color="#F05032" />
                                <h6 className="pt-2 font-afacad font-bold text-[#00FFFF] text-sm sm:text-base text-center">
                                    Git
                                </h6>
                                </CurtainReveal>

                                <CurtainReveal
                            className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg backdrop-blur-md bg-[#1D1E2C] bg-opacity-70 border-2 border-transparent hover:border-[#00FFFF] hover:shadow-[0_0_10px_#00FFFF] p-6 rounded-2xl flex flex-col justify-center items-center text-center"
                            >
                            <BiLogoNetlify className="w-10 h-10 mb-2" color="#00C7B7" />
                            <h6 className="pt-2 font-afacad font-bold text-[#00FFFF] text-sm sm:text-base text-center">
                                Netlify
                            </h6>
                            </CurtainReveal>

           </div>
            
          
            

        </section>
    )
}

export default AboutMe;
