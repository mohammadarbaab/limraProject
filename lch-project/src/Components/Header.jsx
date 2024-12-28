import React from "react";
import { assets } from "../assests/assest";

function Header() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary  rounded-lg px-6 md:px-10 lg:px-[20px]">
      {/* ---------left side */}
      <div className="md:w-1/2 flex flex-col  gap-6 py-10 justify-start items-end md:py-[8vw] px-8">
        <p className="text-3xl md:text-4xl lg:text-[46px] text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment
          <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light ">
          <img
            src={assets.group_profiles}
            alt="group_profile"
            className="w-24"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto  hover:scale-105 transition-all duration-300"
        >
          Book appointment{" "}
          <img src={assets.arrow_icon} alt="arrow_icon" className="w-3" />
        </a>
      </div>
      {/* --------right side------- */}
      <div className="md:w-1/2 relative">
        <img
          src={assets.header_img}
          alt="header_img"
          className="w-full md:absolute bottom-0 rounded-lg h-auto"
        />
      </div>
    </div>
  );
}

export default Header;
