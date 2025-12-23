const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = 3000;

//  CONNECT TO MONGODB BEFORE STARTING SERVER
connectDB();
  app.listen(PORT, () => {
    console.log( `Server started at http://localhost:${PORT}`);
  });


