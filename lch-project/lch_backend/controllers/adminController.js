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
      address,
    } = req.body;
    
    // Handle image file
    const imageFile = req.file;

    // Check if file exists
    if (!imageFile) {
      return res.status(400).json({ error: "Image file is missing" });
    }

    console.log({
      name,
      email,
      password,
      speciality,
      about,
      phone,
      degree,
      experience,
      fees,
      address,
    });
    console.log("Uploaded Image:", imageFile);  // Log the image file details

    // Proceed with saving doctor data (e.g., to a DB)

  } catch (error) {
    console.error("Error adding doctor:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export { addDoctor };
