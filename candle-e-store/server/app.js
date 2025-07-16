const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 3000;
const mongoose = require("mongoose");

const routes = require("./routes");

app.use(express.json()); //for application json
app.use(cors());

app.use('/api', routes);



async function connectDb() {
    try {
     await mongoose.connect('mongodb://localhost:27017/ecom-store', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
      console.log("✅ MongoDB connected");
    } catch (err) {
      console.error("❌ MongoDB connection error:", err);
    }
  }

connectDb();

app.listen(port, ()=>{
    console.log('server running on '+port)
})

module.exports = app;



