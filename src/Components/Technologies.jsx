import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiMui } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { delay, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center"
      >
        {[
          { icon: <FaHtml5 className="text-7xl text-orange-500" />, delay: 2 },
          { icon: <FaCss3Alt className="text-7xl text-blue-500" />, delay: 3 },
          {
            icon: <IoLogoJavascript className="text-7xl text-yellow-500" />,
            delay: 4,
          },
          {
            icon: <TbBrandTypescript className="text-7xl text-blue-500" />,
            delay: 5,
          },
          {
            icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
            delay: 5,
          },
          { icon: <FaNodeJs className="text-7xl text-green-500" />, delay: 8 },
          {
            icon: <SiTailwindcss className="text-7xl text-cyan-400" />,
            delay: 10,
          },
          {
            icon: <SiPostman className="text-7xl text-orange-500" />,
            delay: 6,
          },
          {
            icon: <FaBootstrap className="text-7xl text-purple-800" />,
            delay: 12,
          },
          { icon: <SiExpress className="text-7xl text-gray-300" />, delay: 2 },

          {
            icon: <TbBrandFramerMotion className="text-7xl text-purple-800" />,
            delay: 12,
          },
          { icon: <SiMongodb className="text-7xl text-green-500" />, delay: 6 },
          { icon: <FaLinux className="text-7xl text-orange-500" />, delay: 2 },
          {
            icon: <VscVscode className="text-7xl text-blue-400" />,
            delay: 10,
          },

          { icon: <FaJava className="text-7xl text-orange-500" />, delay: 6 },

          { icon: <SiMui className="text-7xl text-blue-500" />, delay: 2 },

          { icon: <FaGithub className="text-7xl text-orange-500" />, delay: 6 },

          { icon: <FaDocker className="text-7xl text-blue-500" />, delay: 2 },
          {
            icon: <SiKubernetes className="text-7xl text-orange-500" />,
            delay: 6,
          },
          {
            icon: <SiSocketdotio className="text-7xl text-purple-500" />,
            delay: 2,
          },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.delay)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900 hover:scale-110 transition-transform duration-300"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
