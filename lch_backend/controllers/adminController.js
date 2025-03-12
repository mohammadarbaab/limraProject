import validator from "validator";
import bycrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";
// API for Adding doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      about,
      phone,
      degree,
      experience,
      fees,
      date,
      address,
    } = req.body;
    const imageFile = req.file;

    // checking for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !about ||
      !phone ||
      !degree ||
      !experience ||
      !fees ||
      !address ||
      !date
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }

    // validating email format
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "please enter a valid email" });
    }

    // validating strong password
    if (password.length < 8) {
      return res
        .status(400)
        .json({ success: false, message: "password enter a strong password" });
    }

    // hashing doctor password
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    // upload image to cloudinary
    const uploadImage = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = uploadImage.secure_url;

    const doctorData = {
      name: name,
      email: email,
      image: imageUrl,
      password: hashedPassword,
      speciality: speciality,
      about: about,
      phone: phone,
      degree: degree,
      experience: experience,
      fees: fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor added" });
  } catch (error) {
    console.log(error, "please fill all the fields");
    res.json({ success: false, message: error.message });
  }
};

// API FOR ADMIN
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, message: "Admin logged in", token: token });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get All doctors list for admin panel
const allDoctors = async (req, res, error) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, message: error.message, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// API to get all appointments list
const appointmentsAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.json({ success: true, message: "Appointments list", appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API for appointment cancellation
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

    // update appointment status to cancelled
    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });
    // update doctor slots data
    const { doctorId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(doctorId);
    if (!doctorData) {
      return res.json({
        success: false,
        message: "Doctor ka data nahi mila",
      });
    }
    let slots_booked = doctorData.slots_booked || {};
    if (slots_booked[slotDate]) {
      slots_booked[slotDate] = slots_booked[slotDate].filter(
        (e) => e !== slotTime
      );
    }
    console.log("Doctor ID:", doctorId);
    console.log("Doctor Data:", doctorData);
    // remove cancelled appointment from slots booked
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );
    await doctorModel.findByIdAndUpdate(doctorId, { slots_booked });
    res.json({ success: true, message: "Appointment cancelled successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    const users = await userModel.find({});
    const appointments = await appointmentModel.find({});

    const dashData = {
      doctors: doctors.length,
      patients: users.length,
      appointments: appointments.length,
      latestAppointments: appointments.reverse().slice(0, 5),
    };
    res.json({ success: true, dashData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  addDoctor,
  loginAdmin,
  allDoctors,
  appointmentsAdmin,
  appointmentCancel,
  adminDashboard,
};
