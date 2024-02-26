"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';




const HeroSections = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-primary mb-4  text-4xl sm:text-5xl lg:text-5xl font-extrabold"><span className='text-transparent bg-clip-text bg-gradient-to-br from-primary to-tertiary-400 '>Hello, I'm {" "}</span>
          <br/>
          <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Ahmad Alghawi',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'Full Stack Developer',
                1000,
                'UX/UI Designer',
                1000
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>
          <p className='text-secondary text-base sm:text-lg mb-6 lg:text-2xl sm:pr-2 dark:dark:text-tertiary-300' >
            I'm a Software Developer with 3+ years of expertise and 1+ year as a Full Stack Developer at Skillur.
            Proficient in React.js, TypeScript, Node.js, and more. 
          </p>
          <div>
            <Link 
              href='#contact' 
              className=' hover:to-primary px-6 py-3 mb-2 inline-block bg-gradient-to-br from-primary to-tertiary-400 text-Twhite w-full sm:w-fit  rounded-full mr-4'>
              Hire me</Link>
            <Link href="/Resume.pdf" target="_blank"  rel="noopener noreferrer" className='px-1 inline-block py-1 bg-Twhite text-primary w-full sm:w-fit font-semibold border-2 border-tertiary-400 rounded-full  hover:bg-tertiary-200 bg-gradient-to-br from-primary to-tertiary-400'>
              <span className='block bg-[#e8f5fd] hover:bg-gradient-to-br from-primary to-tertiary-400 hover:text-Twhite rounded-full px-5 py-2'>Download CV</span></Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className="rounded-full bg-Twhite w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative dark:bg-[#222222]">
            <Image
            src="/images/MYpic4.png"
            alt='hero-image'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-[25%] lg:w-[220px]  dark:dark:bg-[#222222]'
            width={160}
            height={180}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSections