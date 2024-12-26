import React from "react";
import { doctors } from "../assests/assest";
function TopDoctors() {
  return (
    <div>
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0, 10).map((item, index) => (
          <div>
            <img src={item.img} alt=""/>
            <div>
                <div>
                    <p></p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDoctors;
