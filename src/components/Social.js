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
    z-10"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      animate={{ opacity: 1 }}
    >
      <a
        className="w-10 h-10"
        href="https://twitter.com/Kagyu24"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter size="42" />
      </a>
      <a
        className="w-10 h-10"
        href="https://codepen.io/Kagyu24"
        target="_blank"
        rel="noreferrer"
      >
        <Codepen size="38" />
      </a>
      <a
        className="w-10 h-10"
        href="https://www.linkedin.com/in/justinlemos24/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinWithCircle size="38" />
      </a>
      <a
        className="w-10 h-10"
        href="https://github.com/Kagyu24"
        target="_blank"
        rel="noreferrer"
      >
        <Github size="42" />
      </a>
    </motion.div>
  );
};

export default Social;
