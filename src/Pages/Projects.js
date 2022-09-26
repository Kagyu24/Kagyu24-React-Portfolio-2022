import React from "react";
import { motion } from "framer-motion";
import Waves from "../assets/projects/Waves.webp";
import Pong from "../assets/projects/Pong.webp";
import UI from "../assets/projects/Switch-UI.webp";
import Portfolio from "../assets/projects/Portfolio.webp";
import Unfinished from "../assets/projects/Punctuation.webp";

export const Projects = () => {
  return (
    <div className="w-screen h-screen snap-start w-full flex-shrink-0 h-screen flex items-center justify-center scroll-smooth flex-col">
      <motion.div
        className=" w-full h-full flex flex-col justify-around items-center"
        initial={{ opacity: 0, translateX: -10 }}
        transition={{ delay: 1, duration: 0.7 }}
        animate={{ translateX: 0, opacity: 1 }}
      >
        <h1 className="font-semibold mb-[-12rem] lg:mb-[-12rem]">Projects</h1>
        <h2 className="text-xl mb-[-9rem] lg:mb-[-10rem]">
          Learn more by clicking an image
        </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-16 md:gap-x-12 md:gap-y-10 lg:grid-cols-3 lg:gap-x-24 lg:gap-y-20">
          <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="/"
            className="w-[18rem] md:w-[20rem] lg:w-[32rem] flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              src={Waves}
              alt="Music Player app"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center"
            >
              <div className="flex flex-col justify-center items-center mb-5">
                <h1 className="font-semibold">Waves Music Player</h1>
                <h2 className="text-sky-400 font-semibold">
                  My first React Project
                </h2>
              </div>
              <h3>React | SASS</h3>
            </motion.div>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="/"
            className="w-[18rem] md:w-[20rem] lg:w-[32rem] flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              src={UI}
              alt="Music Player app"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center text-base p-2 text-center"
            >
              <div className="flex flex-col justify-center items-center lg:mb-5">
                <h1 className="font-semibold mb-2 leading-8">
                  Nintendo Switch UI App
                </h1>
                <h2 className="text-sky-400 font-semibold">
                  A new take on the Nintendo Switch UI
                </h2>
              </div>
              <h3>React | Styled-Components | Framer Motion</h3>
            </motion.div>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="/"
            className="w-[18rem] h-[10rem] md:w-[20rem] lg:w-[32rem] lg:h-auto flex rounded border hover:border-none overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              src={Portfolio}
              alt="Music Player app"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center"
            >
              <div className="flex flex-col justify-center items-center mb-5">
                <h1 className="font-semibold">My Portfolio</h1>
                <h2 className="text-sky-400 font-semibold">
                  My own personal website
                </h2>
              </div>
              <h3>React | Tailwind CSS | Framer Motion</h3>
            </motion.div>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="/"
            className="w-[18rem] md:w-[20rem] lg:w-[32rem] flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              src={Unfinished}
              alt="Music Player app"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background: "rgba(0,0,0,.6)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center sm:text-xs md:text-sm lg:text-base p-2 text-center"
            >
              <div className="flex flex-col gap-3 justify-center items-center lg:mb-5">
                <h1 className="font-semibold mb-2 leading-4">Coming Soon!</h1>
                <h1 className="font-semibold">Weather App</h1>
                <h2 className="text-sky-400 font-semibold">
                  A cool looking weather app
                </h2>
              </div>
              <h3>React | Tailwind CSS | JavaScript | API</h3>
            </motion.div>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="/"
            className="w-[18rem] md:w-[20rem] lg:w-[32rem] flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              src={Unfinished}
              alt="Music Player app"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center sm:text-xs md:text-sm lg:text-base p-2 text-center"
            >
              <div className="flex flex-col gap-3 justify-center items-center lg:mb-5">
                <h1 className="font-semibold mb-2 leading-8">Coming Soon!</h1>
                <h1 className="font-semibold">Restaurant Finder App</h1>
                <h2 className="text-sky-400 font-semibold">
                  A way to find a new favorite hangout
                </h2>
              </div>
              <h3>API | Dynamic Map | UI Design</h3>
            </motion.div>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="/"
            className="w-[18rem] md:w-[20rem] lg:w-[32rem] flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              src={Pong}
              alt="Music Player app"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center md:text-sm lg:text-base p-2 text-center"
            >
              <div className="flex flex-col gap-3 justify-center items-center lg:mb-5">
                <h1 className="font-semibold mb-2 leading-4">Pong In Space</h1>
                <h2 className="text-sky-400 font-semibold">
                  Not a webpage, but a game I made using Unity
                </h2>
              </div>
              <h3>Unity | Audacity</h3>
            </motion.div>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
