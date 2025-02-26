import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets.js";

function AllAppointments() {
  const { aToken, appointments, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);
  useEffect(() => {
    getAllAppointments(aToken);
  }, [aToken]);
  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium ">AllAppointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll">
        <div>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>fees</p>
          <p>Actions</p>
        </div>
        <div>
          {appointments.map((appointment) => (
            <>
              <div key={appointment._id}>
                <div>
                  <img src={appointment.userData?.image} />
                  <p>Name: {appointment.userData?.name}</p>
                </div>

                <p>Email: {appointment.userData?.email}</p>
                <p>Address: {JSON.stringify(appointment.userData?.address)}</p>
              </div>
              {/* <p>{calculateAge(appointment.userData?.dob)}</p> */}
              <p>
                {slotDateFormat(appointment.slotDate)},{appointment.slotTime}
              </p>
              <div>
                <img src={appointment.docData?.image} />
                <p>Name: {appointment.docData?.name}</p>
              </div>
              <p>
                {currency}
                {appointment.amount}
              </p>
              {appointment.cancelled ? (
                <p>cancelled</p>
              ) : appointment.isCompleted ? (
                <p className="text-green-400 text-xs font-medium">Completed</p>
              ) : (
                <img
                  onClick={() => cancelAppointment(appointment._id)}
                  src={assets.cancel_icon}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllAppointments;
