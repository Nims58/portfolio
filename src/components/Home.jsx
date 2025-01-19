import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  enter: { opacity: 0, rotate: -90, scale: 0.8 },
  center: { opacity: 1, rotate: 0, scale: 1 },
  exit: { opacity: 0, rotate: 90, scale: 0.8 },
};

const animationSettings = {
  duration: 0.8,
  ease: "easeInOut",
};


const Home = () => {

  const texts = [" Geomatics Engineer", " Geospatial Application Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-white'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          NIMESH BHANDARI
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a
          <motion.span
            key={texts[currentTextIndex]} // Unique key for smooth transitions
            initial="enter"
            animate="center"
            exit="exit"
            variants={textVariants}
            transition={animationSettings}
          >
            {texts[currentTextIndex]}
          </motion.span>
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a Geomatics Engineer with experience in geospatial application development, spatial analysis, and
          mapping. I specialize in geospatial data processing and web-based mapping platforms. Passionate about
          continuous learning and growth, I am committed to expanding my expertise in cutting-edge geospatial
          technologies and contributing to impactful projects.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover: hover:border-purple-900'>
              View Works
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
