'use client';
// components/ResumeTabs.tsx
import { useState } from 'react';
import Image from 'next/image';
import about from "../images/about.jpg"

const education = [
  { title: 'BSC in CSE', desc: 'Mymensingh Engineering college',gpa:"CGPA 3.64" },
  { title: 'HSC', desc: 'Dhaka Imperial College',gpa:"GPA 4.17" },
  { title: 'SSC', desc: 'Kadamtoli Alia Madrasah',gpa:"GPA 4.78" },

];
const experience = [
  { title: 'VLSI 7Days Training', desc: 'ULKASEMI',gpa:"" },
  { title: 'MERN STACK DEVELOPMENT', desc: 'OSTAD',gpa:"" },
];

export default function ResumeTabs() {
  const [tab, setTab] = useState<'Education' | 'Experience'>('Education');
  const data = tab === 'Education' ? education : experience;

  return (
    <section id='about' className="py-16 bg-[#0f0f0f] text-center">
      
      <h2 className="text-xl font-bold text-white mb-8">ABOUT ME</h2>
      <h2 className="text-4xl font-bold text-white mb-8">Get me know <span className='text-cyan-400'>who I am</span> </h2>
      <div className='grid grid-cols-12 '>
      <div className="xl:col-span-2"></div>
      <div className='col-span-10 xl:col-span-4 pt-15  pr-5 flex justify-center item-center xl:block '>
      <Image
            src={about}
            alt="John Lio"
            width={400}
            height={400}
            className="rounded-lg xl:block xl:h-170 xl:w-170"
          />
      </div>
      
      <div className='col-span-12 xl:col-span-4 pt-10 xl:pt-0'>
        <div className='text-left pl-5 text-gray-100 text-semibold text-xl'><h1 className='text-bold pb-5 text-3xl text-center'>Junior Fullstack Developer</h1>
{"I'm a passionate front-end developer with a keen eye for design and a dedication to creating intuitive, engaging user experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.My journey in web development started 5 years ago, and I've been in love with crafting digital experiences ever since. I specialize in building responsive, accessible websites and applications that not only look great but perform exceptionally well.When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in the mountains to recharge my creative batteries."}</div>
      <div className='flex pt-10 justify-around '>
        <div className='text-left '>
            <h1 className='font-bold text-[#0FF0FC] text-xl'>Name</h1>
            <h3 className='font-bold text-lg mb-5 text-gray-100'>Saiful Islam</h3>
            <h1 className='font-bold text-[#0FF0FC] text-xl'>Location</h1>
            <h3 className='font-bold text-lg mb-5 text-gray-100'>{"Jatrabari,Dhaka"}</h3>
            <h1 className='font-bold text-[#0FF0FC] text-xl'>Gmail</h1>
            <h3  className='font-bold text-lg mb-5 text-gray-100'>si912999@gmail.com</h3>
            <h1 className='font-bold text-[#0FF0FC] text-xl'>Mobile</h1>
            <h3  className='font-bold text-lg mb-5 text-gray-100'>01707961402</h3>
        </div>
      <div>
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6  rounded-full text-xl font-semibold ${tab === 'Education' ? 'bg-primary text-[#0FF0FC]' : 'bg-card text-white'}`}
          onClick={() => setTab('Education')}
        >
          Education
        </button>
        <button
          className={`px-6  rounded-full text-xl  font-semibold ${tab === 'Experience' ? 'bg-primary text-[#0FF0FC]' : 'bg-card text-white'}`}
          onClick={() => setTab('Experience')}
        >
          Experience
        </button>
      </div>
      <div className="flex flex-col items-center gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-gray-400 p-6 rounded-lg w-full max-w-md border-l-4 border-primary text-left">
            <h3 className="text-lg font-bold text-[#0f0f0f]">{item.title}</h3>
            <p className="text-gray-700 font-bold">{item.desc}</p>
            <p className="text-gray-700 font-bold">{item.gpa}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
      
      </div>
      </div>
      
      
    </section>
  );
}