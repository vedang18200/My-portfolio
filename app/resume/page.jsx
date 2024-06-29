"use client";

import { FaPython, FaHtml5, FaCss3, FaBrain, FaDatabase } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
    title: "About Me",
    description: "I am a passionate developer cum student with experience in web development and machine learning.",
    info: [
        {
            fieldname: "Name ",
            fieldValue: "Vedang Deshmukh",
        },
        {
            fieldname: "Phone ",
            fieldValue: "+91-7756882618",
        },
        {
            fieldname: "Experience ",
            fieldValue: "2+ Years",
        },
        {
            fieldname: "Nationality ",
            fieldValue: "Indian",
        },
        {
            fieldname: "Email ",
            fieldValue: "vedangdeshmukh777@gmail.com",
        },
        {
            fieldname: "LinkedIn ",
            fieldValue: "Vedang Deshmukh",
        },
    ],
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "As a student, I have gained valuable skills and knowledge through various academic projects and activities.",
    items: [
        {
            company: "CONVO AI NEXUS                                              ",
            position: "Project Head",
            duration: "2022-23",
            
        },
        {
            company: "Medicare The Disease Predictor",
            position: "Project Member",
            duration: "2023-24",
        },  
        {
            company: "Smart City Hub ",
            position: "project Head",
            duration: "2023-24 ",
            
        },
        
        
    ],
};


const skills = {
    title: "My Skills",
    description: "I have acquired various skills over my career.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'HTML 5',
        },
        {
            icon: <FaCss3 />,
            name: 'CSS 3',
        },
        {
            icon: <FaDatabase />,
            name: 'SQL',
        },
        {
            icon: <SiDjango />,
            name: 'Django',
        },
        {
            icon: <FaPython />,
            name: 'Python',
        },
        {
            icon: <FaBrain />,
            name: 'Machine Learning',
        },
    ],
};

const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    description: "I have completed my education from reputed institutions.",
    items: [
        {
            institution: "Gurukul Academy",
            course: "10th",
            duration: "2019-20",
        },
        {
            institution: "Dr Babasaheb Amedkar College",
            course: "11th",
            duration: "2020-21",
        },
        {
            institution: "Dr Babasaheb Amedkar College",
            course: "12th",
            duration: "2021-22",
        },
        {
            institution: "Saraswati College of Engineering",
            course: "B.Eng (CSE-AIML)",
            duration: "2022 - present",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full "> 
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=>{
                                            return(
                                                <li key={index} className="bg-[#27272c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"> 
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                         {/* education */}
                         <TabsContent value="education" className="w-full "> 
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index)=>{
                                            return(
                                                <li key={index} className="bg-[#27272c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"> 
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.course}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* skills*/}
                        <TabsContent value="skills" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {skills.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-col-1 lg:grid-cols-2 gap-[30px]'>
                                        {skills.skillList.map((skill, index) => (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 group'>
                                                <div className='flex flex-col items-center gap-3'>
                                                    <span className='text-6xl transition-all duration-300 group-hover:text-accent'>{skill.icon}</span>
                                                    <p className='text-white/60 text-center transition-all duration-300 group-hover:text-accent'>{skill.name}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* about */}
                        <TabsContent value="about" className="w-full">
                            <h3 className='text-4xl font-bold'>{about.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                {about.description}
                            </p>
                            <ul className='list-disc list-inside'>
                                {about.info.map((infoItem, index) => (
                                    <li key={index}>
                                        <strong  className='text-accent'>{infoItem.fieldname}: </strong>{infoItem.fieldValue}
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;