"use client"
import Image from "next/image";
import React from "react";
import starc from "../../assets/starc.webp";
import guru from "../../assets/gurupavanapuram.webp";
import antz from "../../assets/antz.png"
import {motion} from "framer-motion"
const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "Business Website",
      image: starc,
      live: "https://www.starcsteelwindow.com/",
      description:
        "Developed a responsive company website using Next.js and Tailwind CSS Built reusable components for product display, contact forms, and business information Focused on performance, SEO, and user experience Delivered end-to-end as a solo developer, including hostingand SEO optimization",
    },
    {
      id: "2",
      title: "Astrology Portfolio Website",
      image: guru,
      live: "https://gurupavanapuram.netlify.app/",
      description:"Currently developing a full-featured astrology website using Next.js and Tailwind CSS Includes dynamic service listings, star character predictions, blog modules, and contact features Built with SEO best practices, fast-loading components, and mobile-first responsive design Client collaboration for continuous improvement and content integration"
    },
      {
      id: "3",
      title: "Antz Media – Smart Digital Card Web Application",
      image: antz,
      live: "under processing",
      description:"Worked as a Frontend Developer in developing a Smart Digital Card web application using Vite and React.js. Transformed UI designs into responsive and interactive web interfaces. Built dynamic components for contact information, social media integration, and business details. Focused on optimized performance, clean code structure, SEO best practices, and cross-browser support."
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto mt-20 px-4">
      <h2 className="uppercase text-4xl text-center font-bold">
        Recent <span className="text-red-800">works</span>
      </h2>
      <div className="flex flex-col md:flex-row mt-10 ">
        <div className="flex flex-col flex-wrap space-y-10 "
        >
          {projects.map((project) => (
            <motion.div key={project.id} className="flex flex-col md:flex-row gap-9 space-y-6 "
            initial={{opacity:0,rotate:10,x:-50}}
        whileInView={{opacity:1,rotate:0,x:0}}
        viewport={{once:false}}
        transition={{duration:.8, delay:0.3}}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-60 object-cover"
              />
              <motion.div className="space-y-3 py-3 ">
                <h2 className="text-lg text-red-800 font-bold uppercase">
                    {project.title}
                </h2>
             <p className=" mt-2 text-black/70 leading-7 text-md">{project.description}</p>
             <button className="text-red-800 font-bold text-lg">Live: <span className="text-blue-800 cursor-pointer underline">{project.live}</span> </button>
              </motion.div>
             
            </motion.div>
          ))}        
          </div>
      </div>
    </div>
  );
};

export default Projects;
