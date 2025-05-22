import React from 'react'
import Image from "next/image";
import {assets} from "@/assets/assets";

const Header = () => {
  return (
    <div
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'
    >
      <div className='mt-40 md:mt-4'>
        <Image
          src={assets.profile_img}
          alt='profile'
          className='rounded-full w-40 shadow-sm bg-opacity-50'
        />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
        Hi! I'm John Robles
        <Image
          src={assets.hand_icon}
          alt='hand-icon'
          className='w-6'
        />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        full-stack web developer based in the Philippines
      </h1>
      <p className='max-w-2xl mx-auto font-ovo'>
        I am a full-stack developer from Porac, Pampanga with 2.5 years of experience.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
           className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt='contact'
            className='w-4'
          />
        </a>
        <a href="/john-resume.pdf" download
           className='px-10 py-3 border rounded-full rounder-full border-gray-500 flex items-center gap-2'
        >
          my resume
          <Image
            src={assets.download_icon}
            alt='download'
            className='w-4'
          />
        </a>
      </div>
    </div>
  )
}

export default Header
