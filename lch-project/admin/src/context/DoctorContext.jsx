import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const DoctorContext = createContext();
// export const DoctorContext = createContext();
const DoctorContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [dToken, setDToken] = useState(
    localStorage.getItem("dToken")?localStorage.getItem("dToken") : ""
  );
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const { data } =await axios.get(backendUrl + "/api/doctor/appointments", {
        headers: { dToken },
      });
      // console.log("data is fetching",data)
      if(data.success){
        setAppointments(data.appointments.reverse());
        console.log(data.appointments.reverse());
      }else{
        console.log(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const value = {
    dToken,
    setDToken,
    backendUrl,
    appointments,
    setAppointments,
    getAppointments
  };
  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};
// export default DoctorContextProvider;
export default DoctorContextProvider;
