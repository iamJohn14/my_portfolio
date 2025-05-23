import React, {useState} from 'react'
import {assets, workData} from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Work = ({isDarkMode}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? workData : workData.slice(0, 4);

  return (
    <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      <motion.h4
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-ovo'>
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-ovo'>
        My latest work
      </motion.h2>
      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        This is a collection of my web projects where I put my full-stack skills and design sense to work,
        building apps that people enjoy using and that run smoothly behind the scenes.
      </motion.p>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className={`grid auto-fit my-10 gap-5 ${isDarkMode ? "text-black" : "" }`}>
        {visibleProjects.map((project, index)=> (
          <motion.a
            href={project.link}
            target='_blank'
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}}
            key={index}
            style={{backgroundImage: `url(${project.bgImage})`}}
            className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group
                      ${isDarkMode ? "" : "border border-gray-400"} `}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex
            items-center justify-between duration-500 group-hover:bottom-7 border border-gray-400'
            >
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
                <p className='text-xs text-gray-500'>{project.tech}</p>
              </div>
              {/*<a href={project.link} target='_blank'*/}
              {/*  className='border rounded-full border-black w-9 aspect-square flex items-center justify-center*/}
              {/*shadow-[2px_2px_#000] group-hover:bg-sky-100 transition'*/}
              {/*>*/}
              {/*  <Image*/}
              {/*    src={assets.send_icon}*/}
              {/*    alt='send-icon'*/}
              {/*    className='w-5'*/}
              {/*  />*/}
              {/*</a>*/}
            </div>
          </motion.a>
        ))}
      </motion.div>
      {workData.length > 4 && (
        <motion.button
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 1.1}}
          onClick={() => setShowAll(!showAll)}
          className={`w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-3 
          px-10 mx-auto my-20  duration-500 ${isDarkMode ? "hover:bg-[var(--darkHover)] text-white border-white" 
          : "hover:bg-[var(--lightHover)] text-gray-700 border-gray-700"}`}
        >
          {showAll ? "Show less" : "Show more"}
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt='right-arrow'
            className='w-4'
          />
        </motion.button>
      )}
    </motion.div>
  )
}

export default Work
