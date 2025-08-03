import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  const navItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👤" },
    { name: "Work", href: "#work", icon: "💼" },
    { name: "Contact", href: "#contact", icon: "📧" }
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
            <a 
              className="nav-link-modern" 
              href={item.href}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
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
                  { name: "Home", href: "#home", icon: "🏠" },
                  { name: "About", href: "#about", icon: "👤" },
                  { name: "Work", href: "#work", icon: "💼" },
                  { name: "Contact", href: "#contact", icon: "📧" }
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="mobile-glass-link"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mobile-glass-icon">{item.icon}</span>
                    <span className="mobile-glass-text">{item.name}</span>
                  </motion.a>
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
