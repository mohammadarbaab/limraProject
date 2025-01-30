import React from "react";
import { assets } from "../assests/assest.js";

export default function Home() {
  return (
    // main div
    <div className="flex flex-wrap flex-col justify-center items-center lg:flex-row w-full h-auto bg-[#fef8e9] overflow-hidden relative">
      {/* left div */}
      <div className="flex flex-wrap flex-col lg:w-1/2 lg:justify-start lg:items-start lg:gap-6 gap-6 lg:pl-12 justify-center items-center w-full lg:p-0 p-6 ">
        <h1 className="lg:text-[36px] lg:font-semibold md:text-[36px] sm:text-[32px] md:font-semibold text-[20px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black via-yellow-800 to-yellow-500 tracking-normal md:leading-[50px]">
          Limra Child Clinic <br />
          Virtual health consulting <br /> with a pediatrician doctor
        </h1>
        <p className="text-sm sm:text-base md:text-[20px]  leading-relaxed md:leading-6 font-medium md:font-medium tracking-wide text-gray-700 lg:text-left md:text-center lg:w-full">
          Limra Child Clinic provides specialized care for children, treating
          all childhood illnesses and offering admission services for
          comprehensive care.
        </p>
        <div className="flex w-full md:w-auto md:items-center md:gap-4 md:mt-6">
          <a
            href="#speciality"
            className="flex items-center gap-2 bg-primary px-6 sm:px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Book appointment{" "}
          </a>
        </div>
      </div>
      {/* right div */}
      <div className="flex flex-wrap w-1/2">
        {/* Angled Background */}
        <div
          className="lg:absolute top-0 right-0 w-[120%] h-full bg-primary"
          style={{
            clipPath: "polygon(50% 100%, 100% -5%, 100% 100%, 50% 100%)",
          }}
        ></div>

        <div
          className="lg:hidden absolute  right-0 w-full h-full bg-primary"
          style={{
            clipPath: "polygon(0% 0%, 100% -15%, 100% 100%, 0% 100%)",
          }}
        ></div>

        {/* Doctor Image */}
        <img
          src={assets.doc19}
          alt="Doctor"
          className="relative z-10 bottom-0 w-full"
        />
      </div>
    </div>
  );
}
