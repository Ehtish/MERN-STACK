require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

// express app
const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());

// routes
app.use("/api/workouts", workoutRoutes);

// app.get("/", (req, res) => {
//   res.json({ msg: "welcome to my express project" });
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(port, () => {
      console.log("connect to db and listening on port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
