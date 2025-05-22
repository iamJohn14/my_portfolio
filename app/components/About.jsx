import React from 'react';
import Image from "next/image";
import {assets, infoList, toolsData} from "@/assets/assets";

const About = ({isDarkMode}) => {
 return (
   <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
     <h4 className='pt-10 md:pt-0 text-center mb-2 text-lg font-ovo'>Introduction</h4>
     <h2 className='text-center text-5xl font-ovo'>About me</h2>
     <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
       <div className='w-90 rounded-3xl max-w-70 md:max-w-none'>
         <Image
           src={assets.user_image}
           alt='user'
           className='w-full rounded-3xl'
         />
       </div>
       <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo'>
            I craft scalable web applications that blend clean, efficient code with user-focused design.
            I've contributed to both agile startups and established companies, delivering impactful digital
            experiences through seamless front-end development, solid backend architecture, and effective
            cross-functional collaboration.
          </p>

         <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
           {infoList.map(({icon, iconDark, title, description}, index)=>(
             <li
               key={index}
               className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 
               ${isDarkMode ? "border-white hover:bg-[var(--darkHover)] shadow-white" : "border-gray-400 hover:bg-[var(--lightHover)] shadow-black"} `}
             >
               <Image
                 src={isDarkMode ? iconDark : icon}
                 alt={title}
                 className='w-7 mt-3'
               />
               <h3 className={`my-4 font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>{title}</h3>
               <p className={`text-sm ${isDarkMode ? "text-white/80" : "text-gray-600"}`}>{description}</p>
             </li>
           ))}
         </ul>

         <h4 className={`my-6 font-ovo ${isDarkMode ? "text-white/80" : "text-gray-700"}`}>
           Tools I use
         </h4>
         <ul className='flex items-center gap-3 sm:gap-5'>
           {toolsData.map((tool, index)=>(
             <li
               key={index}
               className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
               rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
             >
               <Image src={tool}
                      alt='tool'
                      className='w-5 sm:w-7'
               />
             </li>
           ))}
         </ul>
       </div>
     </div>
   </div>
 )
}

export default About;
