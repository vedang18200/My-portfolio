"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projectsdata = [
  {
    num: '01',
    category: 'Machine Learning',
    title: 'CONVO AI NEXUS',
    description: "Created a versatile AI chatbot named 'Veronica' for engaging, personalized conversations across platforms, It understands and responds to queries, learns through machine learning , and aims to enhance user experiences in customer support, education, and entertainment.",
    stack: [{ name: "Python" }, { name: "PyQt" }, { name: "APIs" }],
    image: '/assets/work/thumb1.png',
    live: "/project1-live-url", // Example live project URL
    github: "https://github.com/vedang18200/VeronicaIAI.git", // Example GitHub URL
  },
  {
    num: '02',
    category: 'Machine Learning',
    title: 'MediBot',
    description: "Accessing personalized health information can be challenging, and individuals often struggle to find reliable resources for symptom inquiry and disease prediction. Additionally, maintaining a healthy lifestyle is a complex task, requiring tailored advice based on individual parameters such as BMI. ",
    stack: [{ name: "Python" }, { name: "Django" }, { name: "HTML & CSS" },{ name: "scikit-learn" }],
    image: '/assets/work/thumb2.png',
    live: "/project2-live-url", // Example live project URL
    github: "https://github.com/vedang18200/Medi_care.git", // Example GitHub URL
  },
 
];

const Work = () => {
  const [projects, setProject] = useState(projectsdata[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;
    // Update project state based on current slide's index
    setProject(projectsdata[currentIndex]);
  }

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projects.num}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects.category} project
              </h2>
              {/* Project description */}
              <p className="text-white/60">{projects.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {projects.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}{index !== projects.stack.length - 1 && ", "}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={projects.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-800 text-white rounded p-2">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub project button */}
                <Link href={projects.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-800 text-white rounded p-2">
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projectsdata.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} layout="fixed"  width={600} height={500}  alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50% - 22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnsStyles="bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
