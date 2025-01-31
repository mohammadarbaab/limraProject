import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AdminContext = createContext();
// export const AdminContext = createContext();
const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState(false);

  // // Inside your component
  // useEffect(() => {
  //   console.log(doctors); // Jab bhi doctors state update hoga, yeh console mein log karega
  // }, [doctors]); // Dependency array, isme 'doctors' ko daalne se jab bhi doctors update hoga, tab yeh effect run karega.
  useEffect(() => {
    // Get doctors only on component mount (no infinite loop)
    getAllDoctors();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/all-doctors",
        {},
        {
          headers: {
            aToken,
          },
        }
      );
      if (data.success) {
        setDoctors(data.doctors);
        console.log("data is store in doctors", data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("error");
      toast.error("Error fetching doctors");
    }
  };
  // const changeAvailability = async (docId) => {
  //   try {
  //     const { data } = await axios.post(
  //       backendUrl + "/api/admin/change-availability",
  //       { docId },
  //       { headers: { aToken } }
  //     );
  //     if (data.success) {
  //       toast.success(data.message);
  //       getAllDoctors();
  //     } else {
  //       toast.error("error");
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };
  const changeAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/change-availability",
        { docId },
        { headers: { aToken } }
      );
      console.log("data success", data);
      // the small error create big mistake
      // the error is missed i forgetes the succes
      if (data.success) {
        toast.success(data.message);

        // Update doctors in local state directly
        setDoctors((prevDoctors) =>
          prevDoctors.map((doctor) =>
            doctor._id === docId
              ? { ...doctor, available: !doctor.available }
              : doctor
          )
        );
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // get all apoointments
  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/appointments", {
        headers: { aToken },
      });
      if (data.success) {
        setAppointments(data.appointments);
        console.log("this is appointments data", data.appointments);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/cancel-appointment",
        {
          appointmentId,
        },
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAllAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/dashboard", {
        headers: { aToken },
      });
      if (data.success) {
        setDashData(data.dashData);
        console.log("this is dash data", data.dashData);
      } else {
        toast.error("Error dashdata");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
    getAllAppointments,
    appointments,
    setAppointments,
    cancelAppointment,
    getDashData,
    dashData,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};
// export default AdminContextProvider;
export default AdminContextProvider;
