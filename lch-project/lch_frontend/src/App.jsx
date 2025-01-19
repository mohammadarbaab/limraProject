import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Doctors from "../src/Pages/Doctors";
import Login from "../src/Pages/Login";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import MyProfile from "../src/Pages/MyProfile";
import MyAppointments from "../src/Pages/MyAppointments";
import Appointment from "./Pages/Appointment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
    <ToastContainer />
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
  );
}

export default App;
