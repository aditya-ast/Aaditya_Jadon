import { mySocials } from "../constants";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 text-sm text-neutral-400 c-space">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <motion.a 
            href={social.href} 
            key={index}
            className="footer-social-link"
            whileHover={{ 
              scale: 1.2,
              y: -3,
              rotate: [0, -5, 5, 0]
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <motion.img 
              src={social.icon} 
              className="w-5 h-5" 
              alt={social.name}
              whileHover={{
                filter: "brightness(1.4) saturate(1.3)"
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        ))}
      </div>
      <p>© 2025 Aditya. All rights reserved.</p>
    </section>
  );
};

export default Footer;
