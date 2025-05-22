import React from 'react';
import {assets, serviceData} from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return(
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>
        What I offer
      </h4>
      <h2 className='text-center text-5xl font-ovo'>
        My Services
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Passionate about building scalable, user-focused web applications.
        I've worked with startups and growing businesses to create clean front-end experiences and robust
        backend systems that drive results. From design to deployment, I focus on performance, reliability,
        and delivering digital solutions that make an impact.
      </p>
      <div className='grid auto-fit gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
          <div
            key={index}
            className='border border-gray-400 orunded-lg px-8 py-12 shadow-black
            cursor-pointer hover:bg-[var(--lightHover)] hover:-translate-y-1 duration-500'
          >
            <Image
              src={icon}
              alt='icon'
              className='w-10'
            />
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more
              <Image src={assets.right_arrow} alt='read-more' className='w-4' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
