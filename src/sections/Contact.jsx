import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
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
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Aditya",
          from_email: formData.email,
          to_email: "aditya.jadon.at@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section className="relative min-h-screen flex items-center c-space section-spacing">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
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
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <span className="text-xl">🚀</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
