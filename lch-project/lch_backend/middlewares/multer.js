import multer from "multer";

// const storage = multer.diskStorage({
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');  // Ensure you have a folder to save files in
  },
  filename: function (req, file, callback) {
    // Generate unique file names
    callback(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({
  storage,
});

export default upload;
