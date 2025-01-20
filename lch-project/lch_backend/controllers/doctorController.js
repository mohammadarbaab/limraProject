import doctorModel from "../models/doctorModel.js";

const changeAvailablity = async (req, res) => {
  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ message: "Availability changed successfully", success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const doctorList = async (req,res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    console.log("doctor data",doctors);
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
};

export { changeAvailablity,doctorList };
