import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  console.log("Cloudinary Config:", process.env.CLOUDINARY_NAME, process.env.CLOUDINARY_API_KEY);
  console.log("Cloudinary API Secret: ", process.env.CLOUDINARY_API_SECRET);

};
export default connectCloudinary;
