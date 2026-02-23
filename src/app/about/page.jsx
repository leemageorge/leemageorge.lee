"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
const About = () => {
    const[activeTab,setActiveTab] = useState("skills")
  return (
    <div className="container max-w-6xl mx-auto mt-20 px-4">
      <h1 className="uppercase text-4xl text-center font-bold">
        About <span className="text-red-800">Me</span>
      </h1>

      <motion.div className="flex flex-col md:flex-row mt-10 px-8"
      initial={{opacity:0,scale:0.5}}
        whileInView={{opacity:1,scale:1}}
        viewport={{once:false}}
        transition={{duration:0.8, delay:0.3}}>
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 bg-[#eeece9] p-10">
          <h2 className="text-red-800 text-3xl font-bold">Getting to Know Me...</h2>

          <p className="text-black/70 mt-5 leading-8 text-lg">
            Hello, I’m Leema George, a passionate and self-motivated Frontend
            Developer with a strong interest in creating modern, user-friendly
            web experiences. I specialize in building responsive and
            performance-focused web applications using React.js and Next.js. I
            enjoy transforming ideas into functional, visually appealing digital
            solutions that provide a smooth experience across all devices. My
            approach to development focuses on clean UI design, structured code,
            and SEO-friendly practices. I believe a website should not only look
            beautiful but also be fast, accessible, and intuitive. I
            continuously improve my skills by learning modern tools and staying
            updated with industry trends. For me, web development is not just
            about writing code — it’s about solving problems and creating
            meaningful digital experiences.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 bg-[#e6dace] p-10">
          <div className="flex justify-center gap-6 mb-8">
            <button onClick={()=>setActiveTab("skills")} className="bg-red-800 cursor-pointer text-[#e6dace] px-6 py-2 text-lg font-bold rounded-lg">
              Skills
            </button>

            <button onClick={()=>setActiveTab("knowMore")} className="bg-red-800 cursor-pointer text-[#e6dace] px-6 py-2 text-lg font-bold rounded-lg whitespace-nowrap">
              Know More
            </button>
          </div>

            {activeTab === "skills" && (
                  <div className="space-y-5">
            <div>
              <h2 className="text-red-800 text-xl">Front End Development</h2>
              <p>HTML, CSS, JavaScript</p>
            </div>

            <div>
              <h2 className="text-red-800 text-xl">
                Frontend Frameworks/Libraries
              </h2>
              <p>React.js, Next.js</p>
            </div>

            <div>
              <h2 className="text-red-800 text-xl">
                Backend Frameworks/Libraries
              </h2>
              <p>Express & Node</p>
            </div>

            <div>
              <h2 className="text-red-800 text-xl">Databases</h2>
              <p>MongoDB</p>
            </div>

            <div>
              <h2 className="text-red-800 text-xl">Version Control</h2>
              <p>Git & GitHub</p>
            </div>

            <div>
              <h2 className="text-red-800 text-xl">Digital Marketing</h2>
              <p>On-Page SEO, Technical SEO & Off-Page SEO</p>
            </div>
          </div>
            )}
            {activeTab === "knowMore" && (
                <div className="space-y-5">
                    <div>
              <h2 className="text-red-800 text-xl">Nationality</h2>
              <p>Indian</p>
            </div>
            <div>
              <h2 className="text-red-800 text-xl">City</h2>
              <p>FortKochi</p>
            </div>
             <div>
              <h2 className="text-red-800 text-xl">Status</h2>
              <p>Married</p>
            </div>
             <div>
              <h2 className="text-red-800 text-xl">Language Known</h2>
              <p>Malayalam and English.</p>
            </div>
            <div>
              <h2 className="text-red-800 text-xl">Interests</h2>
              <p>Website Designing,Developing</p>
            </div>
               <div>
              <h2 className="text-red-800 text-xl">Hobby</h2>
              <p>Cooking,reading,writing and Gardening</p>
            </div>
                </div>
            )}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
