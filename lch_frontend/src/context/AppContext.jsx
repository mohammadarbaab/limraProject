import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [userData, setUserData] = useState(false);
  const currencySymbol = "$";
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "https://limra-project-backend.onrender.com"; // Agar BACKEND_URL nahi hai to 'default-url' use karo
  console.log("this is backend url", backendUrl);

  if (!backendUrl) {
    console.error("VITE_BACKEND_URL is not defined in the environment!");
  }
  const [doctors, setDoctors] = useState([]);
  console.log("doctors", doctors);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/doctor/list`
      );
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("error", error);
      toast.error("error catch", error.message);
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.message);
    }
  };

  const value = {
    doctors,getDoctorsData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
