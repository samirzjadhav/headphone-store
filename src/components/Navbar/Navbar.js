import { i } from "framer-motion/client";
import React from "react";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contsct",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        {/* LOGO SECTION */}
        <div className="">
          <a href="">
            Plying / <span>Market</span>
          </a>
        </div>
        {/* MENU SECTION */}
        <ul>
          {NavbarMenu.map((i) => {
            return (
              <li key={i.id}>
                <a href={i.link}>{i.title}</a>
              </li>
            );
          })}
          <div className="">
            <a href="">
              <SlEarphones />
            </a>
          </div>
        </ul>

        {/* MOBILE HAMBURGER SECTION */}
        <div className="">
          <MdMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
