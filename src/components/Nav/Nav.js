import React from "react";
import { useState } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import { RiMapPinUserLine } from "react-icons/ri";
import { BsChatSquareText } from "react-icons/bs";

import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  /* const activeNavHandler = () => {

    }*/

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <HiOutlineDesktopComputer />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#testimonial"
        onClick={() => setActiveNav("#testimonial")}
        className={activeNav === "#testimonial" ? "active" : ""}
      >
        <RiMapPinUserLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsChatSquareText />
      </a>
    </nav>
  );
};

export default Nav;
