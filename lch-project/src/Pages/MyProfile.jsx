import React, { useState } from "react";
import { assets } from "../assests/assest";

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "edward.vincent@gmail.com",
    phone: "9109273446",
    address: {
      line: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "1990-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="profile_pic" />
      {isEdit ? (
        <input
          type="text"
          className="border bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3 ">Contact Information</p>
        <div className="grid  grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <div>
            <p className="font-medium ">Email Id:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">phone</p>
            {isEdit ? (
              <input
                type="text"
                className="border bg-gray-100 max-w-52 "
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}
            <p className="font-medium">Address:</p>
            {isEdit ? (
              <p>
                <input
                  type="text"
                  className="bg-gray-50"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line: e.target.value },
                    }))
                  }
                  value={userData.address.line}
                />
                <br />
                <input
                  type="text"
                  className="bg-gray-50"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address.line2}
                />
              </p>
            ) : (
              <p className="text-gray-500">
                {userData.address.line}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
      <p className="text-neutral-500 underline mt-3 ">Contact Information</p>
       <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
       <p>gender</p>
        <p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </p>
       </div>
      </div>
      <div>
        {isEdit ? (
          <button onClick={() => setIsEdit(false)}>Save Information</button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
