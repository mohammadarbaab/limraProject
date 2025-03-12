import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assests/assest";

function MyProfile() {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);
  const [image, setImage] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    userData && (
      <>
        <div className="flex flex-wrap justify-center gap-8 p-8">
          {/* Left Column: Image and Input UI */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl border-t border-primary shadow-2xl max-w-xs">
            <div className="relative mb-6">
              {isEdit ? (
                <label htmlFor="image">
                  <div className="inline-block relative cursor-pointer">
                    <img
                      className="w-36 h-36 rounded-full object-cover opacity-75"
                      src={image ? URL.createObjectURL(image) : userData.image}
                      alt="profile"
                    />
                    <img
                      className="w-8 absolute bottom-0 right-0 p-2 bg-white rounded-full"
                      src={image ? "" : assets.upload_icon}
                      alt="upload icon"
                    />
                  </div>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    id="image"
                    hidden
                  />
                </label>
              ) : (
                <img
                  className="w-36 h-36 rounded-full object-cover"
                  src={userData.image}
                  alt="profile_pic"
                />
              )}
            </div>

            {/* Name Input */}
            <div className="mb-6">
              {isEdit ? (
                <input
                  type="text"
                  className="border border-gray-500 p-2 rounded-lg bg-gray-100 w-full text-xl font-medium"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              ) : (
                <p className="text-xl font-medium">{userData.name}</p>
              )}
            </div>
          </div>

          {/* Right Column: User Info */}
          <div className="flex flex-col bg-white p-6 rounded-xl border-t border-primary shadow-2xl max-w-2xl w-full">
            {/* Contact Information */}
            <p className="text-lg font-semibold text-gray-700 underline mb-3">
              Contact Information
            </p>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex justify-between">
                <p className="font-medium text-gray-700">Email Id:</p>
                <p className="text-blue-500">{userData.email}</p>
              </div>

              {/* Phone */}
              <div className="flex justify-between">
                <p className="font-medium text-gray-700">Phone:</p>
                {isEdit ? (
                  <input
                    type="number"
                    className="border border-gray-500 p-2 rounded-lg bg-gray-100 max-w-xs"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <p className="text-blue-400">{userData.phone}</p>
                )}
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <p className="font-medium text-gray-700">Address:</p>
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      className="border border-gray-500 p-2 rounded-lg bg-gray-100 mb-2"
                      value={userData.address.line}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line: e.target.value },
                        }))
                      }
                    />
                    <input
                      type="text"
                      className="border border-gray-500 p-2 rounded-lg bg-gray-100"
                      value={userData.address.line2}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line2: e.target.value },
                        }))
                      }
                    />
                  </>
                ) : (
                  <p className="text-gray-500">
                    {userData.address.line}
                    <br />
                    {userData.address.line2}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div className="flex justify-between">
                <p className="font-medium text-gray-700">Gender:</p>
                {isEdit ? (
                  <select
                    className="border border-gray-500 p-2 rounded-lg bg-gray-100"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                    value={userData.gender}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <p className="text-gray-400">{userData.gender}</p>
                )}
              </div>

              {/* Birthday */}
              <div className="flex justify-between">
                <p className="font-medium text-gray-700">Birthday:</p>
                {isEdit ? (
                  <input
                    className="border border-gray-500 p-2 rounded-lg bg-gray-100"
                    type="date"
                    value={userData.dob}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        dob: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <p className="text-gray-400">{userData.dob}</p>
                )}
              </div>
            </div>

            {/* Save or Edit Button */}
            <div className="mt-6 flex justify-center">
              {isEdit ? (
                <button
                  className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
                  onClick={updateUserProfileData}
                >
                  Save Information
                </button>
              ) : (
                <button
                  className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default MyProfile;
