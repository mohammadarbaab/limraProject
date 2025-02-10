import React, { useContext, useState } from "react";
import { assets } from "../assests/assest";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  // const [token, setToken] = useState(true);
  const { token, setToken, userData } = useContext(AppContext);
  // bg state for nav options

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        src={assets.logo}
        alt=""
        onClick={() => navigate("/")}
        className="w-[100px] cursor-pointer"
      />
      <div className="flex flex-wrap bg-gray-50 px-8 py-2 rounded-full shadow-sm shadow-[#B266B2]">
        <ul className="hidden md:flex items-start gap-8 font-medium">
          <NavLink to="/">
            <li className="py-1 hover:scale-125 hover:cursor-pointer transition-transform">
              Home
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </li>
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1 hover:scale-125 hover:cursor-pointer transition-transform">
              Find a Specialist
            </li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1 hover:scale-125 hover:cursor-pointer transition-transform">
              Why Choose Us
            </li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1 hover:scale-125 hover:cursor-pointer transition-transform">
              Reach Out to Us
            </li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
      </div>
      {/* Dropdown start here */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={userData.image}
              alt="profile_pic"
              className="w-8 rounded-full"
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="dropdown_icon"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
              <div className="min-w-48 bg-white rounded-md flex flex-col gap-4 p-4 shadow-md shadow-[#B266B2] border border-gray-200">
                <div className="flex flex-row flex-wrap gap-2">
                  <img
                    src={userData.image}
                    alt="profile_pic"
                    className="w-8 rounded-full"
                  />
                  <div className="flex flex-col flex-wrap items-start leading-5 justify-center">
                    <h2 className=" text-gray-600 font-bold">
                      {userData.name}
                    </h2>
                    <p className="text-[12px] text-gray-400">
                      {userData.email}
                    </p>
                  </div>
                </div>
                <hr className=" border-black" />
                <div className="flex flex-wrap flex-row gap-2 items-center">
                  <img src={assets.myProfileIcon} alt="profileIcon" />
                  <p
                    onClick={() => navigate("my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                </div>
                <div className="flex flex-wrap flex-row gap-2 items-center">
                  <img src={assets.appointment_logo} alt="" />
                  <p
                    onClick={() => navigate("my-appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                </div>
                <div className="flex flex-wrap flex-row gap-2 items-center">
                  <img src={assets.logoutIcon} alt="" />
                  <p
                    onClick={logout}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary px-8 py-3 text-white rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_bar}
          className="w-8 md:hidden"
        />
        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              src={assets.cross_icon}
              alt=""
              className="w-7"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-2 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block ">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded inline-block ">All Doctors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block ">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block ">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
