import { Route, Routes } from "react-router-dom";
import Doctors from "../src/Pages/Doctors";
import Login from "../src/Pages/Login";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
// import Contact from "../src/Test/Contact"
import MyProfile from "../src/Pages/MyProfile";
import MyAppointments from "../src/Pages/MyAppointments";
import Appointment from "./Pages/Appointment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Home from "./Test/Home";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="mx-4 sm:mx-[5%]">
        <ToastContainer
          toastClassName="bg-red-500 text-white font-semibold" // Optional: styling individual toasts
        />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer></Footer>
      </div>
      
    </>
  );
}

export default App;
