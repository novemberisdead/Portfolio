import React from 'react'
import Lottie from 'lottie-react'
import TextReveal from './FramerMotion/TextReveal'
import TextRevealWithLetters from './FramerMotion/TextRevealByLetter'
import coding from '../assets/Animations/Main Scene.json'
function Hero() {
   

    return (
        <>
        <section className='min-h-screen flex items-center justify-center  bg-gradient-to-b from-[#2E0854] to-[#1D0030] w-full' >
            <div className='container mx-auto flex flex-col md:flex-row items-center md:justify-between px-6' >
                <div className='w-full md:w-1/2 space-y-6 text-center  '>
              
                <TextRevealWithLetters
                 text="Hi! I'm AMAN" 
                 className="text-4xl font-bold font-afacad text-[#00FFFF]"
                 delay={0.2}
                 stiffness={100}
                ></TextRevealWithLetters>
            <TextReveal className='font-afacad text-[#FFD700] text-2xl '>Web and Mobile App developer</TextReveal>
            <TextReveal className=' font-afacad text-[#FFD700] text-xl'>Web and mobile app developer skilled in creating user-friendly interfaces and building apps with React Native.</TextReveal>
                </div>
                
                <div className='w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0'>
                <Lottie animationData={coding} loop={true} style={{height:'500px', width:'500px'}} />
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero
