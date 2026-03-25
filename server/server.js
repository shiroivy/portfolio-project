const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mahaky520_db_user:Shiroivy@ac-9zr51wc-shard-00-00.vxqdcte.mongodb.net:27017,ac-9zr51wc-shard-00-01.vxqdcte.mongodb.net:27017,ac-9zr51wc-shard-00-02.vxqdcte.mongodb.net:27017/?ssl=true&replicaSet=atlas-ajdq0l-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

const Contact = require("./models/Contact");

app.post("/api/contact", async (req, res) => {
  const newMessage = new Contact(req.body);
  await newMessage.save();
  res.send("Saved!");
});

app.listen(5000, () => console.log("Server running on port 5000"));