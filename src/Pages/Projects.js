import React from "react";
import { motion } from "framer-motion";
import Waves from "../assets/projects/Waves.webp";
import Pong from "../assets/projects/Pong.webp";
import UI from "../assets/projects/Switch-UI.webp";
import Portfolio from "../assets/projects/Portfolio.webp";
import Unfinished from "../assets/projects/Punctuation.webp";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="w-screen h-screen snap-start w-full flex-shrink-0 h-screen flex items-center justify-center scroll-smooth flex-col"
    >
      <motion.div
        className=" w-full h-full flex flex-col justify-around items-center"
        initial={{ opacity: 0, translateX: -10 }}
        transition={{ delay: 1, duration: 0.7 }}
        animate={{ translateX: 0, opacity: 1 }}
      >
        <h1 className="font-semibold mb-[-14rem] sm:mb-[-10rem] lg:mb-[-12rem]">
          Projects
        </h1>
        <h2 className="text-xl mb-[-10rem] sm:mb-[-9rem] lg:mb-[-10rem] border-b-[1px] p-2">
          Learn more by clicking an image
        </h2>
        <div className="grid justify-items-center items-center mb-[-5rem] sm:mb-0 sm:grid-cols-2 gap-y-6 sm:gap-x-10 sm:gap-y-16 md:gap-x-12 md:gap-y-10 lg:grid-cols-3 lg:gap-x-24 lg:gap-y-20">
          <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="https://waves-musicplayer1.netlify.app/"
            target="_blank"
            rel="noreferrer"
            draggable={false}
            className="w-[16rem] sm:w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[35rem] flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              draggable={false}
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
              whileTap={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              draggable={false}
              className="absolute w-full h-full flex flex-col justify-center items-center md:text-sm lg:text-base p-2 text-center select-none"
            >
              <div className="flex flex-col gap-3 justify-center items-center lg:mb-5">
                <h1 className="font-semibold text-2xl lg:text-3xl mb-2 leading-4">
                  Waves Music Player
                </h1>
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
            href="https://switch-ui.netlify.app/"
            target="_blank"
            rel="noreferrer"
            draggable={false}
            className="w-[16rem] sm:w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[35rem] flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              draggable={false}
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
              whileTap={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center text-sm md:text-base lg:text-xl p-2 text-center select-none"
            >
              <div className="flex flex-col justify-center items-center lg:mb-5">
                <h1 className="font-semibold text-2xl lg:text-3xl mb-2 leading-7">
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
              scale: 1.05,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="#about"
            draggable={false}
            className="w-[16rem] h-[8rem] sm:w-[18rem] sm:h-[10rem] md:w-[20rem] lg:w-[25rem] xl:w-[35rem] lg:h-auto flex rounded border hover:border-none overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              draggable={false}
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
              whileTap={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center text-sm md:text-base lg:text-xl p-2 text-center select-none"
            >
              <div className="flex flex-col justify-center items-center lg:mb-5">
                <h1 className="font-semibold text-2xl lg:text-3xl mb-2 leading-7">
                  My Portfolio
                </h1>
                <h2 className="text-sky-400 font-semibold">
                  My own personal website
                </h2>
              </div>
              <h3>React | Tailwind CSS | Framer Motion | Mantine UI</h3>
            </motion.div>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="/"
            draggable={false}
            className="w-[16rem] sm:w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[35rem] flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              draggable={false}
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
              whileTap={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center text-sm md:text-base lg:text-xl p-2 text-center select-none"
            >
              <div className="flex flex-col justify-center items-center lg:mb-5">
                <h1 className="font-semibold text-2xl lg:text-3xl mb-2 leading-7">
                  Coming Soon!
                </h1>
                <h1 className="font-semibold text-2xl lg:text-3xl mb-2 leading-7">
                  Weather App
                </h1>
                <h2 className="text-sky-400 font-semibold">
                  A cool looking weather app
                </h2>
              </div>
              <h3>React | Tailwind CSS | JavaScript | API</h3>
            </motion.div>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="/"
            draggable={false}
            className="w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[35rem] hidden sm:flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              draggable={false}
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
              whileTap={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center md:text-sm lg:text-base p-2 text-center select-none"
            >
              <div className="flex flex-col gap-3 justify-center items-center lg:mb-5">
                <h1 className="font-semibold text-2xl lg:text-3xl mb-2 leading-4">
                  Coming Soon!
                </h1>
                <h1 className="font-semibold text-2xl lg:text-3xl mb-2 leading-4">
                  Restaurant Finder App
                </h1>
                <h2 className="text-sky-400 font-semibold">
                  A way to find a new favorite hangout
                </h2>
              </div>
              <h3>API | Dynamic Map | UI Design</h3>
            </motion.div>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            whileTap={{ scale: 1 }}
            href="https://kagyu24.itch.io/pong-in-space"
            target="_blank"
            rel="noreferrer"
            draggable={false}
            className="hidden w-[18rem] md:w-[20rem] lg:w-[25rem] xl:w-[35rem] sm:flex rounded overflow-hidden relative bg-[#15151F]"
          >
            <img
              className="w-full h-full object-cover"
              draggable={false}
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
              whileTap={{
                opacity: 1,
                background: "rgba(0,0,0,.8)",
                transition: { duration: 0.1, ease: "easeInOut" },
              }}
              className="absolute w-full h-full flex flex-col justify-center items-center md:text-sm lg:text-base p-2 text-center select-none"
            >
              <div className="flex flex-col gap-3 justify-center items-center lg:mb-5">
                <h1 className="font-semibold text-2xl lg:text-3xl mb-2 leading-4">
                  Pong In Space
                </h1>
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
