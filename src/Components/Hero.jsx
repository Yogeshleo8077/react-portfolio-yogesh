import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-40">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-6 md:px-12 lg:px-16">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-center lg:text-left"
            >
              Yogesh Kushwah
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl md:text-2xl lg:text-3xl font-semibold text-transparent text-center lg:text-left"
            >
              Web Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl text-sm md:text-base lg:text-lg font-light text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-6 md:px-12 lg:px-16">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-64 md:w-80 lg:w-[500px] rounded-full shadow-lg"
            src={profilePic}
            alt="Yogesh Kushwah"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
