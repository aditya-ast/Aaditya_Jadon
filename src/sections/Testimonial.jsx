import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, linkedin }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col flex-1">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <svg 
              className="w-4 h-4 fill-blue-400" 
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
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
            <span className="text-white">Hear From My </span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Clients
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
            Real feedback from satisfied clients and partners
          </motion.p>
        </motion.div>
      </div>
      
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
