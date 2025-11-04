import { useRef } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space py-12 md:py-16 lg:py-20" id="about">
      {/* About Me Header - Same style as Projects */}
      <div className="relative mb-16 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Clean heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">About </span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Me
            </span>
          </h2>
          
          {/* Simple animated underline */}
          <motion.div
            className="flex justify-start"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            className="text-lg text-neutral-400 max-w-2xl mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Passionate developer crafting innovative digital experiences
          </motion.p>
          
          {/* Dynamic badges at the end */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center space-x-3 mt-8"
          >
            <motion.span
              className="px-3 py-2 text-sm font-medium bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                opacity: [0.8, 1, 0.8],
                y: [0, -2, 0]
              }}
              transition={{ 
                opacity: { duration: 2, repeat: Infinity },
                y: { duration: 3, repeat: Infinity }
              }}
            >
              👨‍💻 Developer
            </motion.span>
            <motion.span
              className="px-3 py-2 text-sm font-medium bg-purple-500/10 border border-purple-400/30 rounded-full text-purple-400"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                opacity: [0.8, 1, 0.8],
                y: [0, -2, 0]
              }}
              transition={{ 
                opacity: { duration: 2, repeat: Infinity, delay: 0.5 },
                y: { duration: 3, repeat: Infinity, delay: 0.5 }
              }}
            >
              🚀 4+ Years
            </motion.span>
            <motion.span
              className="px-3 py-2 text-sm font-medium bg-emerald-500/10 border border-emerald-400/30 rounded-full text-emerald-400"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                opacity: [0.8, 1, 0.8],
                y: [0, -2, 0]
              }}
              transition={{ 
                opacity: { duration: 2, repeat: Infinity, delay: 1 },
                y: { duration: 3, repeat: Infinity, delay: 1 }
              }}
            >
              💡 Creative
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Aditya Jadon</p>
            <p className="subtext">
              I create and design dynamic, high-quality software and web applications, handling everything from development and design to content writing for a complete end-to-end solution.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Integration"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Version Control"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Streamlining"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/ts.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/react.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/ql.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/node3.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 - Download Resume */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Want to know more about my experience?
            </p>
            <motion.a
              href="/resume/Aaditya_Jadon.pdf"
              download="Aaditya_Jadon.pdf"
              className="flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium rounded-full shadow-2xl hover:bg-white/10 hover:shadow-white/5 transition-all duration-300 cursor-pointer"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download Resume
            </motion.a>
            <p className="text-center text-sm text-neutral-400 mt-2">
              PDF • Updated {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </p>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
