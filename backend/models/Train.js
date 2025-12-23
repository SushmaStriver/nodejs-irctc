const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  trainNumber: {
    type: String,
    required: true,
  },
  trainName: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  seatsAvailable: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

const Train = mongoose.model("Train", trainSchema);

module.exports = Train;