import express from "express";
import User from "../models/user.js";

const router = express.Router();

// post user details in database
router.post("/user", async (req, res) => {
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

// get all users detail from database
router.get("/all-users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    console.error("Error:", error); // Log the error
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// get single user details from database
router.get("/single-user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error:", error); // Log the error
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// update single user details from database
router.put("/single-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, name, email, password, gender, department, role } =
      req.body;
    await User.findByIdAndUpdate(id, {
      username: username,
      name: name,
      email: email,
      password: password,
      gender: gender,
      department: department,
      role: role,
    });
    res.status(200).json({ message: "User Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// delete single user details from database
router.delete("/single-user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.error("Error:", error); // Log the error
    res.status(400).json({ message: "Internal Server Error" });
  }
});
export default router;
