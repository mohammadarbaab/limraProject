import jwt from "jsonwebtoken";

// Doctor authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;
    if (!dtoken) {
      return res.json({ success: false, message: "Unauthorized" });
    }
    const token_decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

    req.body.docId = token_decoded.id;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default authDoctor;
