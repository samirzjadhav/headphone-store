import React from "react";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const ServiceData = [
  {
    id: 1,
    icon: Icon1,
    title: "Security",
    desc: "We provide the best security for your data and information. Our security measures are top-notch and we ensure that your data is safe with us.",
    delay: 0.5,
  },
  {
    id: 2,
    icon: Icon2,
    title: "Gurantee",
    desc: "We guarantee your data is safe with us. We provide the best security for your data and information. Our security measures are top-notch and we ensure that your data is safe with us.",
    delay: 0.5,
  },
  {
    id: 3,
    icon: Icon3,
    title: "Affordability",
    desc: "Affordable prices for our services. We provide the best security for your data and information. Our security measures are top-notch and we ensure that your data is safe with us.",
    delay: 0.5,
  },
];

const Service = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-bold text-center pb-10"
          >
            Service
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServiceData.map((data) => (
              <UpdateFollower
                key={data.id}
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <div>
                      <img src={data.icon} alt="" />
                    </div>
                  ),
                }}
              >
                <motion.div
                  variants={fadeUp(data.delay)}
                  initial="hidden"
                  whileInView="show"
                  className="flex flex-col items-center justify-center p-5 max-w-[300px] h-[300px] mx-auto shadow-lg rounded-xl bg-white"
                >
                  <img
                    src={data.icon}
                    alt={data.title}
                    className="w-[100px] mb-4"
                  />
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <p className="text-center text-sm text-black/75">
                    {data.desc}
                  </p>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
