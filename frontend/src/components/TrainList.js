import React, { useEffect, useState } from "react";
import axios from "axios";

function TrainList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/trains")
      .then((res) => setTrains(res.data))
      .catch((err) => console.error("Error fetching trains:", err));
  }, []);

  return (
    <div>
      <h2>Available Trains</h2>
      <ul>
        {trains.map((train) => (
          <li key={train._id}>
            <strong>{train.trainNumber} - {train.trainName}</strong><br />
            {train.from} → {train.to}<br />
            Departure: {train.departureTime}, Arrival: {train.arrivalTime}<br />
            Seats: {train.seatsAvailable}, Price: ₹{train.price}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainList;