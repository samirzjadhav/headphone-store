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
      <div className="bg-brandDark text-white">
        <nav className="container flex justify-between items-center">
          {/* LOGO SECTION */}
          <div className="">
            <a href="" className="text-xl font-bold uppercase">
              Plying /{" "}
              <span className="font-extralight text-white">Market</span>
            </a>
          </div>
          {/* MENU SECTION */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavbarMenu.map((i) => {
                return (
                  <li key={i.id}>
                    <a
                      href={i.link}
                      className="inline-block text-sm py-2 px-3 uppercase"
                    >
                      {i.title}
                    </a>
                  </li>
                );
              })}
              <div className="text-xl ps-14">
                <a href="">
                  <SlEarphones />
                </a>
              </div>
            </ul>
          </div>

          {/* MOBILE HAMBURGER SECTION */}
          <div className="md:hidden">
            <MdMenu />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
