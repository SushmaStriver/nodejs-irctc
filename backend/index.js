const bookingRoutes = require('./routes/booking');
const express = require("express");
const connectDB = require("./db");
const Train = require("./models/Train");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//  Connect to MongoDB
connectDB();

//  Middleware to parse JSON body
app.use(express.json());
app.use('/api', bookingRoutes);

//  Simple test POST route to check server
app.post("/api/test", (req, res) => {
  res.send(" POST route is working!");
});

// POST /api/trains - Add train details to MongoDB
app.post("/api/trains", async (req, res) => {
  try {
    const newTrain = new Train(req.body);
    const savedTrain = await newTrain.save();
    res.status(201).json(savedTrain);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/trains", async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Home route
app.get("/", (req, res) => {
  res.send(" IRCTC backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log( `Server running at http://localhost:${PORT}`);
});