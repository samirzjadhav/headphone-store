import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <Footer>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <p className="text-sm max-w-[300px]">
              Headphone is a pair of small loudspeaker drivers worn on or around
              the head over a user's ears. They are electroacoustic transducers,
              which convert an electrical signal to a corresponding sound.
            </p>
            <div className="">
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-789
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                1234 Street Name, City Name
              </p>
            </div>
          </div>
          {/* quick links section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="">
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="">
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
