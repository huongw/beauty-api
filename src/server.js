const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}!`)
})
