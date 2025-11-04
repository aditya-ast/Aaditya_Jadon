import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
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

  const navItems = [
    { name: "Home", href: "#home", sectionId: "home", icon: "🏠" },
    { name: "About", href: "#about", sectionId: "about", icon: "👤" },
    { name: "Projects", href: "#project", sectionId: "project", icon: "🚀" },
    { name: "Experience", href: "#work", sectionId: "work", icon: "💼" },
    { name: "Contact", href: "#contact", sectionId: "contact", icon: "📧" }
  ];

  return (
    <motion.div 
      className="floating-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ul className="nav-container">
        {navItems.map((item, index) => (
          <motion.li 
            key={item.name}
            className="nav-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <motion.button 
              className="nav-link-modern" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.sectionId);
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(50px)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                scale: { duration: 0.2, ease: "easeOut" },
                backgroundColor: { duration: 0.3 },
                backdropFilter: { duration: 0.3 },
              }}
            >
              <motion.span 
                className="nav-icon"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.2
                }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.span>
              <motion.span 
                className="nav-text"
                whileHover={{ 
                  background: [
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                    "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                    "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  ],
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                transition={{ duration: 0.8 }}
              >
                {item.name}
              </motion.span>
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Scroll to section function for mobile menu
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <>
      {/* Desktop Navigation - Bottom positioned with enhanced glass effect */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden sm:block px-4">
        <Navigation />
      </div>

      {/* Mobile Navigation - Fixed top-right position */}
      <div className="fixed top-4 right-4 z-50 block sm:hidden">
        <div className="relative">
          <div className="mobile-nav-container-small">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-toggle-small"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation menu"
            >
              <motion.div
                className="w-4 h-4 flex items-center justify-center"
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                ) : (
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Overlay - Positioned below button */}
          {isOpen && (
            <motion.div
              className="mobile-glass-overlay-top"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="mobile-nav-grid">
                {[
                  { name: "Home", href: "#home", sectionId: "home", icon: "🏠" },
                  { name: "About", href: "#about", sectionId: "about", icon: "👤" },
                  { name: "Experience", href: "#work", sectionId: "work", icon: "💼" },
                  { name: "Projects", href: "#project", sectionId: "project", icon: "🚀" },
                  { name: "Contact", href: "#contact", sectionId: "contact", icon: "📧" }
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.sectionId);
                      setIsOpen(false);
                    }}
                    className="mobile-glass-link"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span 
                      className="mobile-glass-icon"
                      whileHover={{ 
                        rotate: [0, -15, 15, 0],
                        scale: 1.3
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.span>
                    <motion.span 
                      className="mobile-glass-text"
                      whileHover={{ 
                        background: [
                          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                          "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                          "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
                          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                        ],
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      {item.name}
                    </motion.span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
