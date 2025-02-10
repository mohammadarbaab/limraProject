import React from "react";
import { assets } from "../assests/assest";

function Header() {
  return (
    // <div className="flex flex-col md:flex-row flex-wrap bg-primary  rounded-lg px-6 md:px-10 lg:px-[20px]">
    //   {/* ---------left side */}
    //   <div className="md:w-1/2 flex flex-col  gap-6 py-10 justify-start items-start md:py-[8vw] px-8">
    //     <p className="text-3xl md:text-4xl lg:text-[46px] text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
    //       Limra Child Clinic
    //     </p>
    //     <p className="text-3xl md:text-4xl lg:text-[30px] text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
    //       Book Appointment
    //       <br />
    //       With Trusted Doctors
    //     </p>
    //     <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light ">
    //       <img
    //         src={assets.group_profiles}
    //         alt="group_profile"
    //         className="w-24"
    //       />
    //       <p>
    //         Simply browse through our extensive list of trusted doctors,
    //         <br className="hidden sm:block" />
    //         schedule your appointment hassle-free.
    //       </p>
    //     </div>
    //     <a
    //       href="#speciality"
    //       className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto  hover:scale-105 transition-all duration-300"
    //     >
    //       Book appointment{" "}
    //       <img src={assets.arrow_icon} alt="arrow_icon" className="w-3" />
    //     </a>
    //   </div>
    //   {/* --------right side------- */}
    //   <div className="md:w-1/2 relative justify-center items-center flex">
    //     <img
    //       src={assets.header_img}
    //       alt="header_img"
    //       className="md:absolute bottom-0 rounded-lg h-auto"
    //     />
    //   </div>
    // </div>
    // main div
    <div className="flex flex-wrap flex-col justify-center items-center lg:flex-row w-full h-auto bg-[#fef8e9] overflow-hidden relative rounded-lg shadow-2xl">
      {/* left div */}
      <div className="flex flex-wrap flex-col lg:w-1/2 lg:justify-start lg:items-start lg:gap-6 gap-6 lg:pl-12 justify-center items-center w-full lg:p-0 p-6 ">
        <h1 className="lg:text-[36px] lg:font-semibold md:text-[36px] sm:text-[32px] md:font-semibold text-[20px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black via-yellow-800 to-yellow-500 tracking-normal md:leading-[50px]">
          Limra Child Clinic
          <br />
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

export default Header;
