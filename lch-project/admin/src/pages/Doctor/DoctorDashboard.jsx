import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

function DoctorDashboard() {
  const { dToken, getDashData, dashData, setDashData,completeAppointment,cancelAppointment } =
    useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext);
  console.log("earnings", dashData);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);
  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all ">
            <img className="w-14" src={assets.earning_icon} alt="" />
            <div>
              <p>
                {currency}
                {dashData.earning}
              </p>
              <p>Earning</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all ">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p>{dashData.appointments}</p>
              <p>Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all ">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p>{dashData.patients}</p>
              <p>Patients</p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
            <img src={assets.list_icon} alt="" />
            <p className="">Latest Booking</p>
          </div>

          <div className="pt-4 border border-t-0">
            {dashData.latestAppointment.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 px-4 py-4 rounded"
              >
                <img
                  src={item.userData.image}
                  alt=""
                  className="rounded-full w-10"
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 ">{item.userData.name}</p>
                  <p>{slotDateFormat(item.slotDate)}</p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-400 text-xs font-medium">cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-500 text-xs font-medium">
                    Completed
                  </p>
                ) : (
                  <div className="flex">
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      className="w-10 cursor-pointer"
                      src={assets.cancel_icon}
                      alt=""
                    />
                    <img
                      onClick={() => completeAppointment(item._id)}
                      className="w-10 cursor-pointer"
                      src={assets.tick_icon}
                      alt=""
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default DoctorDashboard;
