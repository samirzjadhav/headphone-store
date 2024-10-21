import React, { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { IoReturnUpBack } from "react-icons/io5";

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
  return (
    <>
      <section className="bg-brandDark text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* Headphone Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left ">
              <h1 className="text-3xl lg:text-6xl font-bold font-varela">
                {currentHeadphone.title}
              </h1>
              <p className="text-sm leading-loose text-white/80">
                {currentHeadphone.subtitle}
              </p>
              <button
                style={{ backgroundColor: currentHeadphone.bgColor }}
                className="px-4 py-2 inline-block font-normal rounded-sm"
              >
                Buy and Listen
              </button>
              {/* HEADPHONE LIST SEPARATOR */}
            </div>
          </div>
          {/* Hero Image */}

          {/* WhatApp Icon */}
        </div>
      </section>
    </>
  );
};

export default Hero;
