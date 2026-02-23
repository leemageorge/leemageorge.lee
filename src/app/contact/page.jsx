"use client"
import Image from "next/image";
import React from "react";
import contactImage from "../../assets/handshake.jpg";
import { socialMediaIcons } from "@/data/data";
import Link from "next/link";
import { Caveat } from "next/font/google";
import {motion} from "framer-motion"
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});
const Contact = () => {
  return (
    <div className="px-12 pt-20   bg-[#f4ece6] container max-w-6xl mx-auto rounded-lg mt-80 ">
    <div className=" flex flex-col md:flex-row gap-10 h-[75vh] md:h-[70vh] relative ">
        {/* left side */}
      <motion.div className="w-full md:w-1/2 relative flex items-center justify-center"
      initial={{opacity:0,scale:0.5}}
        whileInView={{opacity:1,scale:1}}
        viewport={{once:false}}
        transition={{duration:0.8,delay:0.3}}>
        <div className=" w-full md:w-72 bg-[#ebe4e4] rounded-lg absolute -top-64 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.55)] p-8">
        <div className="p-4 flex items-center justify-center ">
          <Image
            src={contactImage}
            alt="contact image"
            className="object-cover rounded-full w-48 h-48 "
          />
        </div>
        <h2 className="text-center text-black/70 text-3xl font-bold mt-5 mb-5 ">
          Contact <span className="text-red-800">Me</span>{" "}
        </h2>
        <p className={`${caveat.className} text-red-800 text-2xl font-bold`}>
          "If you have a project on your mind... call me, lets get started!"
        </p>
        <div className=" flex items-center justify-between gap-6 mt-5">
          {socialMediaIcons.map((item) => (
            <Link key={item.name} href={item.url} target="_blank" className="">
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className="mx-2 cursor-pointer hover:scale-110 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
   
      </motion.div>
        {/* right side */}
       <div className="w-full md:w-1/2 mt-56 md:mt-0  ">
        <form action="" className="flex flex-col gap-2">
          <input type="text" placeholder="Name Here" className="bg-white outline-none border-none px-4 py-2 text-red-800 rounded-lg"/>
           <input type="text" placeholder="Email Here" className="bg-white outline-none border-none px-4 py-2 text-red-800 rounded-lg"/>
          <input type="text" placeholder="Mobile Number" className="bg-white outline-none border-none px-4 py-2 text-red-800 rounded-lg"/>
          <textarea placeholder="your message here" rows={4} type="text"  className="border-0 outline-0 bg-white px-4 py-2 rounded-lg resize-none text-red-800  "></textarea>
          <button className="bg-red-800 px-4 py-2 w-fit text-[#f4ece6] mt-10  rounded-lg self-center">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
