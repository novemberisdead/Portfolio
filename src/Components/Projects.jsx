import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CurtainReveal from "./FramerMotion/CurtainReveal";

const projects = [
  {
    id: 1,
    image: "/images/TodoAppImg.jpg",
    githubLink: "https://github.com/novemberisdead/Todo-React-Project", 
    liveSite: "https://reactappwritetodo.vercel.app/", 
  },
  {
    id: 2,
    image: "/images/WeatherNow.jpg",
    githubLink: "https://github.com/novemberisdead/WeatherNow", 
    liveSite: "https://liveweathernow.netlify.app/", 
  },
  {
    id: 3,
    image: "/images/TLLthumb.jpg",
    githubLink: "https://github.com/novemberisdead/Save-The-Green", 
    liveSite: "https://thelastleaves.netlify.app/", 
  },
  
 
 
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#3B3B58] via-[#7D3C98] to-[#9400D3] pt-8">
  <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-[#2E0854] to-[#1D0030] rounded-xl pt-6 p-2 pb-4">
    <h2 className="text-3xl font-afacad font-bold text-center text-[#00FFFF] mb-6">Projects</h2>
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop={true}
      modules={[Navigation]}
      className="rounded-lg overflow-hidden"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <CurtainReveal
            color="#1D2B4F"
            className="bg-[#2A353F] p-4 flex flex-col items-center rounded-lg shadow-md"
            duration={0.5} 
          >
            <img
              src={project.image}
              alt="Project"
              className="w-full h-[400px] object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between w-full mt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#7B1FA2] to-[#4A0072] hover:from-[#9C27B0] hover:to-[#6A1B9A] transition shadow-sm hover:shadow-lg px-6 py-3 font-afacad font-bold text-[#F2F2F2] rounded-md"
              >
                GitHub Code
              </a>
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#7B1FA2] to-[#4A0072] hover:from-[#9C27B0] hover:to-[#6A1B9A] transition shadow-sm hover:shadow-lg px-6 py-3 font-afacad font-bold text-[#F2F2F2] rounded-md"
              >
                View Site
              </a>
            </div>
          </CurtainReveal>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
};

export default Projects;

