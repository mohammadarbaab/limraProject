import jwt from "jsonwebtoken";

// User authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({ success: false, msg: "Unauthorized" });
    }
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = token_decoded.id;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default authUser;
