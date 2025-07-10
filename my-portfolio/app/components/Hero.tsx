// components/Hero.tsx
"use client"
import Image from 'next/image';
import heroImage from "../images/hero.png"
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import { useEffect, useState } from 'react';

const roles = ['Designer...', 'Coder...', 'Developer...'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const currentWord = roles[index].split('');
  return (
    <section id='home' className="flex flex-col md:flex-row items-center justify-between py-16 px-10 bg-[url('https://static.vecteezy.com/system/resources/previews/010/224/531/original/black-abstract-background-wallpaper-design-free-vector.jpg')] bg-repeat  bg-[length:10px_16px]  inset-0 min-h-[95vh]">
      {/* Left */}
      
      <div className="flex-1 pl-25 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
      {"I'M Saiful"}{' '}
      <span className=" text-blue-500 h-25 inline-flex overflow-hidden transition-all ">
        {currentWord
          .slice()
          .map((letter, i) => (
            <motion.span
              key={i + letter + index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2,
                delay: i * 0.1, // stagger from right
              }}
              className="inline-block "
            >
              {letter}
            </motion.span>
          ))}
        <motion.span
          key={`dot-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: currentWord.length * 0.05 }}
        >
        </motion.span>
      </span>
    </h1>
        <p className="text-gray-300 w-170 mb-6">
       {" I'm a Full Stack Developer with a strong focus on front-end technologies like React.js and Next.js, crafting fast and responsive web interfaces. I also work with Node.js and MongoDB to build robust back-end systems."}
        </p>
        <div className="flex gap-4 justify-center md:justify-start mb-6">
          <a  href="#contact" className="bg-blue-200 hover:bg-black text-black hover:text-white border hover:border-white px-6 py-2 rounded-full font-semibold shadow-neon transition-all duration-500">
            Contact Me
          </a>
          <a href="https://wa.me/8801707961402"target="_blank"rel="noopener noreferrer" className="bg-black hover:bg-blue-200 border border-white hover:border-black  text-white hover:text-black  px-6 py-2 rounded-full font-semibold hover:bg-primary hover:text-dark transition-all duration-500">
            Hire Me
          </a>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/saiful-islam-834467317/"target='_blank'><FaLinkedin className="text-blue-400 w-8 h-8 p-1 hover:rounded-full hover:border   text-2xl hover:scale-110 transition " /></a>
          <a href="https://www.facebook.com/md.saiful.islam.867178"target="_blank"><FaFacebook className="text-blue-400 w-8 h-8 p-1 hover:rounded-full hover:border text-2xl hover:scale-110 transition" /></a>
          <a href="https://github.com/SaifulET?tab=repositories"target='_blank'><FaGithub className="text-blue-400 w-8 h-8 p-1 hover:rounded-full hover:border text-2xl hover:scale-110 transition" /></a>
        </div>
      </div>
      {/* Right */}
      <div className="flex-1 flex flex-col items-center mt-10 md:mt-0">
        {/* The render method of Hero returns a section with two main columns.
            This is the right column, which displays a motion-animated profile image with a label. */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: [0, 20, 0], opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
          className="relative  bg-black rounded-full border-4 border-primary  shadow-[0_0_32px_8px_#0FF0FC,0_0_64px_16px_#10F197]"
        >
          <Image
            src={heroImage}
            alt="John Lio"
            width={230}
            height={230}
            className="rounded-full"
          />
          
        </motion.div>
      </div>
    </section>
  );
}