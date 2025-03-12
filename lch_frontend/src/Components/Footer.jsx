import React from "react";
import { assets } from "../assests/assest";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            <b>Limra child hospital</b> Specialized in preventive care,
            immunizations, and growth monitoring, we prioritize your child’s
            well-being. With a focus on quality and personalized attention, we
            are here for your little ones every step of the way.
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5">company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+8057070230</li>
            <li>kazmirwrite@gmail.com</li>
            <li>
              <b>Instaram:</b>@meinbcawala
            </li>
          </ul>
        </div>
      </div>
      {/* copy right */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright © 2024 - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
