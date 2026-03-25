const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

const Contact = require("./models/Contact");

app.post("/api/contact", async (req, res) => {
  const newMessage = new Contact(req.body);
  await newMessage.save();
  res.send("Saved!");
});

app.listen(5000, () => console.log("Server running on port 5000"));