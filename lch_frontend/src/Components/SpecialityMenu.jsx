import React from "react";
import { specialityData } from "../assests/assest";
import { Link } from "react-router-dom";
function SpecialityMenu() {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-12 text-gray-800"
    >
      <h1 className="text-3xl font-medium">Categories</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-4 p-6 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-20px] translate-all duration-500 bg-white p-6 rounded-3xl shadow-lg border-[#800080] border gap-2"
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p className="text-black">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;
