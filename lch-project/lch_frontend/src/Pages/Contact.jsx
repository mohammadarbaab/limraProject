import React, { useState } from "react";
import { assets } from "../assests/assest.js";
import items from "../Test/Data.js";

function Contact() {
  const [openIndex, setOpenIndex] = useState(null);


  // Toggle function to show/hide the description
  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if the same is clicked, else open
  };
  return (
    <>
      <div className="flex flex-wrap flex-col justify-center items-center gap-16">
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          <img src={assets.lch_logo} alt="" className="w-12" />
          <p className="flex flex-wrap text-4xl font-semibold">
            Contact our friendly team
          </p>
          <p className="flex flex-wrap text-gray-500">
            Let us know how we can help.
          </p>
        </div>
        <div className="flex flex-wrap flex-row gap-4 w-[100%] items-center justify-center">
          <div className="flex flex-wrap flex-col gap-10 border p-4 rounded-lg shadow-lg w-[20%]">
            <div>
              <img
                src={assets.customer_service}
                alt=""
                className="w-8 border rounded-lg p-1"
              />
            </div>
            <div className="flex flex-col flex-wrap gap-1">
              <p className="flex flex-wrap font-semibold">
                Chat to appointment
              </p>
              <p className="flex flex-wrap text-gray-500">
                speak to our friendly team
              </p>
              <p>
                <a href="mailto:lch@gmail.com" className="underline">
                  lch@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap flex-col gap-10 border p-4 rounded-lg shadow-lg w-[20%]">
            <div>
              <img
                src={assets.customer_support}
                alt=""
                className="w-8 border rounded-lg p-1"
              />
            </div>
            <div className="flex flex-col flex-wrap gap-1">
              <p className="flex flex-wrap font-semibold">Chat to support</p>
              <p className="flex flex-wrap text-gray-500">
                we are here to help
              </p>
              <p>
                <a href="mailto:lch@gmail.com" className="underline">
                  supportlch@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap flex-col gap-10 border p-4 rounded-lg shadow-lg w-[20%]">
            <div>
              <img
                src={assets.placeholder}
                alt=""
                className="w-8 border rounded-lg p-1"
              />
            </div>
            <div className="flex flex-col flex-wrap gap-1">
              <p className="flex flex-wrap font-semibold">Visit us</p>
              <p className="flex flex-wrap text-gray-500">
                visit our office HQ.
              </p>
              <p>
                <a href="mailto:lch@gmail.com" className="underline">
                  view on google maps
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap flex-col gap-10 border p-4 rounded-lg shadow-lg w-[20%]">
            <div>
              <img
                src={assets.technical_support}
                alt=""
                className="w-8 border rounded-lg p-1"
              />
            </div>
            <div className="flex flex-col flex-wrap gap-1">
              <p className="flex flex-wrap font-semibold">Call us</p>
              <p className="flex flex-wrap text-gray-500">
                Mon-Fri from 8am to 5am
              </p>
              <p>
                <a href="mailto:lch@gmail.com" className="underline">
                  +9182736478
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center gap-8">
          <p className="text-3xl text-primary">Frequently asked questions</p>
          <div className="flex flex-wrap w-[100%]  justify-center h-auto gap-4 py-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 w-[80%] bg-white border-t border-primary rounded-lg p-4 shadow-md"
              >
                {/* Category Header */}
                <div
                  className="flex flex-row flex-wrap justify-between cursor-pointer items-center"
                  onClick={() => toggleDescription(index)}
                >
                  <div className="flex flex-row gap-4 items-center cursor-pointer">
                    <img
                      src={item.icon}
                      alt={item.text}
                      className="w-[30px] h-[30px]"
                    />
                    <p className="text-black font-[500]">{item.text}</p>
                  </div>
                </div>
                {/* Category Description */}
                {openIndex === index && (
                  <div className="text-black text-justify px-2 font-[500] text-[16px]">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
