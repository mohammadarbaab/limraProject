import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoutes.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoutes.js";
// add this line for deploy production
import path from "path";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// add this line for deploy production
const _dirname=path.resolve();

// middlewares
app.use(express.json());
app.use(cors());


// api endpoints
app.use("/api/admin", adminRouter);
// localhost:4000/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// add this line for deploy production
app.use(express.static(path.join(_dirname, "lch_frontend", "build")));
app.get('*',(_,res)=>{
  res.sendFile(path.resolve(_dirname,"lch_frontend","build","index.html"));
});

app.get("/", (req, res) => {
  res.send("API WORKING GREAT");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
