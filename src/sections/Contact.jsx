import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  // Vite env vars (set these in your .env for production):
  // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY, VITE_CONTACT_EMAIL
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "adisingh7478@gmail.com";

  // Initialize EmailJS if public key exists
  useEffect(() => {
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (err) {
        // non-fatal; we'll still attempt to send with send(..., PUBLIC_KEY)
        console.warn("EmailJS init failed:", err);
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showAlertMessage("danger", "Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showAlertMessage("danger", "Please enter a valid email address");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID) {
      showAlertMessage(
        "danger",
        "Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID."
      );
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Aditya",
      to_email: CONTACT_EMAIL,
      message: formData.message,
      reply_to: formData.email,
      subject: `New message from ${formData.name}`,
    };

    try {
      const sendArgs = [SERVICE_ID, TEMPLATE_ID, templateParams];
      // If PUBLIC_KEY present, pass it as the 4th argument to send
      if (PUBLIC_KEY) sendArgs.push(PUBLIC_KEY);

      const result = await emailjs.send(...sendArgs);
      console.log("EmailJS result:", result);
      setFormData({ name: "", email: "", message: "" });
      // reset native form if available
      if (formRef.current) formRef.current.reset();
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (err) {
      console.error("Send error:", err);
      let message = "Something went wrong while sending your message. Please try again later.";
      if (err && err.status === 0) message = "Network error. Please check your connection.";
      showAlertMessage("danger", message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="relative min-h-screen flex items-center c-space py-12 md:py-16 lg:py-20" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 text-sm font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full">
                Get In Touch
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Let's Create
              <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
                Something Amazing
              </span>
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-lg">
              Ready to bring your vision to life? Whether it's a cutting-edge web application, 
              a mobile solution, or a complex system architecture, I'm here to turn your ideas into reality.
            </p>
          </div>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 text-xl">📧</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-neutral-400 mb-1">Email Address</p>
                  <p className="text-white font-medium text-lg break-all">aditya.jadon.at@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 text-xl">💬</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-400 mb-1">Response Time</p>
                  <p className="text-white font-medium text-lg">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          <div className="relative p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-2">Send me a message</h3>
              <p className="text-neutral-400">I'll get back to you as soon as possible</p>
            </div>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isLoading}
                className="glass-button group relative w-full py-4 px-8 rounded-3xl overflow-hidden text-white font-medium text-lg transition-all duration-500 focus:outline-none disabled:opacity-50"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  whileHover={{
                    background: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "linear-gradient(315deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10 flex items-center justify-center space-x-3">
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className="w-4 h-4 bg-white/60 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="opacity-80">Sending...</span>
                    </div>
                  ) : (
                    <>
                      <motion.span
                        className="text-xl"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        ✨
                      </motion.span>
                      <span>Send Message</span>
                      <motion.span
                        className="text-xl opacity-70"
                        whileHover={{ x: 3 }}
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </div>
              </motion.button>
             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
