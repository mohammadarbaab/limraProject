// import React from "react";
// import { assets } from "../assests/assest";

// function About() {
//   return (
//     <div>
//       <div className="justify-center items-center flex">
//         <div className="text-white bg-primary px-4 py-2 text-[18px] rounded-xl font-medium">
//           MEET OUR TEAM
//         </div>
//       </div>
//       <div className="my-10 flex flex-col md:flex-row gap-12">
//         <img
//           src={assets.about_image}
//           alt="aboutImage"
//           className="w-full md:max-w-[360px]"
//         />
//         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
//           <p>
//             Welcome to Prescripto, your trusted partner in managing your
//             healthcare needs conveniently and efficiently. At Prescripto, we
//             understand the challenges individuals face when it comes to
//             scheduling doctor appointments and managing their health records.
//           </p>
//           <p>
//             Prescripto is committed to excellence in healthcare technology. We
//             continuously strive to enhance our platform, integrating the latest
//             advancements to improve user experience and deliver superior
//             service. Whether you're booking your first appointment or managing
//             ongoing care, Prescripto is here to support you every step of the
//             way.
//           </p>
//           <b className="text-gray-800">Our Vision</b>
//           <p>
//             Our vision at Prescripto is to create a seamless healthcare
//             experience for every user. We aim to bridge the gap between patients
//             and healthcare providers, making it easier for you to access the
//             care you need, when you need it.
//           </p>
//         </div>
//       </div>
//       <div className="text-xl my-4">
//         <p>
//           WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
//         </p>
//       </div>
//       <div className="flex flex-col md:flex-row mb-20">
//         <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
//           <b>Efficiency:</b>
//           <p>
//             Streamlined appointment scheduling that fits into your busy
//             lifestyle.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
//           <b>Convenience:</b>
//           <p>
//             Access to a network of trusted healthcare professionals in your
//             area.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
//           <b>Personalization:</b>
//           <p>
//             Tailored recommendations and reminders to help you stay on top of
//             your health.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../assests/assest";

function About() {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap flex-row gap-10">
        {/* TOP SECTIONS */}
        <div className="flex flex-wrap flex-col items-center mt-4 gap-4">
          <p className="bg-gray-200 text-primary px-4 py-2 rounded-2xl font-semibold">
            Meet Our Team
          </p>{" "}
          <p className="text-[24px] font-semibold w-1/2 text-center text-primary">
            We Are All Doctors Here to Help You Book Appointments Online!
          </p>{" "}
          <p className="text-[14px] text-primary w-1/1 text-center">
            Our experienced team is dedicated to making healthcare accessible
            and convenient for you. With a diverse range of specialties, we
            ensure that you can connect with the right medical professional for
            your specific needs. Whether you’re seeking advice, a consultation,
            or a follow-up appointment, we’re here to guide you through the
            process and provide the care you deserve, all from the comfort of
            your home.
          </p>
        </div>
        {/* profiles sections */}
        <div className="flex flex-wrap w-full">
          <div className="w-full grid grid-cols-auto gap-4 gap-y-6 px-3 sm:px-0">
            {doctors.slice(0,5).map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={index}
                className="border border-blue-200 rounded-3xl overflow-hidden cursor-pointer transform hover:translate-y-[-10px] transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col items-center h-[400px]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="bg-[#D8BFD8] w-full h-[200px] object-cover"
                />{" "}
                {/* Set image height and ensure it covers area */}
                <div className="py-2 flex flex-col justify-center items-start gap-1 h-full">
                  <p className="text-gray-900 text-lg font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-sm text-center">
                    {item.speciality}
                  </p>
                  <p className="text-gray-600 text-sm text-center">
                    {item.degree}
                  </p>

                  <div className="flex flex-row justify-center items-center gap-3 mt-3">
                    <img src={assets.insta_icon} alt="" className="w-6" />
                    <img src={assets.fb_icon} alt="" className="w-6" />
                    <img src={assets.twitter} alt="" className="w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* why choose use */}
        <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-l-2xl">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-r-2xl">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
