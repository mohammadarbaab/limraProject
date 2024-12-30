import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assests/assest";
function Appointment() {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(" ");

  const getAvailableSlots = async () => {
    setDocSlots([]);
    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate()+i)

      // setting and time of the date with index 
      
    }
  };
  const fetchDocInfo = async () => {
    const doctorId = Number(docId);
    const docInfo = doctors.find((doc) => doc.id === doctorId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };
  // Doctors
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);
  return (
    docInfo && (
      <div>
        {/* Doctors Details */}
        <div className="flex flex-row gap-4">
          <div>
            <img
              src={docInfo.image}
              alt=""
              className="bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* doc info  */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900  ">
              {docInfo.name}{" "}
              <img src={assets.verify_icon} alt="verify_doc" className="w-5" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 ">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full ">
                {docInfo.experience}
              </button>
            </div>
            {/* doc about */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} className="w-4 h-4" alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1 ">
                {docInfo.about}
              </p>
              <p className="text-gray-500 font-medium mt-4">
                Appointment Fee:{" "}
                <span>
                  {currencySymbol}
                  {docInfo.fees}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Appointment;
