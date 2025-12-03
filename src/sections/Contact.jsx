import { Particles } from "../components/Particles";

const Contact = () => {
  return (
    <section className="relative min-h-screen flex items-center c-space py-12 md:py-16 lg:py-20" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="space-y-8">
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
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Have a vision? Let's build it. From concept to code, I shape bold ideas into seamless digital experiences.
          </p>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <a 
              href="mailto:aditya.jadon.at@gmail.com"
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 text-xl">📧</span>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm text-neutral-400 mb-1">Email Address</p>
                  <p className="text-white font-medium text-lg break-all">aditya.jadon.at@gmail.com</p>
                </div>
              </div>
            </a>

            <a 
              href="https://github.com/aditya-ast"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-white/10 backdrop-blur-sm hover:border-green-400/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 text-xl">🐱</span>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm text-neutral-400 mb-1">GitHub Profile</p>
                  <p className="text-white font-medium text-lg">github.com/aditya-ast</p>
                </div>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/aditya-jadon-92692a230/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm hover:border-indigo-400/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-400 text-xl">💼</span>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm text-neutral-400 mb-1">LinkedIn Profile</p>
                  <p className="text-white font-medium text-lg">aditya-jadon</p>
                </div>
              </div>
            </a>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 text-xl">💬</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-neutral-400 mb-1">Response Time</p>
                  <p className="text-white font-medium text-lg">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;