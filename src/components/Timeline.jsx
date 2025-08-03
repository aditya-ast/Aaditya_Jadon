"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      {/* Simple and Dynamic Header */}
      <div className="relative mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Clean heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">My Work </span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Experience
            </span>
          </h2>
          
          {/* Simple animated underline */}
          <motion.div
            className="flex justify-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            className="text-lg text-neutral-400 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            A journey through technology and innovation
          </motion.p>
        </motion.div>
      </div>

      <div ref={ref} className="relative pb-20 mt-12">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Enhanced Timeline Dot */}
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <motion.div 
                className="absolute w-4 h-4 rounded-full -left-[7px] bg-gradient-to-br from-blue-500 to-purple-600"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
              </motion.div>
              
              {/* Enhanced Date/Title Section */}
              <motion.div 
                className="flex-col hidden gap-3 text-lg font-bold md:flex md:pl-20 md:text-2xl lg:text-3xl"
                variants={contentVariants}
              >
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-full backdrop-blur-sm">
                  <h3 className="text-lg lg:text-xl text-blue-400 font-semibold">{item.date}</h3>
                </div>
                <h3 className="text-xl lg:text-2xl text-white font-bold">{item.title}</h3>
                <h3 className="text-lg lg:text-xl text-transparent bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text">
                  {item.job}
                </h3>
              </motion.div>
            </div>

            {/* Enhanced Content Card */}
            <motion.div 
              className="relative w-full pl-20 pr-4 md:pl-4"
              variants={contentVariants}
            >
              {/* Mobile Date/Title */}
              <div className="block mb-4 md:hidden">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-full backdrop-blur-sm mb-2">
                  <h3 className="text-sm text-blue-400 font-semibold">{item.date}</h3>
                </div>
                <h3 className="text-lg text-white font-bold mb-1">{item.title}</h3>
                <h3 className="text-sm text-neutral-400">{item.job}</h3>
              </div>
              
              {/* Enhanced Content Card */}
              <motion.div 
                className="p-4 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="space-y-3">
                  {item.contents.map((content, contentIndex) => (
                    <motion.div
                      key={contentIndex}
                      className="flex items-start space-x-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: contentIndex * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-sm md:text-base text-neutral-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {content}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
        
        {/* Enhanced Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[1px] top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent rounded-full"
        >
          {/* Static gradient line without scroll animation */}
          <div className="absolute inset-x-0 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-blue-500/50" />
        </div>
      </div>
    </div>
  );
};
