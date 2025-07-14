const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 3000;
const mongoose = require("mongoose");

app.use(bodyParser.json()) //for application json
app.use(bodyParser.urlencoded()) // for form data
app.use(cors());

app.get('/', (req, res) =>{
    res.json({
        'msg':'yes'
    })
})

async function connectDb() {
    try {
      await mongoose.connect("mongodb+srv://bhumipatel2512:QNPIB9u3gsuxB8n0@cluster0.liuqayp.mongodb.net/e-comm-store-db?retryWrites=true&w=majority&appName=Cluster0");
      console.log("✅ MongoDB connected");
    } catch (err) {
      console.error("❌ MongoDB connection error:", err);
    }
  }

connectDb();

app.listen(port, ()=>{
    console.log('server running on '+port)
})



