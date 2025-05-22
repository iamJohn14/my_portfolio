import React, {useState} from 'react'
import Image from "next/image";
import {assets} from "@/assets/assets";
import { motion } from "motion/react";

const Contact = ({isDarkMode}) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='contact'
      className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")]
        bg-no-repeat bg-center bg-[length:90%_auto] ${isDarkMode ? "bg-none" : ""}`}
    >
      <motion.h4
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-ovo'>
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-ovo'>
        Get in touch
      </motion.h2>
      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Let’s connect! Whether you’ve got an idea, a project, or just want to chat tech. I’d love to hear from you.
        Drop a message below and let’s make something awesome together.
      </motion.p>

      <motion.form
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid auto-fit gap-6 mt-10 mb-8'>
          <motion.input type='text' placeholder='Enter your name' required name='name'
                 initial={{opacity: 0, x: -50}}
                 whileInView={{opacity: 1, x: 0}}
                 transition={{duration: 1.1, delay: 0.6}}
                 className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
                 ${isDarkMode ? "border-white/90 bg-[#2a004a4D]" : "border-gray-400 bg-white"}`}
          />
          <motion.input type='email' placeholder='Enter your email' required name='email'
                 initial={{opacity: 0, x: 50}}
                 whileInView={{opacity: 1, x: 0}}
                 transition={{duration: 0.6, delay: 1.2}}
                 className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
                 ${isDarkMode ? "border-white/90 bg-[#2a004a4D]" : "border-gray-400 bg-white"}`}
          />
        </div>
        <motion.textarea rows='6' placeholder='Enter your message' required name='message'
                 initial={{opacity: 0, y: 100}}
                 whileInView={{opacity: 1, y: 0}}
                 transition={{duration: 0.6, delay: 1.3}}
                 className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6
                  ${isDarkMode ? "border-white/90 bg-[#2a004a4D]" : "border-gray-400 bg-white"}`}
        ></motion.textarea>
        <motion.button
          whileHover={{scale: 1.05}}
          transition={{duration: 0.3}}
          type='submit'
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 text-white rounded-full mx-auto 
          duration-500 ${isDarkMode ? "bg-transparent border-[0.5px] hover:bg-[var(--darkHover)]" : "bg-black/80 hover:bg-black"}`}>
          Submit now
          <Image src={assets.right_arrow_white} alt='submit' className='w-4' />
        </motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
