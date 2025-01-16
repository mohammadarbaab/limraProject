import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

function DoctorList() {
  const { doctors, aToken, getAllDoctors } = useContext(AdminContext);
  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium ">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((item, index) => {
          return (
            <div key={index} className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group">
              <img src={item.image} alt="images" className="bg-indigo-200 group-hover:bg-primary transition-all duration-500" />
              <div className="p-4 ">
                <p className="text-neutral-800 text-lg font-medium ">{item.name}</p>
                <p className="text-neutral-800 text-lg font-medium ">{item.speciality}</p>
                <div>
                  <input className="mt-2 flex items-center gap-1 text-sm " type="checkbox" checked={item.available}/>
                  <p>Available</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DoctorList;
