const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Train = require('../models/Train');
const authMiddleware = require('../middleware/auth');

// POST /book - Book a train ticket
router.post('/book', async (req, res) => {
  try {
    const { trainId, travelDate, classType, seatsBooked } = req.body;
    const userId = req.user.id;

    // Check if train exists
    const train = await Train.findById(trainId);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }

    // Create booking
    const booking = new Booking({
      user: userId,
      train: trainId,
      travelDate,
      classType,
      seatsBooked
    });

    // Save to database
    await booking.save();

    res.status(201).json({
      message: 'Booking successful',
      booking: booking
    });

  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;