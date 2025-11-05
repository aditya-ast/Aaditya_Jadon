import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Time-based animation for dynamic effects
    const timeInterval = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 16);

    // Live time update
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
      clearInterval(clockInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent" id="home">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced Floating Orbs with More Variety */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#030412] rounded-full blur-[1px]"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * 15 + Math.sin(time) * 10,
            y: mousePosition.y * 12 + Math.cos(time * 0.8) * 8,
          }}
        />

        {/* Pulsating Energy Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 border border-cyan-400/20 rounded-full"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 1.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-60 h-60 border border-purple-400/15 rounded-full"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.4, 0.05, 0.4],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating DNA Helix */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`helix-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r rounded-full"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [
                Math.cos((i * Math.PI) / 4 + time * 2) * 80,
                Math.cos((i * Math.PI) / 4 + time * 2 + Math.PI) * 80,
              ],
              y: [
                Math.sin((i * Math.PI) / 4 + time * 2) * 40 + (i - 4) * 15,
                Math.sin((i * Math.PI) / 4 + time * 2 + Math.PI) * 40 + (i - 4) * 15,
              ],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
        
        <motion.div
          className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-400/50 rounded-full blur-[1px]"
          animate={{
            y: [0, -35, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            x: mousePosition.x * -12 + Math.cos(time * 1.2) * 15,
            y: mousePosition.y * 15 + Math.sin(time * 0.6) * 12,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400/60 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{
            x: mousePosition.x * 18 + Math.sin(time * 1.5) * 8,
            y: mousePosition.y * -15 + Math.cos(time) * 10,
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-pink-400/35 rounded-full blur-[1px]"
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            x: mousePosition.x * -10 + Math.cos(time * 0.9) * 12,
            y: mousePosition.y * 8 + Math.sin(time * 1.3) * 6,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/2 w-1 h-1 bg-emerald-400/55 rounded-full"
          animate={{
            y: [0, -18, 0],
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          style={{
            x: mousePosition.x * 14 + Math.sin(time * 0.7) * 9,
            y: mousePosition.y * -12 + Math.cos(time * 1.1) * 7,
          }}
        />

        {/* Additional Dynamic Orbs */}
        <motion.div
          className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-yellow-400/45 rounded-full blur-[0.5px]"
          animate={{
            y: [0, -22, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{
            x: mousePosition.x * 12 + Math.sin(time * 1.8) * 7,
            y: mousePosition.y * 10 + Math.cos(time * 0.4) * 9,
          }}
        />

        <motion.div
          className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-indigo-400/40 rounded-full blur-[1px]"
          animate={{
            y: [0, -28, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
          style={{
            x: mousePosition.x * -16 + Math.cos(time * 1.4) * 11,
            y: mousePosition.y * 14 + Math.sin(time * 0.9) * 8,
          }}
        />

        {/* Quantum Field Effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`quantum-${i}`}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${20 + (i * 5) % 60}%`,
              top: `${25 + (i * 7) % 50}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.3,
              repeatDelay: 2,
            }}
          />
        ))}

        {/* Morphing Blob */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 0.8, 1.2, 1],
            borderRadius: [
              "50% 50% 50% 50%",
              "60% 40% 30% 70%",
              "40% 60% 70% 30%",
              "70% 30% 60% 40%",
              "50% 50% 50% 50%",
            ],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * -15 + Math.sin(time * 0.8) * 20,
            y: mousePosition.y * 10 + Math.cos(time * 0.6) * 15,
          }}
        />

        {/* Electric Arcs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`arc-${i}`}
            className="absolute w-0.5 h-32 bg-gradient-to-t from-transparent via-cyan-400/40 to-transparent"
            style={{
              left: `${30 + i * 25}%`,
              top: `${20 + i * 15}%`,
              transformOrigin: 'center bottom',
            }}
            animate={{
              scaleY: [0, 1, 0.3, 1, 0],
              opacity: [0, 0.8, 0.3, 0.8, 0],
              rotate: [
                Math.sin(time + i) * 20,
                Math.sin(time + i + 1) * 20,
                Math.sin(time + i + 2) * 20,
              ],
              x: [0, Math.sin(time * 0.5 + i) * 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Enhanced Dynamic Particle System */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
            style={{
              left: `${15 + (i * 2.5) % 70}%`,
              top: `${10 + (i * 3) % 80}%`,
            }}
            animate={{
              y: [0, -Math.random() * 80 - 30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.9, 0.1],
              scale: [0.5, Math.random() * 2 + 0.5, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Enhanced Shooting Stars Effect */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + i * 15}%`,
            }}
            animate={{
              x: [0, 300, 600],
              y: [0, 150, 300],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 3 + 2,
              repeatDelay: 12,
            }}
          />
        ))}

        {/* Comet Trails */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`comet-${i}`}
            className="absolute w-24 h-0.5 bg-gradient-to-r from-cyan-400/60 via-blue-400/40 to-transparent"
            style={{
              left: `${10 + i * 30}%`,
              top: `${20 + i * 25}%`,
              transformOrigin: 'left center',
            }}
            animate={{
              x: [0, 400],
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0.3],
              rotate: [15, 15, 15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 4 + 3,
              repeatDelay: 8,
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-8 h-8 border border-blue-400/25 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            x: mousePosition.x * -8 + Math.sin(time * 0.5) * 5,
            y: mousePosition.y * 6 + Math.cos(time * 0.8) * 4,
          }}
        />

        <motion.div
          className="absolute bottom-1/2 right-1/5 w-6 h-6 border border-purple-400/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * 10 + Math.cos(time * 1.2) * 8,
            y: mousePosition.y * -8 + Math.sin(time * 0.9) * 6,
          }}
        />

        {/* Additional Geometric Shapes */}
        <motion.div
          className="absolute top-2/3 left-1/4 w-5 h-5 border border-emerald-400/35"
          animate={{
            rotate: [0, 270, 0],
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * 6 + Math.sin(time * 0.7) * 4,
            y: mousePosition.y * -5 + Math.cos(time * 1.1) * 3,
          }}
        />

        <motion.div
          className="absolute top-1/5 right-2/5 w-4 h-4 border border-pink-400/30 rounded-full"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.5, 0.2],
            borderWidth: [1, 2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            x: mousePosition.x * -7 + Math.cos(time * 1.3) * 6,
            y: mousePosition.y * 9 + Math.sin(time * 0.6) * 5,
          }}
        />



        {/* Multiple Gradient Overlays */}
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-cyan-500/[0.04] via-emerald-500/[0.02] to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            x: mousePosition.x * -20 + Math.cos(time * 0.7) * 10,
            y: mousePosition.y * -15 + Math.sin(time * 0.5) * 8,
          }}
        />

        {/* Additional Gradient Layers */}
        <motion.div
          className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-radial from-pink-500/[0.03] via-rose-500/[0.015] to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            x: mousePosition.x * 18 + Math.sin(time * 0.6) * 12,
            y: mousePosition.y * 22 + Math.cos(time * 0.3) * 9,
          }}
        />

        {/* Enhanced Ripple Effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 border border-white/10 rounded-full"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.4, 0, 0.4],
            borderWidth: [1, 3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 border border-white/5 rounded-full"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.3, 0, 0.3],
            borderWidth: [1, 2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.5,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-white/5 rounded-full"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 3.5, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeOut",
            delay: 3,
          }}
        />

        {/* Floating Light Rays */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute w-0.5 h-20 bg-gradient-to-t from-transparent via-white/20 to-transparent"
            style={{
              left: `${25 + i * 15}%`,
              top: `${30 + i * 10}%`,
              transformOrigin: 'bottom center',
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.4, 0.1],
              scaleY: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-20"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 md:mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full relative overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 20px rgba(16, 185, 129, 0.2)",
                "0 0 30px rgba(16, 185, 129, 0.4)",
                "0 0 20px rgba(16, 185, 129, 0.2)",
              ],
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="w-2 h-2 bg-emerald-400 rounded-full relative z-10"
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  "0 0 8px rgba(16, 185, 129, 0.6)",
                  "0 0 16px rgba(16, 185, 129, 0.8)",
                  "0 0 8px rgba(16, 185, 129, 0.6)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span 
              className="text-sm text-gray-300 sm:m-7 md:m-0 font-medium relative z-10"
              animate={{
                color: [
                  "rgb(209, 213, 219)",
                  "rgb(96, 165, 250)",
                  "rgb(168, 85, 247)",
                  "rgb(52, 211, 153)",
                  "rgb(209, 213, 219)",
                ],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Available for new opportunities • {currentTime.toLocaleTimeString('en-US', { 
                hour12: true, 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
              })}
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-5xl mx-auto mb-8 md:mb-12"
        >
          <motion.h1 
            className={`font-bold text-white leading-tight mb-6 ${
              isMobile ? 'text-4xl' : isTablet ? 'text-6xl' : 'text-7xl'
            }`}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            
            <motion.span
              className="inline-block"
              whileHover={{ 
                scale: 1.05,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              animate={{
                background: [
                  'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                  'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)',
                  'linear-gradient(135deg, #06b6d4 0%, #10b981 50%, #f59e0b 100%)',
                  'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                ],
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              Aditya Jadon
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                background: [
                  'linear-gradient(to right, #60a5fa, #a78bfa, #34d399)',
                  'linear-gradient(to right, #a78bfa, #34d399, #fbbf24)',
                  'linear-gradient(to right, #34d399, #fbbf24, #f87171)',
                  'linear-gradient(to right, #60a5fa, #a78bfa, #34d399)',
                ],
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              transition={{ 
                delay: 0.5, 
                duration: 0.6,
                background: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Software Developer
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className={`text-gray-400 leading-relaxed max-w-xl mx-auto ${
              isMobile ? 'text-md' : 'text-lg'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
           From college hackathons to real-world web apps, I’ve turned challenges into XP. I’m still leveling up — not chasing perfection, but evolution — one project, one bug, one victory at a time.
          </motion.p>
        </motion.div>

        {/* Enhanced Call to Action Buttons */}
        <motion.div
          variants={itemVariants}
          className={`flex gap-6 mb-16 ${isMobile ? 'flex-col w-full max-w-sm' : 'flex-row'}`}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
              background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #0891b2 100%)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(59, 130, 246, 0.2)",
                "0 15px 35px rgba(139, 92, 246, 0.3)",
                "0 10px 30px rgba(6, 182, 212, 0.2)",
                "0 10px 30px rgba(59, 130, 246, 0.2)",
              ],
            }}
            transition={{
              boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            onClick={() => scrollToSection('project')}
            className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl border-0 transition-all duration-300 relative overflow-hidden ${
              isMobile ? 'px-8 py-4 text-lg' : 'px-10 py-4 text-lg'
            }`}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <span className="relative z-10">View My Work</span>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.4)",
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              borderColor: [
                "rgba(255, 255, 255, 0.2)",
                "rgba(59, 130, 246, 0.3)",
                "rgba(139, 92, 246, 0.3)",
                "rgba(255, 255, 255, 0.2)",
              ],
            }}
            transition={{
              borderColor: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            onClick={() => scrollToSection('contact')}
            className={`bg-transparent text-white font-semibold rounded-xl border-2 transition-all duration-300 hover:bg-white/5 relative overflow-hidden ${
              isMobile ? 'px-8 py-4 text-lg' : 'px-10 py-4 text-lg'
            }`}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <span className="relative z-10">Get In Touch</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-gray-400"
            whileHover={{ scale: 1.1 }}
          >
            <motion.span 
              className="text-sm font-medium"
              animate={{
                opacity: [0.6, 1, 0.6],
                color: [
                  "rgb(156, 163, 175)",
                  "rgb(96, 165, 250)",
                  "rgb(168, 85, 247)",
                  "rgb(156, 163, 175)",
                ],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              className="w-6 h-10 border-2 rounded-full flex justify-center relative overflow-hidden"
              animate={{
                borderColor: [
                  "rgba(255, 255, 255, 0.2)",
                  "rgba(96, 165, 250, 0.4)",
                  "rgba(168, 85, 247, 0.4)",
                  "rgba(255, 255, 255, 0.2)",
                ],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ 
                borderColor: "rgba(255, 255, 255, 0.6)",
                scale: 1.1,
              }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 rounded-full mt-2"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(96,165,250,0.4))',
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
