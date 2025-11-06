const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ User CRUD API is running successfully on port 5000!");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.post("/users", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age)
      return res.status(400).json({ message: "All fields are required" });
    const newUser = await User.create({ name, email, age });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
const startTime = new Date().toLocaleString("en-IN", { hour12: true });
app.listen(PORT, () => {
  console.log(`\n✅ Server running on port ${PORT}`);
  console.log(`🕒 Started at: ${startTime}`);
  console.log(`🌍 Local API Endpoints:`);
  console.log(`   → GET    http://localhost:${PORT}/`);
  console.log(`   → GET    http://localhost:${PORT}/users`);
  console.log(`   → GET    http://localhost:${PORT}/users/:id`);
  console.log(`   → POST   http://localhost:${PORT}/users`);
  console.log(`   → PUT    http://localhost:${PORT}/users/:id`);
  console.log(`   → DELETE http://localhost:${PORT}/users/:id\n`);
});
