import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

function Dashboard() {
  const { aToken, getDashData, cancelAppointments, dashData } =
    useContext(AdminContext);

  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all ">
            <img className="w-14" src={assets.doctor_icon} alt="" />
            <div>
              <p>{dashData.doctors}</p>
              <p>Doctors</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all ">
            <img className="w-14" src={assets.appointments_icon} alt="" />
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
            {dashData.latestAppointments.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-6 py-6 gap-3 hover:bg-gray-100"
              >
                <img
                  src={item.docData.image}
                  alt=""
                  className="rounded-full w-10"
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 ">{item.docData.name}</p>
                  <p>{slotDateFormat(item.slotDate)}</p>
                </div>
                  {item.cancelled ? (
                    <p className="text-red-400 text-xs font-medium">cancelled</p>
                  ) : (
                    <img
                      onClick={() => cancelAppointments(item._id)}
                      src={assets.cancel_icon}
                    />
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default Dashboard;
