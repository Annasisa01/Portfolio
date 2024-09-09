"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400'>Hello, I&apos;m  </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Annas',
                            2000,
                            'Software Developer',
                            2000
                        ]}
                        wrapper="span"
                        speed={15}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
                    Transforming ideas into code and visions 
                    into reality—welcome to my playground!
                </p>
                <div>
                    {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white'>Hire Me</button> */}
                    <a href='/resume.pdf' download> 
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block px-5 py-2 bg-[#121212] w-full rounded-full hover:bg-slate-800'>Download Resume</span>
                        </button>
                    </a>
                    
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-5 lg:mt-0'>
                {/* Try to add an image size for medium screens */}
                <div className='rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src="/images/bitmoji.png"
                        alt='profile pic'
                        // Try to remove the parameters from the classname, starting from transform
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={400}
                        height={600}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection