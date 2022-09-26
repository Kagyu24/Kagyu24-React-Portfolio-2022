import React from "react";
import Me from "../assets/projects/Me1.webp";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div
      id="about"
      className="w-screen h-screen snap-start flex-shrink-0 h-screen flex items-center justify-center scroll-smooth"
    >
      <motion.div
        className=" w-full
    h-full
    flex
    justify-center
    items-center
    "
        initial={{ opacity: 0, translateX: -10 }}
        transition={{ delay: 1, duration: 0.7 }}
        animate={{ translateX: 0, opacity: 1 }}
      >
        <div
          className="w-full
h-full
flex
flex-col
justify-center
items-center"
        >
          <h1 className="font-semibold">About Me</h1>
          <div
            className=" w-3/4
  h-3/4
  flex
  flex-col-reverse
  md:flex-row  
  justify-center
  items-center
  md:gap-6
  lg:gap-0"
          >
            <div
              className=" w-full md:w-1/2
  text-2xl
  md:text-3xl
  md:text-left
  lg:text-center
  font-normal
  md:font-light
  flex
  flex-col
  leading-10
  md:leading-10
  justify-center
  items-center
  text-center"
            >
              <p>
                Hi, I'm Justin Lemos! I've been learning about Front-End Web
                Development since late 2021. In that time I've learned a lot
                about myself and this career I'm interested in.
              </p>
              <p>I hope you like what you see and get in touch with me!</p>
            </div>
            <div
              className=" h-full
  w-3/4
  md:w-1/2
  flex
  justify-center
  items-center"
            >
              <div
                className="w-full md:w-3/4
  flex
  md:flex-row
  justify-center
  items-center
  border-2
  border-rounded
  rounded-md"
              >
                <img
                  className="w-full h-full object-cover rounded-sm"
                  src={Me}
                  alt="/"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
