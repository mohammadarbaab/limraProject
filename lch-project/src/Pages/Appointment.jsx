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
      currentDate.setDate(today.getDate() + i);

      // setting and time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleDateString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        // add slotes to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // increament current time by 3o minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      // add slots to docSlots array
      setDocSlots(prev => [...prev, timeSlots]);
    }
  };

 

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  // fetch doctors info
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
