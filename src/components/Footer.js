import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="w-full
    p-5
    text-center
    bottom-0
    left-0
    text-gray-600 font-Lato"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      animate={{ opacity: 1 }}
    >
      <p>
        Built with 💖 by{" "}
        <a
          className="underline text-blue-700"
          href="https://twitter.com/Kagyu24"
          rel="noreferrer"
          target="_blank"
        >
          Justin Lemos (@Kagyu24)
        </a>{" "}
        || © 2022
      </p>
    </motion.footer>
  );
};

export default Footer;
