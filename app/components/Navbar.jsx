import React, {useRef} from 'react'
import Image from "next/image";
import {assets} from "@/assets/assets";

const Navbar = () => {
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image
          src={assets.header_bg_color}
          alt='header-bg-color'
          className='w-full'
        />
      </div>
      <nav
        className='w-full fixed px-5 lg: px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            priority
            width={200}
            height={150}
            className="object-contain object-center mr-14"
          />
        </a>
        <ul
          className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'
        >
          <li><a href="#top" className='font-ovo'>Home</a></li>
          <li><a href="#about" className='font-ovo'>About Me</a></li>
          <li><a href="#services" className='font-ovo'>Services</a></li>
          <li><a href="#work" className='font-ovo'>My Work</a></li>
          <li><a href="#contact" className='font-ovo'>Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button>
            <Image
              src={assets.moon_icon}
              alt='dark-toggle'
              className='w-6'
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full font-ovo"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="contact"
              className="pl-2 w-5"/>
          </a>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt='menu-black'
              className='w-6'
            />
          </button>
        </div>

      {/*  Mobile menu */}
        <ul ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
          top-0 bottom-0 w-64 z-50 h-screen bg-sky-50 transition duration-500'
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='close-black' className='w-5 cursor-pointer'/>
          </div>
          <li><a href="#top" className='font-ovo' onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className='font-ovo' onClick={closeMenu}>About Me</a></li>
          <li><a href="#services" className='font-ovo' onClick={closeMenu}>Services</a></li>
          <li><a href="#work" className='font-ovo' onClick={closeMenu}>My Work</a></li>
          <li><a href="#contact" className='font-ovo' onClick={closeMenu}>Contact Me</a></li>
        </ul>
      {/*  end code for Mobile menu*/}
      </nav>
    </>
  )
}

export default Navbar

