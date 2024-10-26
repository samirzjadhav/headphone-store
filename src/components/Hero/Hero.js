import React, { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { IoReturnUpBack } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, motion } from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    alt: "Headphone 1",
    title: "Wireless Headphone",
    subtitle:
      "Experience music like never before with noise-canceling headphones that bring each beat to life, immersing you in rich, high-definition sound with maximum comfor",
    price: "$200",
    model: "Model Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    alt: "Headphone 2",
    title: "Wireless Headphone 2",
    subtitle:
      "Dive into a world of pure sound with wireless headphones that offer superior bass, crisp clarity, and an ergonomic design, making long listening sessions enjoyable.",
    price: "$200",
    model: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    alt: "Headphone 3",
    title: "Wireless Headphone 3",
    subtitle:
      "Seamlessly switch from calls to music with high-quality headphones featuring Bluetooth connectivity, long-lasting battery life, and precision-engineered sound for an unparalleled audio experience.",
    price: "$200",
    model: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [currentHeadphone, setCurrentHeadphone] = useState(headphoneData[0]);

  const handleCurrentHeadphone = (data) => {
    setCurrentHeadphone(data);
  };

  return (
    <>
      <section className="bg-brandDark text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* Headphone Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left ">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={currentHeadphone.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {currentHeadphone.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {" "}
                <motion.p
                  key={currentHeadphone.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {currentHeadphone.subtitle}
                </motion.p>
              </AnimatePresence>

              <UpdateFollower>
                <AnimatePresence mode="wait">
                  <motion.button
                    key={currentHeadphone.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ backgroundColor: currentHeadphone.bgColor }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Buy and Listen
                  </motion.button>
                </AnimatePresence>
              </UpdateFollower>
              {/* HEADPHONE LIST SEPARATOR */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p>Top Headphone for you</p>
                <div className="w-20 h-[1px] bg-white"></div>{" "}
              </div>
              {/* HEADPHONE LIST SWITCHER */}
              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleCurrentHeadphone(item)}
                      className="grid grid-cols-2 place-items-center cursor-pointer gap-[10px]"
                    >
                      <div>
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-[200px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xs font-normal text-nowrap">
                          {item.model}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Hero Image */}

          <div className="flex flex-col justify-end items-center">
            <img
              src={currentHeadphone.image}
              alt={currentHeadphone.alt}
              className="w-[300px] md:w-[400px] xl:w-[550px]"
            />
          </div>

          {/* WhatApp Icon */}
          <div className="text-3xl text-white fixed botttom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
