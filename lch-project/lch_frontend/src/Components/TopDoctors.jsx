import React, { useContext } from "react";
import { doctors } from "../assests/assest";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Expert Doctors to Book for Fast and Effective Care</h1>
      <p className="sm:w-1/3  text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-3xl overflow-hidden cursor-pointer transform hover:translate-y-[-10px] transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col items-center py-4"

          >
            <img src={item.image} alt="" className="bg-[#D8BFD8] rounded-full w-[60px] h-[70px]" />
            <div className="p-4 flex flex-col justify-center items-center">
              {/* <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div> */}
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm text-center">{item.speciality}</p>
              <button className="bg-[#800080] px-6 py-[2px] mt-2 rounded-2xl text-white ">Details</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors');window.scrollTo(0,0)}} className="bg-blue-50 text-gray-600 px-12 py-3  rounded-full mt-10">
        more
      </button>
    </div>
  );
}

export default TopDoctors;
