import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

function DoctorAppointments() {
  const { dToken, appointments, getAppointments } = useContext(DoctorContext);

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);
  console.log("age of calculated", calculateAge);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);
  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium ">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll min-h-[50vh]">
        <div className="max-sm:hidden flex flex-row gap-10 py-3 px-6 border-b">
          <p>#</p>
          <p>Pateint</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date and time </p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {appointments.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base items-center text-gray-500 py-3 px-6 border-b"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img
                src={item.userData.image}
                alt=""
                className="w-8 rounded-full "
              />
              <p>{item.userData.name}</p>
              {console.log("User DOB:", item.userData.dob)};
            </div>
            <div>
              <p className="text-xs inline border border-primary px-2 rounded-full ">
                {item.payment ? "ONLINE" : "CASH"}
              </p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
            <p>
              {slotDateFormat(item.slotDate)},{item.slotTime}
            </p>
            <p>
              {currency}
              {item.amount}
            </p>
            <div className="flex">
              <img className="w-10 cursor-pointer" src={assets.cancel_icon} alt="" />
              <img className="w-10 cursor-pointer" src={assets.tick_icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorAppointments;
