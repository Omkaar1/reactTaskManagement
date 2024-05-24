import express from "express";
import Request from "../Models/Request";
const router = express.Router();

// create request in database
router.post("/purchase-request", async (req, res) => {
  try {
    const { username, name, email, password, gender, department, role } =
      req.body;
    const newData = new User({
      username,
      name,
      email,
      password,
      gender,
      department,
      role,
    });
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (error) {
    console.error("Error:", error); // Log the error
    res.status(400).json({ message: "Internal Server Error" });
  }
});