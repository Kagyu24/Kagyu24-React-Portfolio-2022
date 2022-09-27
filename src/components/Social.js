import React from "react";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Codepen } from "@styled-icons/feather/Codepen";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <motion.div
      className="flex
    flex-col
    fixed
    right-4
    bottom-[40%]
    gap-2
    z-10
    invisible sm:visible"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      animate={{ opacity: 1 }}
    >
      <motion.a
        className="w-10 h-10 hover:text-[#1A8CD8] hover:bg-[#fff] hover:rounded-full flex justify-center items-center"
        href="https://twitter.com/Kagyu24"
        target="_blank"
        rel="noreferrer"
        animate={{ x: [null, -10, 0] }}
        transition={{
          duration: 0.5,
          delay: 2.7,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 10,
        }}
      >
        <Twitter size="42" />
      </motion.a>
      <motion.a
        className="w-10 h-10 hover:text-[#000] hover:bg-[#fff] hover:rounded-full flex justify-center items-center"
        href="https://codepen.io/Kagyu24"
        target="_blank"
        rel="noreferrer"
        animate={{ x: [null, -10, 0] }}
        transition={{
          duration: 0.5,
          delay: 2.8,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 10,
        }}
      >
        <Codepen size="37" />
      </motion.a>
      <motion.a
        className="w-10 h-10 hover:text-[#0A66C2] hover:bg-white hover:rounded-full flex justify-center items-center"
        href="https://www.linkedin.com/in/justinlemos24/"
        target="_blank"
        rel="noreferrer"
        animate={{ x: [null, -10, 0] }}
        transition={{
          duration: 0.5,
          delay: 2.9,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 10,
        }}
      >
        <LinkedinWithCircle size="38" />
      </motion.a>
      <motion.a
        className="w-10 h-10 hover:text-[#211F1F] hover:bg-white hover:rounded-full flex justify-center items-center"
        href="https://github.com/Kagyu24"
        target="_blank"
        rel="noreferrer"
        animate={{ x: [null, -10, 0] }}
        transition={{
          duration: 0.5,
          delay: 3,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 10,
        }}
      >
        <Github size="42" />
      </motion.a>
    </motion.div>
  );
};

export default Social;
