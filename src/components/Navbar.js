import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import { motion } from "framer-motion";
import { Menu, Burger, createStyles } from "@mantine/core";
import PDF from "../assets/JLemosResume.pdf";

const useStyles = createStyles((theme) => ({
  item: {
    "&[data-hovered]": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.fn.primaryShade()],
      color: theme.white,
    },
  },
}));

const Navbar = () => {
  const { classes } = useStyles();
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
    px-4
    sm:px-8
    py-3
    bg-[#0B0B10]
    z-10 font-Lato "
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex items-center gap-5">
        <div className="w-10 sm:w-14">
          <img src={Logo} alt="/" />
        </div>
        <a
          href="#about"
          className="text-2xl sm:text-3xl hover:text-[#537DAC] transition-all"
        >
          Justin Lemos
        </a>
      </div>
      <Menu
        opened={opened}
        onChange={setOpened}
        classNames={classes}
        position="bottom"
        offset={11}
        shadow="xl"
        width="100vw"
        transition="fade"
        transitionDuration={250}
        withArrow
      >
        <Menu.Target>
          <Burger
            className="md:hidden"
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component="a" href="#about">
            About
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item component="a" href="#projects">
            Projects
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item component="a" href={PDF} download="JLemosResume.pdf">
            Resume
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item component="a" href="#contact">
            Contact
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <ul
        className="hidden md:flex
gap-8"
      >
        <li className="text-lg hover:text-[#537DAC] hover:border-b-[1px] hover:border-[#537DAC] transition-all ">
          <a href="#about">About</a>
        </li>
        <li className="text-lg hover:text-[#537DAC] hover:border-b-[1px] hover:border-[#537DAC] transition-all ">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-lg hover:text-[#537DAC] hover:border-b-[1px] hover:border-[#537DAC] transition-all ">
          <a href={PDF} download="JLemosResume.pdf">
            Resume
          </a>
        </li>
        <li className="text-lg hover:text-[#537DAC] hover:border-b-[1px] hover:border-[#537DAC] transition-all ">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
