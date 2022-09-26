import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import { motion } from "framer-motion";
import { Burger } from "@mantine/core";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <motion.nav
      className="w-full
    fixed
    top-0
    left-0
    flex
    items-center
    justify-between
    px-10
    py-3
    bg-[#0B0B10]
    z-10 font-Lato "
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      animate={{ opacity: 1 }}
    >
      <div
        className="  flex
    items-center
    gap-5"
      >
        <div className="w-14">
          <img src={Logo} alt="/" />
        </div>
        <h1 className="text-3xl">Justin Lemos</h1>
      </div>
      <Burger
        className="md:hidden"
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
      />
      <ul
        className="md:flex
gap-8 hidden"
      >
        <li className="text-lg">
          <a href="/">About</a>
        </li>
        <li className="text-lg">
          <a href="/">Projects</a>
        </li>
        <li className="text-lg">
          <a href="/">Resume</a>
        </li>
        <li className="text-lg">
          <a href="/">Contact</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
