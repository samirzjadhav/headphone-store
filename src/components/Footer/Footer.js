import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company details section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <p className="text-sm max-w-[300px]">
              Headphone is a pair of small loudspeaker drivers worn on or around
              the head over a user's ears. They are electroacoustic transducers,
              which convert an electrical signal to a corresponding sound.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-789
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                1234 Street Name, City Name
              </p>
            </div>
          </motion.div>
          {/* Quick links section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Our Team</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Support</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links Section */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div className="space-y-2">
              <p>Payment Method</p>
              <img src={Cards} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
