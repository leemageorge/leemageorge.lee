'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialMediaIcons } from "@/data/data";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <div className="w-full bg-[#ffffff] mx-auto flex flex-col md:flex-row  items-center gap-44">
      <div className="container bg-[#e6dace] h-[30vh] md:h-[70vh] relative  ">
        <motion.div
         initial={{opacity:0,y:-50}}
         whileInView={{opacity:1,y:0}}
         viewport={{once:false}}
         transition={{duration:0.8, delay:0.3}}
          className=" absolute w-1/2 md:w-1/2 md:top-1/2 h-fit md:left-full 
        -translate-x-1/2 md:-translate-y-1/2 left-1/2 bottom-0 translate-y-1/2
          space-y-6  text-center bg-[#e6dace] shadow-[0_2px_16px_0_rgba(0,0,0,0.55)]"
        >
          <h2 className="text-red-800 text-4xl font-bold tracking-wider mt-10">
            Hello!!!
          </h2>
          <h2 className="text-black/70 text-4xl font-bold">I'm</h2>
          <h1 className="text-black/70 text-3xl">Leema George</h1>
          <h3 className="text-black/70 text-xl">Web Developer</h3>

          <div className="bg-white flex items-center  justify-between gap-6 py-1">
            {socialMediaIcons.map((item) => (
              <Link href={item.url} key={item.name} target="_blank">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={30}
                  height={30}
                  className="mx-2 cursor-pointer hover:scale-110 transition-transform duration-300"
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div className="container px-10"
      initial={{opacity:0,x:50}}
         whileInView={{opacity:1,x:0}}
         viewport={{once:false}}
         transition={{duration:0.8, delay:0.3}}>
        <p className="text-justify leading-8 text-black/70 text-xl">
          I am a Frontend Developer with hands-on experience building web
          applications using React.js and Next.js. I have developed multiple
          projects focused on responsive design, clean UI, and performance
          optimization. I follow mobile-first and SEOfriendly development
          practices to ensure a smooth user experience across devices. I
          continuously improve my skills by learning modern tools and
          frameworks.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
