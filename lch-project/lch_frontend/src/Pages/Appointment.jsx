import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assests/assest";
import RelatedDoctors from "../Components/RelatedDoctors";
function Appointment() {
  const { docId } = useParams();
  console.log("this is docId",docId)
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(" ");
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

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
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  // // fetch doctors info
  // const fetchDocInfo = async () => {
  //   const doctorId = Number(docId);
  //   const docInfo = doctors.find((doc) => doc._id === doctorId);
  //   setDocInfo(docInfo);
  //   console.log(docInfo);
  // };
  // // Doctors
  // useEffect(() => {
  //   fetchDocInfo();
  // }, [doctors, docId]);
  
  useEffect(() => {
    const fetchDocInfo = () => {
      console.log("Fetching doctor info for docId:", docId);  // Debugging line to ensure docId is correct
      const doctor = doctors.find((doc) => doc._id === docId);  // Find the doctor by _id
      console.log("Doctor found:", doctor);  // Check if doctor is found
      setDocInfo(doctor);  // Set the doctor info to state
    };

    if (docId && doctors.length > 0) {
      fetchDocInfo();  // Fetch doctor info only if docId is available and doctors array is not empty
    }
  }, [doctors, docId]);  // Fetch the doctor info when doctors or docId changes

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

        {/* Booking slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 ">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4 ">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 ">
            Book an Appointment
          </button>
        </div>
        {/* relted doctors components */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    )
  );
}

export default Appointment;
