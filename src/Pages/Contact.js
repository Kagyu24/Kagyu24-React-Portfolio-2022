import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Scroll from "../assets/icons/11-arrow-up-solid.gif";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6mygxcm",
        "template_hskicnp",
        form.current,
        "gfne2tBzcCa0_pY0B"
      )
      .then(
        (result) => {
          console.log(result.text);

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="w-screen h-screen snap-start w-full flex-shrink-0 h-screen flex flex-col items-center justify-center scroll-smooth"
    >
      <motion.div
        className=" w-full h-full flex flex-col sm:flex-row justify-center items-center"
        initial={{ opacity: 0, translateX: -10 }}
        transition={{ delay: 1, duration: 0.7 }}
        animate={{ translateX: 0, opacity: 1 }}
      >
        <div className="w-full sm:w-1/2 h-1/2 flex flex-col sm:gap-20 justify-center items-start lg:items-center sm:p-7 md:pl-7">
          <div className="w-full sm:w-auto lg:hidden xl:flex justify-center items-center text-[.8rem] sm:text-[.84rem] md:text-[1.05rem] lg:text-2xl font-normal">
            <h1 className="flex justify-center">Get In Touch With Me</h1>
          </div>
          <div className="w-1/2 flex flex-col gap-12 justify-center items-center text-3xl leading-snug  hidden lg:flex font-light">
            <p>
              I'd love to hear back from you, and thank you for looking though
              my site!
            </p>
            <p>
              Feel free to follow me on social media from the links on the right
              side of the page!
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col sm:gap-5 justify-center items-center sm:items-start sm:text-[1.3rem] md:text-2xl font-light">
            <div className=" flex justify-start items-center gap-5">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Sherwood, OR</p>
            </div>
            <a
              href="tel:541-228-2538"
              className="flex justify-start items-center gap-5 border-b-[1px] hover:text-[#537DAC] hover:border-[#537DAC] transition-all"
            >
              <FontAwesomeIcon icon={faPhone} />
              <p>541-228-2538</p>
            </a>
            <a
              href="mailto:justinlemos25@gmail.com"
              className=" flex justify-start items-center gap-5 border-b-[1px] hover:text-[#537DAC] hover:border-[#537DAC] transition-all"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <p>justinlemos25@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="h-1/2 w-full sm:w-1/2 flex justify-center items-center">
          <div className="w-full sm:w-3/4 flex justify-center items-center p-5 border rounded-md border-[#537dac]">
            <form
              className="flex flex-col justify-center items-center w-full font-Lato"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex flex-col justify-center items-start w-[95%] h-full">
                <label className="text-[#537dac]">Name</label>
                <input
                  className="w-full p-[5px] border-2 border-[#4871a1] ring-inset text-base outline-none bg-inherit text-white font-Lato pl-1 rounded-md flex"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col justify-center items-start w-[95%] h-full">
                <label className="text-[#537dac]">Email</label>
                <input
                  className="w-full p-[5px] border-2  border-[#4871a1] ring-inset text-base outline-none bg-inherit text-white font-Lato pl-1 rounded-md"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                />
              </div>

              <div className="flex flex-col justify-center items-start w-[95%] h-full">
                <label className="text-[#537dac]">Message</label>
                <textarea
                  className="w-full pt-3 pl-1 rounded-md text-base outline-none bg-inherit text-white resize-none font-Lato ring-inset border-2 border-[#4871a1]"
                  placeholder="Type your message..."
                  name="message"
                  cols="60"
                  rows="10"
                />
              </div>
              <input
                className="w-[95%] p-3 my-3 mx-0 bg-inherit border-2 rounded-md border-[#4871a1] text-base font-medium text-[#537dac] hover:bg-[#537dac] hover:text-white hover:ease-in-out duration-200"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </motion.div>
      <a href="#about" className="fixed right-[.5%] bottom-[1%] pointer">
        <img
          className="w-12 h-12 md:w-14 md:h-14"
          src={Scroll}
          alt="scroll-up"
        />
      </a>
      <Footer />
    </div>
  );
};
